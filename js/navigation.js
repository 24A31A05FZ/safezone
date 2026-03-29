/**
 * navigation.js — SafeZone Centralized SPA Router
 * ─────────────────────────────────────────────────────────────────────────────
 * Route model:
 *   Pages    : landing | login | register | dashboard
 *   Sections : overview | locality | profile  (dashboard sub-tabs)
 *   Modals   : helplines | languages | sos    (overlays, pushed on top of page)
 *
 * History state shape: { page, section, modal }
 * Hash format        : #landing | #dashboard | #dashboard/locality
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    /* ── Constants ─────────────────────────────────────────────────────────── */
    var VALID_PAGES = ['landing', 'login', 'register', 'dashboard'];
    var VALID_SECTIONS = ['overview', 'locality', 'profile'];
    var PROTECTED = ['dashboard'];

    /** Map modal name → element ID */
    var MODAL_IDS = {
        helplines: 'helplinesModal',
        languages: 'languageModal',
        sos: 'sosModal'
    };

    /* ── Module state ──────────────────────────────────────────────────────── */
    var _openModal = null;   // which modal is currently shown via pushState

    /* ══════════════════════════════════════════════════════════════════════════
       INTERNAL HELPERS
    ══════════════════════════════════════════════════════════════════════════ */

    /** Auth check — reads localStorage session */
    function _isLoggedIn() {
        try { return !!JSON.parse(localStorage.getItem('sz_session')); }
        catch (e) { return false; }
    }

    /** Parse location.hash → { page, section, modal } */
    function _parseHash() {
        var raw = (location.hash || '').replace('#', '').trim();
        var parts = raw.split('/');
        var page = VALID_PAGES.includes(parts[0]) ? parts[0] : 'landing';
        var sec = (page === 'dashboard' && VALID_SECTIONS.includes(parts[1]))
            ? parts[1] : 'overview';
        return { page: page, section: sec, modal: null };
    }

    /** Build the canonical hash string for a state */
    function _toHash(page, section) {
        if (page === 'dashboard' && section && section !== 'overview') {
            return '#dashboard/' + section;
        }
        return '#' + page;
    }

    /* ─── Modal helpers ────────────────────────────────────────────────────── */

    function _closeAllModals() {
        Object.values(MODAL_IDS).forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.classList.remove('show');
        });
        _openModal = null;
    }

    /**
     * Open a modal and push a history entry so swipe-back closes it.
     * Called by openHelplines(), openLanguages(), triggerSOS().
     */
    function _pushModal(name) {
        if (!MODAL_IDS[name]) return;
        _closeAllModals();
        var cur = history.state || {};
        history.pushState(
            { page: cur.page || 'dashboard', section: cur.section || 'overview', modal: name },
            '',
            location.hash   // keep the same URL; only state payload changes
        );
        _openModal = name;
        var el = document.getElementById(MODAL_IDS[name]);
        if (el) el.classList.add('show');
    }

    /* ─── Page rendering ───────────────────────────────────────────────────── */

    /**
     * Show/hide page divs + set navbar visibility.
     * Pure DOM work — never touches history.
     */
    function _renderPage(page, section) {
        _closeAllModals();

        document.querySelectorAll('.page').forEach(function (p) {
            p.classList.remove('active');
            p.style.display = 'none';
        });

        var el = document.getElementById('page-' + page);
        if (!el) return;
        el.classList.add('active');
        el.style.display = (page === 'dashboard') ? 'flex' : 'block';
        window.scrollTo(0, 0);

        var navbar = document.getElementById('mainNavbar');
        if (navbar) navbar.style.display = (page === 'dashboard') ? 'none' : 'flex';

        if (page === 'dashboard') {
            // initDashboard is defined in index2.html inline script
            if (typeof initDashboard === 'function') initDashboard();
            if (section) _renderSection(section);
        }
    }

    /**
     * Switch dashboard section tabs.
     * Pure DOM work — never touches history.
     */
    function _renderSection(section) {
        if (!VALID_SECTIONS.includes(section)) section = 'overview';

        document.querySelectorAll('.dash-section').forEach(function (s) {
            s.classList.remove('active');
        });
        var secEl = document.getElementById('section-' + section);
        if (secEl) secEl.classList.add('active');

        document.querySelectorAll('.sidebar-nav li a, .sidebar-nav li button').forEach(function (a) {
            a.classList.remove('active');
        });
        var navEl = document.getElementById('nav-' + section);
        if (navEl) navEl.classList.add('active');

        var subtitles = {
            overview: "Here's your safety summary for today",
            locality: 'Find safe places near you',
            profile: 'Manage your account details'
        };
        var bannerSub = document.getElementById('dashBannerSub');
        if (bannerSub) bannerSub.textContent = subtitles[section] || '';

        if (section === 'profile' && typeof getSession === 'function') {
            var sess = getSession();
            if (sess && typeof getUsers === 'function' && typeof renderProfile === 'function') {
                var u = getUsers().find(function (u) { return u.email === sess.email; })
                    || { name: 'User', email: sess.email, city: 'Unknown', phone: '—', joined: '—' };
                renderProfile(u);
            }
        }

        if (window.innerWidth <= 900) {
            var sb = document.getElementById('sidebar');
            if (sb) sb.classList.remove('open');
        }
    }

    /* ══════════════════════════════════════════════════════════════════════════
       PUBLIC API  (attached to window so inline onclick="..." handlers work)
    ══════════════════════════════════════════════════════════════════════════ */

    /**
     * navigateTo(page, replace?)
     * Main entry for page-level navigation. Pushes (or replaces) a history entry
     * then renders the page. Auth-guarded for protected routes.
     */
    window.navigateTo = function (page, replace) {
        // Auth guard
        if (PROTECTED.includes(page) && !_isLoggedIn()) {
            window.navigateTo('login', replace);
            return;
        }
        var st = { page: page, section: 'overview', modal: null };
        var hash = _toHash(page, 'overview');
        if (replace) { history.replaceState(st, '', hash); }
        else { history.pushState(st, '', hash); }
        _renderPage(page, 'overview');
    };

    /**
     * showPage(page)
     * Backward-compatible alias — every existing onclick="showPage('...')" keeps working.
     */
    window.showPage = function (page) {
        window.navigateTo(page, false);
    };

    /**
     * switchDash(section)
     * Navigate within the dashboard (Overview / Locality-Recommend / Profile).
     * Pushes its own history entry so swipe-back steps through sections correctly.
     */
    window.switchDash = function (section) {
        if (!VALID_SECTIONS.includes(section)) section = 'overview';
        history.pushState(
            { page: 'dashboard', section: section, modal: null },
            '',
            '#dashboard/' + section
        );
        _renderSection(section);
    };

    /**
     * goToSection(sectionId)
     * Navigate to the Landing page (if not already there) then smoothly scroll
     * to the section with id=sectionId (e.g. 'about', 'features').
     * Works correctly from any page including Login, Register, and Dashboard.
     *
     * KEY FIX: Always push a history entry before scrolling, even when already
     * on landing. This ensures swipe-back fires popstate (which renders landing)
     * instead of falling off the history stack and showing a blank screen.
     */
    window.goToSection = function (sectionId) {
        var cur = (history.state && history.state.page) || _parseHash().page;

        if (cur === 'landing') {
            // Push a history entry FIRST so back-gesture returns to landing, not blank.
            history.pushState(
                { page: 'landing', section: null, modal: null, scrollTo: sectionId },
                '',
                location.hash   // keep #landing in the URL
            );
            var el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Navigate to landing (pushes #landing), then scroll after it renders
            window.navigateTo('landing', false);
            setTimeout(function () {
                var el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        }
    };

    /**
     * scrollToSection(id)
     * Backward-compatible alias for goToSection.
     * REPLACES the old scrollToSection that only scrolled (broke from Login/Register).
     */
    window.scrollToSection = function (id) {
        window.goToSection(id);
    };

    /* ─── Modal public API ─────────────────────────────────────────────────── */

    /** Open the Helplines modal (grid is built by openHelplines() in index2.html) */
    window._pushModal = _pushModal;

    /**
     * closeModal(elementId)
     * Close a modal by its DOM element ID.
     * If the modal was opened via _pushModal, calls history.back() so the
     * back-gesture stack stays consistent.
     */
    window.closeModal = function (id) {
        var el = document.getElementById(id);
        if (el) el.classList.remove('show');

        var name = Object.keys(MODAL_IDS).find(function (k) { return MODAL_IDS[k] === id; });
        if (name && _openModal === name) {
            _openModal = null;
            history.back();   // pop the entry pushed by _pushModal
        } else {
            _openModal = null;
        }
    };

    /* ══════════════════════════════════════════════════════════════════════════
       BROWSER EVENTS
    ══════════════════════════════════════════════════════════════════════════ */

    /**
     * popstate — fires on Back / Forward gesture.
     * Priority: 1) close any open modal  2) restore page + section
     */
    window.addEventListener('popstate', function (e) {
        var st = e.state || _parseHash();
        var page = st.page || 'landing';
        var section = st.section || 'overview';
        var modal = st.modal || null;

        // Always dismiss any visible modal first
        _closeAllModals();

        // Auth guard
        if (PROTECTED.includes(page) && !_isLoggedIn()) {
            history.replaceState({ page: 'login', section: null, modal: null }, '', '#login');
            _renderPage('login');
            return;
        }

        // Restore page + section
        _renderPage(page, section);

        // Re-open modal if the target state carries one (forward gesture into modal state)
        if (modal && MODAL_IDS[modal]) {
            _openModal = modal;
            var mel = document.getElementById(MODAL_IDS[modal]);
            if (mel) mel.classList.add('show');
        }
    });

    /**
     * DOMContentLoaded — first-load / refresh bootstrap.
     * Reads the hash to restore the correct page, enforces auth,
     * and seeds the initial history entry.
     */
    document.addEventListener('DOMContentLoaded', function () {
        // Hide every page div first
        document.querySelectorAll('.page').forEach(function (p) {
            p.style.display = 'none';
        });

        var parsed = _parseHash();
        var page = parsed.page;
        var section = parsed.section;

        // Auth guard
        if (PROTECTED.includes(page) && !_isLoggedIn()) {
            page = 'login';
            section = null;
        }

        // Seed the initial history entry (replaceState keeps the stack clean)
        history.replaceState(
            { page: page, section: section, modal: null },
            '',
            _toHash(page, section)
        );

        // Push a sentinel landing entry so that a back-gesture from the landing
        // page fires popstate (re-renders landing) instead of exiting the app
        // and showing a blank screen.
        history.pushState(
            { page: 'landing', section: null, modal: null },
            '',
            '#landing'
        );

        _renderPage(page, section);
    });

})(); // end IIFE
