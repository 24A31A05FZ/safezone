/* ──── DATA ──────────────────────────────────────────── */
const DATA = {
  cities: [
    { id: 'rajahmundry', name: 'Rajahmundry', icon: '🌊', info: 'East Godavari, AP', lat: 17.005, lng: 81.784 },
    { id: 'kakinada', name: 'Kakinada', icon: '⚓', info: 'East Godavari, AP', lat: 16.9891, lng: 82.2475 },
    { id: 'hyderabad', name: 'Hyderabad', icon: '🏰', info: 'Telangana', lat: 17.385, lng: 78.487 },
    { id: 'bangalore', name: 'Bangalore', icon: '💻', info: 'Karnataka', lat: 12.971, lng: 77.594 },
    { id: 'delhi', name: 'Delhi', icon: '🕌', info: 'National Capital', lat: 28.704, lng: 77.102 },
    { id: 'mumbai', name: 'Mumbai', icon: '🌆', info: 'Maharashtra', lat: 19.076, lng: 72.877 },
  ],
  categories: [
    { id: 'hospitals', name: 'Hospitals', icon: '🏥', emoji: '🏥' },
    { id: 'restaurants', name: 'Restaurants', icon: '🍽️', emoji: '🍽️' },
    { id: 'banks', name: 'Banks', icon: '🏦', emoji: '🏦' },
    { id: 'police', name: 'Police Stations', icon: '👮', emoji: '👮' },
    { id: 'transport', name: 'Transport', icon: '🚌', emoji: '🚌' },
    { id: 'tourist', name: 'Tourist Places', icon: '🗺️', emoji: '🗺️' },
  ],
  places: {
    rajahmundry: {
      hospitals: [
        { name: 'Government General Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Main Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.2, desc: 'Large government hospital with 24/7 emergency services and all major departments.', budget: 0 },
        { name: 'Aditya Multi Specialty Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Tilak Road, Rajahmundry', rating: 4.5, safety: 'high', dist: 2.5, desc: 'Modern private hospital with advanced ICU, diagnostics and specialist care.', budget: 500 },
        { name: 'Ramakrishna Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Morampudi Road, Rajahmundry', rating: 4.3, safety: 'high', dist: 3.1, desc: 'Multi-specialty hospital known for orthopaedic and cardiac services.', budget: 400 },
        { name: 'Srinivasa Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Danavaipeta, Rajahmundry', rating: 4.1, safety: 'high', dist: 2.0, desc: 'Trusted local hospital with maternity care, surgery and general medicine.', budget: 300 },
        { name: 'Chalapathi Institute of Medical Sciences', city: 'Rajahmundry', category: 'hospitals', addr: 'Lam, Rajahmundry', rating: 4.2, safety: 'high', dist: 4.5, desc: 'Teaching hospital attached to medical college with broad specialist coverage.', budget: 200 },
        { name: 'Vasavi Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Jawaharlal Nehru Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Well-established private hospital offering emergency and planned surgical services.', budget: 350 },
        { name: 'Sri Laxmi Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Kotipalli Road, Rajahmundry', rating: 3.9, safety: 'high', dist: 3.4, desc: 'Reputed women and children specialty hospital with NICU facilities.', budget: 250 },
        { name: 'District TB Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Rajahmundry', rating: 3.8, safety: 'high', dist: 2.8, desc: 'Government chest and TB hospital providing free treatment under national programs.', budget: 0 },
        { name: 'ENT Care Centre', city: 'Rajahmundry', category: 'hospitals', addr: 'Raja Road, Rajahmundry', rating: 4.2, safety: 'high', dist: 1.5, desc: 'Specialist clinic for ear, nose and throat disorders with latest equipment.', budget: 300 },
        { name: 'Surya Eye Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Tilak Road, Rajahmundry', rating: 4.4, safety: 'high', dist: 2.1, desc: 'Dedicated eye care hospital with cataract, retina and laser LASIK services.', budget: 400 },
        { name: 'Dr. Murthy Ortho Clinic', city: 'Rajahmundry', category: 'hospitals', addr: 'Innespeta, Rajahmundry', rating: 4.1, safety: 'high', dist: 1.3, desc: 'Specialist orthopaedic clinic for bone, joint and sports injuries.', budget: 350 },
        { name: 'Children Care Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Bhanugudi Junction, Rajahmundry', rating: 4.3, safety: 'high', dist: 2.7, desc: 'Dedicated paediatric hospital with experienced child specialists.', budget: 300 },
        { name: 'Lakshmi Nursing Home', city: 'Rajahmundry', category: 'hospitals', addr: 'Dowleswaram, Rajahmundry', rating: 3.8, safety: 'high', dist: 3.5, desc: 'Neighbourhood nursing home for general consultations and minor procedures.', budget: 150 },
        { name: 'Apollo Pharmacy & Clinic', city: 'Rajahmundry', category: 'hospitals', addr: 'T.P. Colony, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.0, desc: 'Apollo-brand walk-in clinic with doctor consultation and on-site pharmacy.', budget: 200 },
        { name: 'Sai Sudha Hospital', city: 'Rajahmundry', category: 'hospitals', addr: 'Lalitha Nagar, Rajahmundry', rating: 4.1, safety: 'high', dist: 4.0, desc: 'Multi-specialty hospital with 24-hour ambulance and emergency response.', budget: 300 },
      ],
      restaurants: [
        { name: 'Rose Milk Shop', city: 'Rajahmundry', category: 'restaurants', addr: 'Innespeta, Rajahmundry', rating: 4.6, safety: 'high', dist: 0.7, desc: 'Iconic rose milk shop loved by locals for its chilled, flavourful rose drink.', budget: 50 },
        { name: 'Bamboo Garden Restaurant', city: 'Rajahmundry', category: 'restaurants', addr: 'Morampudi Road, Rajahmundry', rating: 4.3, safety: 'high', dist: 0.8, desc: 'Famous for authentic Andhra cuisine and bamboo chicken in a scenic setting.', budget: 300 },
        { name: 'Grand Restaurant', city: 'Rajahmundry', category: 'restaurants', addr: 'Innespeta, Rajahmundry', rating: 4.1, safety: 'high', dist: 1.5, desc: 'Multi-cuisine restaurant popular for family dining and special occasions.', budget: 400 },
        { name: 'Swagath Hotel', city: 'Rajahmundry', category: 'restaurants', addr: 'Main Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.0, desc: 'Popular budget restaurant serving South Indian meals, dosas and biryani.', budget: 150 },
        { name: 'Sri Kanya Restaurant', city: 'Rajahmundry', category: 'restaurants', addr: 'Rajamahendravaram Bus Stand, Rajahmundry', rating: 4.2, safety: 'high', dist: 1.3, desc: 'Long-running restaurant famous for unlimited Andhra meals and spicy curries.', budget: 180 },
        { name: 'Nagarjuna Restaurant', city: 'Rajahmundry', category: 'restaurants', addr: 'T. Nagar, Rajahmundry', rating: 4.4, safety: 'high', dist: 2.0, desc: 'Franchise Andhra meals outlet known for lip-smacking pesarattu and gutti vankaya.', budget: 250 },
        { name: 'Hotel Haritha Heritage', city: 'Rajahmundry', category: 'restaurants', addr: 'Godavari Bund Road, Rajahmundry', rating: 4.3, safety: 'high', dist: 3.0, desc: 'AP Tourism hotel with riverside dining and classic Andhra thali experience.', budget: 350 },
        { name: 'Kamat Restaurant', city: 'Rajahmundry', category: 'restaurants', addr: 'Tilak Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.7, desc: 'Veg restaurant serving North and South Indian snacks, meals and sweets.', budget: 200 },
        { name: 'Pizza Plex', city: 'Rajahmundry', category: 'restaurants', addr: 'JPN Road, Rajahmundry', rating: 3.9, safety: 'high', dist: 1.2, desc: 'Casual dine-in spot for pizzas, burgers and fast food, popular with youth.', budget: 250 },
        { name: 'Godavari Food Court', city: 'Rajahmundry', category: 'restaurants', addr: 'Rajamahendravaram, Rajahmundry', rating: 4.1, safety: 'high', dist: 0.9, desc: 'Multi-vendor food court offering variety from chaat to biryani.', budget: 200 },
        { name: 'Spicy Bowl', city: 'Rajahmundry', category: 'restaurants', addr: 'Morampudi Junction, Rajahmundry', rating: 4.0, safety: 'high', dist: 2.5, desc: 'Street-style Andhra snacks and spicy chaats at very affordable prices.', budget: 100 },
        { name: 'Sri Balaji Sweets', city: 'Rajahmundry', category: 'restaurants', addr: 'Danavaipeta, Rajahmundry', rating: 4.3, safety: 'high', dist: 1.4, desc: 'Famous sweet shop for kova, laddu, Mysorepak and festive sweets.', budget: 150 },
        { name: 'Coastal Kitchen', city: 'Rajahmundry', category: 'restaurants', addr: 'Bhanugudi, Rajahmundry', rating: 4.2, safety: 'high', dist: 3.2, desc: 'Seafood restaurant serving fresh rohu, prawn and crab preparations.', budget: 400 },
        { name: 'Annalakshmi Tiffin Centre', city: 'Rajahmundry', category: 'restaurants', addr: 'Rajamahendravaram, Rajahmundry', rating: 4.1, safety: 'high', dist: 0.6, desc: 'Busy morning tiffin centre for idli, vada, upma and filter coffee.', budget: 80 },
        { name: 'Udupi Vilas', city: 'Rajahmundry', category: 'restaurants', addr: 'Tilak Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Vegetarian Udupi-style restaurant with crispy dosas and coconut chutneys.', budget: 120 },
      ],
      tourist: [
        { name: 'Godavari River Ghat', city: 'Rajahmundry', category: 'tourist', addr: 'Dowleswaram, Rajahmundry', rating: 4.6, safety: 'high', dist: 3.0, desc: 'Majestic river ghats on the Godavari, famous for sunrise boat rides.', budget: 50 },
        { name: 'ISKCON Rajahmundry', city: 'Rajahmundry', category: 'tourist', addr: 'Innespeta, Rajahmundry', rating: 4.7, safety: 'high', dist: 2.2, desc: 'Beautifully constructed ISKCON temple, a serene spiritual destination.', budget: 0 },
        { name: 'Markandeya Konda', city: 'Rajahmundry', category: 'tourist', addr: 'Rajahmundry Hills, AP', rating: 4.4, safety: 'high', dist: 5.0, desc: 'Scenic hilltop with views of the Godavari delta and ancient temple complex.', budget: 30 },
        { name: 'Dowleswaram Barrage', city: 'Rajahmundry', category: 'tourist', addr: 'Dowleswaram, Rajahmundry', rating: 4.5, safety: 'high', dist: 4.0, desc: 'Historic anicut on the Godavari built by Sir Arthur Cotton; iconic viewpoint.', budget: 0 },
        { name: 'Pattiseema Lift Irrigation Project', city: 'Rajahmundry', category: 'tourist', addr: 'Pattiseema, near Rajahmundry', rating: 4.2, safety: 'high', dist: 18.0, desc: 'Modern engineering marvel; largest river linkage project viewable from public deck.', budget: 0 },
        { name: 'Draksharamam Temple', city: 'Rajahmundry', category: 'tourist', addr: 'Draksharamam, East Godavari', rating: 4.6, safety: 'high', dist: 42.0, desc: 'Ancient Pancharama Kshetra temple of Lord Bhimeswara — one of the top Shiva temples.', budget: 0 },
        { name: 'Kotipalli Beach', city: 'Rajahmundry', category: 'tourist', addr: 'Kotipalli, near Rajahmundry', rating: 4.1, safety: 'medium', dist: 55.0, desc: 'Unspoilt river-mouth beach where the Godavari meets the Bay of Bengal.', budget: 0 },
        { name: 'Sri Veera Venkata Satyanarayana Swamy Temple', city: 'Rajahmundry', category: 'tourist', addr: 'Annavaram Road, Rajahmundry', rating: 4.5, safety: 'high', dist: 2.8, desc: 'Prominent Vishnu temple attracting thousands of pilgrims daily.', budget: 0 },
        { name: 'Ramalayam Temple', city: 'Rajahmundry', category: 'tourist', addr: 'Innespeta, Rajahmundry', rating: 4.3, safety: 'high', dist: 1.5, desc: 'Ancient Ram temple in the heart of the city with ornate gopuram architecture.', budget: 0 },
        { name: 'Archaeological Museum Rajahmundry', city: 'Rajahmundry', category: 'tourist', addr: 'Museum Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Museum housing Chalukya, Kakatiya era sculptures and local tribal artefacts.', budget: 10 },
        { name: 'Godavari Express Boating Point', city: 'Rajahmundry', category: 'tourist', addr: 'Rajamahendravaram Ghat, Rajahmundry', rating: 4.4, safety: 'high', dist: 3.5, desc: 'Scenic river cruise along the Godavari offering views of both river banks.', budget: 100 },
        { name: 'Papi Hills', city: 'Rajahmundry', category: 'tourist', addr: 'Papikondalu, East Godavari', rating: 4.7, safety: 'high', dist: 80.0, desc: 'Stunning gorge with lush green hills and overnight boat trips popular with tourists.', budget: 1500 },
        { name: 'Kadiam Nurseries', city: 'Rajahmundry', category: 'tourist', addr: 'Kadiam, East Godavari', rating: 4.3, safety: 'high', dist: 20.0, desc: 'Asia\'s largest plant nursery — a lush green paradise with thousands of plant varieties.', budget: 0 },
        { name: 'Samalkot Clock Tower', city: 'Rajahmundry', category: 'tourist', addr: 'Samalkot, Rajahmundry area', rating: 3.9, safety: 'high', dist: 12.0, desc: 'Heritage colonial-era clock tower in the town of Samalkot, near Rajahmundry.', budget: 0 },
        { name: 'Konaseema Coconut Grove', city: 'Rajahmundry', category: 'tourist', addr: 'Konaseema, East Godavari', rating: 4.5, safety: 'high', dist: 45.0, desc: 'The "Kashmir of Andhra" — lush delta landscape covered with coconut palms and backwaters.', budget: 200 },
      ],
      banks: [
        { name: 'State Bank of India', city: 'Rajahmundry', category: 'banks', addr: 'Main Branch, Rajahmundry', rating: 3.9, safety: 'high', dist: 0.6, desc: 'Largest bank branch with full services, locker facility, and ATM.', budget: 0 },
        { name: 'Canara Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'T. Nagar, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.1, desc: 'Full-service branch offering deposit, loan, and insurance services.', budget: 0 },
        { name: 'Andhra Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'Tilak Road, Rajahmundry', rating: 3.8, safety: 'high', dist: 0.8, desc: 'Government bank with savings, loan and forex services for all customers.', budget: 0 },
        { name: 'HDFC Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'JPN Road, Rajahmundry', rating: 4.2, safety: 'high', dist: 1.5, desc: 'Private bank with net banking, demat accounts and personal loans.', budget: 0 },
        { name: 'ICICI Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'Innespeta, Rajahmundry', rating: 4.1, safety: 'high', dist: 1.2, desc: 'ICICI branch with instant loan processing, credit cards and mobile banking.', budget: 0 },
        { name: 'Axis Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'Danavaipeta, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.9, desc: 'Modern branch with digital banking services, ATM and wealth management.', budget: 0 },
        { name: 'Punjab National Bank', city: 'Rajahmundry', category: 'banks', addr: 'Main Road, Rajahmundry', rating: 3.7, safety: 'high', dist: 0.9, desc: 'PNB branch catering to government employees, farmers and retail customers.', budget: 0 },
        { name: 'Indian Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'T.P. Colony, Rajahmundry', rating: 3.8, safety: 'high', dist: 2.0, desc: 'Nationalised bank with agricultural loans, savings and recurring deposits.', budget: 0 },
        { name: 'Bank of Baroda Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'Morampudi Road, Rajahmundry', rating: 3.9, safety: 'high', dist: 2.4, desc: 'Full-service nationalised bank with MSME and home loan facilities.', budget: 0 },
        { name: 'Kotak Mahindra Bank', city: 'Rajahmundry', category: 'banks', addr: 'JPN Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.6, desc: 'Private bank known for savings account with high interest and zero charges.', budget: 0 },
        { name: 'Union Bank of India', city: 'Rajahmundry', category: 'banks', addr: 'Rajamahendravaram, Rajahmundry', rating: 3.7, safety: 'high', dist: 1.3, desc: 'National bank offering NRI, agriculture and business banking products.', budget: 0 },
        { name: 'Central Bank of India', city: 'Rajahmundry', category: 'banks', addr: 'Morampudi, Rajahmundry', rating: 3.6, safety: 'high', dist: 2.8, desc: 'Long-standing government bank serving local traders and depositors.', budget: 0 },
        { name: 'South Indian Bank', city: 'Rajahmundry', category: 'banks', addr: 'Innespeta, Rajahmundry', rating: 3.9, safety: 'high', dist: 1.0, desc: 'Private sector bank with competitive FD rates and home loan products.', budget: 0 },
        { name: 'Yes Bank Rajahmundry', city: 'Rajahmundry', category: 'banks', addr: 'Tilak Road, Rajahmundry', rating: 3.8, safety: 'high', dist: 1.7, desc: 'Private bank offering business banking, corporate cards and forex services.', budget: 0 },
        { name: 'Indian Overseas Bank', city: 'Rajahmundry', category: 'banks', addr: 'Station Road, Rajahmundry', rating: 3.7, safety: 'high', dist: 2.1, desc: 'Government bank popular for education and personal loan products.', budget: 0 },
      ],
      police: [
        { name: 'Rajahmundry Police Headquarters', city: 'Rajahmundry', category: 'police', addr: 'Police Lines Road, Rajahmundry', rating: 3.8, safety: 'high', dist: 1.0, desc: 'District police headquarters with community helpdesk and women cell.', budget: 0 },
        { name: 'I Town Police Station', city: 'Rajahmundry', category: 'police', addr: 'I Town, Rajahmundry', rating: 3.7, safety: 'high', dist: 0.8, desc: 'Central town police station covering the old city and main market area.', budget: 0 },
        { name: 'II Town Police Station', city: 'Rajahmundry', category: 'police', addr: 'II Town, Rajahmundry', rating: 3.8, safety: 'high', dist: 1.5, desc: 'Police station covering residential and commercial areas of II Town.', budget: 0 },
        { name: 'Innespeta Police Station', city: 'Rajahmundry', category: 'police', addr: 'Innespeta, Rajahmundry', rating: 3.6, safety: 'high', dist: 1.2, desc: 'Active station with quick response team for the busy Innespeta locality.', budget: 0 },
        { name: 'Rajamahendravaram Rural PSI Office', city: 'Rajahmundry', category: 'police', addr: 'Rajamahendravaram, Rajahmundry', rating: 3.7, safety: 'high', dist: 2.5, desc: 'Rural sub-inspector office serving villages and outskirts of Rajahmundry.', budget: 0 },
        { name: 'Rajahmundry Traffic Police', city: 'Rajahmundry', category: 'police', addr: 'Clock Tower, Rajahmundry', rating: 3.9, safety: 'high', dist: 0.5, desc: 'Traffic police unit managing city intersections and issuing challans.', budget: 0 },
        { name: 'Women Police Station', city: 'Rajahmundry', category: 'police', addr: 'Collectorate Area, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Dedicated police station for women-related complaints and DV cases.', budget: 0 },
        { name: 'Morampudi Police Station', city: 'Rajahmundry', category: 'police', addr: 'Morampudi, Rajahmundry', rating: 3.7, safety: 'high', dist: 3.0, desc: 'Police station serving the Morampudi and surrounding highway stretches.', budget: 0 },
        { name: 'Dowleswaram Police Station', city: 'Rajahmundry', category: 'police', addr: 'Dowleswaram, Rajahmundry', rating: 3.8, safety: 'high', dist: 3.5, desc: 'Station near the Godavari barrage handling river-area security and disputes.', budget: 0 },
        { name: 'Bhanugudi Police Station', city: 'Rajahmundry', category: 'police', addr: 'Bhanugudi, Rajahmundry', rating: 3.6, safety: 'high', dist: 2.8, desc: 'Sub-station covering Bhanugudi residential neighbourhood.', budget: 0 },
        { name: 'Rajahmundry Special Branch', city: 'Rajahmundry', category: 'police', addr: 'SP Office Campus, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.3, desc: 'Intelligence and special operations unit for the district.', budget: 0 },
        { name: 'Green Tigers Police Station', city: 'Rajahmundry', category: 'police', addr: 'Forest Colony, Rajahmundry', rating: 3.8, safety: 'high', dist: 4.5, desc: 'Environmental police unit handling forest and wildlife violations.', budget: 0 },
        { name: 'Cyber Crime Cell Rajahmundry', city: 'Rajahmundry', category: 'police', addr: 'SP Office, Rajahmundry', rating: 4.1, safety: 'high', dist: 1.3, desc: 'Specialised unit for online fraud, financial cybercrime and digital cases.', budget: 0 },
        { name: 'Rajahmundry Railway Police', city: 'Rajahmundry', category: 'police', addr: 'Railway Station, Rajahmundry', rating: 3.9, safety: 'high', dist: 1.8, desc: 'GRP unit ensuring safety of train passengers and station premises.', budget: 0 },
        { name: 'Kotipalli Port Police', city: 'Rajahmundry', category: 'police', addr: 'Kotipalli, East Godavari', rating: 3.7, safety: 'high', dist: 55.0, desc: 'Coastal police outpost monitoring ferry routes and maritime activities.', budget: 0 },
      ],
      transport: [
        { name: 'Rajahmundry Railway Station', city: 'Rajahmundry', category: 'transport', addr: 'Station Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Major railway junction connecting to Hyderabad, Visakhapatnam and Chennai.', budget: 0 },
        { name: 'RTC Bus Stand Rajahmundry', city: 'Rajahmundry', category: 'transport', addr: 'Bus Stand Road, Rajahmundry', rating: 3.8, safety: 'high', dist: 1.5, desc: 'Central APSRTC terminal with buses to all major AP and Telangana cities.', budget: 0 },
        { name: 'Rajahmundry Airport', city: 'Rajahmundry', category: 'transport', addr: 'Madhurapudi, Rajahmundry', rating: 4.1, safety: 'high', dist: 10.0, desc: 'Domestic airport with flights to Hyderabad, Visakhapatnam and Chennai.', budget: 0 },
        { name: 'Kovvur Railway Station', city: 'Rajahmundry', category: 'transport', addr: 'Kovvur, East Godavari', rating: 3.7, safety: 'high', dist: 14.0, desc: 'Nearby railway station across the Godavari, useful for western side travellers.', budget: 0 },
        { name: 'Godavari River Ferry', city: 'Rajahmundry', category: 'transport', addr: 'Godavari Ghat, Rajahmundry', rating: 4.2, safety: 'medium', dist: 3.0, desc: 'Regular ferry service connecting Rajahmundry to Kovvur across the Godavari.', budget: 20 },
        { name: 'Pydipaka Ferry Point', city: 'Rajahmundry', category: 'transport', addr: 'Pydipaka, East Godavari', rating: 3.8, safety: 'medium', dist: 22.0, desc: 'Ferry service to Papikondalu for tourists and local commuters.', budget: 30 },
        { name: 'Private Bus Operators Hub', city: 'Rajahmundry', category: 'transport', addr: 'Morampudi Road, Rajahmundry', rating: 3.9, safety: 'high', dist: 2.0, desc: 'Private sleeper and express bus services to Hyderabad, Bangalore and Chennai.', budget: 0 },
        { name: 'Auto Rickshaw Stand', city: 'Rajahmundry', category: 'transport', addr: 'Main Bazaar, Rajahmundry', rating: 3.7, safety: 'high', dist: 0.4, desc: 'Main auto stand for intra-city travel at metered fares; available 24 hours.', budget: 0 },
        { name: 'Cab Aggregator Zone', city: 'Rajahmundry', category: 'transport', addr: 'Railway Station Road, Rajahmundry', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Ola and Rapido pick-up zone near railway station for on-demand cabs.', budget: 0 },
        { name: 'Samalkot Junction Railway Station', city: 'Rajahmundry', category: 'transport', addr: 'Samalkot, East Godavari', rating: 3.9, safety: 'high', dist: 12.0, desc: 'Important junction station with local and express train connections.', budget: 0 },
        { name: 'APSRTC Innespeta Stop', city: 'Rajahmundry', category: 'transport', addr: 'Innespeta, Rajahmundry', rating: 3.6, safety: 'high', dist: 0.7, desc: 'Busy city bus stop for city-connect APSRTC routes across Rajahmundry.', budget: 0 },
        { name: 'Rajamahendravaram Mini Bus Stand', city: 'Rajahmundry', category: 'transport', addr: 'Town Center, Rajahmundry', rating: 3.7, safety: 'high', dist: 0.9, desc: 'Mini bus stand for short-distance village connections in East Godavari.', budget: 0 },
        { name: 'Shared Taxi Stand', city: 'Rajahmundry', category: 'transport', addr: 'Danavaipeta, Rajahmundry', rating: 3.8, safety: 'high', dist: 1.1, desc: 'Shared taxis to Kakinada, Amalapuram and Eluru at affordable fares.', budget: 0 },
        { name: 'Madhavapatnam Boat Station', city: 'Rajahmundry', category: 'transport', addr: 'Madhavapatnam, East Godavari', rating: 3.9, safety: 'medium', dist: 30.0, desc: 'Boat station for island-hopping in the Godavari Delta region.', budget: 50 },
        { name: 'e-Rickshaw Charging Hub', city: 'Rajahmundry', category: 'transport', addr: 'Municipal Area, Rajahmundry', rating: 3.8, safety: 'high', dist: 0.5, desc: 'E-rickshaw stands for last-mile connectivity in markets and residential areas.', budget: 0 },
      ],
    },
    kakinada: {
      hospitals: [
        { name: 'Rangaraya Medical College Hospital', city: 'Kakinada', category: 'hospitals', addr: 'Kakinada, AP', rating: 4.1, safety: 'high', dist: 0.9, desc: 'Government medical college hospital with specialist departments and free OPD.', budget: 0 },
        { name: 'Lotus Children Hospital', city: 'Kakinada', category: 'hospitals', addr: 'JP Road, Kakinada', rating: 4.6, safety: 'high', dist: 1.4, desc: 'Top-rated pediatric and general hospital with modern NICU.', budget: 800 },
        { name: 'Aditya Hospital Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'Main Road, Kakinada', rating: 4.3, safety: 'high', dist: 2.0, desc: 'Multi-specialty private hospital known for cardiac and emergency care.', budget: 600 },
        { name: 'Durgabai Government Hospital', city: 'Kakinada', category: 'hospitals', addr: 'Jawaharlal Nehru Road, Kakinada', rating: 3.9, safety: 'high', dist: 1.5, desc: 'Government women and children hospital with free maternity services.', budget: 0 },
        { name: 'Mythili Hospital', city: 'Kakinada', category: 'hospitals', addr: 'Beach Road, Kakinada', rating: 4.2, safety: 'high', dist: 2.5, desc: 'Well-known private hospital for surgical and orthopaedic treatments.', budget: 500 },
        { name: 'District Head Quarters Hospital', city: 'Kakinada', category: 'hospitals', addr: 'KMC Road, Kakinada', rating: 4.0, safety: 'high', dist: 0.7, desc: 'Main district hospital catering to all primary and secondary health needs.', budget: 0 },
        { name: 'Kakinada Eye Hospital', city: 'Kakinada', category: 'hospitals', addr: 'MG Road, Kakinada', rating: 4.3, safety: 'high', dist: 1.2, desc: 'Specialist eye care hospital offering cataract, retina and glasses services.', budget: 300 },
        { name: 'Sri Sai Hospital', city: 'Kakinada', category: 'hospitals', addr: 'Suryarao Peta, Kakinada', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Multi-specialty hospital with 24-hour emergency and ICU care.', budget: 400 },
        { name: 'Narayana Hospital Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'Bhanugudi Junction, Kakinada', rating: 4.4, safety: 'high', dist: 3.0, desc: 'Branch of Narayana Health chain with cardiac and critical care specialisation.', budget: 700 },
        { name: 'Ramadevi Nursing Home', city: 'Kakinada', category: 'hospitals', addr: 'Prakashnagar, Kakinada', rating: 3.8, safety: 'high', dist: 2.2, desc: 'Neighbourhood nursing home with gynaecology and general OPD services.', budget: 200 },
        { name: 'TB Hospital Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'Kakinada', rating: 3.7, safety: 'high', dist: 2.8, desc: 'Government chest and infectious disease hospital providing free treatment.', budget: 0 },
        { name: 'Dental Care Clinic Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'Main Road, Kakinada', rating: 4.1, safety: 'high', dist: 1.0, desc: 'Modern dental clinic for implants, orthodontics and root canal treatment.', budget: 350 },
        { name: 'Apollo Clinic Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'JP Road, Kakinada', rating: 4.2, safety: 'high', dist: 1.6, desc: 'Apollo-brand primary care clinic with doctor consultation and pharmacy.', budget: 300 },
        { name: 'Navajeevan Hospital', city: 'Kakinada', category: 'hospitals', addr: 'Gandhi Nagar, Kakinada', rating: 4.0, safety: 'high', dist: 3.5, desc: 'Private hospital at Gandhi Nagar with good OPD and diagnostics lab.', budget: 250 },
        { name: 'Child Care Centre Kakinada', city: 'Kakinada', category: 'hospitals', addr: 'Kakinada', rating: 4.1, safety: 'high', dist: 2.0, desc: 'Specialist paediatric centre with neonatal and vaccination services.', budget: 300 },
      ],
      restaurants: [
        { name: 'Suruchi Sweet Shop', city: 'Kakinada', category: 'restaurants', addr: 'M.G. Road, Kakinada', rating: 4.7, safety: 'high', dist: 0.4, desc: 'Legendary sweet shop famous for Kakinada Kaaja and traditional Andhra sweets since 1950.', budget: 100 },
        { name: 'Hotel Annapurna', city: 'Kakinada', category: 'restaurants', addr: 'Main Road, Kakinada', rating: 4.2, safety: 'high', dist: 0.5, desc: 'Legendary Andhra meals and tiffins since 1978. Always fresh and hygienic.', budget: 150 },
        { name: 'Spice Route', city: 'Kakinada', category: 'restaurants', addr: 'Beach Road, Kakinada', rating: 4.4, safety: 'high', dist: 2.1, desc: 'Seafood specialist with ocean view. Try the Kakinada kaaja and prawn fry.', budget: 600 },
        { name: 'Kakinada Hotel Srinivasa', city: 'Kakinada', category: 'restaurants', addr: 'Suryarao Peta, Kakinada', rating: 4.0, safety: 'high', dist: 0.9, desc: 'Vegetarian restaurant popular for Andhra thali, dosas and filter coffee.', budget: 130 },
        { name: 'Sri Kanya Restaurant', city: 'Kakinada', category: 'restaurants', addr: 'Bus Stand Road, Kakinada', rating: 4.1, safety: 'high', dist: 1.1, desc: 'Known for unlimited Andhra rice meals, pickles and papads.', budget: 160 },
        { name: 'The Fish Hut', city: 'Kakinada', category: 'restaurants', addr: 'Beach Road, Kakinada', rating: 4.5, safety: 'high', dist: 2.8, desc: 'Beachside restaurant famous for fresh pomfret, tiger prawn and crab curries.', budget: 700 },
        { name: 'Nagarjuna Restaurant', city: 'Kakinada', category: 'restaurants', addr: 'JP Road, Kakinada', rating: 4.3, safety: 'high', dist: 1.3, desc: 'Andhra meals chain known for spicy gravies and crispy papad variety.', budget: 220 },
        { name: 'Hotel Jagadamba', city: 'Kakinada', category: 'restaurants', addr: 'Main Road, Kakinada', rating: 4.0, safety: 'high', dist: 0.7, desc: 'Long-established hotel restaurant serving local Andhra and North Indian food.', budget: 200 },
        { name: 'Biryani House Kakinada', city: 'Kakinada', category: 'restaurants', addr: 'Suryarao Peta, Kakinada', rating: 4.2, safety: 'high', dist: 1.5, desc: 'Specialist biryani place with Hyderabadi-style dum pot and raita.', budget: 300 },
        { name: 'Chatpata Chaat Corner', city: 'Kakinada', category: 'restaurants', addr: 'Town Center, Kakinada', rating: 3.9, safety: 'high', dist: 0.6, desc: 'Popular street food stall for pani puri, bhel, dahi puri and sev puri.', budget: 60 },
        { name: 'Coconut Coast Café', city: 'Kakinada', category: 'restaurants', addr: 'Hope Island road, Kakinada', rating: 4.3, safety: 'high', dist: 4.0, desc: 'Tropical-themed café with fresh coconut drinks and seafood bites.', budget: 250 },
        { name: 'Aaharam Veg Restaurant', city: 'Kakinada', category: 'restaurants', addr: 'MG Road, Kakinada', rating: 4.0, safety: 'high', dist: 0.8, desc: 'Pure vegetarian restaurant offering South Indian and Jain menu options.', budget: 150 },
        { name: 'Udupi Sri Krishna', city: 'Kakinada', category: 'restaurants', addr: 'Gandhi Nagar, Kakinada', rating: 4.1, safety: 'high', dist: 1.7, desc: 'Udupi-style veg eatery popular for crispy rava dosa and sambar.', budget: 120 },
        { name: 'Pita Jungle', city: 'Kakinada', category: 'restaurants', addr: 'JP Road, Kakinada', rating: 3.9, safety: 'high', dist: 2.0, desc: 'Trendy café offering wraps, pasta and cold coffees for young crowd.', budget: 280 },
        { name: 'Priya Hotel', city: 'Kakinada', category: 'restaurants', addr: 'Kakinada Port Road', rating: 3.8, safety: 'high', dist: 3.0, desc: 'Affordable budget hotel restaurant catering to port workers and travellers.', budget: 100 },
      ],
      tourist: [
        { name: 'Coringa Wildlife Sanctuary', city: 'Kakinada', category: 'tourist', addr: 'Kakinada, AP', rating: 4.7, safety: 'high', dist: 8.0, desc: 'Second largest mangrove forest in India. Boat safaris and rare bird watching.', budget: 100 },
        { name: 'Hope Island', city: 'Kakinada', category: 'tourist', addr: 'Hope Island, Kakinada', rating: 4.5, safety: 'medium', dist: 12.0, desc: 'Unique natural barrier island reachable by boat, great for nature enthusiasts.', budget: 200 },
        { name: 'Kakinada Beach Park', city: 'Kakinada', category: 'tourist', addr: 'Beach Road, Kakinada', rating: 4.3, safety: 'high', dist: 3.5, desc: 'Popular sea-front park ideal for morning walks, beach games, and family picnics.', budget: 0 },
        { name: 'Annapurneshwari Temple', city: 'Kakinada', category: 'tourist', addr: 'Main Road, Kakinada', rating: 4.4, safety: 'high', dist: 1.0, desc: 'Major Hindu temple dedicated to Goddess Annapurneshwari drawing daily pilgrims.', budget: 0 },
        { name: 'Kakinada Lighthouse', city: 'Kakinada', category: 'tourist', addr: 'Port Area, Kakinada', rating: 4.2, safety: 'high', dist: 4.0, desc: 'Functional lighthouse offering panoramic views of the bay and port area.', budget: 20 },
        { name: 'Uppada Beach', city: 'Kakinada', category: 'tourist', addr: 'Uppada, Kakinada', rating: 4.4, safety: 'medium', dist: 14.0, desc: 'Serene beach famous for handloom jamdani sarees and fresh seafood stalls.', budget: 0 },
        { name: 'Murugan Temple Kakinada', city: 'Kakinada', category: 'tourist', addr: 'Suryarao Peta, Kakinada', rating: 4.2, safety: 'high', dist: 1.5, desc: 'Vibrant Tamil-style Murugan temple with colourful gopuram architecture.', budget: 0 },
        { name: 'Bommuru Coconut Farms', city: 'Kakinada', category: 'tourist', addr: 'Bommuru, near Kakinada', rating: 4.0, safety: 'high', dist: 10.0, desc: 'Lush coconut farmland ideal for rural eco-tourism and agro-tourism activities.', budget: 50 },
        { name: 'Kakinada Town Clock Tower', city: 'Kakinada', category: 'tourist', addr: 'Town Hall, Kakinada', rating: 3.9, safety: 'high', dist: 0.6, desc: 'Heritage colonial clock tower in the town square — a landmark since 1920.', budget: 0 },
        { name: 'East Godavari Museum', city: 'Kakinada', category: 'tourist', addr: 'Collector Office Road, Kakinada', rating: 4.0, safety: 'high', dist: 1.2, desc: 'District museum with artefacts, manuscripts and tribal cultural exhibits.', budget: 10 },
        { name: 'Srikakula Andhra Mahavishnu Temple', city: 'Kakinada', category: 'tourist', addr: 'Srikakula, near Kakinada', rating: 4.5, safety: 'high', dist: 12.0, desc: 'Ancient and revered Vishnu temple with stunning carvings and festive celebrations.', budget: 0 },
        { name: 'Kakinada Boat Club', city: 'Kakinada', category: 'tourist', addr: 'Port Road, Kakinada', rating: 4.1, safety: 'medium', dist: 3.8, desc: 'Recreational boating facility for sea rides and bay cruises.', budget: 150 },
        { name: 'Mangrove Walk Trail', city: 'Kakinada', category: 'tourist', addr: 'Coringa, Kakinada', rating: 4.4, safety: 'high', dist: 9.0, desc: 'Guided eco-trail through the mangrove forest with bird-watching spots.', budget: 80 },
        { name: 'Pydibhimavaram Palace Ruins', city: 'Kakinada', category: 'tourist', addr: 'Pydibhimavaram, East Godavari', rating: 3.8, safety: 'high', dist: 25.0, desc: 'Ruins of an old palace from the Zamindari era surrounded by open fields.', budget: 0 },
        { name: 'Gollalamadhavaram Dam', city: 'Kakinada', category: 'tourist', addr: 'East Godavari District', rating: 4.0, safety: 'high', dist: 30.0, desc: 'Scenic dam with water sports and picnic facilities on weekends.', budget: 30 },
      ],
      banks: [
        { name: 'Andhra Bank Main Branch', city: 'Kakinada', category: 'banks', addr: 'Main Road, Kakinada', rating: 3.8, safety: 'high', dist: 0.3, desc: 'Full-service bank with forex, locker, and corporate banking services.', budget: 0 },
        { name: 'State Bank of India Kakinada', city: 'Kakinada', category: 'banks', addr: 'Main Bazaar, Kakinada', rating: 4.0, safety: 'high', dist: 0.7, desc: 'Major SBI branch offering all retail and corporate banking products.', budget: 0 },
        { name: 'Canara Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Suryarao Peta, Kakinada', rating: 3.9, safety: 'high', dist: 1.0, desc: 'Government bank with crop loans, home loans and savings accounts.', budget: 0 },
        { name: 'HDFC Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'JP Road, Kakinada', rating: 4.2, safety: 'high', dist: 1.4, desc: 'Private bank with digital banking, demat and personal loan services.', budget: 0 },
        { name: 'ICICI Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'MG Road, Kakinada', rating: 4.1, safety: 'high', dist: 1.1, desc: 'ICICI branch offering instant credit cards, home and auto loan products.', budget: 0 },
        { name: 'Axis Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Gandhi Nagar, Kakinada', rating: 4.0, safety: 'high', dist: 1.8, desc: 'Modern branch with priority banking, ATM and investment solutions.', budget: 0 },
        { name: 'Union Bank of India Kakinada', city: 'Kakinada', category: 'banks', addr: 'Bhanugudi, Kakinada', rating: 3.7, safety: 'high', dist: 2.5, desc: 'Public bank offering PMJDY, PMMY agriculture and MSME loan schemes.', budget: 0 },
        { name: 'Punjab National Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Town Center, Kakinada', rating: 3.8, safety: 'high', dist: 0.9, desc: 'PNB branch serving farmers, government staff and small businesses.', budget: 0 },
        { name: 'Bank of Baroda Kakinada', city: 'Kakinada', category: 'banks', addr: 'Port Road, Kakinada', rating: 3.9, safety: 'high', dist: 2.2, desc: 'Nationalised bank useful for trade finance near the port area.', budget: 0 },
        { name: 'Indian Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Suryarao Peta, Kakinada', rating: 3.8, safety: 'high', dist: 1.5, desc: 'Government bank offering educational and housing loan products.', budget: 0 },
        { name: 'Kotak Mahindra Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'MG Road, Kakinada', rating: 4.0, safety: 'high', dist: 1.2, desc: 'Private bank with competitive savings rates and zero-balance accounts.', budget: 0 },
        { name: 'Central Bank of India Kakinada', city: 'Kakinada', category: 'banks', addr: 'Gandhi Bazaar, Kakinada', rating: 3.7, safety: 'high', dist: 2.0, desc: 'Central bank branch providing rural credit, savings and locker services.', budget: 0 },
        { name: 'South Indian Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'JP Road, Kakinada', rating: 3.9, safety: 'high', dist: 1.3, desc: 'Kerala-based private bank with competitive FD rates and home loans.', budget: 0 },
        { name: 'Yes Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Main Road, Kakinada', rating: 3.8, safety: 'high', dist: 1.7, desc: 'Private bank with trade finance and MSME credit facilities.', budget: 0 },
        { name: 'Indian Overseas Bank Kakinada', city: 'Kakinada', category: 'banks', addr: 'Beach Road, Kakinada', rating: 3.7, safety: 'high', dist: 2.8, desc: 'Government bank with NRI accounts, student loans and retail banking.', budget: 0 },
      ],
      police: [
        { name: 'Kakinada Town Police Station', city: 'Kakinada', category: 'police', addr: 'Kakinada Town', rating: 3.7, safety: 'high', dist: 0.8, desc: 'Active town police station with helpline and women help desk.', budget: 0 },
        { name: 'One Town Police Station Kakinada', city: 'Kakinada', category: 'police', addr: 'One Town, Kakinada', rating: 3.9, safety: 'high', dist: 1.2, desc: 'Busy police station covering the commercial heart of Kakinada.', budget: 0 },
        { name: 'Two Town Police Station Kakinada', city: 'Kakinada', category: 'police', addr: 'Two Town, Kakinada', rating: 3.8, safety: 'high', dist: 1.6, desc: 'Station covering Two Town residential and market belt of Kakinada.', budget: 0 },
        { name: 'Suryarao Peta Police Station', city: 'Kakinada', category: 'police', addr: 'Suryarao Peta, Kakinada', rating: 3.7, safety: 'high', dist: 1.0, desc: 'Sub-station catering to Suryarao Peta neighbourhood complaints.', budget: 0 },
        { name: 'Kakinada Port Police Station', city: 'Kakinada', category: 'police', addr: 'Port Area, Kakinada', rating: 3.8, safety: 'high', dist: 3.5, desc: 'Police station dedicated to port security and maritime law enforcement.', budget: 0 },
        { name: 'Kakinada Women Police Station', city: 'Kakinada', category: 'police', addr: 'SP Office Campus, Kakinada', rating: 4.0, safety: 'high', dist: 1.5, desc: 'Dedicated station for women-related complaints and domestic violence cases.', budget: 0 },
        { name: 'Kakinada Traffic Police', city: 'Kakinada', category: 'police', addr: 'Clock Tower, Kakinada', rating: 3.9, safety: 'high', dist: 0.5, desc: 'Traffic management unit covering major junctions in Kakinada city.', budget: 0 },
        { name: 'Bhanugudi Police Station', city: 'Kakinada', category: 'police', addr: 'Bhanugudi, Kakinada', rating: 3.6, safety: 'high', dist: 3.0, desc: 'Station serving the Bhanugudi and rural outskirts of Kakinada.', budget: 0 },
        { name: 'Kakinada Railway Police', city: 'Kakinada', category: 'police', addr: 'Kakinada Town Railway Station', rating: 3.8, safety: 'high', dist: 2.0, desc: 'GRP unit ensuring passenger safety at Kakinada Town railway station.', budget: 0 },
        { name: 'Kakinada Cyber Crime Cell', city: 'Kakinada', category: 'police', addr: 'SP Office, Kakinada', rating: 4.1, safety: 'high', dist: 1.4, desc: 'Specialist cyber cell for online fraud, banking scams and digital crimes.', budget: 0 },
        { name: 'Kakinada Special Branch', city: 'Kakinada', category: 'police', addr: 'District SP Office, Kakinada', rating: 4.0, safety: 'high', dist: 1.5, desc: 'Intelligence and surveillance unit for law and order management.', budget: 0 },
        { name: 'Uppada Police Outpost', city: 'Kakinada', category: 'police', addr: 'Uppada, Kakinada', rating: 3.7, safety: 'high', dist: 14.0, desc: 'Coastal outpost for beachfront security at the Uppada shoreline.', budget: 0 },
        { name: 'Sakinetipalli Police Station', city: 'Kakinada', category: 'police', addr: 'Sakinetipalli, East Godavari', rating: 3.6, safety: 'high', dist: 20.0, desc: 'Rural police station for surrounding villages of Kakinada district.', budget: 0 },
        { name: 'Jagannaickpur Police Station', city: 'Kakinada', category: 'police', addr: 'Jagannaickpur, Kakinada', rating: 3.7, safety: 'high', dist: 5.0, desc: 'Area police station covering Jagannaickpur municipal ward.', budget: 0 },
        { name: 'Kakinada Anti-Corruption Unit', city: 'Kakinada', category: 'police', addr: 'Collectorate Campus, Kakinada', rating: 4.0, safety: 'high', dist: 1.2, desc: 'ACB unit monitoring corruption in government offices across the district.', budget: 0 },
      ],
      transport: [
        { name: 'Kakinada Port', city: 'Kakinada', category: 'transport', addr: 'Port Area, Kakinada', rating: 3.9, safety: 'medium', dist: 3.5, desc: 'Major fishing and commercial port with ferry services to nearby islands.', budget: 0 },
        { name: 'Kakinada Town Bus Stand', city: 'Kakinada', category: 'transport', addr: 'Central, Kakinada', rating: 3.8, safety: 'high', dist: 1.0, desc: 'Main APSRTC bus terminal connecting Kakinada to towns across Andhra Pradesh.', budget: 0 },
        { name: 'Kakinada Town Railway Station', city: 'Kakinada', category: 'transport', addr: 'Station Road, Kakinada', rating: 4.0, safety: 'high', dist: 2.0, desc: 'Main railway station with services to Vizag, Hyderabad and Chennai.', budget: 0 },
        { name: 'Kakinada Port Railway Station', city: 'Kakinada', category: 'transport', addr: 'Port Area, Kakinada', rating: 3.7, safety: 'high', dist: 4.0, desc: 'Goods and passenger railway yard serving the port industrial zone.', budget: 0 },
        { name: 'Samalkot to Kakinada Auto Stand', city: 'Kakinada', category: 'transport', addr: 'Samalkot Junction Road, Kakinada', rating: 3.7, safety: 'high', dist: 12.0, desc: 'Shared auto service connecting Kakinada to Samalkot junction town.', budget: 0 },
        { name: 'Kakinada Private Bus Terminal', city: 'Kakinada', category: 'transport', addr: 'Bhanugudi Road, Kakinada', rating: 3.9, safety: 'high', dist: 2.5, desc: 'Private luxury and sleeper buses to Hyderabad, Bangalore and Vizag.', budget: 0 },
        { name: 'Auto Rickshaw Stand Kakinada', city: 'Kakinada', category: 'transport', addr: 'Town Center, Kakinada', rating: 3.6, safety: 'high', dist: 0.5, desc: 'Main auto-rickshaw stand for local travel within Kakinada city.', budget: 0 },
        { name: 'Ola/Rapido Pickup Zone', city: 'Kakinada', category: 'transport', addr: 'Kakinada Town Station, Kakinada', rating: 4.0, safety: 'high', dist: 2.0, desc: 'Cab aggregator zone for on-demand auto and cab booking services.', budget: 0 },
        { name: 'Kakinada to Hope Island Ferry', city: 'Kakinada', category: 'transport', addr: 'Kakinada Port, Kakinada', rating: 4.1, safety: 'medium', dist: 3.8, desc: 'Public ferry to Hope Island — scenic 45-minute ride across the bay.', budget: 80 },
        { name: 'Coringa Boat Service', city: 'Kakinada', category: 'transport', addr: 'Coringa, Kakinada', rating: 4.2, safety: 'high', dist: 8.5, desc: 'Boat service through the Coringa mangrove sanctuary for eco-tourists.', budget: 120 },
        { name: 'Bikkavolu Bus Stop', city: 'Kakinada', category: 'transport', addr: 'Bikkavolu, East Godavari', rating: 3.6, safety: 'high', dist: 22.0, desc: 'Village bus stop connecting the Bikkavolu region to Kakinada town.', budget: 0 },
        { name: 'Kakinada Shared Taxi Stands', city: 'Kakinada', category: 'transport', addr: 'MG Road, Kakinada', rating: 3.7, safety: 'high', dist: 0.8, desc: 'Shared taxis to Rajamahendravaram, Amalapuram and Eluru.', budget: 0 },
        { name: 'e-Rickshaw Hub Kakinada', city: 'Kakinada', category: 'transport', addr: 'Suryarao Peta, Kakinada', rating: 3.8, safety: 'high', dist: 0.6, desc: 'E-rickshaw stands for affordable last-mile connectivity in Kakinada.', budget: 0 },
        { name: 'Uppada Fisheries Boat Jetty', city: 'Kakinada', category: 'transport', addr: 'Uppada, Kakinada', rating: 3.7, safety: 'medium', dist: 14.0, desc: 'Local fishing boat jetty that also offers rides along the coast.', budget: 50 },
        { name: 'West Godavari Bridge Bus Stop', city: 'Kakinada', category: 'transport', addr: 'Kakinada-Eluru Highway', rating: 3.8, safety: 'high', dist: 6.0, desc: 'Highway bus stop with frequent services towards Eluru and Krishna district.', budget: 0 },
      ],
    },
    hyderabad: {
      hospitals: [
        { name: 'AIIMS Hyderabad', city: 'Hyderabad', category: 'hospitals', addr: 'Bibinagar, Hyderabad', rating: 4.8, safety: 'high', dist: 15.0, desc: 'Premier central government medical institute with world-class facilities.', budget: 0 },
        { name: 'Apollo Hospitals Jubilee Hills', city: 'Hyderabad', category: 'hospitals', addr: 'Jubilee Hills, Hyderabad', rating: 4.7, safety: 'high', dist: 5.0, desc: 'Top private hospital with 55+ specialties and international patient services.', budget: 2000 },
        { name: 'Care Hospitals Banjara Hills', city: 'Hyderabad', category: 'hospitals', addr: 'Banjara Hills, Hyderabad', rating: 4.5, safety: 'high', dist: 4.2, desc: 'Renowned multi-specialty hospital with cardiac and neuro centers of excellence.', budget: 1500 },
        { name: 'Yashoda Hospitals', city: 'Hyderabad', category: 'hospitals', addr: 'Somajiguda, Hyderabad', rating: 4.5, safety: 'high', dist: 3.8, desc: 'Leading chain hospital with orthopaedics, oncology and transplant specialists.', budget: 1800 },
        { name: 'Kamineni Hospitals', city: 'Hyderabad', category: 'hospitals', addr: 'LB Nagar, Hyderabad', rating: 4.3, safety: 'high', dist: 12.0, desc: 'Multi-specialty hospital known for heart surgery and robotic procedures.', budget: 1200 },
        { name: 'Osmania General Hospital', city: 'Hyderabad', category: 'hospitals', addr: 'Afzalgunj, Hyderabad', rating: 4.0, safety: 'high', dist: 5.5, desc: 'Historic government hospital with all departments and free emergency care.', budget: 0 },
        { name: 'Nizams Institute of Medical Sciences', city: 'Hyderabad', category: 'hospitals', addr: 'Punjagutta, Hyderabad', rating: 4.6, safety: 'high', dist: 4.5, desc: 'Premier autonomous medical university with teaching and specialized care.', budget: 200 },
        { name: 'Hyderabad Institute of Oncology', city: 'Hyderabad', category: 'hospitals', addr: 'Film Nagar, Hyderabad', rating: 4.4, safety: 'high', dist: 6.0, desc: 'Dedicated cancer centre with radiation, chemo and surgical oncology.', budget: 2000 },
        { name: 'Rainbow Childrens Hospital', city: 'Hyderabad', category: 'hospitals', addr: 'Banjara Hills, Hyderabad', rating: 4.6, safety: 'high', dist: 4.8, desc: 'Top-rated paediatric hospital with NICU and multispecialty child care.', budget: 1000 },
        { name: 'Fernandez Hospital', city: 'Hyderabad', category: 'hospitals', addr: 'Bogulkunta, Hyderabad', rating: 4.5, safety: 'high', dist: 2.0, desc: 'Prestigious maternity and gynaecology hospital with over 80 years of history.', budget: 800 },
        { name: 'Continental Hospitals', city: 'Hyderabad', category: 'hospitals', addr: 'Nanakramguda, Hyderabad', rating: 4.4, safety: 'high', dist: 10.0, desc: 'JCI-accredited super-specialty hospital with international standards.', budget: 2200 },
        { name: 'Star Hospitals', city: 'Hyderabad', category: 'hospitals', addr: 'Banjara Hills, Hyderabad', rating: 4.3, safety: 'high', dist: 5.2, desc: 'Comprehensive multi-specialty hospital with strong emergency and trauma care.', budget: 1500 },
        { name: 'Medicover Hospitals', city: 'Hyderabad', category: 'hospitals', addr: 'Madhapur, Hyderabad', rating: 4.2, safety: 'high', dist: 8.5, desc: 'European healthcare chain with digital health records and multi-specialty services.', budget: 1000 },
        { name: 'Basavatarakam Cancer Hospital', city: 'Hyderabad', category: 'hospitals', addr: 'Film Nagar, Hyderabad', rating: 4.7, safety: 'high', dist: 6.2, desc: 'Trusted cancer charity hospital offering subsidised oncology treatment.', budget: 500 },
        { name: 'Gandhi Hospital', city: 'Hyderabad', category: 'hospitals', addr: 'Secunderabad, Hyderabad', rating: 4.1, safety: 'high', dist: 7.0, desc: 'Large government teaching hospital with free OPD and emergency services.', budget: 0 },
      ],
      restaurants: [
        { name: 'Shadab Hotel', city: 'Hyderabad', category: 'restaurants', addr: 'Ghansi Bazaar, Hyderabad', rating: 4.7, safety: 'high', dist: 3.5, desc: 'Legendary restaurant famous for Hyderabadi dum biryani and haleem since 1953.', budget: 400 },
        { name: 'Paradise Restaurant', city: 'Hyderabad', category: 'restaurants', addr: 'Secunderabad, Hyderabad', rating: 4.6, safety: 'high', dist: 6.8, desc: 'Iconic Hyderabadi biryani chain with multiple outlets across the city.', budget: 350 },
        { name: 'Bawarchi Restaurant', city: 'Hyderabad', category: 'restaurants', addr: 'RTC X Roads, Hyderabad', rating: 4.5, safety: 'high', dist: 4.0, desc: 'Famous for spicy Hyderabadi biryani and authentic Mughlai cuisine.', budget: 300 },
        { name: 'Chicha\'s', city: 'Hyderabad', category: 'restaurants', addr: 'Nampally, Hyderabad', rating: 4.4, safety: 'high', dist: 2.5, desc: 'Beloved Hyderabadi eatery for haleem, marag and Irani chai.', budget: 200 },
        { name: 'Hotel Nayaab', city: 'Hyderabad', category: 'restaurants', addr: 'Charminar, Hyderabad', rating: 4.5, safety: 'medium', dist: 4.2, desc: 'Old city favourite for authentic paya, biryani and Ramzan specials.', budget: 250 },
        { name: 'Chutneys', city: 'Hyderabad', category: 'restaurants', addr: 'Banjara Hills, Hyderabad', rating: 4.4, safety: 'high', dist: 5.0, desc: 'Hugely popular South Indian chain famous for fluffy idlis and 30-chutney selection.', budget: 300 },
        { name: 'Ohri\'s Gufaa', city: 'Hyderabad', category: 'restaurants', addr: 'Lakdi Ka Pul, Hyderabad', rating: 4.3, safety: 'high', dist: 3.0, desc: 'Unique cave-themed multi-cuisine restaurant with live music evenings.', budget: 600 },
        { name: 'Pista House', city: 'Hyderabad', category: 'restaurants', addr: 'Shah Ali Banda, Hyderabad', rating: 4.5, safety: 'medium', dist: 4.5, desc: 'Home of the world-famous Hyderabadi haleem during Ramzan and year-round.', budget: 200 },
        { name: 'Café Niloufer', city: 'Hyderabad', category: 'restaurants', addr: 'Red Hills, Hyderabad', rating: 4.4, safety: 'high', dist: 2.8, desc: 'Iconic Irani café known for Osmania biscuits and sweet chai since 1954.', budget: 80 },
        { name: 'Kritunga Restaurant', city: 'Hyderabad', category: 'restaurants', addr: 'Ameerpet, Hyderabad', rating: 4.3, safety: 'high', dist: 4.0, desc: 'Authentic Rayalaseema cuisine with spicy gravies and finger millet rotis.', budget: 350 },
        { name: 'Flechazo', city: 'Hyderabad', category: 'restaurants', addr: 'Jubilee Hills, Hyderabad', rating: 4.2, safety: 'high', dist: 5.5, desc: 'Rooftop restaurant with skyline views, tapas and global cuisine.', budget: 800 },
        { name: 'Hotel Shalimar', city: 'Hyderabad', category: 'restaurants', addr: 'Secunderabad, Hyderabad', rating: 4.0, safety: 'high', dist: 7.0, desc: 'Budget-friendly hotel restaurant popular for loaded lunch thali and biryanis.', budget: 180 },
        { name: 'Simply South', city: 'Hyderabad', category: 'restaurants', addr: 'Begumpet, Hyderabad', rating: 4.3, safety: 'high', dist: 3.5, desc: 'Pan South Indian restaurant serving specialties from Kerala, Tamil Nadu and Karnataka.', budget: 400 },
        { name: 'Absolute Barbecues', city: 'Hyderabad', category: 'restaurants', addr: 'Madhapur, Hyderabad', rating: 4.4, safety: 'high', dist: 9.0, desc: 'Popular unlimited grill restaurant with table-top smokers and exotic meats.', budget: 900 },
        { name: 'Minerva Coffee Shop', city: 'Hyderabad', category: 'restaurants', addr: 'Abids, Hyderabad', rating: 4.2, safety: 'high', dist: 2.2, desc: 'Old Hyderabad institution for Irani chai, keema pav and breakfast specials.', budget: 100 },
      ],
      tourist: [
        { name: 'Charminar', city: 'Hyderabad', category: 'tourist', addr: 'Charminar Road, Hyderabad', rating: 4.8, safety: 'medium', dist: 4.0, desc: 'The iconic 16th-century monument — the heart of Hyderabad\'s old city.', budget: 25 },
        { name: 'Golconda Fort', city: 'Hyderabad', category: 'tourist', addr: 'Ibrahim Bagh, Hyderabad', rating: 4.7, safety: 'high', dist: 9.0, desc: 'Magnificent 11th-century fort with remarkable acoustics and light shows.', budget: 35 },
        { name: 'Hussain Sagar Lake', city: 'Hyderabad', category: 'tourist', addr: 'Sanjeevaiah Park, Hyderabad', rating: 4.5, safety: 'high', dist: 2.5, desc: 'Sprawling artificial lake with a giant Buddha statue and boating facility.', budget: 0 },
        { name: 'Ramoji Film City', city: 'Hyderabad', category: 'tourist', addr: 'Anaspur Village, Hyderabad', rating: 4.6, safety: 'high', dist: 30.0, desc: 'World\'s largest film studio complex with theme parks and live shows.', budget: 1200 },
        { name: 'Salar Jung Museum', city: 'Hyderabad', category: 'tourist', addr: 'Salar Jung Road, Hyderabad', rating: 4.6, safety: 'high', dist: 3.5, desc: 'One of India\'s largest museums with a priceless collection of art and artefacts.', budget: 20 },
        { name: 'Birla Mandir', city: 'Hyderabad', category: 'tourist', addr: 'Naubath Pahad, Hyderabad', rating: 4.5, safety: 'high', dist: 3.0, desc: 'Stunning white marble temple built on a hilltop with panoramic city views.', budget: 0 },
        { name: 'Nehru Zoological Park', city: 'Hyderabad', category: 'tourist', addr: 'Bahadurpura, Hyderabad', rating: 4.3, safety: 'high', dist: 5.0, desc: 'One of the largest zoos in India with lion safaris and a natural history museum.', budget: 50 },
        { name: 'Laad Bazaar', city: 'Hyderabad', category: 'tourist', addr: 'Charminar, Hyderabad', rating: 4.4, safety: 'medium', dist: 4.2, desc: 'Centuries-old bazaar famous for lacquer bangles, pearls and Hyderabadi jewellery.', budget: 0 },
        { name: 'Warangal Fort', city: 'Hyderabad', category: 'tourist', addr: 'Warangal, Hyderabad region', rating: 4.5, safety: 'high', dist: 145.0, desc: 'Kakatiya dynasty stone fort with intricate gateway carvings and a scenic lake.', budget: 15 },
        { name: 'Snow World Hyderabad', city: 'Hyderabad', category: 'tourist', addr: 'Lower Tank Bund, Hyderabad', rating: 4.1, safety: 'high', dist: 2.8, desc: 'Indoor snow-simulated entertainment park popular with families and youngsters.', budget: 400 },
        { name: 'Qutb Shahi Tombs', city: 'Hyderabad', category: 'tourist', addr: 'Ibrahim Bagh, Hyderabad', rating: 4.5, safety: 'high', dist: 9.5, desc: 'Cluster of Persian-style tombs of the Qutb Shahi kings set in a manicured garden.', budget: 15 },
        { name: 'Chowmahalla Palace', city: 'Hyderabad', category: 'tourist', addr: 'Khilwat, Hyderabad', rating: 4.6, safety: 'high', dist: 4.0, desc: 'Magnificent palace complex of the Nizam with vintage cars, chandeliers and royal galleries.', budget: 80 },
        { name: 'Lumbini Park', city: 'Hyderabad', category: 'tourist', addr: 'Secretariat Road, Hyderabad', rating: 4.2, safety: 'high', dist: 2.6, desc: 'Waterfront park with laser shows, musical fountain and boating on Hussain Sagar.', budget: 30 },
        { name: 'Hyderabad Botanical Garden', city: 'Hyderabad', category: 'tourist', addr: 'Kondapur, Hyderabad', rating: 4.3, safety: 'high', dist: 11.0, desc: 'Sprawling green garden with herbal plants, bamboo trails and picnic spots.', budget: 20 },
        { name: 'Necklace Road', city: 'Hyderabad', category: 'tourist', addr: 'Tank Bund, Hyderabad', rating: 4.4, safety: 'high', dist: 2.5, desc: 'Scenic 3km jogging and cycling promenade along Hussain Sagar — ideal at sunset.', budget: 0 },
      ],
      banks: [
        { name: 'RBI Hyderabad Regional Office', city: 'Hyderabad', category: 'banks', addr: 'Saifabad, Hyderabad', rating: 4.2, safety: 'high', dist: 2.8, desc: 'Reserve Bank of India regional office with currency exchange and grievance cell.', budget: 0 },
        { name: 'ICICI Bank Banjara Hills', city: 'Hyderabad', category: 'banks', addr: 'Banjara Hills, Hyderabad', rating: 4.1, safety: 'high', dist: 3.5, desc: 'Premium ICICI branch with wealth management and 24-hour ATM lobby.', budget: 0 },
        { name: 'SBI Hyderabad Main Branch', city: 'Hyderabad', category: 'banks', addr: 'GHMC Road, Hyderabad', rating: 4.0, safety: 'high', dist: 2.0, desc: 'Main SBI branch with full corporate and retail banking services.', budget: 0 },
        { name: 'HDFC Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Begumpet, Hyderabad', rating: 4.3, safety: 'high', dist: 3.0, desc: 'HDFC flagship branch with priority banking, DEMAT and investment services.', budget: 0 },
        { name: 'Axis Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Jubilee Hills, Hyderabad', rating: 4.1, safety: 'high', dist: 5.0, desc: 'Full-service Axis branch with home loans, mutual funds and trade finance.', budget: 0 },
        { name: 'Kotak Mahindra Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Madhapur, Hyderabad', rating: 4.0, safety: 'high', dist: 9.0, desc: 'Private bank with competitive savings rates and seamless mobile banking.', budget: 0 },
        { name: 'Canara Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Ameerpet, Hyderabad', rating: 3.8, safety: 'high', dist: 4.0, desc: 'Government bank with crop, education, home and MSME loan products.', budget: 0 },
        { name: 'Yes Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Banjara Hills, Hyderabad', rating: 3.9, safety: 'high', dist: 5.2, desc: 'Private bank with digital-first services for SMEs and retail customers.', budget: 0 },
        { name: 'Bank of Baroda Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Abids, Hyderabad', rating: 3.8, safety: 'high', dist: 2.5, desc: 'National bank with comprehensive retail and corporate banking products.', budget: 0 },
        { name: 'Punjab National Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Secunderabad, Hyderabad', rating: 3.7, safety: 'high', dist: 7.0, desc: 'PNB branch serving government employees and pension account holders.', budget: 0 },
        { name: 'Indian Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Nampally, Hyderabad', rating: 3.8, safety: 'high', dist: 2.8, desc: 'Nationalised bank with savings, FD and agricultural credit features.', budget: 0 },
        { name: 'Union Bank of India Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Himayatnagar, Hyderabad', rating: 3.7, safety: 'high', dist: 3.5, desc: 'Public sector bank offering NRI, home loan and digital banking services.', budget: 0 },
        { name: 'South Indian Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Begumpet, Hyderabad', rating: 3.9, safety: 'high', dist: 3.2, desc: 'Kerala-based private bank with competitive term deposits and personal loans.', budget: 0 },
        { name: 'Federal Bank Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Somajiguda, Hyderabad', rating: 4.0, safety: 'high', dist: 3.8, desc: 'Private bank with excellent NRI remittance and international banking services.', budget: 0 },
        { name: 'Central Bank of India Hyderabad', city: 'Hyderabad', category: 'banks', addr: 'Secunderabad, Hyderabad', rating: 3.6, safety: 'high', dist: 7.2, desc: 'Government bank with rural credit, savings and Kisan credit card products.', budget: 0 },
      ],
      police: [
        { name: 'Hyderabad Police Commissionerate', city: 'Hyderabad', category: 'police', addr: 'Basheerbagh, Hyderabad', rating: 4.0, safety: 'high', dist: 3.2, desc: 'Central police commissionerate with cybercrime, women, and traffic wings.', budget: 0 },
        { name: 'Banjara Hills Police Station', city: 'Hyderabad', category: 'police', addr: 'Banjara Hills Rd, Hyderabad', rating: 3.9, safety: 'high', dist: 4.8, desc: 'Upscale-area police station with efficient response and public relations desk.', budget: 0 },
        { name: 'Jubilee Hills Police Station', city: 'Hyderabad', category: 'police', addr: 'Jubilee Hills, Hyderabad', rating: 3.9, safety: 'high', dist: 5.5, desc: 'Station covering the posh Jubilee Hills residential and film fraternity area.', budget: 0 },
        { name: 'Madhapur Police Station', city: 'Hyderabad', category: 'police', addr: 'HITEC City, Hyderabad', rating: 4.0, safety: 'high', dist: 9.0, desc: 'IT-hub police station covering Cyber Towers, Madhapur and HITEC City.', budget: 0 },
        { name: 'Abids Police Station', city: 'Hyderabad', category: 'police', addr: 'Abids, Hyderabad', rating: 3.8, safety: 'high', dist: 2.0, desc: 'Central city police station near the commercial district of Abids.', budget: 0 },
        { name: 'Charminar Police Station', city: 'Hyderabad', category: 'police', addr: 'Charminar, Hyderabad', rating: 3.7, safety: 'medium', dist: 4.5, desc: 'Old city police station managing high foot traffic near Charminar and Laad Bazaar.', budget: 0 },
        { name: 'Secunderabad Police Station', city: 'Hyderabad', category: 'police', addr: 'Secunderabad, Hyderabad', rating: 3.8, safety: 'high', dist: 7.5, desc: 'Town police covering the Secunderabad cantonment and twin-city residents.', budget: 0 },
        { name: 'Hyderabad Cyber Crime Police', city: 'Hyderabad', category: 'police', addr: 'CCS Office, Hyderabad', rating: 4.2, safety: 'high', dist: 3.5, desc: 'Specialist cyber crime unit handling digital fraud, hacking and online offences.', budget: 0 },
        { name: 'Hyderabad Women Police Station', city: 'Hyderabad', category: 'police', addr: 'Nampally, Hyderabad', rating: 4.1, safety: 'high', dist: 2.5, desc: 'All-women staff police station for domestic violence, stalking and harassment cases.', budget: 0 },
        { name: 'SHE Teams Hyderabad', city: 'Hyderabad', category: 'police', addr: 'Various locations, Hyderabad', rating: 4.3, safety: 'high', dist: 1.0, desc: 'Dedicated women safety squads patrolling markets, colleges and public spaces.', budget: 0 },
        { name: 'Gachibowli Police Station', city: 'Hyderabad', category: 'police', addr: 'Gachibowli, Hyderabad', rating: 4.0, safety: 'high', dist: 12.0, desc: 'Station serving Gachibowli financial district and tech park areas.', budget: 0 },
        { name: 'LB Nagar Police Station', city: 'Hyderabad', category: 'police', addr: 'LB Nagar, Hyderabad', rating: 3.8, safety: 'high', dist: 14.0, desc: 'Suburban police station serving the south-east Hyderabad residential zones.', budget: 0 },
        { name: 'Begumpet Police Station', city: 'Hyderabad', category: 'police', addr: 'Begumpet, Hyderabad', rating: 3.9, safety: 'high', dist: 3.0, desc: 'Station covering Begumpet diplomatic enclave and adjoining business areas.', budget: 0 },
        { name: 'Hyderabad Traffic Police', city: 'Hyderabad', category: 'police', addr: 'Basheerbagh, Hyderabad', rating: 3.9, safety: 'high', dist: 3.2, desc: 'City traffic control wing managing signals, e-challans and accident response.', budget: 0 },
        { name: 'Rachakonda Police Commissionerate', city: 'Hyderabad', category: 'police', addr: 'LB Nagar, Hyderabad', rating: 3.9, safety: 'high', dist: 14.5, desc: 'Eastern twin-city commissionerate covering Keesara, Ghatkesar and Hayathnagar.', budget: 0 },
      ],
      transport: [
        { name: 'Secunderabad Railway Station', city: 'Hyderabad', category: 'transport', addr: 'Secunderabad', rating: 4.3, safety: 'high', dist: 7.5, desc: 'One of the busiest railway stations with all facilities and metro connectivity.', budget: 0 },
        { name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', category: 'transport', addr: 'Shamshabad, Hyderabad', rating: 4.6, safety: 'high', dist: 22.0, desc: 'International airport with world-class terminals, duty-free shops, and metro link.', budget: 0 },
        { name: 'Hyderabad Railway Station (Nampally)', city: 'Hyderabad', category: 'transport', addr: 'Nampally, Hyderabad', rating: 4.1, safety: 'high', dist: 2.5, desc: 'Main city railway terminus with trains to all major destinations.', budget: 0 },
        { name: 'MGBS Bus Station', city: 'Hyderabad', category: 'transport', addr: 'Imlibun, Hyderabad', rating: 4.0, safety: 'high', dist: 3.0, desc: 'Mahatma Gandhi Bus Station — TSRTC central hub for Telangana and AP routes.', budget: 0 },
        { name: 'Jubilee Bus Station', city: 'Hyderabad', category: 'transport', addr: 'Secunderabad, Hyderabad', rating: 3.9, safety: 'high', dist: 7.8, desc: 'TSRTC bus station serving twin cities with inter-city and suburban routes.', budget: 0 },
        { name: 'Hyderabad Metro - LB Nagar Line', city: 'Hyderabad', category: 'transport', addr: 'Ameerpet, Hyderabad', rating: 4.4, safety: 'high', dist: 4.5, desc: 'Hyderabad Metro Rail network with AC coaches and 57 stations across the city.', budget: 25 },
        { name: 'Kacheguda Railway Station', city: 'Hyderabad', category: 'transport', addr: 'Kacheguda, Hyderabad', rating: 4.0, safety: 'high', dist: 4.0, desc: 'Secondary railway station with local passenger and express train services.', budget: 0 },
        { name: 'TSRTC City Bus Service', city: 'Hyderabad', category: 'transport', addr: 'City-wide, Hyderabad', rating: 3.8, safety: 'high', dist: 0.5, desc: 'Extensive city bus network covering all major localities and suburbs.', budget: 10 },
        { name: 'Ola/Uber Hub Hyderabad', city: 'Hyderabad', category: 'transport', addr: 'HITEC City, Hyderabad', rating: 4.1, safety: 'high', dist: 9.0, desc: 'High-density cab aggregator zone with Ola, Uber and Rapido availability.', budget: 0 },
        { name: 'Hyderabad Outer Ring Road Toll', city: 'Hyderabad', category: 'transport', addr: 'ORR, Hyderabad', rating: 4.0, safety: 'high', dist: 15.0, desc: '158 km expressway encircling Hyderabad providing fast inter-district travel.', budget: 0 },
        { name: 'Auto Rickshaw Stand Abids', city: 'Hyderabad', category: 'transport', addr: 'Abids, Hyderabad', rating: 3.7, safety: 'high', dist: 2.0, desc: 'Central auto stand with mobile-metered autos available around the clock.', budget: 0 },
        { name: 'Rapido Bike Taxi Zone', city: 'Hyderabad', category: 'transport', addr: 'Madhapur, Hyderabad', rating: 4.0, safety: 'high', dist: 9.0, desc: 'Rapido and Bounce bike taxi hubs for quick, affordable city travel.', budget: 0 },
        { name: 'Hyderabad MMTS Train', city: 'Hyderabad', category: 'transport', addr: 'Lingampally, Hyderabad', rating: 3.9, safety: 'high', dist: 13.0, desc: 'Multi-Modal Transport System suburban train linking Hyderabad and Secunderabad.', budget: 10 },
        { name: 'Osmanabad Bus Depot', city: 'Hyderabad', category: 'transport', addr: 'Old City, Hyderabad', rating: 3.7, safety: 'high', dist: 5.0, desc: 'TSRTC depot with Marathwada, Nanded and other inter-state routes.', budget: 0 },
        { name: 'Shared Auto IT Corridor', city: 'Hyderabad', category: 'transport', addr: 'Kondapur, Hyderabad', rating: 3.8, safety: 'high', dist: 10.0, desc: 'Shared autos connecting IT companies, malls and Metro stations along ORR.', budget: 0 },
      ],
    },
    bangalore: {
      hospitals: [
        { name: 'Manipal Hospital Dickenson Rd', city: 'Bangalore', category: 'hospitals', addr: 'Dickenson Road, Bangalore', rating: 4.6, safety: 'high', dist: 3.5, desc: 'Multi-specialty hospital with cutting-edge oncology and cardiology departments.', budget: 2500 },
        { name: 'Fortis Hospital Cunningham', city: 'Bangalore', category: 'hospitals', addr: 'Cunningham Road, Bangalore', rating: 4.5, safety: 'high', dist: 4.0, desc: 'Leading private hospital with advanced surgical and critical care units.', budget: 2000 },
        { name: 'NIMHANS', city: 'Bangalore', category: 'hospitals', addr: 'Hosur Road, Bangalore', rating: 4.7, safety: 'high', dist: 6.0, desc: 'National Institute of Mental Health known globally for psychiatric research and care.', budget: 0 },
        { name: 'Apollo Hospital Bannerghatta', city: 'Bangalore', category: 'hospitals', addr: 'Bannerghatta Road, Bangalore', rating: 4.6, safety: 'high', dist: 10.0, desc: 'Large Apollo campus with cancer centre, transplant unit and 24-hr emergency.', budget: 2200 },
        { name: 'Narayana Health City', city: 'Bangalore', category: 'hospitals', addr: 'Bommasandra, Bangalore', rating: 4.5, safety: 'high', dist: 18.0, desc: 'Sprawling medical campus known for affordable cardiac surgery and transplants.', budget: 800 },
        { name: 'Vikram Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Millers Road, Bangalore', rating: 4.4, safety: 'high', dist: 3.0, desc: 'Specialty hospital for neurosciences, spine care and joint replacement.', budget: 1800 },
        { name: 'MS Ramaiah Medical College', city: 'Bangalore', category: 'hospitals', addr: 'Gokula, Bangalore', rating: 4.3, safety: 'high', dist: 8.5, desc: 'Teaching hospital with full OPD, surgery and emergency departments.', budget: 300 },
        { name: 'Columbia Asia Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Whitefield, Bangalore', rating: 4.4, safety: 'high', dist: 20.0, desc: 'Modern multi-specialty hospital with international patient services in Whitefield.', budget: 1500 },
        { name: 'BGS Gleneagles Global Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Kengeri, Bangalore', rating: 4.3, safety: 'high', dist: 15.0, desc: 'Global hospital chain with transplant, cardiac and cancer specialists.', budget: 1800 },
        { name: 'St. John\'s Medical College Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Koramangala, Bangalore', rating: 4.5, safety: 'high', dist: 7.0, desc: 'Premier Catholic mission hospital with strong ethical medical practice.', budget: 600 },
        { name: 'Bowring & Lady Curzon Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Shivajinagar, Bangalore', rating: 4.0, safety: 'high', dist: 2.5, desc: 'Government hospital with free OPD, emergency and specialist departments.', budget: 0 },
        { name: 'HCG Cancer Centre', city: 'Bangalore', category: 'hospitals', addr: 'HN Road, Bangalore', rating: 4.5, safety: 'high', dist: 4.0, desc: 'India\'s leading dedicated oncology centre with PET-CT and proton therapy.', budget: 3000 },
        { name: 'Aster CMI Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Hebbal, Bangalore', rating: 4.4, safety: 'high', dist: 9.0, desc: 'Aster group hospital with full transplant, cardiac and neuroscience facilities.', budget: 2000 },
        { name: 'KC General Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Malleshwaram, Bangalore', rating: 3.9, safety: 'high', dist: 5.5, desc: 'Government hospital serving north Bangalore with free emergency and OPD care.', budget: 0 },
        { name: 'People Tree Hospital', city: 'Bangalore', category: 'hospitals', addr: 'Goraguntepalya, Bangalore', rating: 4.2, safety: 'high', dist: 10.0, desc: 'Affordable multi-specialty hospital popular with middle-income families.', budget: 700 },
      ],
      restaurants: [
        { name: 'MTR 1924', city: 'Bangalore', category: 'restaurants', addr: 'Lalbagh Road, Bangalore', rating: 4.7, safety: 'high', dist: 2.2, desc: 'Historic restaurant famous for Masala Dosa and authentic South Indian breakfast.', budget: 200 },
        { name: 'Vidyarthi Bhavan', city: 'Bangalore', category: 'restaurants', addr: 'Gandhi Bazaar, Bangalore', rating: 4.5, safety: 'high', dist: 3.8, desc: 'Classic Udupi joint serving crisp dosas and filter coffee since 1943.', budget: 150 },
        { name: 'The Only Place', city: 'Bangalore', category: 'restaurants', addr: 'Museum Road, Bangalore', rating: 4.4, safety: 'high', dist: 2.5, desc: 'Cozy steakhouse popular for its continental dishes and craft cocktails.', budget: 800 },
        { name: 'Brahmin\'s Coffee Bar', city: 'Bangalore', category: 'restaurants', addr: 'Shankarapuram, Bangalore', rating: 4.6, safety: 'high', dist: 4.5, desc: 'Iconic breakfast spot famous for soft idli-vada and frothy filter coffee.', budget: 80 },
        { name: 'Nagarjuna Restaurant', city: 'Bangalore', category: 'restaurants', addr: 'Residency Road, Bangalore', rating: 4.4, safety: 'high', dist: 2.0, desc: 'Famous Andhra chain serving unlimited rice meals with fiery curries.', budget: 280 },
        { name: 'Toit Brewpub', city: 'Bangalore', category: 'restaurants', addr: 'Indiranagar, Bangalore', rating: 4.5, safety: 'high', dist: 8.0, desc: 'Popular craft brewery and restaurant with wood-fired pizza and beer flights.', budget: 900 },
        { name: 'Koshy\'s', city: 'Bangalore', category: 'restaurants', addr: 'St. Marks Road, Bangalore', rating: 4.3, safety: 'high', dist: 1.8, desc: 'Beloved 1940s heritage café with eclectic crowd, great steak and cold coffee.', budget: 400 },
        { name: 'Meghana Foods', city: 'Bangalore', category: 'restaurants', addr: 'Koramangala, Bangalore', rating: 4.5, safety: 'high', dist: 6.5, desc: 'Famous for finger-licking boneless biryani served in traditional handi.', budget: 350 },
        { name: 'Karavalli', city: 'Bangalore', category: 'restaurants', addr: 'Gateway Hotel, Bangalore', rating: 4.6, safety: 'high', dist: 3.0, desc: 'Award-winning coastal cuisine restaurant with Chettinad and Mangalorean specialties.', budget: 1200 },
        { name: 'Truffles', city: 'Bangalore', category: 'restaurants', addr: 'Koramangala, Bangalore', rating: 4.4, safety: 'high', dist: 6.8, desc: 'Hugely popular American-style diner chain known for giant burgers and loaded fries.', budget: 350 },
        { name: 'Social Whitefield', city: 'Bangalore', category: 'restaurants', addr: 'Whitefield, Bangalore', rating: 4.2, safety: 'high', dist: 20.0, desc: 'Alt-culture bar and restaurant with craft cocktails, mezze and work-from café vibes.', budget: 600 },
        { name: 'Shri Sagar (CTR)', city: 'Bangalore', category: 'restaurants', addr: 'Malleshwaram, Bangalore', rating: 4.5, safety: 'high', dist: 5.5, desc: 'Old Bangalore classic famous for podi dosa and ghee-drizzled filter coffee.', budget: 80 },
        { name: 'Empire Restaurant', city: 'Bangalore', category: 'restaurants', addr: 'Church Street, Bangalore', rating: 4.3, safety: 'high', dist: 2.2, desc: 'Late-night eatery famous for shawarma, chicken tikka and Mughlai dishes.', budget: 300 },
        { name: 'Dhaba Estd 1986', city: 'Bangalore', category: 'restaurants', addr: 'Koramangala, Bangalore', rating: 4.2, safety: 'high', dist: 7.0, desc: 'Rustic Punjabi dhaba vibe with buttery dal makhani and tandoori rotis.', budget: 450 },
        { name: 'Hole in the Wall Café', city: 'Bangalore', category: 'restaurants', addr: 'Indiranagar, Bangalore', rating: 4.1, safety: 'high', dist: 8.5, desc: 'Cosy neighbourhood café ideal for brunch, waffles and cold brews.', budget: 350 },
      ],
      tourist: [
        { name: 'Lalbagh Botanical Garden', city: 'Bangalore', category: 'tourist', addr: 'Lalbagh, Bangalore', rating: 4.7, safety: 'high', dist: 3.0, desc: '200-acre botanical garden with a 200-year-old glass house and rare plant species.', budget: 20 },
        { name: 'Bangalore Palace', city: 'Bangalore', category: 'tourist', addr: 'Palace Road, Bangalore', rating: 4.4, safety: 'high', dist: 4.5, desc: 'Tudor-style royal palace built in 1887 with magnificent interiors and grounds.', budget: 230 },
        { name: 'Cubbon Park', city: 'Bangalore', category: 'tourist', addr: 'Kasturba Road, Bangalore', rating: 4.5, safety: 'high', dist: 2.0, desc: 'Urban lung of Bangalore — a sprawling park perfect for morning jogs and picnics.', budget: 0 },
        { name: 'ISKCON Temple Bangalore', city: 'Bangalore', category: 'tourist', addr: 'Rajajinagar, Bangalore', rating: 4.6, safety: 'high', dist: 6.0, desc: 'One of the largest ISKCON temples in the world with impressive white marble architecture.', budget: 0 },
        { name: 'Tipu Sultan\'s Summer Palace', city: 'Bangalore', category: 'tourist', addr: 'K R Market, Bangalore', rating: 4.3, safety: 'high', dist: 4.0, desc: 'Elegant double-storeyed wooden palace of Tipu Sultan with intricate art.', budget: 15 },
        { name: 'Bannerghatta Biological Park', city: 'Bangalore', category: 'tourist', addr: 'Bannerghatta, Bangalore', rating: 4.4, safety: 'high', dist: 22.0, desc: 'Zoo, safari and butterfly park with lions, tigers and bears in natural habitat.', budget: 200 },
        { name: 'Vidhana Soudha', city: 'Bangalore', category: 'tourist', addr: 'Dr. Ambedkar Veedhi, Bangalore', rating: 4.4, safety: 'high', dist: 2.5, desc: 'Iconic state legislature building — a neo-Dravidian architectural marvel lit spectacularly at night.', budget: 0 },
        { name: 'Ulsoor Lake', city: 'Bangalore', category: 'tourist', addr: 'Ulsoor, Bangalore', rating: 4.2, safety: 'high', dist: 3.5, desc: 'Serene urban lake with boating, morning walks and a naval sailing club.', budget: 30 },
        { name: 'HAL Museum', city: 'Bangalore', category: 'tourist', addr: 'Old Airport Road, Bangalore', rating: 4.3, safety: 'high', dist: 9.0, desc: 'Aerospace museum showcasing India\'s aviation history with fighter jets and simulators.', budget: 50 },
        { name: 'Nandi Hills', city: 'Bangalore', category: 'tourist', addr: 'Nandi Hills, near Bangalore', rating: 4.6, safety: 'high', dist: 60.0, desc: 'Misty ancient hilltop fort perfect for sunrise trips, cycling and paragliding.', budget: 50 },
        { name: 'Jawaharlal Nehru Planetarium', city: 'Bangalore', category: 'tourist', addr: 'Race Course Road, Bangalore', rating: 4.2, safety: 'high', dist: 3.2, desc: 'City planetarium with sky shows and astronomy exhibits for all ages.', budget: 60 },
        { name: 'Attara Kacheri', city: 'Bangalore', category: 'tourist', addr: 'Ambedkar Veedhi, Bangalore', rating: 4.1, safety: 'high', dist: 2.8, desc: 'Neo-classical 18th-century building housing the Kerala and Karnataka High Courts.', budget: 0 },
        { name: 'Wonder La Amusement Park', city: 'Bangalore', category: 'tourist', addr: 'Mysore Road, Bangalore', rating: 4.5, safety: 'high', dist: 28.0, desc: 'South India\'s top amusement park with thrilling roller coasters and wave pools.', budget: 900 },
        { name: 'Freedom Park', city: 'Bangalore', category: 'tourist', addr: 'Sheshadri Road, Bangalore', rating: 4.0, safety: 'high', dist: 2.8, desc: 'Heritage park built on the old central jail site with walking trails and museums.', budget: 0 },
        { name: 'Mount Carmel Church', city: 'Bangalore', category: 'tourist', addr: 'Palace Road, Bangalore', rating: 4.3, safety: 'high', dist: 4.2, desc: 'Beautiful Catholic basilica built in memory of Our Lady of Mt. Carmel.', budget: 0 },
      ],
      banks: [
        { name: 'HDFC Bank Bangalore HQ', city: 'Bangalore', category: 'banks', addr: 'Cubbon Road, Bangalore', rating: 4.1, safety: 'high', dist: 2.0, desc: 'Full-service flagship branch with priority banking and forex services.', budget: 0 },
        { name: 'Axis Bank MG Road', city: 'Bangalore', category: 'banks', addr: 'MG Road, Bangalore', rating: 4.0, safety: 'high', dist: 1.5, desc: 'Modern branch offering digital banking, loans, and international transfers.', budget: 0 },
        { name: 'SBI Bangalore Main', city: 'Bangalore', category: 'banks', addr: 'St. Marks Road, Bangalore', rating: 4.0, safety: 'high', dist: 2.2, desc: 'SBI flagship branch with all corporate and retail banking services.', budget: 0 },
        { name: 'ICICI Bank Koramangala', city: 'Bangalore', category: 'banks', addr: 'Koramangala, Bangalore', rating: 4.2, safety: 'high', dist: 7.0, desc: 'ICICI branch with demat, credit cards, home loans and mobile banking.', budget: 0 },
        { name: 'Kotak Mahindra Bank Indiranagar', city: 'Bangalore', category: 'banks', addr: 'Indiranagar, Bangalore', rating: 4.1, safety: 'high', dist: 8.5, desc: 'Private bank with high-yield savings and zero-fee digital services.', budget: 0 },
        { name: 'Canara Bank Bangalore', city: 'Bangalore', category: 'banks', addr: 'MG Road, Bangalore', rating: 3.9, safety: 'high', dist: 1.8, desc: 'Government bank with full retail and corporate banking products.', budget: 0 },
        { name: 'Yes Bank Brigade Road', city: 'Bangalore', category: 'banks', addr: 'Brigade Road, Bangalore', rating: 3.9, safety: 'high', dist: 2.0, desc: 'Modern private bank with MSME and consumer finance solutions.', budget: 0 },
        { name: 'Punjab National Bank Bangalore', city: 'Bangalore', category: 'banks', addr: 'Shivajinagar, Bangalore', rating: 3.7, safety: 'high', dist: 3.0, desc: 'PNB branch with affordable home loan and government salary accounts.', budget: 0 },
        { name: 'Indian Bank Bangalore', city: 'Bangalore', category: 'banks', addr: 'Rajajinagar, Bangalore', rating: 3.8, safety: 'high', dist: 6.0, desc: 'Nationalised bank with savings, RD, education and agriculture loans.', budget: 0 },
        { name: 'Bank of Baroda Bangalore', city: 'Bangalore', category: 'banks', addr: 'Malleshwaram, Bangalore', rating: 3.8, safety: 'high', dist: 5.5, desc: 'National bank with strong MSME and home loan products.', budget: 0 },
        { name: 'Federal Bank Bangalore', city: 'Bangalore', category: 'banks', addr: 'JP Nagar, Bangalore', rating: 4.0, safety: 'high', dist: 12.0, desc: 'Private bank with best-in-class NRI remittance and FD rates.', budget: 0 },
        { name: 'Union Bank of India Bangalore', city: 'Bangalore', category: 'banks', addr: 'Ulsoor, Bangalore', rating: 3.7, safety: 'high', dist: 3.5, desc: 'Public bank offering digital banking, Kisan card and corporate finance.', budget: 0 },
        { name: 'South Indian Bank Bangalore', city: 'Bangalore', category: 'banks', addr: 'Shivajinagar, Bangalore', rating: 3.9, safety: 'high', dist: 3.2, desc: 'Kerala-based private bank with competitive FD rates and home loans.', budget: 0 },
        { name: 'Karnataka Bank MG Road', city: 'Bangalore', category: 'banks', addr: 'MG Road, Bangalore', rating: 4.0, safety: 'high', dist: 1.5, desc: 'Local Karnataka-based bank with strong savings and merchant services.', budget: 0 },
        { name: 'Central Bank of India Bangalore', city: 'Bangalore', category: 'banks', addr: 'Shivajinagar, Bangalore', rating: 3.6, safety: 'high', dist: 3.0, desc: 'Government bank with farmer credit and rural savings products.', budget: 0 },
      ],
      police: [
        { name: 'Bangalore City Police HQ', city: 'Bangalore', category: 'police', addr: 'Infantry Road, Bangalore', rating: 3.9, safety: 'high', dist: 2.5, desc: 'City police headquarters with community policing and cybercrime units.', budget: 0 },
        { name: 'Cubbon Park Police Station', city: 'Bangalore', category: 'police', addr: 'Ambedkar Veedhi, Bangalore', rating: 4.0, safety: 'high', dist: 2.2, desc: 'Well-staffed police station covering the central business district.', budget: 0 },
        { name: 'Indiranagar Police Station', city: 'Bangalore', category: 'police', addr: 'Indiranagar, Bangalore', rating: 3.9, safety: 'high', dist: 8.5, desc: 'Police station covering Indiranagar and HAL Second Stage areas.', budget: 0 },
        { name: 'Koramangala Police Station', city: 'Bangalore', category: 'police', addr: 'Koramangala, Bangalore', rating: 3.9, safety: 'high', dist: 7.0, desc: 'Busy station covering the Koramangala startup and residential hub.', budget: 0 },
        { name: 'Whitefield Police Station', city: 'Bangalore', category: 'police', addr: 'Whitefield, Bangalore', rating: 3.8, safety: 'high', dist: 20.0, desc: 'Station covering Whitefield IT park and surrounding localities.', budget: 0 },
        { name: 'Bangalore Women\'s Police Station', city: 'Bangalore', category: 'police', addr: 'Shivajinagar, Bangalore', rating: 4.1, safety: 'high', dist: 3.0, desc: 'All-women staffed station for domestic violence and harassment complaints.', budget: 0 },
        { name: 'Cyber Crime Police Bangalore', city: 'Bangalore', category: 'police', addr: 'Carlton House, Bangalore', rating: 4.2, safety: 'high', dist: 2.8, desc: 'Specialised unit for digital fraud, hacking and cybercrime cases.', budget: 0 },
        { name: 'High Grounds Police Station', city: 'Bangalore', category: 'police', addr: 'Race Course Road, Bangalore', rating: 3.8, safety: 'high', dist: 3.5, desc: 'Police station covering the race course, palace and high-security zones.', budget: 0 },
        { name: 'Shivajinagar Police Station', city: 'Bangalore', category: 'police', addr: 'Shivajinagar, Bangalore', rating: 3.8, safety: 'high', dist: 3.0, desc: 'Central station covering Shivajinagar commercial and bus-stand area.', budget: 0 },
        { name: 'Bangalore Traffic Police', city: 'Bangalore', category: 'police', addr: 'Trinity Circle, Bangalore', rating: 4.0, safety: 'high', dist: 2.0, desc: 'Traffic enforcement wing managing smart signals and e-challan system.', budget: 0 },
        { name: 'Electronic City Police Station', city: 'Bangalore', category: 'police', addr: 'Electronic City, Bangalore', rating: 3.8, safety: 'high', dist: 20.0, desc: 'Station covering the Electronic City tech park and peripheral areas.', budget: 0 },
        { name: 'Malleshwaram Police Station', city: 'Bangalore', category: 'police', addr: 'Malleshwaram, Bangalore', rating: 3.8, safety: 'high', dist: 5.5, desc: 'Station serving the heritage Malleshwaram residential neighbourhood.', budget: 0 },
        { name: 'Yeshwanthpur Police Station', city: 'Bangalore', category: 'police', addr: 'Yeshwanthpur, Bangalore', rating: 3.7, safety: 'high', dist: 7.0, desc: 'Station near APMC and Yeshwanthpur industrial and market areas.', budget: 0 },
        { name: 'HAL Police Station', city: 'Bangalore', category: 'police', addr: 'Old Airport Road, Bangalore', rating: 3.9, safety: 'high', dist: 9.5, desc: 'Station near the HAL campus and Murugeshpalya residential zone.', budget: 0 },
        { name: 'Banashankari Police Station', city: 'Bangalore', category: 'police', addr: 'Banashankari, Bangalore', rating: 3.8, safety: 'high', dist: 10.0, desc: 'Station covering south Bangalore\'s Banashankari temple and housing areas.', budget: 0 },
      ],
      transport: [
        { name: 'Kempegowda International Airport', city: 'Bangalore', category: 'transport', addr: 'Devanahalli, Bangalore', rating: 4.5, safety: 'high', dist: 35.0, desc: 'Modern international airport with Metro rail and Vayu Vajra bus connectivity.', budget: 0 },
        { name: 'Majestic Bus Terminal (KSRTC)', city: 'Bangalore', category: 'transport', addr: 'Gubbi Thotadappa Rd, Bangalore', rating: 4.0, safety: 'high', dist: 3.0, desc: 'Largest KSRTC terminal in Karnataka connecting Bangalore to all major cities.', budget: 0 },
        { name: 'KSR Bangalore City Railway Station', city: 'Bangalore', category: 'transport', addr: 'Gubbi Thotadappa Rd, Bangalore', rating: 4.2, safety: 'high', dist: 3.2, desc: 'Main railway station with long-distance and suburban trains, metro connectivity.', budget: 0 },
        { name: 'Yeshwanthpur Railway Station', city: 'Bangalore', category: 'transport', addr: 'Yeshwanthpur, Bangalore', rating: 4.0, safety: 'high', dist: 7.0, desc: 'Secondary junction with express trains toward Mysuru, Hubli and Mumbai.', budget: 0 },
        { name: 'Namma Metro MG Road', city: 'Bangalore', category: 'transport', addr: 'MG Road, Bangalore', rating: 4.4, safety: 'high', dist: 2.0, desc: 'Namma Metro station connecting the city centre to airport and electronics city.', budget: 30 },
        { name: 'Shivajinagar Bus Stand', city: 'Bangalore', category: 'transport', addr: 'Shivajinagar, Bangalore', rating: 3.9, safety: 'high', dist: 3.5, desc: 'BMTC city bus hub for north Bangalore routes and inter-city connectivity.', budget: 0 },
        { name: 'BMTC City Bus Service', city: 'Bangalore', category: 'transport', addr: 'City-wide, Bangalore', rating: 3.8, safety: 'high', dist: 0.5, desc: 'Bangalore\'s extensive city bus network covering all neighbourhoods.', budget: 10 },
        { name: 'Ola/Rapido Pickup Zone MG Road', city: 'Bangalore', category: 'transport', addr: 'MG Road, Bangalore', rating: 4.2, safety: 'high', dist: 2.0, desc: 'High-density cab pickup zone with Ola, Uber, Rapido across MG Road.', budget: 0 },
        { name: 'Silk Board Flyover Bus Stop', city: 'Bangalore', category: 'transport', addr: 'Silk Board, Bangalore', rating: 3.6, safety: 'high', dist: 15.0, desc: 'Busy junction bus stop connecting Electronic City and east Bangalore.', budget: 0 },
        { name: 'Carmelaram Railway Station', city: 'Bangalore', category: 'transport', addr: 'Carmelaram, Bangalore', rating: 3.8, safety: 'high', dist: 22.0, desc: 'Suburban railway halt connecting south-east Bangalore to city centre.', budget: 0 },
        { name: 'Hebbal Bus Terminal', city: 'Bangalore', category: 'transport', addr: 'Hebbal, Bangalore', rating: 3.9, safety: 'high', dist: 9.0, desc: 'Airport Vayu Vajra and inter-city bus origin point near IISC flyover.', budget: 0 },
        { name: 'Kempegowda Bus Station', city: 'Bangalore', category: 'transport', addr: 'City Market, Bangalore', rating: 3.8, safety: 'high', dist: 4.0, desc: 'KSRTC bus terminus close to the central market and Pete area.', budget: 0 },
        { name: 'Auto Stand Indiranagar', city: 'Bangalore', category: 'transport', addr: 'Indiranagar, Bangalore', rating: 3.7, safety: 'high', dist: 8.5, desc: 'Auto-rickshaw stand for last-mile connectivity in east Bangalore.', budget: 0 },
        { name: 'Baiyappanahalli Metro Station', city: 'Bangalore', category: 'transport', addr: 'Baiyappanahalli, Bangalore', rating: 4.1, safety: 'high', dist: 10.0, desc: 'East-end metro terminus on the Purple Line connecting east Bangalore.', budget: 30 },
        { name: 'Bangalore Cantonment Railway Station', city: 'Bangalore', category: 'transport', addr: 'Cantonment, Bangalore', rating: 4.0, safety: 'high', dist: 5.0, desc: 'Small railway station serving Cantonment and Shivajinagar travellers.', budget: 0 },
      ],
    },
    delhi: {
      hospitals: [
        { name: 'AIIMS Delhi', city: 'Delhi', category: 'hospitals', addr: 'Ansari Nagar, Delhi', rating: 4.9, safety: 'high', dist: 5.0, desc: 'India\'s premier medical institution with world-class treatment and research.', budget: 0 },
        { name: 'Safdarjung Hospital', city: 'Delhi', category: 'hospitals', addr: 'Ring Road, Delhi', rating: 4.3, safety: 'high', dist: 6.5, desc: 'Large government hospital with specialist departments and trauma center.', budget: 0 },
        { name: 'Max Super Specialty Hospital Saket', city: 'Delhi', category: 'hospitals', addr: 'Saket, Delhi', rating: 4.6, safety: 'high', dist: 10.0, desc: 'Top-rated hospital offering cancer, cardiac, and bone-marrow transplant services.', budget: 2500 },
        { name: 'Apollo Hospitals Delhi', city: 'Delhi', category: 'hospitals', addr: 'Sarita Vihar, Delhi', rating: 4.6, safety: 'high', dist: 14.0, desc: 'Premier private hospital with 55+ specialties and international services.', budget: 2000 },
        { name: 'Fortis Escorts Heart Institute', city: 'Delhi', category: 'hospitals', addr: 'Okhla, Delhi', rating: 4.7, safety: 'high', dist: 12.0, desc: 'World-renowned cardiac institute with highest-volume heart surgery unit.', budget: 2500 },
        { name: 'Sir Ganga Ram Hospital', city: 'Delhi', category: 'hospitals', addr: 'Rajinder Nagar, Delhi', rating: 4.5, safety: 'high', dist: 7.0, desc: 'Premier multispecialty hospital with 3500 staff and leading transplant unit.', budget: 1800 },
        { name: 'Lok Nayak Hospital', city: 'Delhi', category: 'hospitals', addr: 'Delhi Gate, Delhi', rating: 4.0, safety: 'high', dist: 8.5, desc: 'Large government hospital near Old Delhi with free emergency and OPD.', budget: 0 },
        { name: 'Medanta The Medicity Delhi NCR', city: 'Delhi', category: 'hospitals', addr: 'Sector 38, Gurugram', rating: 4.7, safety: 'high', dist: 30.0, desc: 'JCI-accredited 1600-bed hospital with international standards for all specialties.', budget: 2200 },
        { name: 'RML Hospital', city: 'Delhi', category: 'hospitals', addr: 'Baba Kharak Singh Marg, Delhi', rating: 4.0, safety: 'high', dist: 5.5, desc: 'Government hospital near Connaught Place with emergency and specialist depts.', budget: 0 },
        { name: 'BLK Super Speciality Hospital', city: 'Delhi', category: 'hospitals', addr: 'Pusa Road, Delhi', rating: 4.4, safety: 'high', dist: 6.0, desc: 'Large private hospital known for bone marrow transplant and oncology.', budget: 1500 },
        { name: 'Holy Family Hospital', city: 'Delhi', category: 'hospitals', addr: 'Okhla, Delhi', rating: 4.3, safety: 'high', dist: 13.0, desc: 'Catholic-run multispecialty hospital known for affordability and ethical care.', budget: 700 },
        { name: 'Moolchand Hospital', city: 'Delhi', category: 'hospitals', addr: 'Lajpat Nagar, Delhi', rating: 4.3, safety: 'high', dist: 9.0, desc: 'Private hospital with cancer, gastro and orthopaedic speciality units.', budget: 1200 },
        { name: 'GTB Hospital', city: 'Delhi', category: 'hospitals', addr: 'Dilshad Garden, Delhi', rating: 3.9, safety: 'high', dist: 18.0, desc: 'Government teaching hospital at Delhi University serving east Delhi patients.', budget: 0 },
        { name: 'Indraprastha Apollo Delhi', city: 'Delhi', category: 'hospitals', addr: 'Sarita Vihar, Delhi', rating: 4.6, safety: 'high', dist: 14.5, desc: 'Apollo flagship in Delhi with world-class cardiac, cancer and transplant care.', budget: 2200 },
        { name: 'Mata Chanan Devi Hospital', city: 'Delhi', category: 'hospitals', addr: 'Janakpuri, Delhi', rating: 4.1, safety: 'high', dist: 15.0, desc: 'Multi-specialty private hospital serving west Delhi with good ICU and OPD.', budget: 700 },
      ],
      restaurants: [
        { name: 'Karim\'s Jama Masjid', city: 'Delhi', category: 'restaurants', addr: 'Jama Masjid, Delhi', rating: 4.6, safety: 'medium', dist: 8.0, desc: 'Legendary Mughal cuisine restaurant established in 1913. Famous for mutton korma.', budget: 500 },
        { name: 'Bukhara at ITC Maurya', city: 'Delhi', category: 'restaurants', addr: 'Diplomatic Enclave, Delhi', rating: 4.8, safety: 'high', dist: 7.0, desc: 'World-famous for its dal Bukhara and sikandari raan — a fine dining experience.', budget: 3000 },
        { name: 'Paranthe Wali Gali', city: 'Delhi', category: 'restaurants', addr: 'Chandni Chowk, Delhi', rating: 4.5, safety: 'medium', dist: 9.0, desc: 'Famous Chandni Chowk lane with iconic paranthas — over 100 years of tradition.', budget: 150 },
        { name: 'Indian Accent', city: 'Delhi', category: 'restaurants', addr: 'Friends Colony, Delhi', rating: 4.8, safety: 'high', dist: 12.0, desc: 'Award-winning fine dining with a modern twist on Indian cuisine.', budget: 4000 },
        { name: 'Moti Mahal Delux', city: 'Delhi', category: 'restaurants', addr: 'Daryaganj, Delhi', rating: 4.5, safety: 'high', dist: 8.5, desc: 'Birthplace of butter chicken and dal makhani — a Delhi institution since 1954.', budget: 600 },
        { name: 'Al Jawahar', city: 'Delhi', category: 'restaurants', addr: 'Jama Masjid, Delhi', rating: 4.4, safety: 'medium', dist: 8.2, desc: 'Old Delhi classic for nihari, biryani and seekh kabab near the mosque.', budget: 350 },
        { name: 'Saravana Bhavan', city: 'Delhi', category: 'restaurants', addr: 'Connaught Place, Delhi', rating: 4.3, safety: 'high', dist: 5.0, desc: 'Global South Indian chain famous for masala dosa, idli and filter coffee.', budget: 200 },
        { name: 'Kwality Connaught Place', city: 'Delhi', category: 'restaurants', addr: 'Connaught Place, Delhi', rating: 4.2, safety: 'high', dist: 5.2, desc: 'Old-school Delhi restaurant serving Mughal cuisine in an elegant setting.', budget: 700 },
        { name: 'Gulati Restaurant', city: 'Delhi', category: 'restaurants', addr: 'Pandara Road, Delhi', rating: 4.4, safety: 'high', dist: 7.5, desc: 'Renowned Punjabi restaurant on Pandara Road strip with butter chicken and fish.', budget: 800 },
        { name: 'Nathu\'s Sweets', city: 'Delhi', category: 'restaurants', addr: 'Bengali Market, Delhi', rating: 4.4, safety: 'high', dist: 5.5, desc: 'Famous sweet shop for chole bhature, samosas and Bengali Market delicacies.', budget: 150 },
        { name: 'Dum Pukht ITC Maurya', city: 'Delhi', category: 'restaurants', addr: 'Diplomatic Enclave, Delhi', rating: 4.7, safety: 'high', dist: 7.2, desc: 'Legendary slow-cooked Awadhi cuisine restaurant in a regal setting.', budget: 3500 },
        { name: 'Soda Bottle Opener Wala', city: 'Delhi', category: 'restaurants', addr: 'Khan Market, Delhi', rating: 4.3, safety: 'high', dist: 7.0, desc: 'Parsi café with bun maska, dhansak and soda fountains in a retro setting.', budget: 500 },
        { name: 'Dilli Haat Food Stalls', city: 'Delhi', category: 'restaurants', addr: 'INA, Delhi', rating: 4.2, safety: 'high', dist: 8.0, desc: 'Craft fair with authentic regional food stalls from all Indian states.', budget: 200 },
        { name: 'Chunaoti Café', city: 'Delhi', category: 'restaurants', addr: 'Hauz Khas Village, Delhi', rating: 4.1, safety: 'high', dist: 9.5, desc: 'Bohemian lakeside café in Hauz Khas with sandwiches, shakes and mains.', budget: 400 },
        { name: 'Andhra Bhavan Canteen', city: 'Delhi', category: 'restaurants', addr: 'Ashoka Road, Delhi', rating: 4.5, safety: 'high', dist: 5.8, desc: 'Affordable Andhra canteen known for spicy thali and crispy papads.', budget: 150 },
      ],
      tourist: [
        { name: 'Red Fort', city: 'Delhi', category: 'tourist', addr: 'Chandni Chowk, Delhi', rating: 4.7, safety: 'medium', dist: 10.0, desc: 'Magnificent 17th-century Mughal fort — a UNESCO World Heritage Site.', budget: 35 },
        { name: 'India Gate', city: 'Delhi', category: 'tourist', addr: 'Kartavya Path, Delhi', rating: 4.6, safety: 'high', dist: 6.5, desc: 'War memorial and iconic landmark surrounded by green lawns and fountains.', budget: 0 },
        { name: 'Qutub Minar', city: 'Delhi', category: 'tourist', addr: 'Mehrauli, Delhi', rating: 4.7, safety: 'high', dist: 14.0, desc: 'UNESCO heritage site — tallest brick minaret in the world built in 1193.', budget: 40 },
        { name: 'Humayun\'s Tomb', city: 'Delhi', category: 'tourist', addr: 'Nizamuddin East, Delhi', rating: 4.6, safety: 'high', dist: 9.0, desc: 'UNESCO-listed Mughal garden tomb that inspired the Taj Mahal.', budget: 35 },
        { name: 'Lotus Temple', city: 'Delhi', category: 'tourist', addr: 'Bahapur, Delhi', rating: 4.7, safety: 'high', dist: 12.0, desc: 'Flower-shaped Bahá\'í House of Worship open to all faiths — architectural marvel.', budget: 0 },
        { name: 'Akshardham Temple', city: 'Delhi', category: 'tourist', addr: 'Noida Link Road, Delhi', rating: 4.8, safety: 'high', dist: 15.0, desc: 'Massive BAPS temple complex with intricate stone carvings and musical fountain.', budget: 0 },
        { name: 'Chandni Chowk Market', city: 'Delhi', category: 'tourist', addr: 'Old Delhi', rating: 4.3, safety: 'medium', dist: 9.5, desc: 'Asia\'s oldest and largest wholesale market — a sensory bazaar experience.', budget: 0 },
        { name: 'Rashtrapati Bhavan Museum', city: 'Delhi', category: 'tourist', addr: 'South Block, Delhi', rating: 4.5, safety: 'high', dist: 6.0, desc: 'Presidential palace with Mughal gardens open to public during select seasons.', budget: 50 },
        { name: 'National Museum Delhi', city: 'Delhi', category: 'tourist', addr: 'Janpath, Delhi', rating: 4.4, safety: 'high', dist: 6.5, desc: 'India\'s largest museum with 200,000-year-old artefacts across 30 galleries.', budget: 20 },
        { name: 'Hauz Khas Village', city: 'Delhi', category: 'tourist', addr: 'Hauz Khas, Delhi', rating: 4.3, safety: 'high', dist: 9.5, desc: 'Medieval reservoir ruins turned into a bohemian art and café district.', budget: 0 },
        { name: 'Jantar Mantar Delhi', city: 'Delhi', category: 'tourist', addr: 'Parliament Street, Delhi', rating: 4.2, safety: 'high', dist: 5.5, desc: '18th-century astronomical observatory with giant stone instruments.', budget: 25 },
        { name: 'Purana Qila', city: 'Delhi', category: 'tourist', addr: 'Mathura Road, Delhi', rating: 4.4, safety: 'high', dist: 8.0, desc: 'Old Fort with a museum, boating lake and Son et Lumière show at night.', budget: 25 },
        { name: 'Dilli Haat INA', city: 'Delhi', category: 'tourist', addr: 'INA Colony, Delhi', rating: 4.3, safety: 'high', dist: 8.0, desc: 'Open-air craft bazaar with handloom, food and cultural stalls from all states.', budget: 30 },
        { name: 'Raj Ghat', city: 'Delhi', category: 'tourist', addr: 'Mahatma Gandhi Road, Delhi', rating: 4.4, safety: 'high', dist: 9.5, desc: 'Mahatma Gandhi\'s memorial on the banks of the Yamuna — a solemn national site.', budget: 0 },
        { name: 'Gurudwara Bangla Sahib', city: 'Delhi', category: 'tourist', addr: 'Connaught Place, Delhi', rating: 4.7, safety: 'high', dist: 5.0, desc: 'Beautiful Sikh gurudwara famous for its sarovar and free langar for all.', budget: 0 },
      ],
      banks: [
        { name: 'SBI Parliament Street', city: 'Delhi', category: 'banks', addr: 'Parliament Street, Delhi', rating: 4.0, safety: 'high', dist: 5.5, desc: 'Main SBI branch near Parliament with all banking services.', budget: 0 },
        { name: 'Punjab National Bank HQ', city: 'Delhi', category: 'banks', addr: 'Bhikaji Cama Place, Delhi', rating: 3.9, safety: 'high', dist: 8.0, desc: 'PNB headquarters with full government and retail banking services.', budget: 0 },
        { name: 'HDFC Bank Connaught Place', city: 'Delhi', category: 'banks', addr: 'Connaught Place, Delhi', rating: 4.2, safety: 'high', dist: 5.0, desc: 'Premium HDFC branch with priority banking and forex services.', budget: 0 },
        { name: 'ICICI Bank Khan Market', city: 'Delhi', category: 'banks', addr: 'Khan Market, Delhi', rating: 4.1, safety: 'high', dist: 7.0, desc: 'ICICI branch with demat, credit card and premium credit solutions.', budget: 0 },
        { name: 'Axis Bank Nehru Place', city: 'Delhi', category: 'banks', addr: 'Nehru Place, Delhi', rating: 4.0, safety: 'high', dist: 11.0, desc: 'Modern branch serving the IT hub of south Delhi with full services.', budget: 0 },
        { name: 'Canara Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Karol Bagh, Delhi', rating: 3.8, safety: 'high', dist: 7.0, desc: 'Government bank with retail, agriculture and home loan products.', budget: 0 },
        { name: 'Kotak Mahindra Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Connaught Place, Delhi', rating: 4.1, safety: 'high', dist: 5.2, desc: 'Private bank with competitive rates, digital services and zero-fee accounts.', budget: 0 },
        { name: 'Bank of Baroda Delhi', city: 'Delhi', category: 'banks', addr: 'Chandni Chowk, Delhi', rating: 3.8, safety: 'medium', dist: 9.0, desc: 'National bank branch with MSME and trade finance for Old Delhi traders.', budget: 0 },
        { name: 'Indian Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Lajpat Nagar, Delhi', rating: 3.8, safety: 'high', dist: 9.5, desc: 'Nationalised bank with savings, FD, education and housing loan products.', budget: 0 },
        { name: 'Yes Bank Cyber City', city: 'Delhi', category: 'banks', addr: 'Gurugram, NCR', rating: 3.9, safety: 'high', dist: 28.0, desc: 'Private bank catering to corporate clients in the Gurugram financial hub.', budget: 0 },
        { name: 'UCO Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Karol Bagh, Delhi', rating: 3.7, safety: 'high', dist: 7.2, desc: 'Government bank with pension, savings and Kisan credit card services.', budget: 0 },
        { name: 'Union Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Paharganj, Delhi', rating: 3.7, safety: 'high', dist: 5.8, desc: 'Public bank with NRI, home loan and small business banking products.', budget: 0 },
        { name: 'Federal Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Nehru Place, Delhi', rating: 4.0, safety: 'high', dist: 11.5, desc: 'Private bank with excellent NRI remittance and international services.', budget: 0 },
        { name: 'South Indian Bank Delhi', city: 'Delhi', category: 'banks', addr: 'Connaught Place, Delhi', rating: 3.9, safety: 'high', dist: 5.0, desc: 'Kerala-based private bank with competitive FD and home loan rates.', budget: 0 },
        { name: 'RBI Delhi Regional Office', city: 'Delhi', category: 'banks', addr: 'Sansad Marg, Delhi', rating: 4.2, safety: 'high', dist: 5.5, desc: 'RBI regional office with currency exchange and banking grievance cell.', budget: 0 },
      ],
      police: [
        { name: 'Delhi Police Headquarters', city: 'Delhi', category: 'police', addr: 'ITO, Delhi', rating: 3.8, safety: 'high', dist: 7.0, desc: 'Main Delhi Police HQ with public grievance and lost-found cell.', budget: 0 },
        { name: 'Connaught Place Police Station', city: 'Delhi', category: 'police', addr: 'Connaught Place, Delhi', rating: 3.9, safety: 'high', dist: 5.0, desc: 'Central station covering the busy CP commercial and tourist area.', budget: 0 },
        { name: 'Chandni Chowk Police Station', city: 'Delhi', category: 'police', addr: 'Chandni Chowk, Delhi', rating: 3.7, safety: 'medium', dist: 9.0, desc: 'Busy Old Delhi station covering the historic market and mosque area.', budget: 0 },
        { name: 'Lajpat Nagar Police Station', city: 'Delhi', category: 'police', addr: 'Lajpat Nagar, Delhi', rating: 3.8, safety: 'high', dist: 9.5, desc: 'Station covering the south Delhi Lajpat Nagar market and residential zone.', budget: 0 },
        { name: 'Hauz Khas Police Station', city: 'Delhi', category: 'police', addr: 'Hauz Khas, Delhi', rating: 3.9, safety: 'high', dist: 9.5, desc: 'Station covering the upscale Hauz Khas Village and SDA area.', budget: 0 },
        { name: 'Delhi Cyber Crime Unit', city: 'Delhi', category: 'police', addr: 'Dwarka, Delhi', rating: 4.2, safety: 'high', dist: 20.0, desc: 'Special unit tackling financial fraud, hacking and social media crimes.', budget: 0 },
        { name: 'Delhi Women Helpline (181)', city: 'Delhi', category: 'police', addr: 'Delhi-wide', rating: 4.3, safety: 'high', dist: 0.5, desc: 'Delhi government 24/7 women helpline with pickup, shelter and counselling.', budget: 0 },
        { name: 'Paharganj Police Station', city: 'Delhi', category: 'police', addr: 'Paharganj, Delhi', rating: 3.7, safety: 'medium', dist: 5.5, desc: 'Station covering the busy backpacker and transit district near New Delhi station.', budget: 0 },
        { name: 'Karol Bagh Police Station', city: 'Delhi', category: 'police', addr: 'Karol Bagh, Delhi', rating: 3.8, safety: 'high', dist: 7.0, desc: 'Station serving the busy Karol Bagh commercial and residential area.', budget: 0 },
        { name: 'Saket Police Station', city: 'Delhi', category: 'police', addr: 'Saket, Delhi', rating: 4.0, safety: 'high', dist: 10.5, desc: 'South Delhi station near courts, malls and residential colonies.', budget: 0 },
        { name: 'Dwarka Police Station', city: 'Delhi', category: 'police', addr: 'Dwarka, Delhi', rating: 3.9, safety: 'high', dist: 18.0, desc: 'Station serving west Delhi\'s Dwarka planned township area.', budget: 0 },
        { name: 'Rohini Police Station', city: 'Delhi', category: 'police', addr: 'Rohini, Delhi', rating: 3.8, safety: 'high', dist: 20.0, desc: 'Station for north-west Delhi\'s large Rohini residential area.', budget: 0 },
        { name: 'Delhi Traffic Police', city: 'Delhi', category: 'police', addr: 'Delhi-wide', rating: 3.9, safety: 'high', dist: 1.0, desc: 'City traffic control with e-challan, CCTV monitoring and accident response.', budget: 0 },
        { name: 'Noida Police Station', city: 'Delhi', category: 'police', addr: 'Sector 20, Noida NCR', rating: 3.8, safety: 'high', dist: 22.0, desc: 'Noida NCR station serving the IT and industrial sector of Greater Noida.', budget: 0 },
        { name: 'South Delhi PCR Van Helpdesk', city: 'Delhi', category: 'police', addr: 'South Delhi', rating: 4.0, safety: 'high', dist: 8.0, desc: 'Police control room van dispatch desk for rapid emergency response.', budget: 0 },
      ],
      transport: [
        { name: 'Indira Gandhi International Airport', city: 'Delhi', category: 'transport', addr: 'Palam, Delhi', rating: 4.4, safety: 'high', dist: 20.0, desc: 'India\'s busiest airport with three terminals and metro connectivity.', budget: 0 },
        { name: 'New Delhi Railway Station', city: 'Delhi', category: 'transport', addr: 'Paharganj, Delhi', rating: 4.2, safety: 'high', dist: 5.5, desc: 'Main railway hub with 16 platforms, metro access and 24-hour facilities.', budget: 0 },
        { name: 'Delhi Metro Blue Line', city: 'Delhi', category: 'transport', addr: 'Rajiv Chowk, Delhi', rating: 4.5, safety: 'high', dist: 5.0, desc: 'Rajiv Chowk is Delhi Metro\'s busiest interchange hub connecting all lines.', budget: 30 },
        { name: 'Hazrat Nizamuddin Railway Station', city: 'Delhi', category: 'transport', addr: 'Nizamuddin, Delhi', rating: 4.1, safety: 'high', dist: 9.0, desc: 'Major railway station with trains to Agra, Mumbai, Chennai and Calcutta.', budget: 0 },
        { name: 'Old Delhi Railway Station', city: 'Delhi', category: 'transport', addr: 'Chandni Chowk, Delhi', rating: 4.0, safety: 'medium', dist: 9.5, desc: 'Historic Mughal-era station connecting north and west India routes.', budget: 0 },
        { name: 'ISBT Kashmere Gate', city: 'Delhi', category: 'transport', addr: 'Kashmere Gate, Delhi', rating: 3.9, safety: 'high', dist: 9.5, desc: 'Delhi\'s largest inter-state bus terminal for north India routes.', budget: 0 },
        { name: 'ISBT Anand Vihar', city: 'Delhi', category: 'transport', addr: 'Anand Vihar, Delhi', rating: 3.8, safety: 'high', dist: 15.0, desc: 'ISBT for east India routes with Volvo, UPSRTC and HRTC bus services.', budget: 0 },
        { name: 'DTC Bus Service', city: 'Delhi', category: 'transport', addr: 'City-wide, Delhi', rating: 3.7, safety: 'high', dist: 0.5, desc: 'Delhi Transport Corporation AC and non-AC city buses covering all areas.', budget: 10 },
        { name: 'Ola/Uber Zone Connaught Place', city: 'Delhi', category: 'transport', addr: 'Connaught Place, Delhi', rating: 4.1, safety: 'high', dist: 5.0, desc: 'High-demand cab aggregator zone for quick city and airport travel.', budget: 0 },
        { name: 'Sarai Kale Khan Bus Terminal', city: 'Delhi', category: 'transport', addr: 'Ring Road, Delhi', rating: 3.9, safety: 'high', dist: 10.0, desc: 'ISBT for south and west India Rajasthan, MP and Maharashtra buses.', budget: 0 },
        { name: 'Gurugram Rapid Metro', city: 'Delhi', category: 'transport', addr: 'DLF Phase 2, Gurugram', rating: 4.2, safety: 'high', dist: 28.0, desc: 'Rapid Metro network connecting HUDA to Delhi Metro Cyber City station.', budget: 20 },
        { name: 'Auto Rickshaw Stand CP', city: 'Delhi', category: 'transport', addr: 'Connaught Place, Delhi', rating: 3.6, safety: 'high', dist: 5.0, desc: 'Pre-paid and metered auto stand for last-mile travel across Delhi.', budget: 0 },
        { name: 'Anand Vihar Metro Station', city: 'Delhi', category: 'transport', addr: 'Anand Vihar, Delhi', rating: 4.1, safety: 'high', dist: 15.0, desc: 'East Delhi metro station with Metro-Rail and Bus interchange facility.', budget: 30 },
        { name: 'Palika Bazaar Underground Car Park', city: 'Delhi', category: 'transport', addr: 'Connaught Place, Delhi', rating: 3.7, safety: 'high', dist: 5.2, desc: 'Underground parking near CP for private vehicle users in central Delhi.', budget: 50 },
        { name: 'Rapido Bike Taxi Delhi', city: 'Delhi', category: 'transport', addr: 'City-wide, Delhi', rating: 4.0, safety: 'high', dist: 1.0, desc: 'Rapido bike taxi service for quick affordable travel across Delhi NCR.', budget: 0 },
      ],
    },
    mumbai: {
      hospitals: [
        { name: 'Tata Memorial Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Parel, Mumbai', rating: 4.8, safety: 'high', dist: 5.0, desc: 'India\'s premier cancer care and research centre with subsidized treatment.', budget: 500 },
        { name: 'KEM Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Parel, Mumbai', rating: 4.3, safety: 'high', dist: 5.2, desc: 'One of Asia\'s largest public hospitals with highly specialised departments.', budget: 0 },
        { name: 'Lilavati Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Bandra West, Mumbai', rating: 4.6, safety: 'high', dist: 8.0, desc: 'Premier private hospital known for cardiac, renal, and cosmetic surgery.', budget: 2000 },
        { name: 'Bombay Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Marine Lines, Mumbai', rating: 4.4, safety: 'high', dist: 6.5, desc: 'Historic private hospital near Marine Lines with multi-specialty care.', budget: 1500 },
        { name: 'Hinduja Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Mahim, Mumbai', rating: 4.5, safety: 'high', dist: 7.0, desc: 'PD Hinduja National Hospital with advanced cardiac and neurology units.', budget: 2000 },
        { name: 'Kokilaben Dhirubhai Ambani Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Andheri West, Mumbai', rating: 4.7, safety: 'high', dist: 12.0, desc: 'JCI-accredited hospital with India\'s first Da Vinci robotic surgery unit.', budget: 3000 },
        { name: 'Wockhardt Hospital Mumbai', city: 'Mumbai', category: 'hospitals', addr: 'Mira Road, Mumbai', rating: 4.3, safety: 'high', dist: 25.0, desc: 'Private hospital known for cardiac surgery and advanced critical care.', budget: 1500 },
        { name: 'Jaslok Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Pedder Road, Mumbai', rating: 4.5, safety: 'high', dist: 6.8, desc: 'Elite private hospital known for transplants, oncology and neuro surgery.', budget: 2500 },
        { name: 'Breach Candy Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Breach Candy, Mumbai', rating: 4.4, safety: 'high', dist: 7.2, desc: 'Prestigious south Mumbai hospital with sea-facing rooms and top specialists.', budget: 3000 },
        { name: 'Nair Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Mumbai Central, Mumbai', rating: 4.0, safety: 'high', dist: 6.0, desc: 'Government teaching hospital with free emergency and full OPD departments.', budget: 0 },
        { name: 'Nanavati Super Specialty Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Vile Parle, Mumbai', rating: 4.4, safety: 'high', dist: 14.0, desc: 'Multi-specialty hospital with strong cancer, cardiac and neuro centres.', budget: 1800 },
        { name: 'Fortis Hospital Mulund', city: 'Mumbai', category: 'hospitals', addr: 'Mulund, Mumbai', rating: 4.3, safety: 'high', dist: 22.0, desc: 'Fortis chain hospital with advanced diagnostics and surgical facilities.', budget: 1500 },
        { name: 'Global Hospital Mumbai', city: 'Mumbai', category: 'hospitals', addr: 'Parel, Mumbai', rating: 4.5, safety: 'high', dist: 5.5, desc: 'Multi-organ transplant centre known for liver and kidney transplants.', budget: 2500 },
        { name: 'Holy Spirit Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Andheri East, Mumbai', rating: 4.2, safety: 'high', dist: 12.5, desc: 'Catholic-run hospital known for affordable quality care and nursing.', budget: 800 },
        { name: 'Saifee Hospital', city: 'Mumbai', category: 'hospitals', addr: 'Charni Road, Mumbai', rating: 4.3, safety: 'high', dist: 6.5, desc: 'Charni Road private hospital with cardiac, orthopaedic and cancer care.', budget: 1200 },
      ],
      restaurants: [
        { name: 'Leopold Cafe', city: 'Mumbai', category: 'restaurants', addr: 'Colaba, Mumbai', rating: 4.3, safety: 'high', dist: 8.0, desc: 'Iconic Colaba restaurant with a rich history and cosmopolitan clientele.', budget: 700 },
        { name: 'Trishna', city: 'Mumbai', category: 'restaurants', addr: 'Fort, Mumbai', rating: 4.6, safety: 'high', dist: 7.5, desc: 'Celebrated seafood restaurant famous for butter-garlic crab and coastal delicacies.', budget: 1500 },
        { name: 'Cafe Mondegar', city: 'Mumbai', category: 'restaurants', addr: 'Colaba Causeway, Mumbai', rating: 4.4, safety: 'high', dist: 8.2, desc: 'Charming retro cafe with vibrant murals, cold beer, and continental bites.', budget: 500 },
        { name: 'Britannia & Co', city: 'Mumbai', category: 'restaurants', addr: 'Ballard Estate, Mumbai', rating: 4.6, safety: 'high', dist: 7.8, desc: 'Legendary Parsi restaurant. Famous for berry pulao and caramel custard since 1923.', budget: 600 },
        { name: 'Mahesh Lunch Home', city: 'Mumbai', category: 'restaurants', addr: 'Fort, Mumbai', rating: 4.5, safety: 'high', dist: 7.5, desc: 'Coastal seafood institution popular for pomfret, Konkani curries and solkadhi.', budget: 900 },
        { name: 'Bade Miya', city: 'Mumbai', category: 'restaurants', addr: 'Colaba, Mumbai', rating: 4.4, safety: 'high', dist: 8.1, desc: 'Iconic late-night street stall near Colaba for seekh kabab and roomali roti.', budget: 250 },
        { name: 'Delhi Darbar', city: 'Mumbai', category: 'restaurants', addr: 'Colaba, Mumbai', rating: 4.3, safety: 'high', dist: 8.3, desc: 'Old-school Mughlai restaurant famous for mutton biryani and kebabs.', budget: 500 },
        { name: 'Bastian', city: 'Mumbai', category: 'restaurants', addr: 'Bandra West, Mumbai', rating: 4.5, safety: 'high', dist: 10.0, desc: 'Buzzing seafood restaurant with inventive sushi and modern cocktails.', budget: 2000 },
        { name: 'The Bombay Canteen', city: 'Mumbai', category: 'restaurants', addr: 'Lower Parel, Mumbai', rating: 4.5, safety: 'high', dist: 8.5, desc: 'Modern Indian restaurant celebrating regional recipes with creative twists.', budget: 1200 },
        { name: 'Khyber Restaurant', city: 'Mumbai', category: 'restaurants', addr: 'Fort, Mumbai', rating: 4.4, safety: 'high', dist: 7.6, desc: 'Classic north Indian restaurant with Mughal décor, great kebabs and biryanis.', budget: 1000 },
        { name: 'Cafe Madras', city: 'Mumbai', category: 'restaurants', addr: 'Matunga, Mumbai', rating: 4.5, safety: 'high', dist: 6.5, desc: 'Traditional Udupi café in Matunga famous for crispy dosas and filter coffee.', budget: 150 },
        { name: 'Revival', city: 'Mumbai', category: 'restaurants', addr: 'Churchgate, Mumbai', rating: 4.2, safety: 'high', dist: 6.8, desc: 'Affordable vegetarian thali restaurant popular with officgoers in south Mumbai.', budget: 200 },
        { name: 'Gajalee', city: 'Mumbai', category: 'restaurants', addr: 'Vile Parle, Mumbai', rating: 4.4, safety: 'high', dist: 14.0, desc: 'Popular Maharashtrian seafood restaurant famous for crab masala and surmai fry.', budget: 800 },
        { name: 'Ankur Restaurant', city: 'Mumbai', category: 'restaurants', addr: 'Dadar, Mumbai', rating: 4.2, safety: 'high', dist: 5.5, desc: 'Simple yet beloved Gujarati thali joint packed at lunch hours.', budget: 200 },
        { name: 'Haji Ali Juice Centre', city: 'Mumbai', category: 'restaurants', addr: 'Haji Ali, Mumbai', rating: 4.5, safety: 'high', dist: 7.5, desc: 'Iconic juice bar at Haji Ali dargah known for mixed fruit juices and malai milk.', budget: 100 },
      ],
      tourist: [
        { name: 'Gateway of India', city: 'Mumbai', category: 'tourist', addr: 'Apollo Bunder, Mumbai', rating: 4.8, safety: 'medium', dist: 9.0, desc: 'Iconic colonial-era arch monument with ferry services to Elephanta Caves.', budget: 0 },
        { name: 'Elephanta Caves', city: 'Mumbai', category: 'tourist', addr: 'Elephanta Island, Mumbai', rating: 4.6, safety: 'high', dist: 15.0, desc: 'UNESCO heritage cave temples with magnificent Shiva sculptures, accessible by ferry.', budget: 40 },
        { name: 'Marine Drive', city: 'Mumbai', category: 'tourist', addr: 'Nariman Point, Mumbai', rating: 4.7, safety: 'high', dist: 7.0, desc: 'The Queen\'s Necklace — a golden promenade with breathtaking sunset views.', budget: 0 },
        { name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', city: 'Mumbai', category: 'tourist', addr: 'Fort, Mumbai', rating: 4.6, safety: 'high', dist: 8.5, desc: 'Grand colonial-era museum with fine art, natural history and ancient artefacts.', budget: 85 },
        { name: 'Juhu Beach', city: 'Mumbai', category: 'tourist', addr: 'Juhu, Mumbai', rating: 4.3, safety: 'medium', dist: 15.0, desc: 'Mumbai\'s most famous beach with street food, sunsets and Bollywood celebrity homes.', budget: 0 },
        { name: 'Haji Ali Dargah', city: 'Mumbai', category: 'tourist', addr: 'Haji Ali, Mumbai', rating: 4.6, safety: 'high', dist: 7.5, desc: 'Iconic 15th-century mosque and tomb on a islet connected by a narrow causeway.', budget: 0 },
        { name: 'Dharavi', city: 'Mumbai', category: 'tourist', addr: 'Dharavi, Mumbai', rating: 4.0, safety: 'medium', dist: 7.0, desc: 'Asia\'s largest informal settlement famed for pottery, leather and recycling industries.', budget: 0 },
        { name: 'Sanjay Gandhi National Park', city: 'Mumbai', category: 'tourist', addr: 'Borivali, Mumbai', rating: 4.5, safety: 'high', dist: 25.0, desc: 'Urban national park with leopard safaris, Kanheri Caves and lush trekking trails.', budget: 100 },
        { name: 'Siddhivinayak Temple', city: 'Mumbai', category: 'tourist', addr: 'Prabhadevi, Mumbai', rating: 4.7, safety: 'high', dist: 7.5, desc: 'One of Mumbai\'s most revered Ganesha temples with massive devotee footfall.', budget: 0 },
        { name: 'Bandstand Promenade', city: 'Mumbai', category: 'tourist', addr: 'Bandra West, Mumbai', rating: 4.4, safety: 'high', dist: 10.5, desc: 'Scenic sea-facing walkway in Bandra with celebrity bungalows and sea views.', budget: 0 },
        { name: 'Bollywood Film City', city: 'Mumbai', category: 'tourist', addr: 'Goregaon, Mumbai', rating: 4.2, safety: 'high', dist: 22.0, desc: 'Film production studios offering guided tours of Bollywood sets and outdoor locales.', budget: 500 },
        { name: 'Global Vipassana Pagoda', city: 'Mumbai', category: 'tourist', addr: 'Gorai, Mumbai', rating: 4.5, safety: 'high', dist: 28.0, desc: 'Largest hollow stone dome in the world — a monument to Vipassana meditation.', budget: 0 },
        { name: 'Kanheri Caves', city: 'Mumbai', category: 'tourist', addr: 'Borivali, Mumbai', rating: 4.4, safety: 'high', dist: 25.5, desc: 'Rock-cut Buddhist cave monasteries dating back to 1st century BCE.', budget: 30 },
        { name: 'Mount Mary Basilica', city: 'Mumbai', category: 'tourist', addr: 'Bandra West, Mumbai', rating: 4.5, safety: 'high', dist: 10.8, desc: 'Historic hilltop Catholic church with spectacular sea views and annual fair.', budget: 0 },
        { name: 'Versova Beach', city: 'Mumbai', category: 'tourist', addr: 'Versova, Mumbai', rating: 4.2, safety: 'high', dist: 18.0, desc: 'Clean fishing village beach popular for morning walks and fresh seafood.', budget: 0 },
      ],
      banks: [
        { name: 'Reserve Bank of India Mumbai', city: 'Mumbai', category: 'banks', addr: 'Fort, Mumbai', rating: 4.3, safety: 'high', dist: 7.5, desc: 'RBI central office and museum in a heritage building in Fort area.', budget: 0 },
        { name: 'HDFC Bank Fort Branch', city: 'Mumbai', category: 'banks', addr: 'Fort Area, Mumbai', rating: 4.2, safety: 'high', dist: 7.3, desc: 'Premium full-service branch with corporate banking and international remittance.', budget: 0 },
        { name: 'SBI Mumbai Main Branch', city: 'Mumbai', category: 'banks', addr: 'Nariman Point, Mumbai', rating: 4.0, safety: 'high', dist: 7.0, desc: 'SBI flagship with corporate finance and all national banking services.', budget: 0 },
        { name: 'ICICI Bank Bandra', city: 'Mumbai', category: 'banks', addr: 'Bandra West, Mumbai', rating: 4.2, safety: 'high', dist: 10.5, desc: 'ICICI branch with demat, home loans and wealth management services.', budget: 0 },
        { name: 'Axis Bank Andheri', city: 'Mumbai', category: 'banks', addr: 'Andheri East, Mumbai', rating: 4.0, safety: 'high', dist: 13.0, desc: 'Modern branch serving the Andheri corporate and residential zones.', budget: 0 },
        { name: 'Kotak Mahindra Bank BKC', city: 'Mumbai', category: 'banks', addr: 'Bandra Kurla Complex, Mumbai', rating: 4.3, safety: 'high', dist: 9.0, desc: 'Kotak flagship at BKC serving major corporates and HNI clients.', budget: 0 },
        { name: 'Canara Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Nariman Point, Mumbai', rating: 3.8, safety: 'high', dist: 7.0, desc: 'Government bank with full retail and corporate banking products.', budget: 0 },
        { name: 'Punjab National Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Dadar, Mumbai', rating: 3.8, safety: 'high', dist: 5.5, desc: 'PNB branch serving Dadar area with MSME and retail banking.', budget: 0 },
        { name: 'Yes Bank Worli', city: 'Mumbai', category: 'banks', addr: 'Worli, Mumbai', rating: 4.0, safety: 'high', dist: 8.0, desc: 'Private bank with MSME, trade finance and retail banking products.', budget: 0 },
        { name: 'Bank of Maharashtra Mumbai', city: 'Mumbai', category: 'banks', addr: 'Fort, Mumbai', rating: 3.8, safety: 'high', dist: 7.8, desc: 'Maharashtra government bank with full spectrum of retail products.', budget: 0 },
        { name: 'Indian Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Matunga, Mumbai', rating: 3.8, safety: 'high', dist: 6.5, desc: 'Nationalised bank with FD, savings and education loan services.', budget: 0 },
        { name: 'Union Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Churchgate, Mumbai', rating: 3.7, safety: 'high', dist: 6.8, desc: 'Public bank with government salary accounts and digital banking.', budget: 0 },
        { name: 'South Indian Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Andheri West, Mumbai', rating: 3.9, safety: 'high', dist: 13.5, desc: 'Kerala-based private bank with NRI remittance and competitive FD rates.', budget: 0 },
        { name: 'Federal Bank Mumbai', city: 'Mumbai', category: 'banks', addr: 'Bandra East, Mumbai', rating: 4.0, safety: 'high', dist: 10.0, desc: 'Private bank with excellent NRI and international banking services.', budget: 0 },
        { name: 'Central Bank of India Mumbai', city: 'Mumbai', category: 'banks', addr: 'Hutatma Chowk, Mumbai', rating: 3.7, safety: 'high', dist: 7.5, desc: 'Heritage government bank at Flora Fountain serving central Mumbai.', budget: 0 },
      ],
      police: [
        { name: 'Mumbai Police Commissionerate', city: 'Mumbai', category: 'police', addr: 'Crawford Market, Mumbai', rating: 3.9, safety: 'high', dist: 8.0, desc: 'City police headquarters with various special units and public services.', budget: 0 },
        { name: 'Colaba Police Station', city: 'Mumbai', category: 'police', addr: 'Colaba, Mumbai', rating: 3.8, safety: 'high', dist: 8.5, desc: 'Station covering the tourist-heavy Colaba area with dedicated helpdesk.', budget: 0 },
        { name: 'Marine Drive Police Station', city: 'Mumbai', category: 'police', addr: 'Marine Lines, Mumbai', rating: 3.9, safety: 'high', dist: 6.5, desc: 'Station covering the Marine Drive promenade and south Mumbai area.', budget: 0 },
        { name: 'Bandra Police Station', city: 'Mumbai', category: 'police', addr: 'Bandra West, Mumbai', rating: 3.8, safety: 'high', dist: 10.5, desc: 'Station serving the Bandra residential and entertainment district.', budget: 0 },
        { name: 'Andheri Police Station', city: 'Mumbai', category: 'police', addr: 'Andheri East, Mumbai', rating: 3.8, safety: 'high', dist: 12.5, desc: 'Major suburban station covering Andheri East and West zones.', budget: 0 },
        { name: 'Mumbai Cyber Crime Cell', city: 'Mumbai', category: 'police', addr: 'BKC, Mumbai', rating: 4.2, safety: 'high', dist: 9.0, desc: 'Specialised unit for digital fraud, ransomware and online crimes.', budget: 0 },
        { name: 'Mumbai Women\'s Help Desk', city: 'Mumbai', category: 'police', addr: 'City-wide, Mumbai', rating: 4.2, safety: 'high', dist: 1.0, desc: 'Dedicated women help desks at every Mumbai police station for safety.', budget: 0 },
        { name: 'Worli Police Station', city: 'Mumbai', category: 'police', addr: 'Worli, Mumbai', rating: 3.9, safety: 'high', dist: 8.0, desc: 'Station covering the Worli sea face, MHADA and BKC surrounding areas.', budget: 0 },
        { name: 'Dadar Police Station', city: 'Mumbai', category: 'police', addr: 'Dadar, Mumbai', rating: 3.8, safety: 'high', dist: 5.5, desc: 'Busy central Mumbai station covering the crowded Dadar market area.', budget: 0 },
        { name: 'Ghatkopar Police Station', city: 'Mumbai', category: 'police', addr: 'Ghatkopar, Mumbai', rating: 3.8, safety: 'high', dist: 18.0, desc: 'East suburban station covering Ghatkopar commercial and housing zones.', budget: 0 },
        { name: 'Borivali Police Station', city: 'Mumbai', category: 'police', addr: 'Borivali, Mumbai', rating: 3.8, safety: 'high', dist: 26.0, desc: 'Station serving north-western suburbs near Sanjay Gandhi National Park.', budget: 0 },
        { name: 'Mumbai Traffic Police', city: 'Mumbai', category: 'police', addr: 'City-wide, Mumbai', rating: 3.9, safety: 'high', dist: 1.0, desc: 'Traffic enforcement wing with smart signals and e-challan systems.', budget: 0 },
        { name: 'Malwani Police Station', city: 'Mumbai', category: 'police', addr: 'Malad West, Mumbai', rating: 3.7, safety: 'high', dist: 22.0, desc: 'Station covering the north-western suburban locality of Malad.', budget: 0 },
        { name: 'Thane Police Station', city: 'Mumbai', category: 'police', addr: 'Thane, Mumbai MMR', rating: 3.8, safety: 'high', dist: 28.0, desc: 'Thane city station serving the extended Mumbai metropolitan region.', budget: 0 },
        { name: 'Dharavi Police Station', city: 'Mumbai', category: 'police', addr: 'Dharavi, Mumbai', rating: 3.7, safety: 'medium', dist: 7.5, desc: 'Station covering the densely populated Dharavi industrial and residential area.', budget: 0 },
      ],
      transport: [
        { name: 'Chhatrapati Shivaji Maharaj Terminus', city: 'Mumbai', category: 'transport', addr: 'Fort, Mumbai', rating: 4.7, safety: 'high', dist: 8.5, desc: 'UNESCO heritage railway station — the busiest in India with Heritage Gallery.', budget: 0 },
        { name: 'Chhatrapati Shivaji International Airport', city: 'Mumbai', category: 'transport', addr: 'Santacruz, Mumbai', rating: 4.5, safety: 'high', dist: 12.0, desc: 'Major international airport with two terminals and efficient metro connectivity.', budget: 0 },
        { name: 'Mumbai Local Train (Western Line)', city: 'Mumbai', category: 'transport', addr: 'Dadar, Mumbai', rating: 4.3, safety: 'high', dist: 5.5, desc: 'Lifeline of Mumbai — Western Railway suburban local trains serving all zones.', budget: 10 },
        { name: 'Mumbai Local Train (Central Line)', city: 'Mumbai', category: 'transport', addr: 'CSMT, Mumbai', rating: 4.2, safety: 'high', dist: 8.5, desc: 'Central Railway suburban local network connecting CSMT to Thane and Kalyan.', budget: 10 },
        { name: 'Mumbai Metro Line 1', city: 'Mumbai', category: 'transport', addr: 'Versova-Andheri, Mumbai', rating: 4.3, safety: 'high', dist: 13.0, desc: 'Mumbai\'s first metro corridor connecting Versova to Ghatkopar via Andheri.', budget: 30 },
        { name: 'BEST Bus Service', city: 'Mumbai', category: 'transport', addr: 'City-wide, Mumbai', rating: 3.9, safety: 'high', dist: 0.5, desc: 'Bombay Electric Supply and Transport city-wide AC and non-AC bus network.', budget: 10 },
        { name: 'Worli-Bandra Sea Link', city: 'Mumbai', category: 'transport', addr: 'Worli, Mumbai', rating: 4.5, safety: 'high', dist: 8.0, desc: '5.6 km cable-stayed sea bridge cutting travel time between Bandra and Worli.', budget: 90 },
        { name: 'Mumbai Harbour Line', city: 'Mumbai', category: 'transport', addr: 'CSMT, Mumbai', rating: 4.1, safety: 'high', dist: 8.5, desc: 'Harbour Line suburban railway connecting CSMT east suburbs to Panvel.', budget: 10 },
        { name: 'Ferry Service Gateway to Elephanta', city: 'Mumbai', category: 'transport', addr: 'Apollo Bunder, Mumbai', rating: 4.4, safety: 'high', dist: 9.0, desc: 'Government and private ferry boats from Gateway to Elephanta Caves.', budget: 200 },
        { name: 'Ola/Uber Zone BKC', city: 'Mumbai', category: 'transport', addr: 'Bandra Kurla Complex, Mumbai', rating: 4.2, safety: 'high', dist: 9.0, desc: 'High-density cab pickup zone at BKC financial district hub.', budget: 0 },
        { name: 'Auto Stand Andheri', city: 'Mumbai', category: 'transport', addr: 'Andheri Station, Mumbai', rating: 3.7, safety: 'high', dist: 13.0, desc: 'Pre-paid auto-rickshaw stand outside Andheri railway station.', budget: 0 },
        { name: 'Navi Mumbai Bus Terminal', city: 'Mumbai', category: 'transport', addr: 'Vashi, Navi Mumbai', rating: 3.8, safety: 'high', dist: 22.0, desc: 'NMMT bus hub connecting Navi Mumbai and MMR suburbs.', budget: 0 },
        { name: 'Kurla Bus Depot', city: 'Mumbai', category: 'transport', addr: 'Kurla, Mumbai', rating: 3.7, safety: 'high', dist: 15.0, desc: 'Major BEST depot with routes connecting east and central Mumbai suburbs.', budget: 0 },
        { name: 'Rapido Bike Taxi Mumbai', city: 'Mumbai', category: 'transport', addr: 'City-wide, Mumbai', rating: 4.0, safety: 'high', dist: 1.0, desc: 'Rapido bike taxi for affordable last-mile connectivity across Mumbai.', budget: 0 },
        { name: 'Lokmanya Tilak Terminus', city: 'Mumbai', category: 'transport', addr: 'Kurla, Mumbai', rating: 4.1, safety: 'high', dist: 15.5, desc: 'Major railway terminus for long-distance trains to south and central India.', budget: 0 },
      ],
    },
  },
  emergencyContacts: [
    { name: 'Police', num: '100', icon: '👮', color: '#4a90d9' },
    { name: 'Ambulance', num: '108', icon: '🚑', color: '#e74c3c' },
    { name: 'Fire Brigade', num: '101', icon: '🚒', color: '#f39c12' },
    { name: 'Women Helpline', num: '1091', icon: '👩', color: '#9b59b6' },
  ],
};

/* ──── STATE ─────────────────────────────────────────── */
const state = { selectedCity: null, selectedCat: null, safetyPref: 'high', ratingPref: 3, budgetPref: 500, currentStep: 1, currentResults: [], sortMode: 'default' };

/* NOTE: Page navigation is in navigation.js */

/* ──── THEME ─────────────────────────────────────────── */
(() => {
  const t = localStorage.getItem('sz_theme');
  if (t) {
    document.documentElement.setAttribute('data-theme', t);
    const ic = t === 'dark' ? 'fa-sun' : 'fa-moon';
    const navIcon = document.getElementById('themeIcon');
    if (navIcon) navIcon.className = 'fas ' + ic;
    const dashIcon = document.getElementById('dashThemeIcon');
    if (dashIcon) dashIcon.className = 'fas ' + ic;
  }
})();

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  const ic = next === 'dark' ? 'fa-sun' : 'fa-moon';
  const navIcon = document.getElementById('themeIcon');
  if (navIcon) navIcon.className = 'fas ' + ic;
  const dashIcon = document.getElementById('dashThemeIcon');
  if (dashIcon) dashIcon.className = 'fas ' + ic;
  localStorage.setItem('sz_theme', next);
  showToast((next === 'dark' ? '🌙 Dark' : '☀️ Light') + ' mode enabled', 'info');
}

/* ──── AUTH ──────────────────────────────────────────── */
function getUsers() { return JSON.parse(localStorage.getItem('sz_users') || '[]'); }
function saveUsers(u) { localStorage.setItem('sz_users', JSON.stringify(u)); }
function getSession() { return JSON.parse(localStorage.getItem('sz_session') || 'null'); }

function handleRegister(e) {
  e.preventDefault();
  let ok = true;
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  const city = document.getElementById('reg-city').value;
  const phone = document.getElementById('reg-phone').value.trim();
  // Clear all errors first
  ['err-name', 'err-email', 'err-phone', 'err-city', 'err-password', 'err-confirm'].forEach(id => {
    document.getElementById(id).classList.remove('show');
  });
  const setErr = (id, cond) => { if (cond) { document.getElementById(id).classList.add('show'); ok = false; } };
  setErr('err-name', !name);
  setErr('err-email', !email || !email.includes('@'));
  setErr('err-phone', !phone || phone.replace(/\D/g, '').length < 7);
  setErr('err-city', !city);
  setErr('err-password', password.length < 6);
  setErr('err-confirm', password !== confirm);
  if (!ok) return;
  const users = getUsers();
  if (users.find(u => u.email === email)) { showToast('Email already registered!', 'error'); return; }
  users.push({ name, email, password, city, phone, joined: new Date().toLocaleDateString() });
  saveUsers(users);
  showToast('Account created! Please sign in.', 'success');
  document.getElementById('registerForm').reset();
  setTimeout(() => showPage('login'), 1200);
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('log-email').value.trim();
  const password = document.getElementById('log-password').value;
  // Clear previous errors
  ['err-log-email', 'err-log-password', 'err-log-general'].forEach(id => {
    document.getElementById(id).classList.remove('show');
  });
  let ok = true;
  if (!email || !email.includes('@')) { document.getElementById('err-log-email').classList.add('show'); ok = false; }
  if (!password) { document.getElementById('err-log-password').classList.add('show'); ok = false; }
  if (!ok) return;
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    document.getElementById('err-log-general').classList.add('show');
    return;
  }
  localStorage.setItem('sz_session', JSON.stringify({ email, token: 'sz_' + Date.now() }));
  showToast('Welcome back, ' + user.name.split(' ')[0] + '!', 'success');
  setTimeout(() => showPage('dashboard'), 800);
}

function handleLogout() {
  localStorage.removeItem('sz_session');
  // Reset locality grids so they re-initialize on next login
  const cg = document.getElementById('cityGrid');
  const catg = document.getElementById('catGrid');
  if (cg) cg.innerHTML = '';
  if (catg) catg.innerHTML = '';
  // Reset step state
  state.selectedCity = null;
  state.selectedCat = null;
  state.currentStep = 1;
  showPage('landing');
  showToast('Logged out successfully.', 'info');
}

function togglePass(id, btn) {
  const inp = document.getElementById(id);
  if (!inp) return;
  const show = inp.type === 'password';   // currently hidden → show it
  inp.type = show ? 'text' : 'password';
  const icon = btn.querySelector('i') || btn.parentElement.querySelector('.pass-toggle i');
  if (icon) icon.className = 'fas ' + (show ? 'fa-eye-slash' : 'fa-eye');
}

/* ──── DASHBOARD ──────────────────────────────────────── */
function initDashboard() {
  const session = getSession();
  if (!session) { showPage('login'); return; }
  const users = getUsers();
  const user = users.find(u => u.email === session.email) || { name: 'User', email: session.email, city: 'Unknown', phone: '—', joined: '—' };
  // User info
  const first = user.name.split(' ')[0];
  document.getElementById('sidebarName').textContent = first;
  document.getElementById('sidebarAvatar').textContent = user.name[0].toUpperCase();
  const hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('dashGreeting').textContent = greet + ', ' + first + ' 👋';
  setTimeout(() => renderTopCards(user), 800);
  renderEmergencyContacts();
  renderAssistant();
  renderActivity();
  renderProfile(user);
  // Only init locality once (avoid duplicate grid items)
  if (!document.getElementById('cityGrid').hasChildNodes()) {
    initLocality();
  }
}

function renderTopCards(user) {
  const tc = document.getElementById('topCards');
  tc.innerHTML = `
    <div class="glass top-card">
      <div class="top-card-icon">📍</div>
      <div class="top-card-label">Current Location</div>
      <div class="top-card-value">${user.city || 'Kakinada'}</div>
      <div class="top-card-sub">GPS active</div>
    </div>
    <div class="glass top-card">
      <div class="top-card-icon">🌤️</div>
      <div class="top-card-label">Weather</div>
      <div class="top-card-value">28°C</div>
      <div class="top-card-sub">Partly cloudy</div>
    </div>
    <div class="glass top-card">
      <div class="top-card-icon">🗺️</div>
      <div class="top-card-label">Tourist Guide</div>
      <div class="top-card-value">12 Spots</div>
      <div class="top-card-sub">Nearby today</div>
    </div>
  `;
}

function renderEmergencyContacts() {
  document.getElementById('emergencyContacts').innerHTML = DATA.emergencyContacts.map(c => `
    <div class="ec-item">
      <div class="ec-icon" style="background:${c.color}22;color:${c.color}">${c.icon}</div>
      <div class="ec-info"><div class="ec-name">${c.name}</div><div class="ec-num">${c.num}</div></div>
      <button class="ec-call" onclick="showToast('Calling ${c.name} (${c.num})...','info')">Call</button>
    </div>
  `).join('');
}

function renderAssistant() {
  const items = [
    { faIcon: 'fa-phone-volume', color: '#1e6b45', bg: 'rgba(30,107,69,0.1)', title: 'Helplines', desc: '20 national & emergency numbers', action: 'openHelplines()' },
    { faIcon: 'fa-language', color: '#0b3d8f', bg: 'rgba(11,61,143,0.1)', title: 'Language Assist', desc: '30 languages supported', action: 'openLanguages()' },
    { faIcon: 'fa-ticket', color: '#8b4513', bg: 'rgba(139,69,19,0.1)', title: 'Booking Assist', desc: 'Hotels, trains & buses', action: "showToast('Booking assistant coming soon!','info')" },
    { faIcon: 'fa-route', color: '#6b2fa0', bg: 'rgba(107,47,160,0.1)', title: 'Route Planner', desc: 'Safe route navigation', action: "showToast('Route planner coming soon!','info')" },
  ];
  document.getElementById('assistantGrid').innerHTML = items.map(i => `
    <div class="glass assist-card" onclick="${i.action}" style="cursor:pointer">
      <div class="assist-icon-wrap" style="width:48px;height:48px;border-radius:12px;background:${i.bg};border:1.5px solid ${i.color}33;display:flex;align-items:center;justify-content:center;margin:0 auto 0.7rem">
        <i class="fas ${i.faIcon}" style="font-size:1.25rem;color:${i.color}"></i>
      </div>
      <div class="assist-title">${i.title}</div>
      <div class="assist-desc">${i.desc}</div>
    </div>
  `).join('');
}

function renderActivity() {
  const visited = [
    { place: 'Godavari Ghat', time: '9:30 AM', dot: 'var(--success)' },
    { place: 'ISKCON Temple', time: '11:00 AM', dot: 'var(--accent)' },
    { place: 'Shadab Hotel', time: '1:15 PM', dot: 'var(--warning)' },
  ];
  const planned = [
    { place: 'Golconda Fort', time: '4:00 PM', dot: 'var(--accent2)' },
    { place: 'Charminar', time: '6:30 PM', dot: 'var(--accent)' },
  ];
  document.getElementById('activityGrid').innerHTML = `
    <div class="glass activity-card">
      <div class="activity-title"><i class="fas fa-clock" style="color:var(--accent)"></i> Today's Visited</div>
      ${visited.map(v => `<div class="activity-item"><div class="activity-dot" style="background:${v.dot}"></div><div style="flex:1">${v.place}</div><div style="color:var(--text-dim);font-size:0.75rem">${v.time}</div></div>`).join('')}
    </div>
    <div class="glass activity-card">
      <div class="activity-title"><i class="fas fa-calendar-check" style="color:var(--accent2)"></i> Planned Visits</div>
      ${planned.map(p => `<div class="activity-item"><div class="activity-dot" style="background:${p.dot}"></div><div style="flex:1">${p.place}</div><div style="color:var(--text-dim);font-size:0.75rem">${p.time}</div></div>`).join('')}
    </div>
  `;
}

function renderProfile(user) {
  document.getElementById('profileAvatar').textContent = user.name[0].toUpperCase();
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  // View mode — show fields as labelled text + Edit button
  document.getElementById('profileFields').innerHTML = `
    <div class="profile-field"><label>Full Name</label><span id="pv-name">${user.name}</span></div>
    <div class="profile-field"><label>Phone</label><span id="pv-phone">${user.phone || '—'}</span></div>
    <div class="profile-field"><label>City</label><span id="pv-city">${user.city || '—'}</span></div>
    <div class="profile-field"><label>Member Since</label><span>${user.joined || '—'}</span></div>
    <div class="profile-field"><label>Status</label><span style="color:var(--success)">✓ Active</span></div>
    <div style="margin-top:1.25rem;display:flex;gap:0.75rem">
      <button class="btn btn-primary" id="editProfileBtn" onclick="startEditProfile()">
        <i class="fas fa-pen"></i> Edit Profile
      </button>
    </div>
  `;
  renderSavedPlaces();
}

function startEditProfile() {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const user = users.find(u => u.email === session.email) || {};
  // Replace view spans with inputs
  document.getElementById('profileFields').innerHTML = `
    <div class="profile-field">
      <label for="ep-name">Full Name</label>
      <input class="form-input" id="ep-name" type="text" value="${user.name || ''}" placeholder="Your full name">
    </div>
    <div class="profile-field">
      <label for="ep-phone">Phone</label>
      <input class="form-input" id="ep-phone" type="tel" value="${user.phone || ''}" placeholder="Phone number">
    </div>
    <div class="profile-field">
      <label for="ep-city">City</label>
      <select class="form-select" id="ep-city">
        ${['Rajahmundry', 'Kakinada', 'Hyderabad', 'Bangalore', 'Delhi', 'Mumbai']
      .map(c => `<option value="${c.toLowerCase()}" ${(user.city || '').toLowerCase() === c.toLowerCase() ? 'selected' : ''}>${c}</option>`)
      .join('')}
      </select>
    </div>
    <div class="profile-field"><label>Member Since</label><span>${user.joined || '—'}</span></div>
    <div class="profile-field"><label>Email</label><span style="color:var(--text-muted)">${user.email}</span></div>
    <div style="margin-top:1.25rem;display:flex;gap:0.75rem">
      <button class="btn btn-primary" onclick="saveProfile()">
        <i class="fas fa-check"></i> Save Changes
      </button>
      <button class="btn btn-outline" onclick="renderProfile(getUsers().find(u=>u.email===getSession().email)||{})">
        <i class="fas fa-times"></i> Cancel
      </button>
    </div>
  `;
  document.getElementById('ep-name').focus();
}

function saveProfile() {
  const session = getSession();
  if (!session) return;
  const nameVal = (document.getElementById('ep-name').value || '').trim();
  const phoneVal = (document.getElementById('ep-phone').value || '').trim();
  const cityVal = document.getElementById('ep-city').value;
  if (!nameVal) { showToast('Name cannot be empty.', 'error'); return; }
  const users = getUsers();
  const idx = users.findIndex(u => u.email === session.email);
  if (idx === -1) { showToast('User not found.', 'error'); return; }
  users[idx].name = nameVal;
  users[idx].phone = phoneVal;
  users[idx].city = cityVal;
  saveUsers(users);
  showToast('Profile saved successfully!', 'success');
  // Refresh sidebar avatar + name + top cards immediately
  const first = nameVal.split(' ')[0];
  document.getElementById('sidebarName').textContent = first;
  document.getElementById('sidebarAvatar').textContent = nameVal[0].toUpperCase();
  renderTopCards(users[idx]);
  renderProfile(users[idx]);
}

function renderSavedPlaces() {
  const saved = getSaved();
  const el = document.getElementById('savedPlacesList');
  if (!saved.length) { el.innerHTML = '<div style="color:var(--text-dim);font-size:0.83rem;text-align:center;padding:1.5rem">No saved places yet. Browse the Locality Recommendation to save places.</div>'; return; }
  el.innerHTML = saved.map(s => `
    <div style="display:flex;align-items:center;gap:0.75rem;padding:0.65rem 0.85rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:var(--radius-sm)">
      <div style="width:30px;height:30px;border-radius:8px;background:${(CAT_FA[s.cat] || { bg: 'rgba(11,30,61,0.08)' }).bg};display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas ${(CAT_FA[s.cat] || { fa: 'fa-map-pin' }).fa}" style="font-size:0.85rem;color:${(CAT_FA[s.cat] || { color: '#0b1e3d' }).color}"></i></div>
      <div style="flex:1"><div style="font-size:0.85rem;font-weight:600">${s.name}</div><div style="font-size:0.75rem;color:var(--text-muted)">${s.addr}</div></div>
      <button style="background:none;border:none;color:var(--danger);cursor:pointer;font-size:0.75rem" onclick="removeSaved('${s.name}')">✕</button>
    </div>
  `).join('');
}

function getCatEmoji(cat) { return (DATA.categories.find(c => c.id === cat) || { emoji: '📍' }).emoji; }
function getSaved() { return JSON.parse(localStorage.getItem('sz_saved') || '[]'); }
function saveSaved(s) { localStorage.setItem('sz_saved', JSON.stringify(s)); }
function removeSaved(name) { saveSaved(getSaved().filter(s => s.name !== name)); renderSavedPlaces(); showToast('Removed from saved.', 'info'); }

/* ──── LOCALITY ──────────────────────────────────────── */
// Map categories to Font Awesome icons and colors
const CAT_FA = {
  hospitals: { fa: 'fa-hospital', color: '#c0392b', bg: 'rgba(192,57,43,0.1)', photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop' },
  restaurants: { fa: 'fa-utensils', color: '#d35400', bg: 'rgba(211,84,0,0.1)', photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop' },
  banks: { fa: 'fa-building-columns', color: '#0b3d8f', bg: 'rgba(11,61,143,0.1)', photo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80&auto=format&fit=crop' },
  police: { fa: 'fa-shield-halved', color: '#1a3568', bg: 'rgba(26,53,104,0.1)', photo: 'https://images.unsplash.com/photo-1529528070066-01f5ec32a9e2?w=600&q=80&auto=format&fit=crop' },
  transport: { fa: 'fa-bus', color: '#1e6b45', bg: 'rgba(30,107,69,0.1)', photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80&auto=format&fit=crop' },
  tourist: { fa: 'fa-landmark', color: '#8b4513', bg: 'rgba(139,69,19,0.1)', photo: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600&q=80&auto=format&fit=crop' },
};
const CITY_FA = {
  rajahmundry: { fa: 'fa-water', color: '#2980b9', photo: 'images/rajamundhry-godavari.jpg' },
  kakinada: { fa: 'fa-anchor', color: '#1a3568', photo: 'images/kakinada-port.jpg' },
  hyderabad: { fa: 'fa-chess-rook', color: '#8b4513', photo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80&auto=format&fit=crop' },
  bangalore: { fa: 'fa-laptop-code', color: '#2c3e50', photo: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80&auto=format&fit=crop' },
  delhi: { fa: 'fa-mosque', color: '#c0392b', photo: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80&auto=format&fit=crop' },
  mumbai: { fa: 'fa-city', color: '#0b3d8f', photo: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80&auto=format&fit=crop' },
};

function initLocality() {
  // City grid with photos
  document.getElementById('cityGrid').innerHTML = DATA.cities.map(c => {
    const cf = CITY_FA[c.id] || { fa: 'fa-map-marker-alt', color: '#0b1e3d', photo: '' };
    return `<div class="glass city-card" onclick="selectCity('${c.id}',this)" style="padding:0;overflow:hidden">
      <div style="height:90px;background:linear-gradient(rgba(11,30,61,0.35),rgba(11,30,61,0.55)),url('${cf.photo}') center/cover no-repeat;display:flex;align-items:flex-end;justify-content:center;padding-bottom:0.5rem;position:relative">
        <div style="position:absolute;top:8px;right:8px;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.9);display:flex;align-items:center;justify-content:center">
          <i class="fas ${cf.fa}" style="font-size:0.75rem;color:${cf.color}"></i>
        </div>
      </div>
      <div style="padding:0.6rem 0.75rem 0.75rem">
        <div class="city-name">${c.name}</div>
        <div class="city-info">${c.info}</div>
      </div>
    </div>`;
  }).join('');
  // Category grid with photos
  document.getElementById('catGrid').innerHTML = DATA.categories.map(c => {
    const cf = CAT_FA[c.id] || { fa: 'fa-map-pin', color: '#0b1e3d', bg: 'rgba(11,30,61,0.1)', photo: '' };
    return `<div class="glass cat-card" onclick="selectCat('${c.id}',this)" style="padding:0;overflow:hidden">
      <div style="height:80px;background:linear-gradient(rgba(11,30,61,0.3),rgba(11,30,61,0.6)),url('${cf.photo}') center/cover no-repeat;display:flex;align-items:center;justify-content:center">
        <div style="width:42px;height:42px;border-radius:12px;background:rgba(255,255,255,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,0.2)">
          <i class="fas ${cf.fa}" style="font-size:1.1rem;color:${cf.color}"></i>
        </div>
      </div>
      <div style="padding:0.55rem 0.5rem 0.65rem;text-align:center">
        <div class="cat-name">${c.name}</div>
      </div>
    </div>`;
  }).join('');
}

function selectCity(id, el) {
  state.selectedCity = id;
  document.querySelectorAll('.city-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('cityNextBtn').disabled = false;
}
function selectCat(id, el) {
  state.selectedCat = id;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('catNextBtn').disabled = false;
}
function setSafety(level, el) {
  state.safetyPref = level;
  document.querySelectorAll('.safe-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}
function setRatingPref(n, el) {
  state.ratingPref = n;
  document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Categories that only need safety + rating (no budget/ambience/purpose)
const SIMPLE_PREF_CATS = ['hospitals', 'police', 'banks', 'transport'];

function renderPrefForm() {
  const isSimple = SIMPLE_PREF_CATS.includes(state.selectedCat);
  const budgetVal = state.budgetPref || 500;
  document.getElementById('prefFormInner').innerHTML = `
    <div class="form-group">
      <label class="form-label"><i class="fas fa-shield-halved" style="color:var(--navy);margin-right:0.4rem"></i>Safety Level</label>
      <div class="safety-select">
        <div class="safe-btn ${state.safetyPref === 'low' ? 'active' : ''}" data-level="low" onclick="setSafety('low',this)"><i class="fas fa-triangle-exclamation"></i> Low</div>
        <div class="safe-btn ${state.safetyPref === 'medium' ? 'active' : ''}" data-level="medium" onclick="setSafety('medium',this)"><i class="fas fa-circle-half-stroke"></i> Medium</div>
        <div class="safe-btn ${state.safetyPref === 'high' ? 'active' : ''}" data-level="high" onclick="setSafety('high',this)"><i class="fas fa-check-circle"></i> High</div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label"><i class="fas fa-star" style="color:var(--gold);margin-right:0.4rem"></i>Minimum Popularity / Rating</label>
      <div class="rating-select" id="ratingSelect">
        ${[1, 2, 3, 4, 5].map(n => `<div class="rating-btn ${state.ratingPref === n ? 'active' : ''}" onclick="setRatingPref(${n},this)">⭐ ${n}+</div>`).join('')}
      </div>
    </div>
    ${!isSimple ? `
    <div class="form-group">
      <label class="form-label"><i class="fas fa-indian-rupee-sign" style="color:var(--navy);margin-right:0.4rem"></i>Budget Range — <span id="budgetVal">₹${budgetVal}</span></label>
      <div class="range-wrap">
        <input type="range" min="100" max="5000" step="100" value="${budgetVal}" id="budgetRange" oninput="document.getElementById('budgetVal').textContent='₹'+this.value;state.budgetPref=+this.value">
        <div class="range-labels"><span>₹100</span><span>₹5000</span></div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label"><i class="fas fa-users" style="color:var(--navy);margin-right:0.4rem"></i>Ambience</label>
      <select class="form-select" id="ambienceSelect">
        <option value="any">Any</option>
        <option value="family">👨‍👩‍👧 Family</option>
        <option value="friends">👫 Friends</option>
        <option value="business">💼 Business</option>
        <option value="travel">✈️ Travel</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label"><i class="fas fa-bullseye" style="color:var(--navy);margin-right:0.4rem"></i>Purpose of Visit</label>
      <input type="text" class="form-input" id="purposeInput" placeholder="e.g. sightseeing, dining, leisure...">
    </div>
    ` : `<div style="padding:0.85rem;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:8px;font-size:0.84rem;color:var(--text-muted);display:flex;align-items:center;gap:0.5rem"><i class="fas fa-info-circle" style="color:var(--gold)"></i> For this category, only safety level and rating preferences apply.</div>`}
  `;
  // Restore safety btn active state
  document.querySelectorAll('.safe-btn').forEach(b => b.classList.toggle('active', b.dataset.level === state.safetyPref));
}

function goStep(n) {
  if (n === 2 && !state.selectedCity) { showToast('Please select a city.', 'error'); return; }
  if (n === 3 && !state.selectedCat) { showToast('Please select a category.', 'error'); return; }
  if (n === 3) { renderPrefForm(); }
  if (n === 4) { buildResults(); }
  const steps = [1, 2, 3, 4];
  steps.forEach(s => {
    const el = document.getElementById('step' + s);
    el.classList.toggle('active', s === n);
  });
  // Update step dots
  steps.forEach(s => {
    const dot = document.getElementById('sdot' + s);
    if (s < n) { dot.classList.add('done'); dot.classList.remove('active'); dot.innerHTML = '<i class="fas fa-check" style="font-size:0.65rem"></i>'; }
    else if (s === n) { dot.classList.add('active'); dot.classList.remove('done'); dot.textContent = s === 4 ? '✓' : s; }
    else { dot.classList.remove('done', 'active'); dot.textContent = s === 4 ? '✓' : s; }
    if (s < 4) { const line = document.getElementById('sline' + s); line.classList.toggle('done', s < n); }
  });
  state.currentStep = n;
  document.getElementById('recResetBtn').style.display = n > 1 ? 'flex' : 'none';
  const subtitles = ['Find safe places near you', 'Select city', 'Choose category', 'Set preferences', 'Results'];
  document.getElementById('stepSubtitle').textContent = subtitles[n] || '';
}

function buildResults() {
  // STRICT city-only filtering — never mix places from other cities
  const selectedCityId = (state.selectedCity || '').trim().toLowerCase();
  const cityData = DATA.places[selectedCityId] || {};
  const allCatPlaces = (cityData[state.selectedCat] || []).filter(p =>
    (p.city || '').trim().toLowerCase() === selectedCityId
  );

  // Step 1: Apply both safety AND rating filters
  let results = allCatPlaces.filter(p => {
    const safetyOk = state.safetyPref === 'low' ? true
      : state.safetyPref === 'medium' ? p.safety !== 'low'
        : p.safety === 'high';
    return safetyOk && p.rating >= state.ratingPref;
  });

  // Step 2: If empty, relax safety filter (keep rating)
  if (!results.length) {
    results = allCatPlaces.filter(p => p.rating >= state.ratingPref);
  }

  // Step 3: If still empty, show all available places for that city+category
  if (!results.length) {
    results = [...allCatPlaces];
  }

  // NOTE: We intentionally do NOT pull from other cities.
  // Each city has 15 places, so this should never return an empty list.

  // Distance jitter for realism
  results = results.map(p => ({ ...p, dist: +(p.dist + Math.random() * 0.4 - 0.2).toFixed(1) }));
  state.currentResults = [...results];
  renderResults(results);
}

function sortResults(mode) {
  state.sortMode = mode;
  let r = [...state.currentResults];
  if (mode === 'rating') r.sort((a, b) => b.rating - a.rating);
  else if (mode === 'distance') r.sort((a, b) => a.dist - b.dist);
  else if (mode === 'safety') r.sort((a, b) => ({ 'high': 3, 'medium': 2, 'low': 1 }[b.safety]) - ({ 'high': 3, 'medium': 2, 'low': 1 }[a.safety]));
  renderResults(r);
}

function renderResults(results) {
  const city = DATA.cities.find(c => c.id === state.selectedCity);
  const cat = DATA.categories.find(c => c.id === state.selectedCat);
  document.getElementById('resultsTitle').textContent = `${results.length} ${cat?.name || ''} in ${city?.name || ''}`;
  const saved = getSaved().map(s => s.name);
  // AI suggestion
  const best = results.sort((a, b) => b.rating - a.rating)[0];
  document.getElementById('aiSuggestion').innerHTML = best ? `
    <span class="ai-icon">🤖</span>
    <div class="ai-msg">Best safe place for you today: <strong>${best.name}</strong> — rated ${best.rating}★, only ${best.dist}km away with <span style="color:var(--success)">${best.safety}</span> safety level.</div>
  `: '';
  if (!results.length) {
    document.getElementById('resultsGrid').innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)"><div style="font-size:2.5rem;margin-bottom:1rem">🔍</div><p>No places match your preferences. Try adjusting filters.</p></div>`;
    return;
  }
  const catPhoto = (CAT_FA[state.selectedCat] || {}).photo || '';
  const catColor = (CAT_FA[state.selectedCat] || { color: '#0b1e3d' }).color;
  const catFa = (CAT_FA[state.selectedCat] || { fa: 'fa-map-pin' }).fa;
  document.getElementById('resultsGrid').innerHTML = results.map((p, idx) => {
    // Rotate through a few Unsplash photo IDs per category to give variety
    const photoSeeds = {
      hospitals: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=75&auto=format&fit=crop'],
      restaurants: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=75&auto=format&fit=crop'],
      banks: ['https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556742504-16b083241fab?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=600&q=75&auto=format&fit=crop'],
      police: ['https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=600&q=75&auto=format&fit=crop'],
      transport: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&q=75&auto=format&fit=crop'],
      tourist: ['https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=75&auto=format&fit=crop', 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=75&auto=format&fit=crop'],
    };
    const photos = photoSeeds[state.selectedCat] || [catPhoto];
    const imgUrl = photos[idx % photos.length] || catPhoto;
    return `
    <div class="glass result-card">
      <div class="result-card-img" style="background:linear-gradient(rgba(11,30,61,0.28),rgba(11,30,61,0.55)),url('${imgUrl}') center/cover no-repeat;position:relative">
        <div style="position:absolute;bottom:10px;left:12px;width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.18)">
          <i class="fas ${catFa}" style="font-size:1rem;color:${catColor}"></i>
        </div>
        <span class="safety-badge ${p.safety}" style="position:absolute;top:10px;right:10px">${p.safety === 'high' ? '✓ Safe' : p.safety === 'medium' ? '⚠ Moderate' : '⛔ Caution'}</span>
      </div>
      <div class="result-card-body">
        <div class="result-card-name">${p.name}</div>
        <div class="result-card-addr"><i class="fas fa-location-dot" style="color:var(--accent)"></i>${p.addr}</div>
        <div class="result-card-desc">${p.desc}</div>
        <div class="result-card-footer">
          <div class="result-rating"><span class="stars">★</span> ${p.rating} <span style="color:var(--text-dim)">&nbsp;•&nbsp;</span><span class="result-dist"><i class="fas fa-route"></i> ${p.dist}km</span></div>
          <button class="save-btn ${saved.includes(p.name) ? 'saved' : ''}" onclick="toggleSave('${p.name}','${p.addr}',this)">
            ${saved.includes(p.name) ? '❤️ Saved' : '🤍 Save'}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleSave(name, addr, btn) {
  const saved = getSaved();
  const idx = saved.findIndex(s => s.name === name);
  if (idx > -1) { saved.splice(idx, 1); btn.textContent = '🤍 Save'; btn.classList.remove('saved'); showToast('Removed from favorites.', 'info'); }
  else { saved.push({ name, addr, cat: state.selectedCat }); btn.textContent = '❤️ Saved'; btn.classList.add('saved'); showToast('Saved to favorites!', 'success'); }
  saveSaved(saved);
  if (document.getElementById('section-profile').classList.contains('active')) renderSavedPlaces();
}

function resetRec() {
  state.selectedCity = null; state.selectedCat = null; state.currentStep = 1;
  document.querySelectorAll('.city-card,.cat-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('cityNextBtn').disabled = true;
  document.getElementById('catNextBtn').disabled = true;
  goStep(1);
}

/* ──── EMERGENCY / SIDEBAR NAV: handled by navigation.js (_pushModal, switchDash) ── */

/* ──── TOAST ─────────────────────────────────────────── */
function showToast(msg, type = 'info') {
  const tc = document.getElementById('toastContainer');
  if (!tc) return;
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

/* ──── SCROLL REVEAL ─────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ──── MISC ──────────────────────────────────────────── */
/* scrollToSection / goToSection are provided by navigation.js */
function toggleMobileMenu() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('navLinks')?.classList.toggle('open');
}
function stopEvent(e) { e.stopPropagation(); }

// Navigation is handled entirely by DOMContentLoaded + popstate above.

/* ──── HELPLINES ──────────────────────────────────── */
const HELPLINES = [
  { name: 'Police', num: '100', icon: 'fa-shield-halved', color: '#1a3568' },
  { name: 'Ambulance', num: '108', icon: 'fa-truck-medical', color: '#c0392b' },
  { name: 'Fire Brigade', num: '101', icon: 'fa-fire-extinguisher', color: '#d35400' },
  { name: 'Women Helpline', num: '1091', icon: 'fa-female', color: '#8e44ad' },
  { name: 'Child Helpline', num: '1098', icon: 'fa-child', color: '#2980b9' },
  { name: 'Disaster Mgmt', num: '1070', icon: 'fa-house-crack', color: '#7f8c8d' },
  { name: 'Road Accident', num: '1073', icon: 'fa-car-crash', color: '#e74c3c' },
  { name: 'Senior Citizen', num: '14567', icon: 'fa-person-cane', color: '#16a085' },
  { name: 'Railway Enquiry', num: '139', icon: 'fa-train', color: '#2c3e50' },
  { name: 'Tourist Helpline', num: '1363', icon: 'fa-umbrella-beach', color: '#27ae60' },
  { name: 'Cyber Crime', num: '1930', icon: 'fa-laptop-code', color: '#8b4513' },
  { name: 'Anti-Poison', num: '1800-11-6117', icon: 'fa-flask', color: '#1e6b45' },
  { name: 'Electricity Emrg', num: '1912', icon: 'fa-bolt', color: '#f39c12' },
  { name: 'Gas Leak (Indane)', num: '1906', icon: 'fa-fire-flame-curved', color: '#e67e22' },
  { name: 'Blood Bank', num: '104', icon: 'fa-droplet', color: '#c0392b' },
  { name: 'Mental Health', num: 'iCall 9152987821', icon: 'fa-brain', color: '#6c5ce7' },
  { name: 'Telangana Police', num: '100', icon: 'fa-user-shield', color: '#0b3d8f' },
  { name: 'AP State Emrg', num: '112', icon: 'fa-circle-exclamation', color: '#e74c3c' },
  { name: 'COVID Helpline', num: '104', icon: 'fa-virus', color: '#00b894' },
  { name: 'National Emrg', num: '112', icon: 'fa-phone-flip', color: '#c0392b' },
];

function openHelplines() {
  var grid = document.getElementById('helplinesGrid');
  grid.innerHTML = HELPLINES.map(function (h) {
    return `
    <div style="display:flex;align-items:center;gap:0.65rem;padding:0.7rem 0.85rem;background:#f8f6f0;border:1px solid #e8e0cc;border-left:3px solid ${h.color};border-radius:8px">
      <div style="width:34px;height:34px;border-radius:50%;background:${h.color}18;border:1.5px solid ${h.color}44;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="fas ${h.icon}" style="font-size:0.85rem;color:${h.color}"></i>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:0.78rem;font-weight:700;color:#0b1e3d;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${h.name}</div>
        <div style="font-size:0.82rem;font-weight:800;color:${h.color}">${h.num}</div>
      </div>
      <a href="tel:${h.num.replace(/[^0-9]/g, '')}" style="background:#0b1e3d;color:white;border:none;border-radius:5px;padding:0.28rem 0.65rem;font-size:0.7rem;font-weight:700;cursor:pointer;text-decoration:none;font-family:inherit">Call</a>
    </div>
  `;
  }).join('');
  _pushModal('helplines'); // push history entry + show modal
}

/* ──── LANGUAGES ──────────────────────────────────── */
const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇵🇰' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', native: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
];

// UI string translations for key interface elements
const TRANSLATIONS = {
  en: { heroTitle: 'Discover Safe Places Around You', heroSub: 'AI powered safety and locality recommendation platform', getStarted: 'Get Started Free', seeHow: 'See How It Works', featTitle: 'Everything you need to stay safe & informed', aboutTitle: 'Empowering safe exploration for everyone', downloadApp: 'SafeZone in your pocket', navAbout: 'About Us', navFeatures: 'Features', navRegister: 'Register', navLogin: 'Login', navExplore: 'Explore Safety' },
  te: { heroTitle: 'మీ చుట్టూ సురక్షిత ప్రదేశాలను కనుగొనండి', heroSub: 'AI ఆధారిత భద్రత మరియు లొకాలిటీ సిఫార్సు వేదిక', getStarted: 'ప్రారంభించండి', seeHow: 'ఎలా పని చేస్తుందో చూడండి', featTitle: 'సురక్షితంగా ఉండటానికి మీకు అవసరమైన ప్రతిదీ', aboutTitle: 'అందరికీ సురక్షిత అన్వేషణను శక్తివంతం చేయడం', downloadApp: 'మీ జేబులో SafeZone', navAbout: 'మా గురించి', navFeatures: 'ఫీచర్లు', navRegister: 'నమోదు', navLogin: 'లాగిన్', navExplore: 'భద్రతను అన్వేషించండి' },
  hi: { heroTitle: 'अपने आस-पास सुरक्षित स्थान खोजें', heroSub: 'AI-संचालित सुरक्षा और लोकेलिटी अनुशंसा मंच', getStarted: 'अभी शुरू करें', seeHow: 'यह कैसे काम करता है', featTitle: 'सुरक्षित रहने के लिए सब कुछ', aboutTitle: 'सभी के लिए सुरक्षित अन्वेषण', downloadApp: 'आपकी जेब में SafeZone', navAbout: 'हमारे बारे में', navFeatures: 'विशेषताएं', navRegister: 'पंजीकरण', navLogin: 'लॉगिन', navExplore: 'सुरक्षा खोजें' },
  ta: { heroTitle: 'உங்களைச் சுற்றி பாதுகாப்பான இடங்களைக் கண்டறியுங்கள்', heroSub: 'AI இயக்கப்படும் பாதுகாப்பு மற்றும் பரிந்துரை தளம்', getStarted: 'தொடங்குங்கள்', seeHow: 'எப்படி செயல்படுகிறது', featTitle: 'பாதுகாப்பாக இருக்க தேவையான அனைத்தும்', aboutTitle: 'அனைவருக்கும் பாதுகாப்பான ஆராய்ச்சி', downloadApp: 'உங்கள் சாக்கெட்டில் SafeZone', navAbout: 'எங்களைப் பற்றி', navFeatures: 'அம்சங்கள்', navRegister: 'பதிவு', navLogin: 'உள்நுழைவு', navExplore: 'பாதுகாப்பை ஆராயுங்கள்' },
};
// Fallback to English for languages without full translation
LANGUAGES.forEach(l => { if (!TRANSLATIONS[l.code]) TRANSLATIONS[l.code] = TRANSLATIONS.en; });

let currentLang = 'en';

function openLanguages() {
  var grid = document.getElementById('languageGrid');
  grid.innerHTML = LANGUAGES.map(function (l) {
    return `
    <div onclick="applyLanguage('${l.code}','${l.name}')" style="display:flex;align-items:center;gap:0.6rem;padding:0.65rem 0.85rem;background:${currentLang === l.code ? 'rgba(11,30,61,0.07)' : '#f8f6f0'};border:${currentLang === l.code ? '2px solid #0b1e3d' : '1px solid #e8e0cc'};border-radius:8px;cursor:pointer;transition:all 0.18s" onmouseover="this.style.background='rgba(201,168,76,0.1)';this.style.borderColor='#c9a84c'" onmouseout="this.style.background='${currentLang === l.code ? 'rgba(11,30,61,0.07)' : '#f8f6f0'}';this.style.borderColor='${currentLang === l.code ? '#0b1e3d' : '#e8e0cc'}'">
      <span style="font-size:1.2rem">${l.flag}</span>
      <div>
        <div style="font-size:0.82rem;font-weight:700;color:#0b1e3d">${l.native}</div>
        <div style="font-size:0.7rem;color:#6b7a8d">${l.name}</div>
      </div>
      ${currentLang === l.code ? '<i class="fas fa-check-circle" style="margin-left:auto;color:#1e6b45;font-size:0.85rem"></i>' : ''}
    </div>
  `;
  }).join('');
  _pushModal('languages'); // push history entry + show modal
}

function applyLanguage(code, name) {
  currentLang = code;
  const t = TRANSLATIONS[code] || TRANSLATIONS.en;
  // Update hero
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) heroH1.innerHTML = t.heroTitle.replace('Safe Places', '<span class="grad-text">Safe Places</span>');
  const heroP = document.querySelector('.hero p');
  if (heroP) heroP.textContent = t.heroSub;
  // Update nav links
  const navLinks = document.querySelectorAll('.nav-link');
  const navMap = [t.navAbout, t.navFeatures, t.navRegister, t.navLogin, t.navExplore];
  navLinks.forEach((el, i) => { if (navMap[i]) el.textContent = navMap[i]; });
  // Update hero buttons
  const heroBtns = document.querySelectorAll('.hero-actions .btn');
  if (heroBtns[0]) heroBtns[0].innerHTML = '<i class="fas fa-rocket"></i> ' + t.getStarted;
  if (heroBtns[1]) heroBtns[1].innerHTML = '<i class="fas fa-play"></i> ' + t.seeHow;
  // Update section titles
  const secTitles = document.querySelectorAll('.section-title');
  if (secTitles[0]) secTitles[0].innerHTML = t.featTitle;
  if (secTitles[1]) secTitles[1].innerHTML = t.aboutTitle.replace(/(.{1,25}\S)\s/g, '$1<br>');
  closeModal('languageModal');
  showToast('Language changed to ' + name, 'success');
  document.documentElement.setAttribute('lang', code);
  // RTL for Arabic/Urdu
  document.documentElement.setAttribute('dir', (code === 'ar' || code === 'ur') ? 'rtl' : 'ltr');
}

/* ─── BACK-GESTURE GUARD ─────────────────────────────────────────────────
   Problem: When the page first loads there is only ONE history entry.
   A back-gesture pops that entry → browser exits the page → blank screen.
   Fix: Push a sentinel #landing entry on load so the stack has:
     [ original-entry ] ← [ #landing sentinel ]  ← user is here
   Swiping back hits the original entry, fires popstate, and we
   re-show the landing page instead of leaving the app.
──────────────────────────────────────────────────────────────────────── */
(function () {
  // Push sentinel only on first load (no hash yet = fresh open)
  history.pushState({ safezone: 'landing' }, '', '#landing');

  window.addEventListener('popstate', function (e) {
    var st = e.state;
    // If we popped back to the sentinel or any landing state → re-show landing
    if (!st || st.safezone === 'landing') {
      // Push the sentinel again so repeated back-gestures keep re-triggering this
      history.pushState({ safezone: 'landing' }, '', '#landing');
      // Show the landing page div and hide everything else
      document.querySelectorAll('.page').forEach(function (p) {
        p.style.display = 'none';
        p.classList.remove('active');
      });
      var lp = document.getElementById('page-landing');
      if (lp) {
        lp.style.display = 'block';
        lp.classList.add('active');
      }
      var navbar = document.getElementById('mainNavbar');
      if (navbar) navbar.style.display = 'flex';
      window.scrollTo(0, 0);
    }
  });
})();
