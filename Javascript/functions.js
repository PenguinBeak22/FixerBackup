// Centralized Data for various services and their specific offerings
// This structure now holds all types of professionals
const tradespeopleData = {
    plumbing: [
        {
            id: 'john-paul',
            name: 'John "The Pipe" Paul',
            specialty: 'Emergency Leaks, Drain Cleaning, Water Heater Repair',
            rating: 4.5,
            reviews: 87,
            description: 'With over 15 years of experience, John offers prompt and reliable plumbing services across Malta. Known for his attention to detail and friendly approach.',
            avatar: 'https://placehold.co/100x100/A7D129/36454F?text=JP',
            country: 'Malta',
            locality: 'Birkirkara',
            joinDate: '2010-03-15',
            isPremium: true, // Added premium flag
            promotionRank: 1, // Added promotion rank
            specificServices: ['Emergency Leaks', 'Drain Cleaning', 'Water Heater Repair'] // Example of specific services saved
        },
        {
            id: 'mary-evans',
            name: 'Mary "The Fixer" Evans',
            specialty: 'Bathroom Installations, Pipe Repair, Boiler Servicing',
            rating: 5.0,
            reviews: 62,
            description: 'Mary specializes in comprehensive bathroom plumbing and energy-efficient solutions. Customer satisfaction is her top priority.',
            avatar: 'https://placehold.co/100x100/FFD700/36454F?text=ME',
            country: 'Malta',
            locality: 'Sliema',
            joinDate: '2012-07-22',
            isPremium: true, // Added premium flag
            promotionRank: 2, // Added promotion rank
            specificServices: ['Bathroom Installations', 'Pipe Repair', 'Boiler Servicing']
        },
        {
            id: 'alex-pace',
            name: 'Alex "Aqua" Pace',
            specialty: 'General Plumbing, Fixture Installation, Leak Detection',
            rating: 4.0,
            reviews: 45,
            description: 'A skilled and efficient plumber, Alex provides high-quality work for all residential plumbing needs, from small repairs to new installations.',
            avatar: 'https://placehold.co/100x100/36454F/FFFFFF?text=AP',
            country: 'Malta',
            locality: 'Mosta',
            joinDate: '2015-11-01',
            isPremium: false,
            specificServices: ['General Plumbing', 'Fixture Installation', 'Leak Detection']
        },
        {
            id: 'sarah-camilleri',
            name: 'Sarah "Spout" Camilleri',
            specialty: 'Commercial Plumbing, Water Conservation, Backflow Prevention',
            rating: 4.8,
            reviews: 30,
            description: 'Specializing in larger commercial projects and eco-friendly plumbing solutions. Sarah brings expertise and innovation to every job.',
            avatar: 'https://placehold.co/100x100/A7D129/36454F?text=SC',
            country: 'Malta',
            locality: 'Qormi',
            joinDate: '2018-01-10',
            isPremium: false,
            specificServices: ['Commercial Plumbing', 'Water Conservation', 'Backflow Prevention']
        },
        {
            id: 'david-rossi',
            name: 'David "The Drain" Rossi',
            specialty: 'Drainage Systems, Septic Tank Maintenance, Water Filtration',
            rating: 4.7,
            reviews: 95,
            description: 'Experienced in complex drainage issues and advanced water filtration systems.',
            avatar: 'https://placehold.co/100x100/FFD700/36454F?text=DR',
            country: 'Italy',
            locality: 'Rome',
            joinDate: '2008-05-20',
            isPremium: false,
            specificServices: ['Drainage Systems', 'Septic Tank Maintenance', 'Water Filtration']
        },
        {
            id: 'emily-smith',
            name: 'Emily "Fix-It" Smith',
            specialty: 'Residential Plumbing, Leak Detection, Bathroom Remodels',
            rating: 4.9,
            reviews: 120,
            description: 'Highly recommended for her meticulous work and friendly service in London.',
            avatar: 'https://placehold.co/100x100/36454F/FFFFFF?text=ES',
            country: 'United Kingdom',
            locality: 'London',
            joinDate: '2011-09-05',
            isPremium: false,
            specificServices: ['Residential Plumbing', 'Leak Detection', 'Bathroom Remodels']
        }
    ],
    carpentry: [
        {
            id: 'bob-builder',
            name: 'Bob "The Builder" Smith',
            specialty: 'Custom Cabinets, Furniture Assembly, Deck Building',
            rating: 4.8,
            reviews: 70,
            description: 'Highly skilled carpenter with an eye for detail. Specializing in bespoke furniture and outdoor decking.',
            avatar: 'https://placehold.co/100x100/36454F/A7D129?text=BS',
            country: 'Malta',
            locality: 'Mosta',
            joinDate: '2013-05-01',
            isPremium: false,
            specificServices: ['Custom Cabinets', 'Furniture Assembly', 'Deck Building']
        },
        {
            id: 'anna-wood',
            name: 'Anna "Artisan" Wood',
            specialty: 'Flooring Installation, Custom Shelving, Door Repair',
            rating: 4.9,
            reviews: 55,
            description: 'Passionate about creating beautiful and functional wooden structures. Known for her precision and creative solutions.',
            avatar: 'https://placehold.co/100x100/A7D129/FFFFFF?text=AW',
            country: 'Malta',
            locality: 'Naxxar',
            joinDate: '2016-09-10',
            isPremium: false,
            specificServices: ['Flooring Installation', 'Custom Shelving', 'Door Repair']
        }
    ],
    electrical: [
        {
            id: 'mark-spark',
            name: 'Mark "Sparky" Davis',
            specialty: 'Electrical Wiring, Light Fixture Installation, Outlet Repair',
            rating: 4.7,
            reviews: 90,
            description: 'Certified electrician providing safe and efficient electrical services for homes and businesses.',
            avatar: 'https://placehold.co/100x100/FFD700/36454F?text=MD',
            country: 'Malta',
            locality: 'Birkirkara',
            joinDate: '2011-02-20',
            isPremium: false,
            specificServices: ['Electrical Wiring', 'Light Fixture Installation', 'Outlet Repair']
        }
    ],
    painting: [
        {
            id: 'lisa-brush',
            name: 'Lisa "The Brush" White',
            specialty: 'Interior Painting, Exterior Painting, Wallpaper Installation',
            rating: 4.6,
            reviews: 65,
            description: 'Experienced painter transforming spaces with high-quality finishes and attention to detail.',
            avatar: 'https://placehold.co/100x100/A7D129/FFFFFF?text=LW',
            country: 'Malta',
            locality: 'Sliema',
            joinDate: '2017-04-05',
            isPremium: false,
            specificServices: ['Interior Painting', 'Exterior Painting', 'Wallpaper Installation']
        }
    ],
    cleaning: [
        {
            id: 'chris-clean',
            name: 'Chris "Spotless" Green',
            specialty: 'Residential Cleaning, Deep Cleaning, Commercial Cleaning',
            rating: 4.9,
            reviews: 110,
            description: 'Dedicated to providing immaculate cleaning services, leaving every space sparkling clean.',
            avatar: 'https://placehold.co/100x100/36454F/FFD700?text=CG',
            country: 'Malta',
            locality: 'Mosta',
            joinDate: '2014-08-12',
            isPremium: false,
            specificServices: ['Residential Cleaning', 'Deep Cleaning', 'Commercial Cleaning']
        }
    ],
    blacksmithing: [
        {
            id: 'greg-forge',
            name: 'Greg "The Forge" Black',
            specialty: 'Custom Metalwork, Wrought Iron Gates, Repairs',
            rating: 5.0,
            reviews: 40,
            description: 'Traditional blacksmith crafting unique metal pieces and performing expert repairs.',
            avatar: 'https://placehold.co/100x100/FFD700/A7D129?text=GB',
            country: 'Malta',
            locality: 'Valletta',
            joinDate: '2010-01-01',
            isPremium: false,
            specificServices: ['Custom Metalwork', 'Wrought Iron Gates', 'Repairs']
        }
    ]
};

// Data for specific service types (for application form, etc.)
const servicesData = {
    plumbing: [
        'Emergency Leaks', 'Drain Cleaning', 'Water Heater Repair',
        'Bathroom Installations', 'Pipe Repair', 'Boiler Servicing',
        'Fixture Installation', 'Leak Detection', 'General Plumbing'
    ],
    carpentry: [
        'Furniture Assembly', 'Custom Cabinets', 'Door Installation',
        'Window Repair', 'Deck Building', 'Flooring Installation',
        'Custom Shelving'
    ],
    electrical: [
        'Electrical Wiring', 'Light Fixture Installation', 'Outlet Repair',
        'Circuit Breaker Issues', 'Appliance Hookups', 'Electrical Inspections'
    ],
    painting: [
        'Interior Painting', 'Exterior Painting', 'Wallpaper Installation',
        'Drywall Repair', 'Moulding & Trim Painting', 'Commercial Painting'
    ],
    cleaning: [
        'Residential Cleaning', 'Commercial Cleaning', 'Deep Cleaning',
        'Window Cleaning', 'Carpet Cleaning', 'Post-Construction Cleaning'
    ],
    blacksmithing: [
        'Custom Metalwork', 'Wrought Iron Gates', 'Railings & Balconies',
        'Architectural Metalwork', 'Repairs & Restoration', 'Decorative Items'
    ],
    other: [
        'Please specify in description'
    ]
};


// Data for countries and localities
const countriesAndLocalities = {
    "Malta": ["Birkirkara", "Bormla (Cospicua)", "Fgura", "Floriana", "Fontana", "Għajnsielem", "Għarb", "Għargħur", "Għasri", "Għaxaq", "Gudja", "Gżira", "Ħamrun", "Iklin", "Isla (Senglea)", "Kalkara", "Kerċem", "Kirkop", "Lija", "Luqa", "Marsa", "Marsaskala", "Marsaxlokk", "Mdina", "Mellieħa", "Mosta", "Mqabba", "Msida", "Mtarfa", "Munxar", "Nadur", "Naxxar", "Paola", "Pembroke", "Pietà", "Qala", "Qormi", "Qrendi", "Rabat (Gozo)", "Rabat (Malta)", "Safi", "San Ġiljan (St. Julian's)", "San Pawl il-Baħar (St. Paul's Bay)", "Sannat", "Santa Luċija", "Santa Venera", "Siġġiewi", "Sliema", "Swieqi", "Ta' Xbiex", "Tarxien", "Valletta", "Victoria (Rabat, Gozo)", "Xagħra", "Xewkija", "Xgħajra", "Żabbar", "Żebbuġ (Gozo)", "Żebbuġ (Malta)", "Żejtun", "Żurrieq"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Edinburgh", "Leeds", "Sheffield", "Newcastle"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao"]
};

// Common international dial codes
const countryDialCodes = {
    "Afghanistan": "+93", "Albania": "+355", "Algeria": "+213", "Andorra": "+376", "Angola": "+244",
    "Argentina": "+54", "Armenia": "+374", "Australia": "+61", "Austria": "+43", "Azerbaijan": "+994",
    "Bahrain": "+973", "Bangladesh": "+880", "Belarus": "+375", "Belgium": "+32", "Bolivia": "+591",
    "Bosnia & Herzegovina": "+387", "Brazil": "+55", "Bulgaria": "+359", "Cambodia": "+855",
    "Cameroon": "+237", "Canada": "+1", "Chile": "+56", "China": "+86", "Colombia": "+57",
    "Costa Rica": "+506", "Croatia": "+385", "Cuba": "+53", "Cyprus": "+357", "Czech Republic": "+420",
    "Denmark": "+45", "Dominican Republic": "+1", "Ecuador": "+593", "Egypt": "+20",
    "El Salvador": "+503", "Estonia": "+372", "Ethiopia": "+251", "Finland": "+358", "France": "+33",
    "Georgia": "+995", "Germany": "+49", "Ghana": "+233", "Greece": "+30", "Guatemala": "+502",
    "Honduras": "+504", "Hong Kong": "+852", "Hungary": "+36", "Iceland": "+354", "India": "+91",
    "Indonesia": "+62", "Iran": "+98", "Iraq": "+964", "Ireland": "+353", "Israel": "+972",
    "Italy": "+39", "Jamaica": "+1", "Japan": "+81", "Jordan": "+962", "Kazakhstan": "+7",
    "Kenya": "+254", "Kuwait": "+965", "Latvia": "+371", "Lebanon": "+961", "Libya": "+218",
    "Lithuania": "+370", "Luxembourg": "+352", "Malaysia": "+60", "Malta": "+356", "Mexico": "+52",
    "Moldova": "+373", "Monaco": "+377", "Morocco": "+212", "Netherlands": "+31", "New Zealand": "+64",
    "Nicaragua": "+505", "Nigeria": "+234", "North Macedonia": "+389", "Norway": "+47", "Oman": "+968",
    "Pakistan": "+92", "Panama": "+507", "Paraguay": "+595", "Peru": "+51", "Philippines": "+63",
    "Poland": "+48", "Portugal": "+351", "Qatar": "+974", "Romania": "+40", "Russia": "+7",
    "San Marino": "+378", "Saudi Arabia": "+966", "Serbia": "+381", "Singapore": "+65",
    "Slovakia": "+421", "Slovenia": "+386", "South Africa": "+27", "South Korea": "+82", "Spain": "+34",
    "Sri Lanka": "+94", "Sweden": "+46", "Switzerland": "+41", "Syria": "+963", "Taiwan": "+886",
    "Tanzania": "+255", "Thailand": "+66", "Tunisia": "+216", "Turkey": "+90", "Ukraine": "+380",
    "United Arab Emirates": "+971", "United Kingdom": "+44", "United States": "+1", "Uruguay": "+598",
    "Uzbekistan": "+998", "Venezuela": "+58", "Vietnam": "+84", "Yemen": "+967", "Zambia": "+260",
    "Zimbabwe": "+263"
};


// Global array to store customer data (for demonstration purposes, typically this would be a backend)
let customerData = []; // Will be populated from Firestore
// Global array to store message data (simulated for demonstration)
// Structure: { id: string, from: string (customer username), to: string (professional ID), text: string, timestamp: number, isRead: boolean }
let messagesData = JSON.parse(localStorage.getItem('messagesData')) || [];

// Global array to store booking data (simulated for demonstration)
// Structure: { id: string, professionalId: string, professionalName: string, customerId: string, customerName: string, date: string (YYYY-MM-DD), time: string (HH:MM-HH:MM), description: string, customerPhone: string, status: 'Pending' | 'Confirmed' | 'Rejected' | 'Cancelled' }
let bookingsData = JSON.parse(localStorage.getItem('bookingsData')) || [
    // Sample bookings for John "The Pipe" Paul
    {
        id: 'booking-1',
        professionalId: 'john-paul',
        professionalName: 'John "The Pipe" Paul',
        customerId: 'jane-doe-123',
        customerName: 'Jane Doe',
        date: '2025-07-15',
        time: '10:00-11:00',
        description: 'Leaky faucet in kitchen sink. Drips constantly.',
        customerPhone: '+35699112233',
        status: 'Pending'
    },
    {
        id: 'booking-2',
        professionalId: 'john-paul',
        professionalName: 'John "The Pipe" Paul',
        customerId: 'another-cust-456',
        customerName: 'Mark Smith',
        date: '2025-07-20',
        time: '14:00-15:00',
        description: 'Annual boiler servicing and check-up.',
        customerPhone: '+35677889900',
        status: 'Confirmed'
    },
    {
        id: 'booking-3',
        professionalId: 'john-paul',
        professionalName: 'John "The Pipe" Paul',
        customerId: 'jane-doe-123',
        customerName: 'Jane Doe',
        date: '2025-06-28', // Today's date (if running on June 28, 2025) or a past date for testing
        time: '09:00-10:00',
        description: 'Blocked drain in bathroom.',
        customerPhone: '+35699112233',
        status: 'Pending'
    },
    // Sample bookings for Mary "The Fixer" Evans
    {
        id: 'booking-4',
        professionalId: 'mary-evans',
        professionalName: 'Mary "The Fixer" Evans',
        customerId: 'some-cust-789',
        customerName: 'Alice Brown',
        date: '2025-07-01',
        time: '08:00-09:00',
        description: 'Installation of new bathroom vanity and sink.',
        customerPhone: '+35655443322',
        status: 'Pending'
    },
    {
        id: 'booking-5',
        professionalId: 'mary-evans',
        professionalName: 'Mary "The Fixer" Evans',
        customerId: 'another-cust-456',
        customerName: 'Mark Smith',
        date: '2025-07-05',
        time: '11:00-12:00',
        description: 'Pipe repair in utility room.',
        customerPhone: '+35677889900',
        status: 'Confirmed'
    },
    // Sample booking for jane-doe-123 as customer
    {
        id: 'booking-cust-1',
        professionalId: 'mark-spark',
        professionalName: 'Mark "Sparky" Davis',
        customerId: 'jane-doe-123',
        customerName: 'Jane Doe',
        date: '2025-08-10',
        time: '13:00-14:00',
        description: 'Light fixture installation in living room.',
        customerPhone: '+35699112233',
        status: 'Pending'
    },
    {
        id: 'booking-cust-2',
        professionalId: 'lisa-brush',
        professionalName: 'Lisa "The Brush" White',
        customerId: 'jane-doe-123',
        customerName: 'Jane Doe',
        date: '2025-07-01', // Past booking for testing past bookings display
        time: '09:00-11:00',
        description: 'Bedroom repainting.',
        customerPhone: '+35699112233',
        status: 'Confirmed'
    }
];

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABazepGHmdDtJ3qfgBPbZgLTEhsD8i8ks",
    authDomain: "fixerupper-d3d19.firebaseapp.com",
    projectId: "fixerupper-d3d19",
    storageBucket: "fixerupper-d3d19.firebasestorage.app",
    messagingSenderId: "536236224510",
    appId: "1:536236224510:web:72e5d1b4ae35d9368edaaf",
    measurementId: "G-78WR2HXYTZ"
  };

  // Initialize Firebase
  const appId = initializeApp(firebaseConfig);
  const analytics = getAnalytics(appId);

    // Elements from professional-apply-page.html (professional application form)
    const mainServiceCheckboxesContainer = document.getElementById('mainServiceCheckboxes');
    const specificServicesCheckboxesDiv = document.getElementById('specificServicesCheckboxes');
    const professionalApplicationForm = document.getElementById('professionalApplicationForm');
    const formMessage = document.getElementById('formMessage'); // Generic form message div
    const countrySelectApply = document.getElementById('country'); // For professional apply page
    const localitySelectApply = document.getElementById('locality'); // For professional apply page
    const profSignupCountryCodeSelect = document.getElementById('profSignupCountryCode'); // For professional signup page mobile
    const profSignupMobileNumberInput = document.getElementById('mobileNumber'); // For professional signup page mobile

    // Elements for login.html
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    // Using 'formMessage' for login page as well, assuming it's the only one on that page for messages

    // Elements for customer-signup.html
    const customerSignupForm = document.getElementById('customerSignupForm');
    const custSignupCountryCodeSelect = document.getElementById('custSignupCountryCode'); // For customer signup mobile
    const custSignupMobileNumberInput = document.getElementById('mobileNumber'); // For customer signup mobile
    // Reusing formMessage for customer signup page


    // Elements for header buttons (present on all pages)
    const loginHeaderButton = document.getElementById('loginHeaderButton');
    const signUpHeaderButton = document.getElementById('signUpHeaderButton');

    // Elements for service-listing.html
    const serviceTitleElement = document.getElementById('serviceTitle'); // For dynamic banner H1
    const serviceDescriptionElement = document.getElementById('serviceDescription'); // For dynamic banner P
    const availableProfessionalsTitle = document.getElementById('availableProfessionalsTitle'); // For dynamic section H2
    const filterCountrySelect = document.getElementById('filterCountry');
    const filterLocalitySelect = document.getElementById('filterLocality');
    const minRatingSelect = document.getElementById('minRating');
    const sortBySelect = document.getElementById('sortBy');
    const serviceDisplayContainer = document.getElementById('serviceDisplay'); // The main container for service cards

    // Elements for professional-account.html
    const professionalProfileForm = document.getElementById('professionalProfileForm');
    const profFirstNameInput = document.getElementById('profFirstName');
    const profLastNameInput = document.getElementById('profLastName');
    const profEmailInput = document.getElementById('profEmail');
    const profCountryCodeSelect = document.getElementById('profCountryCode'); // New element for country code
    const profMobileNumberInput = document.getElementById('profMobileNumber');
    const profCountrySelect = document.getElementById('profCountry');
    const profLocalitySelect = document.getElementById('profLocality');
    const profilePhotoPreview = document.getElementById('profilePhotoPreview');
    const uploadPhotoInput = document.getElementById('uploadPhoto');
    // const profSpecialtyInput = document.getElementById('profSpecialty'); // This element is removed from HTML
    const profMainServiceCheckboxesContainer = document.getElementById('profMainServiceCheckboxes');
    const profSpecificServicesCheckboxesDiv = document.getElementById('profSpecificServicesCheckboxes');
    const profDescriptionTextarea = document.getElementById('profDescription');
    const profileUpdateMessage = document.getElementById('profileUpdateMessage');
    const deleteAccountButton = document.querySelector('.dashboard-section.account-settings .button-delete');
    const deleteAccountMessage = document.getElementById('deleteAccountMessage');
    const manageAllBookingsButton = document.getElementById('manageAllBookingsButton'); // Added for professional dashboard

    // Elements for customer-account.html
    const customerProfileForm = document.getElementById('customerProfileForm');
    const custFirstNameInput = document.getElementById('custFirstName');
    const custLastNameInput = document.getElementById('custLastName');
    const custEmailInput = document.getElementById('custEmail');
    const custCountryCodeSelect = document.getElementById('custCountryCode'); // New element for country code
    const custMobileNumberInput = document.getElementById('custMobileNumber');
    const custProfilePhotoPreview = document.getElementById('custProfilePhotoPreview');
    const uploadCustPhotoInput = document.getElementById('uploadCustPhoto');
    const customerProfileUpdateMessage = document.getElementById('customerProfileUpdateMessage');
    const deleteCustomerAccountButton = document.getElementById('deleteCustomerAccountButton');
    const deleteCustomerAccountMessage = document.getElementById('deleteCustomerAccountMessage');
    const viewMyBookingsButton = document.getElementById('viewMyBookingsButton'); // Added for customer dashboard

    // Elements for plumber-profile.html (the current page being referenced)
    const messageJohnButton = document.getElementById('messageJohnButton');
    const bookAppointmentButton = document.querySelector('.profile-book-button'); // Get the book appointment button

    // Elements for messaging-page.html
    const messageThreadsList = document.getElementById('messageThreadsList');
    const activeConversationHeader = document.getElementById('activeConversationHeader');
    const conversationDisplay = document.getElementById('conversationDisplay');
    const messageInputArea = document.getElementById('messageInputArea');
    const messageTextarea = document.getElementById('messageTextarea');
    const sendMessageButton = document.getElementById('sendMessageButton');

    // Elements for professional-bookings.html
    const unconfirmedBookingsList = document.getElementById('unconfirmedBookingsList');
    const confirmedBookingsList = document.getElementById('confirmedBookingsList');
    const noUnconfirmedBookingsMessage = document.getElementById('noUnconfirmedBookings');
    const noConfirmedBookingsMessage = document.getElementById('noConfirmedBookings');

    // Elements for customer-bookings.html
    const customerUpcomingBookingsList = document.getElementById('customerUpcomingBookingsList');
    const customerPastBookingsList = document.getElementById('customerPastBookingsList');
    const noCustomerUpcomingBookingsMessage = document.getElementById('noCustomerUpcomingBookings');
    const noCustomerPastBookingsMessage = document.getElementById('noCustomerPastBookings');


    let currentServiceType = null; // Will store 'plumbing', 'carpentry', etc.
    let currentProfessionalsData = []; // The array of professionals for the current service
    let activeProfessionalId = null; // Stores the ID of the professional in the active conversation

    // Function to load customer data from Firestore
    async function loadCustomerDataFromFirestore() {
        if (!db || !currentUserId) {
            console.log("Firestore or currentUserId not available to load customer data.");
            return;
        }
        const customersCol = collection(db, `artifacts/${appId}/public/data/customers`);
        const q = query(customersCol, where('authUid', '==', currentUserId)); // Assuming you store Firebase Auth UID
        try {
            const querySnapshot = await getDocs(q);
            customerData = []; // Clear existing in-memory data
            querySnapshot.forEach(doc => {
                customerData.push({ id: doc.id, ...doc.data() });
            });
            console.log("Customer data loaded from Firestore:", customerData);
            // If on a customer-specific page, re-render with loaded data
            if (customerProfileForm && localStorage.getItem('loggedInUserType') === 'customer') {
                const loggedInUser = localStorage.getItem('loggedInUser');
                const customer = findCustomerByUsername(loggedInUser);
                if (customer) loadCustomerProfile(customer);
            }
        } catch (error) {
            console.error("Error loading customer data from Firestore:", error);
        }
    }


    // --- Functions for Header Buttons (Login/Logout, Account/Sign Up) ---
    function handleAuthButtons() {
        // Debugging: Check if buttons are found
        if (loginHeaderButton) {
            console.log("Login button found:", loginHeaderButton);
        } else {
            console.error("Login button with ID 'loginHeaderButton' NOT found.");
        }
        if (signUpHeaderButton) {
            console.log("Sign Up button found:", signUpHeaderButton);
        } else {
            console.error("Sign Up button with ID 'signUpHeaderButton' NOT found.");
        }

        if (loginHeaderButton && signUpHeaderButton) {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const loggedInUser = localStorage.getItem('loggedInUser'); // Stores username
            const loggedInUserType = localStorage.getItem('loggedInUserType'); // 'customer' or 'professional'

            if (isLoggedIn) {
                // If user is logged in, change buttons to "Account" and "Logout"
                loginHeaderButton.textContent = 'Account';
                loginHeaderButton.onclick = () => {
                    console.log("Redirecting to account page...");
                    if (loggedInUserType === 'professional') {
                        window.location.href = 'professional-account-page.html';
                    } else if (loggedInUserType === 'customer') {
                        window.location.href = 'customer-account.html'; // Corrected to customer-account.html
                    } else {
                        // Default fallback or prompt for account type if missing
                        console.log('Logged in user type unknown, redirecting to general account area or prompting.');
                    }
                };
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.className = 'login-button';

                signUpHeaderButton.textContent = 'Logout';
                signUpHeaderButton.style.backgroundColor = 'var(--secondary-charcoal)';
                signUpHeaderButton.style.color = 'var(--text-light)';
                signUpHeaderButton.className = 'cta-button';
                signUpHeaderButton.onclick = async () => { // Made async for signOut
                    console.log("Logging out...");
                    if (auth) {
                        try {
                            await auth.signOut();
                            console.log("User signed out from Firebase Auth.");
                        } catch (error) {
                            console.error("Error signing out:", error);
                        }
                    }
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('loggedInUser');
                    localStorage.removeItem('loggedInUserType'); // Clear user type on logout
                    window.location.href = 'index.html';
                };
            } else {
                // If user is NOT logged in, show "Login" and "Sign Up" buttons
                loginHeaderButton.textContent = 'Login';
                loginHeaderButton.className = 'login-button';
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.onclick = () => {
                    console.log("Redirecting to login.html...");
                    window.location.href = 'login.html'; // Redirect to login page
                };

                signUpHeaderButton.textContent = 'Sign Up';
                signUpHeaderButton.className = 'cta-button';
                signUpHeaderButton.style.backgroundColor = '';
                signUpHeaderButton.style.color = '';
                signUpHeaderButton.onclick = () => {
                    console.log("Redirecting to signup.html...");
                    window.location.href = 'signup.html'; // Redirect to the signup choice page
                };
            }
        }
    }

    // --- Functions for Dynamic Service Listing Page (service-listing.html) ---

    // Function to dynamically update page content based on service type
    function updateServicePageContent(serviceType) {
        let title = "Find Trusted Tradespeople";
        let description = "Browse and book professionals for various services.";
        let sectionTitle = "Available Professionals";
        let bannerImageText = "Service Listing Banner"; // Placeholder for banner image

        switch (serviceType) {
            case 'plumbing':
                title = "Fixalo – Plumbing Services";
                description = "Find highly-rated, reliable plumbers for all your needs.";
                sectionTitle = "Available Plumbers";
                bannerImageText = "Plumbing Services";
                break;
            case 'carpentry':
                title = "Fixalo – Carpentry Services";
                description = "Discover skilled carpenters for custom work, repairs, and installations.";
                sectionTitle = "Available Carpenters";
                bannerImageText = "Carpentry Services";
                break;
            case 'electrical':
                title = "Fixalo – Electrical Services";
                description = "Connect with certified electricians for safe and efficient electrical solutions.";
                sectionTitle = "Available Electricians";
                bannerImageText = "Electrical Services";
                break;
            case 'painting':
                title = "Fixalo – Painting Services";
                description = "Transform your space with professional painters for interior and exterior jobs.";
                sectionTitle = "Available Painters";
                bannerImageText = "Painting Services";
                break;
            case 'cleaning':
                title = "Fixalo – Cleaning Services";
                description = "Book top-rated cleaners for residential, commercial, and deep cleaning.";
                sectionTitle = "Available Cleaners";
                bannerImageText = "Cleaning Services";
                break;
            case 'blacksmithing':
                title = "Fixalo – Blacksmithing Services";
                description = "Find master blacksmiths for custom metalwork, repairs, and artistic creations.";
                sectionTitle = "Available Blacksmiths";
                bannerImageText = "Blacksmithing Services";
                break;
            default:
                break;
        }

        document.title = title;
        const pageBanner = document.querySelector('.page-banner'); // Ensure this is defined
        if (serviceTitleElement) {
            if (pageBanner) {
                pageBanner.style.backgroundImage = `linear-gradient(rgba(54, 69, 79, 0.7), rgba(54, 69, 79, 0.7)), url('https://placehold.co/1600x600/36454F/FFFFFF?text=${encodeURIComponent(bannerImageText)}')`;
            }
            serviceTitleElement.textContent = title.replace('Fixalo – ', '');
        }
        if (serviceDescriptionElement) {
            serviceDescriptionElement.textContent = description;
        }
        if (availableProfessionalsTitle) {
            availableProfessionalsTitle.textContent = sectionTitle;
        }
    }

    function populateCountryFilters(professionalsData) {
        if (!filterCountrySelect) return;

        const uniqueCountries = new Set();
        professionalsData.forEach(pro => uniqueCountries.add(pro.country));

        filterCountrySelect.innerHTML = '<option value="all">All Countries</option>';
        Array.from(uniqueCountries).sort().forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            filterCountrySelect.appendChild(option);
        });
        populateLocalityFilters(professionalsData);
    }

    function populateLocalityFilters(professionalsData) {
        if (!filterLocalitySelect) return;

        filterLocalitySelect.innerHTML = '<option value="all">All Localities</option>';
        filterLocalitySelect.disabled = true;

        const selectedCountry = filterCountrySelect.value;
        if (selectedCountry && selectedCountry !== 'all' && countriesAndLocalities[selectedCountry]) {
            const uniqueLocalities = new Set();
            professionalsData.filter(p => p.country === selectedCountry)
                        .forEach(p => uniqueLocalities.add(p.locality));

            Array.from(uniqueLocalities).sort().forEach(locality => {
                const option = document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                filterLocalitySelect.appendChild(option);
            });
            filterLocalitySelect.disabled = false;
        }
    }

    function displayProfessionals(professionalsToDisplay) {
        if (!serviceDisplayContainer) return;

        serviceDisplayContainer.innerHTML = '';

        if (professionalsToDisplay.length === 0) {
            serviceDisplayContainer.innerHTML = '<p class="no-results-message">No professionals found matching your criteria.</p>';
            return;
        }

        // Sort professionals: premium first, then by rating, then by name
        professionalsToDisplay.sort((a, b) => {
            // Premium status (true comes before false)
            if (a.isPremium && !b.isPremium) return -1;
            if (!a.isPremium && b.isPremium) return 1;
            
            // If both are premium or both are not, sort by promotionRank (lower number = higher rank)
            if (a.isPremium && b.isPremium) {
                if (a.promotionRank !== undefined && b.promotionRank !== undefined) {
                    return a.promotionRank - b.promotionRank;
                }
            }

            // Then by rating (highest first)
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            // Then by name (alphabetical)
            return a.name.localeCompare(b.name);
        });


        professionalsToDisplay.forEach(professional => {
            const professionalCard = document.createElement('div');
            professionalCard.className = 'plumber-card';
            // Add a class for premium professionals for styling
            if (professional.isPremium) {
                professionalCard.classList.add('premium-professional');
            }

            professionalCard.innerHTML = `
                <div class="plumber-header">
                    <img src="${professional.avatar}" alt="Professional ${professional.name} Profile" class="plumber-avatar">
                    <h3>${professional.name}</h3>
                    ${professional.isPremium ? '<span class="premium-badge"><i class="fas fa-star"></i> Premium</span>' : ''}
                </div>
                <p class="plumber-specialty">${professional.specialty}</p>
                <div class="plumber-rating">
                    ${generateStarRating(professional.rating)} ${professional.rating} (${professional.reviews} reviews)
                </div>
                <p class="plumber-description">${professional.description}</p>
                <button class="book-now-button" onclick="location.href='profile.html?id=${professional.id}'">View Profile</button>
            `;
            serviceDisplayContainer.appendChild(professionalCard);
        });
    }

    function generateStarRating(rating) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (rating >= i - 0.5) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        return starsHtml;
    }

    function filterAndSortProfessionals() {
        let filtered = [...currentProfessionalsData];

        const selectedCountry = filterCountrySelect ? filterCountrySelect.value : 'all';
        if (selectedCountry !== 'all') {
            filtered = filtered.filter(pro => pro.country === selectedCountry);
        }

        const selectedLocality = filterLocalitySelect ? filterLocalitySelect.value : 'all';
        if (selectedLocality !== 'all') {
            filtered = filtered.filter(pro => pro.locality === selectedLocality);
        }

        const minRating = minRatingSelect ? parseFloat(minRatingSelect.value) : 0;
        if (minRating > 0) {
            filtered = filtered.filter(pro => pro.rating >= minRating);
        }

        const sortBy = sortBySelect ? sortBySelect.value : 'default';
        if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
        } else if (sortBy === 'oldest') {
            filtered.sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));
        } else if (sortBy === 'highestRated') {
            filtered.sort((a, b) => b.rating - a.rating);
        }
        // No explicit "default" sort logic for now, relies on initial data order or a secondary sort after filters.
        // The displayProfessionals function now handles a more complex sort including premium status.

        displayProfessionals(filtered);
    }

    // --- Functions for Professional Application Form (professional-apply-page.html) ---

    function updateSpecificServices(targetSpecificServicesCheckboxesDiv, targetMainServiceCheckboxesContainer, isProfileEdit = false, currentProfessionalServices = []) {
        const specificDiv = targetSpecificServicesCheckboxesDiv || specificServicesCheckboxesDiv;
        const mainContainer = targetMainServiceCheckboxesContainer || mainServiceCheckboxesContainer;
        if (!specificDiv || !mainContainer) return;

        specificDiv.innerHTML = '';
        const selectedMainServiceCheckboxes = Array.from(mainContainer.querySelectorAll('input[name*="mainService"]:checked'));
        const selectedCategories = selectedMainServiceCheckboxes.map(checkbox => checkbox.value);

        if (selectedCategories.length === 0) {
            specificDiv.innerHTML = '<p class="select-hint">Select at least one \'Main Service Category\' above to see specific services.</p>';
            return;
        }

        const uniqueServices = new Set();
        selectedCategories.forEach(serviceCategory => {
            const services = servicesData[serviceCategory];
            if (services) {
                services.forEach(service => uniqueServices.add(service));
            }
        });

        if (uniqueServices.size === 0) {
             specificDiv.innerHTML = '<p class="select-hint">No specific services defined for the selected category(ies). Please describe in the "About" section.</p>';
             return;
        }

        Array.from(uniqueServices).sort().forEach(service => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // Adjust name attribute based on context (apply form vs. profile edit)
            checkbox.name = isProfileEdit ? 'profServicesOffered' : 'servicesOffered';
            checkbox.value = service;
            // Pre-check checkboxes if editing profile
            if (isProfileEdit && currentProfessionalServices.includes(service)) {
                checkbox.checked = true;
            }
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${service}`));
            specificDiv.appendChild(label);
        });
    }


    function populateApplyCountries() {
        if (!countrySelectApply) return;

        countrySelectApply.innerHTML = '<option value="">-- Select Country --</option>';
        for (const countryName in countriesAndLocalities) {
            const option = document.createElement('option');
            option.value = countryName;
            option.textContent = countryName;
            countrySelectApply.appendChild(option);
        }
    }

    function updateApplyLocalities() {
        if (!localitySelectApply) return;

        localitySelectApply.innerHTML = '<option value="">-- Select Locality --</option>';
        localitySelectApply.disabled = true;

        const selectedCountry = countrySelectApply.value;
        if (selectedCountry && countriesAndLocalities[selectedCountry]) {
            const localities = countriesAndLocalities[selectedCountry].sort();
            localities.forEach(locality => {
                const option = document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                localitySelectApply.appendChild(option);
            });
            localitySelectApply.disabled = false;
        }
    }

    // --- Functions for Professional Account Page (professional-account.html) ---

    // Function to find a professional by username (which is stored as ID for professionals)
    function findProfessionalByUsername(username) {
        for (const serviceType in tradespeopleData) {
            const professionals = tradespeopleData[serviceType];
            const foundPro = professionals.find(pro => pro.id === username); // Match by ID
            if (foundPro) {
                return foundPro;
            }
        }
        return null;
    }

    // Function to find a professional by ID (used for messaging and bookings display)
    function findProfessionalById(proId) {
        for (const serviceType in tradespeopleData) {
            const professionals = tradespeopleData[serviceType];
            const foundPro = professionals.find(pro => pro.id === proId);
            if (foundPro) {
                return foundPro;
            }
        }
        return null;
    }

    // Function to populate professional profile form with data
    function loadProfessionalProfile(professional) {
        if (!professionalProfileForm || !professional) return;

        profFirstNameInput.value = professional.name.split(' ')[0] || '';
        profLastNameInput.value = professional.name.split(' ').slice(-1)[0] || '';
        profEmailInput.value = professional.email || 'not-available@example.com';

        // Populate country dial code dropdown
        if (profCountryCodeSelect) {
            populateCountryDialCodes(profCountryCodeSelect, professional.mobileNumber);
        }
        // Populate mobile number input (without dial code)
        if (profMobileNumberInput && professional.mobileNumber) {
             const dialCode = Object.values(countryDialCodes).find(code => professional.mobileNumber.startsWith(code));
             if (dialCode) {
                 profMobileNumberInput.value = professional.mobileNumber.substring(dialCode.length);
             } else {
                 profMobileNumberInput.value = professional.mobileNumber;
             }
        } else {
            profMobileNumberInput.value = '';
        }
        
        // Populate Countries and Localities for profile form
        populateProfCountries(professional.country);
        // After populating countries, wait for it to render then populate localities
        setTimeout(() => {
            populateProfLocalities(professional.country, professional.locality);
        }, 0);


        profilePhotoPreview.src = professional.avatar || 'https://placehold.co/150x150/CCCCCC/000000?text=No+Photo';
        // profSpecialtyInput.value = professional.specialty || ''; // This line is now removed

        // Handle main service checkboxes
        Array.from(profMainServiceCheckboxesContainer.querySelectorAll('input[name="profMainService"]')).forEach(checkbox => {
            // Check if the professional's specific services array contains any service from this category
            const categoryServices = servicesData[checkbox.value] || [];
            const isCategorySelected = professional.specificServices && professional.specificServices.some(service => categoryServices.includes(service));
            checkbox.checked = isCategorySelected;
        });


        // Dynamically update specific services checkboxes based on selected main services
        // Pass the actual checkboxes container and also indicate it's for profile edit
        updateSpecificServices(profSpecificServicesCheckboxesDiv, profMainServiceCheckboxesContainer, true, professional.specificServices || []);
    }

    // Populate countries dropdown for professional account page
    function populateProfCountries(selectedCountry = '') {
        if (!profCountrySelect) return;

        profCountrySelect.innerHTML = '<option value="">-- Select Country --</option>';
        for (const countryName in countriesAndLocalities) {
            const option = document.createElement('option');
            option.value = countryName;
            option.textContent = countryName;
            if (countryName === selectedCountry) {
                option.selected = true;
            }
            profCountrySelect.appendChild(option);
        }
    }

    // Update localities dropdown for professional account page
    function populateProfLocalities(country, selectedLocality = '') {
        if (!profLocalitySelect) return;

        profLocalitySelect.innerHTML = '<option value="">-- Select Locality --</option>';
        profLocalitySelect.disabled = true;

        if (country && countriesAndLocalities[country]) {
            const localities = countriesAndLocalities[country].sort();
            localities.forEach(locality => {
                const option = document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                if (locality === selectedLocality) {
                    option.selected = true;
                }
                profLocalitySelect.appendChild(option);
            });
            profLocalitySelect.disabled = false;
        }
    }

    // Populate country dial codes dropdown
    function populateCountryDialCodes(selectElement, currentMobileNumber = '') {
        if (!selectElement) return;

        selectElement.innerHTML = ''; // Clear existing options
        let defaultCode = '';

        // Add a default empty option or a common one like Malta
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "--";
        selectElement.appendChild(defaultOption);

        const sortedCountryNames = Object.keys(countryDialCodes).sort();
        sortedCountryNames.forEach(country => {
            const code = countryDialCodes[country];
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${country} (${code})`;
            selectElement.appendChild(option);

            // Set selected option based on currentMobileNumber
            if (currentMobileNumber.startsWith(code) && (defaultCode === '' || code.length > defaultCode.length)) {
                defaultCode = code;
            }
        });

        if (defaultCode) {
            selectElement.value = defaultCode;
        } else if (countryDialCodes["Malta"]) { // Fallback to Malta if no match
            selectElement.value = countryDialCodes["Malta"];
        } else {
            selectElement.value = ''; // Ensure no code is pre-selected if no match and no Malta
        }
    }

    // --- Functions for Customer Account Page (customer-account.html) ---

    // Function to find a customer by username
    function findCustomerByUsername(username) {
        return customerData.find(cust => cust.username.toLowerCase() === username.toLowerCase());
    }

    // Function to load customer profile data into the form
    function loadCustomerProfile(customer) {
        if (!customerProfileForm || !customer) return;

        custFirstNameInput.value = customer.name.split(' ')[0] || '';
        custLastNameInput.value = customer.name.split(' ').slice(-1)[0] || '';
        custEmailInput.value = customer.email || 'not-available@example.com';
        
        // Populate country dial code dropdown for customer profile
        if (custCountryCodeSelect) {
            populateCountryDialCodes(custCountryCodeSelect, customer.mobileNumber);
        }
        // Populate mobile number input (without dial code)
        if (custMobileNumberInput && customer.mobileNumber) {
            const dialCode = Object.values(countryDialCodes).find(code => customer.mobileNumber.startsWith(code));
            if (dialCode) {
                custMobileNumberInput.value = customer.mobileNumber.substring(dialCode.length);
            } else {
                custMobileNumberInput.value = customer.mobileNumber;
            }
        } else {
            custMobileNumberInput.value = '';
        }

        custProfilePhotoPreview.src = customer.avatar || 'https://placehold.co/150x150/CCCCCC/000000?text=No+Photo';
    }

    // --- Functions for Messaging Page (messaging-page.html) ---

    // Function to save messages to localStorage
    function saveMessages() {
        localStorage.setItem('messagesData', JSON.stringify(messagesData));
    }

    // Function to load and display message threads
    function loadMessageThreads() {
        if (!messageThreadsList) return;

        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            messageThreadsList.innerHTML = '<p class="loading-message">Please log in to view your messages.</p>';
            return;
        }

        const customerMessages = messagesData.filter(msg => msg.from === loggedInUser);
        const professionalMessages = messagesData.filter(msg => msg.to === loggedInUser); // Messages sent *to* the current user (if they are a professional)

        const involvedProfessionalIds = new Set();
        customerMessages.forEach(msg => involvedProfessionalIds.add(msg.to));
        // If current user is a professional, they'd see threads from customers
        // This demo assumes customer-centric messaging, so focusing on 'to' professional

        messageThreadsList.innerHTML = ''; // Clear existing threads

        if (involvedProfessionalIds.size === 0) {
            messageThreadsList.innerHTML = '<p class="empty-conversation-message">No active conversations found. Send a message from a professional\'s profile to start one!</p>';
            return;
        }

        involvedProfessionalIds.forEach(proId => {
            const professional = findProfessionalById(proId);
            if (professional) {
                // Get the last message in this thread for a preview
                const threadMessages = messagesData.filter(msg =>
                    (msg.from === loggedInUser && msg.to === proId) ||
                    (msg.from === proId && msg.to === loggedInUser) // Include messages from pro to customer
                ).sort((a, b) => a.timestamp - b.timestamp); // Sort by time to get last

                const lastMessage = threadMessages[threadMessages.length - 1];
                const lastMessagePreview = lastMessage ?
                    (lastMessage.from === loggedInUser ? 'You: ' : `${professional.name.split(' ')[0]}: `) + lastMessage.text.substring(0, 40) + (lastMessage.text.length > 40 ? '...' : '')
                    : 'No messages yet.';

                const threadItem = document.createElement('div');
                threadItem.className = 'message-thread-item';
                threadItem.dataset.professionalId = proId;
                threadItem.innerHTML = `
                    <img src="${professional.avatar}" alt="${professional.name}" class="thread-avatar">
                    <div class="thread-info">
                        <h4>${professional.name}</h4>
                        <p>${lastMessagePreview}</p>
                    </div>
                `;
                threadItem.addEventListener('click', () => {
                    loadConversation(proId);
                    // Add an active class to the selected thread
                    Array.from(messageThreadsList.children).forEach(item => item.classList.remove('active'));
                    threadItem.classList.add('active');
                });
                messageThreadsList.appendChild(threadItem);
            }
        });
    }

    // Function to load a specific conversation
    function loadConversation(professionalId) {
        if (!conversationDisplay || !activeConversationHeader || !messageInputArea) return;

        activeProfessionalId = professionalId;
        const loggedInUser = localStorage.getItem('loggedInUser');
        const professional = findProfessionalById(professionalId);

        if (!professional) {
            activeConversationHeader.innerHTML = '<h3>Professional not found.</h3>';
            conversationDisplay.innerHTML = '<p class="empty-conversation-message">Could not load conversation.</p>';
            messageInputArea.style.display = 'none';
            return;
        }

        activeConversationHeader.innerHTML = `<h3><img src="${professional.avatar}" class="header-avatar"> ${professional.name}</h3>`;
        conversationDisplay.innerHTML = ''; // Clear previous conversation
        messageInputArea.style.display = 'flex'; // Show input area

        const conversation = messagesData.filter(msg =>
            (msg.from === loggedInUser && msg.to === professionalId) ||
            (msg.from === professionalId && msg.to === loggedInUser)
        ).sort((a, b) => a.timestamp - b.timestamp); // Sort by time

        if (conversation.length === 0) {
            conversationDisplay.innerHTML = '<p class="empty-conversation-message">Start a new conversation!</p>';
        } else {
            conversation.forEach(msg => {
                conversationDisplay.appendChild(renderMessage(msg, loggedInUser));
            });
            // Scroll to the bottom of the conversation
            conversationDisplay.scrollTop = conversationDisplay.scrollHeight;
        }
    }

    // Helper to render individual message bubbles
    function renderMessage(message, loggedInUser) {
        const messageBubble = document.createElement('div');
        messageBubble.className = `message-bubble ${message.from === loggedInUser ? 'sent' : 'received'}`;
        
        const timestamp = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageBubble.innerHTML = `
            <p>${message.text}</p>
            <span class="message-timestamp">${timestamp}</span>
        `;
        return messageBubble;
    }

    // Function to send a message
    function sendMessage() {
        if (!activeProfessionalId || !messageTextarea || !conversationDisplay) return;

        const messageText = messageTextarea.value.trim();
        if (messageText === '') return;

        const loggedInUser = localStorage.getItem('loggedInUser');
        const newMessage = {
            id: 'msg-' + Date.now(),
            from: loggedInUser,
            to: activeProfessionalId,
            text: messageText,
            timestamp: Date.now(),
            isRead: false
        };

        messagesData.push(newMessage);
        saveMessages(); // Persist to localStorage

        conversationDisplay.appendChild(renderMessage(newMessage, loggedInUser));
        messageTextarea.value = ''; // Clear input
        conversationDisplay.scrollTop = conversationDisplay.scrollHeight; // Scroll to bottom

        // Simulate a reply from the professional after a short delay (for demo)
        setTimeout(() => {
            const professional = findProfessionalById(activeProfessionalId);
            if (professional) {
                // Adjust the reply to use specific services if available, otherwise general specialty
                const replySpecialty = professional.specificServices && professional.specificServices.length > 0
                    ? professional.specificServices[0].toLowerCase() // Use first specific service
                    : professional.specialty.split(',')[0].toLowerCase(); // Fallback to main specialty
                
                const replyText = `Thanks for your message, I'll get back to you shortly, I'm just busy with a ${replySpecialty} job right now!`;
                const replyMessage = {
                    id: 'msg-' + (Date.now() + 1),
                    from: professional.id, // Professional's ID
                    to: loggedInUser, // Customer's username
                    text: replyText,
                    timestamp: Date.now() + 100, // Slightly later timestamp
                    isRead: false
                };
                messagesData.push(replyMessage);
                saveMessages();
                conversationDisplay.appendChild(renderMessage(replyMessage, loggedInUser));
                conversationDisplay.scrollTop = conversationDisplay.scrollHeight;
                loadMessageThreads(); // Update threads list to show new activity/unread status if implemented
            }
        }, 2000);
    }


    // --- Functions for Bookings Page (professional-bookings.html) ---

    // Function to save bookings to localStorage
    function saveBookings() {
        localStorage.setItem('bookingsData', JSON.stringify(bookingsData));
    }

    // Function to load and display professional's bookings
    function loadProfessionalBookings() {
        if (!unconfirmedBookingsList || !confirmedBookingsList) return;

        const loggedInUser = localStorage.getItem('loggedInUser'); // This is the professional's username
        const loggedInUserType = localStorage.getItem('loggedInUserType');

        if (!loggedInUser || loggedInUserType !== 'professional') {
            unconfirmedBookingsList.innerHTML = '<p class="loading-message">Please log in as a professional to view bookings.</p>';
            confirmedBookingsList.innerHTML = ''; // Clear content if not logged in as professional
            noUnconfirmedBookingsMessage.style.display = 'none';
            noConfirmedBookingsMessage.style.display = 'none';
            return;
        }

        const currentProfessional = findProfessionalByUsername(loggedInUser);
        if (!currentProfessional) {
            unconfirmedBookingsList.innerHTML = '<p class="loading-message">Professional data not found.</p>';
            confirmedBookingsList.innerHTML = '';
            noUnconfirmedBookingsMessage.style.display = 'none';
            noConfirmedBookingsMessage.style.display = 'none';
            return;
        }

        unconfirmedBookingsList.innerHTML = '';
        confirmedBookingsList.innerHTML = '';
        let hasUnconfirmed = false;
        let hasConfirmed = false;

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to start of day for comparison

        bookingsData.filter(booking => booking.professionalId === currentProfessional.id)
                    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date
                    .forEach(booking => {
            const bookingDate = new Date(booking.date);
            bookingDate.setHours(0, 0, 0, 0); // Normalize booking date

            // Date validation: only show bookings for today or later
            if (bookingDate < today) {
                // Optionally handle past pending bookings (e.g., mark as 'missed' or 'expired')
                return; // Skip past bookings for display
            }

            const bookingCard = document.createElement('div');
            bookingCard.className = 'booking-card';
            bookingCard.innerHTML = `
                <div class="booking-card-header">
                    <h4>${booking.description}</h4>
                    <span class="booking-card-date-time">${booking.date} at ${booking.time.split('-')[0]}</span>
                </div>
                <div class="booking-detail-item"><strong>Customer:</strong> ${booking.customerName}</div>
                <div class="booking-detail-item"><strong>Contact:</strong> ${booking.customerPhone || 'N/A'}</div>
                <div class="booking-actions">
                    ${booking.status === 'Pending' ? `
                        <button class="button-confirm" data-booking-id="${booking.id}">Confirm</button>
                        <button class="button-reject" data-booking-id="${booking.id}">Reject</button>
                    ` : `
                        <span class="booking-status-badge">${booking.status}</span>
                    `}
                </div>
            `;

            if (booking.status === 'Pending') {
                unconfirmedBookingsList.appendChild(bookingCard);
                hasUnconfirmed = true;
            } else if (booking.status === 'Confirmed') {
                confirmedBookingsList.appendChild(bookingCard);
                hasConfirmed = true;
            }
        });

        if (!hasUnconfirmed) {
            noUnconfirmedBookingsMessage.style.display = 'block';
        } else {
            noUnconfirmedBookingsMessage.style.display = 'none';
        }

        if (!hasConfirmed) {
            noConfirmedBookingsMessage.style.display = 'block';
        } else {
            noConfirmedBookingsMessage.style.display = 'none';
        }

        // Attach event listeners for Confirm/Reject buttons
        unconfirmedBookingsList.querySelectorAll('.button-confirm').forEach(button => {
            button.addEventListener('click', (event) => confirmAppointment(event.target.dataset.bookingId));
        });
        unconfirmedBookingsList.querySelectorAll('.button-reject').forEach(button => {
            button.addEventListener('click', (event) => rejectAppointment(event.target.dataset.bookingId));
        });
    }

    function confirmAppointment(bookingId) {
        const bookingIndex = bookingsData.findIndex(b => b.id === bookingId);
        if (bookingIndex !== -1) {
            bookingsData[bookingIndex].status = 'Confirmed';
            saveBookings();
            loadProfessionalBookings(); // Reload to update sections
            showTemporaryMessage('Appointment confirmed!', 'success');
        }
    }

    function rejectAppointment(bookingId) {
        const bookingIndex = bookingsData.findIndex(b => b.id === bookingId);
        if (bookingIndex !== -1) {
            bookingsData[bookingIndex].status = 'Rejected';
            saveBookings();
            loadProfessionalBookings(); // Reload to update sections
            showTemporaryMessage('Appointment rejected.', 'info');
        }
    }

    // --- Functions for Customer Bookings Page (customer-bookings.html) ---

    // Function to load and display customer's bookings
    function loadCustomerBookings() {
        if (!customerUpcomingBookingsList || !customerPastBookingsList) return;

        const loggedInUser = localStorage.getItem('loggedInUser'); // This is the customer's username
        const loggedInUserType = localStorage.getItem('loggedInUserType');

        if (!loggedInUser || loggedInUserType !== 'customer') {
            customerUpcomingBookingsList.innerHTML = '<p class="loading-message">Please log in as a customer to view your bookings.</p>';
            customerPastBookingsList.innerHTML = '';
            noCustomerUpcomingBookingsMessage.style.display = 'none';
            noCustomerPastBookingsMessage.style.display = 'none';
            return;
        }

        const currentCustomer = findCustomerByUsername(loggedInUser);
        if (!currentCustomer) {
            customerUpcomingBookingsList.innerHTML = '<p class="loading-message">Customer data not found.</p>';
            customerPastBookingsList.innerHTML = '';
            noCustomerUpcomingBookingsMessage.style.display = 'none';
            noCustomerPastBookingsMessage.style.display = 'none';
            return;
        }

        customerUpcomingBookingsList.innerHTML = '';
        customerPastBookingsList.innerHTML = '';
        let hasUpcoming = false;
        let hasPast = false;

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to start of day for comparison

        bookingsData.filter(booking => booking.customerId === currentCustomer.id)
                    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date
                    .forEach(booking => {
            const bookingDate = new Date(booking.date);
            bookingDate.setHours(0, 0, 0, 0); // Normalize booking date

            const bookingCard = document.createElement('div');
            bookingCard.className = 'booking-card';
            bookingCard.innerHTML = `
                <div class="booking-card-header">
                    <h4>${booking.description}</h4>
                    <span class="booking-card-date-time">${booking.date} at ${booking.time.split('-')[0]}</span>
                </div>
                <div class="booking-detail-item"><strong>Professional:</strong> ${booking.professionalName}</div>
                <div class="booking-detail-item"><strong>Status:</strong> <span class="booking-status-badge">${booking.status}</span></div>
                ${(booking.status === 'Pending' || booking.status === 'Confirmed') && bookingDate >= today ? `
                    <div class="booking-actions">
                        <button class="button-delete button-cancel" data-booking-id="${booking.id}">Cancel Booking</button>
                    </div>
                ` : ''}
            `;

            if ((booking.status === 'Pending' || booking.status === 'Confirmed') && bookingDate >= today) {
                customerUpcomingBookingsList.appendChild(bookingCard);
                hasUpcoming = true;
            } else {
                customerPastBookingsList.appendChild(bookingCard);
                hasPast = true;
            }
        });

        if (!hasUpcoming) {
            noCustomerUpcomingBookingsMessage.style.display = 'block';
        } else {
            noCustomerUpcomingBookingsMessage.style.display = 'none';
        }

        if (!hasPast) {
            noCustomerPastBookingsMessage.style.display = 'block';
        } else {
            noCustomerPastBookingsMessage.style.display = 'none';
        }

        // Attach event listeners for Cancel buttons
        customerUpcomingBookingsList.querySelectorAll('.button-cancel').forEach(button => {
            button.addEventListener('click', (event) => cancelCustomerAppointment(event.target.dataset.bookingId));
        });
    }

    function cancelCustomerAppointment(bookingId) {
        // Use a custom modal for confirmation instead of window.confirm
        const confirmModal = document.createElement('div');
        confirmModal.className = 'modal-overlay';
        confirmModal.innerHTML = `
            <div class="modal-content">
                <h3>Confirm Cancellation</h3>
                <p>Are you sure you want to cancel this booking? This action cannot be undone.</p>
                <div class="modal-buttons">
                    <button id="confirmCancelYes" class="button-delete">Yes, Cancel</button>
                    <button id="confirmCancelNo" class="button-primary">No, Keep Booking</button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmModal);

        document.getElementById('confirmCancelYes').addEventListener('click', () => {
            confirmModal.remove(); // Close modal
            const bookingIndex = bookingsData.findIndex(b => b.id === bookingId);
            if (bookingIndex !== -1) {
                bookingsData[bookingIndex].status = 'Cancelled';
                saveBookings();
                loadCustomerBookings(); // Reload to update sections
                showTemporaryMessage('Booking cancelled successfully!', 'success');
            }
        });

        document.getElementById('confirmCancelNo').addEventListener('click', () => {
            confirmModal.remove(); // Close modal
            showTemporaryMessage('Cancellation aborted.', 'info');
        });
    }


    // --- Main Initialization Logic ---

    // Initialize header buttons on all pages
    handleAuthButtons();

    // Logic specifically for professional application form (professional-apply-page.html)
    if (professionalApplicationForm) {
        populateApplyCountries();
        countrySelectApply.addEventListener('change', updateApplyLocalities);
        // Populate country dial codes for professional signup page
        if (profSignupCountryCodeSelect) {
            populateCountryDialCodes(profSignupCountryCodeSelect, ""); // Pass empty string to default to no selection
        }
        
        mainServiceCheckboxesContainer.addEventListener('change', () => {
            updateSpecificServices(specificServicesCheckboxesDiv, mainServiceCheckboxesContainer, false, []);
        });


        professionalApplicationForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const countryCode = profSignupCountryCodeSelect ? profSignupCountryCodeSelect.value : '';
            const mobileNumberRaw = profSignupMobileNumberInput.value;
            const mobileNumber = countryCode + mobileNumberRaw; // Combine dial code and number
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const selectedMainServices = Array.from(this.querySelectorAll('input[name="mainService"]:checked')).map(checkbox => checkbox.value);
            const selectedSpecificServices = Array.from(this.querySelectorAll('input[name="servicesOffered"]:checked')).map(checkbox => checkbox.value);
            const country = countrySelectApply.value;
            const locality = localitySelectApply.value;
            const description = document.getElementById('description').value;


            // Client-side Validation
            if (username.length < 5) {
                formMessage.textContent = 'Username must be at least 5 characters long.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (password.length < 8) {
                formMessage.textContent = 'Password must be at least 8 characters long.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (password !== confirmPassword) {
                formMessage.textContent = 'Password and Confirm Password do not match.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (!selectedMainServices.length) {
                formMessage.textContent = 'Please select at least one Main Service Category.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (!country || country === "") {
                formMessage.textContent = 'Please select your Country.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (!locality || locality === "") {
                formMessage.textContent = 'Please select your Locality.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (!mobileNumberRaw.match(/^\d{8}$/)) { // Regex to ensure exactly 8 digits
                 formMessage.textContent = 'Mobile number must be an 8-digit number.';
                 formMessage.className = 'form-message error';
                 formMessage.style.display = 'block';
                 return;
            }

            // Firebase Authentication for professional signup
            let authUid = null;
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                authUid = userCredential.user.uid;
                console.log("Professional Firebase Auth registered:", authUid);
            } catch (error) {
                console.error("Error registering professional with Firebase Auth:", error);
                formMessage.textContent = `Error creating account: ${error.message}`;
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }


            const newProfessional = {
                id: username.toLowerCase().replace(/\s/g, '-'), // Use username as ID for easy lookup
                authUid: authUid, // Store Firebase Auth UID
                name: `${firstName} "${username}" ${lastName}`,
                email: email, // Store email with professional data
                mobileNumber: mobileNumber, // Store mobile number (with dial code)
                specialty: selectedSpecificServices.length > 0 ? selectedSpecificServices.join(', ') : selectedMainServices.join(', '),
                rating: 0,
                reviews: 0,
                description: description,
                avatar: `https://placehold.co/100x100/A7D129/FFFFFF?text=${username.substring(0,2).toUpperCase()}`,
                country: country,
                locality: locality,
                joinDate: new Date().toISOString().split('T')[0],
                specificServices: selectedSpecificServices // Store specific services
            };

            // Store new professional in Firestore
            try {
                const professionalsCollection = collection(db, `artifacts/${appId}/public/data/professionals`);
                await setDoc(doc(professionalsCollection, newProfessional.id), newProfessional); // Use setDoc with custom ID
                console.log("Professional data added to Firestore:", newProfessional.id);

                formMessage.textContent = 'Application submitted! You are now logged in. Redirecting...';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', newProfessional.id); // Store the professional's ID
                localStorage.setItem('loggedInUserType', 'professional'); // Set user type
                handleAuthButtons();
                professionalApplicationForm.reset();
                updateSpecificServices();
                populateApplyCountries();
                updateApplyLocalities();

                setTimeout(() => {
                    window.location.href = 'professional-account-page.html'; // Redirect to professional account page
                }, 1500);

            } catch (e) {
                console.error("Error adding professional to Firestore:", e);
                formMessage.textContent = 'Error saving professional data. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        });
    }

    // Logic for customer-signup.html
    if (customerSignupForm) {
        // Populate country dial codes for customer signup page
        if (custSignupCountryCodeSelect) {
            populateCountryDialCodes(custSignupCountryCodeSelect, ""); // Pass empty string to default to no selection
        }

        customerSignupForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const countryCode = custSignupCountryCodeSelect ? custSignupCountryCodeSelect.value : '';
            const mobileNumberRaw = custSignupMobileNumberInput.value;
            const mobileNumber = mobileNumberRaw ? (countryCode + mobileNumberRaw) : ''; // Combine dial code and number, or empty if no raw number
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Client-side Validation
            if (username.length < 5) {
                formMessage.textContent = 'Username must be at least 5 characters long.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (password.length < 8) {
                formMessage.textContent = 'Password must be at least 8 characters long.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (password !== confirmPassword) {
                formMessage.textContent = 'Password and Confirm Password do not match.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            if (mobileNumberRaw.trim() !== '' && !mobileNumberRaw.match(/^\d{8}$/)) { // Validate if not empty
                formMessage.textContent = 'Mobile number must be an 8-digit number if provided.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }


    // Logic for login page (login.html)
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();

            formMessage.style.display = 'none'; // Use the generic formMessage
            formMessage.className = 'form-message';

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === '' || password === '') {
                formMessage.textContent = 'Please enter both username and password.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            // Determine if logging in as professional or customer based on provided username (for demo purposes)
            // In a real app, you might have separate login forms or a more robust way to distinguish.
            let userType = null;
            let targetEmail = '';

            // Try to find in professionals (assuming their 'id' is their username for login)
            let foundPro = null;
            for (const serviceType in tradespeopleData) {
                foundPro = tradespeopleData[serviceType].find(pro => pro.id === username);
                if (foundPro) {
                    userType = 'professional';
                    targetEmail = foundPro.email;
                    break;
                }
            }

            // If not found as professional, try to find as customer
            if (!userType) {
                const foundCust = customerData.find(cust => cust.username === username);
                if (foundCust) {
                    userType = 'customer';
                    targetEmail = foundCust.email;
                }
            }

            if (!targetEmail) {
                formMessage.textContent = 'Invalid username or password.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            try {
                await signInWithEmailAndPassword(auth, targetEmail, password);
                
                formMessage.textContent = `Login successful as ${userType}! Redirecting...`;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', username); // Store username/ID
                localStorage.setItem('loggedInUserType', userType); // Set user type

                setTimeout(() => {
                    if (userType === 'professional') {
                        window.location.href = 'professional-account-page.html';
                    } else {
                        window.location.href = 'customer-account.html';
                    }
                }, 1500);

            } catch (error) {
                console.error("Firebase Auth Login Error:", error);
                formMessage.textContent = 'Invalid username or password.'; // Generic message for security
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        });
    }


    // Logic specifically for generic service listing page (service-listing.html)
    if (serviceDisplayContainer && serviceTitleElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceTypeFromUrl = urlParams.get('service');

        if (serviceTypeFromUrl && tradespeopleData[serviceTypeFromUrl]) {
            currentServiceType = serviceTypeFromUrl;
            currentProfessionalsData = tradespeopleData[currentServiceType];

            updateServicePageContent(currentServiceType);
            populateCountryFilters(currentProfessionalsData);
            filterAndSortProfessionals();
            
            filterCountrySelect.addEventListener('change', () => {
                populateLocalityFilters(currentProfessionalsData);
                filterAndSortProfessionals();
            });
            filterLocalitySelect.addEventListener('change', filterAndSortProfessionals);
            minRatingSelect.addEventListener('change', filterAndSortProfessionals);
            sortBySelect.addEventListener('change', filterAndSortProfessionals);

        } else {
            document.title = "Fixalo – Service Not Found";
            if (serviceTitleElement) serviceTitleElement.textContent = "Service Not Found";
            if (serviceDescriptionElement) serviceDescriptionElement.textContent = "The service you are looking for does not exist or could not be loaded.";
            if (availableProfessionalsTitle) availableProfessionalsTitle.textContent = "No Professionals Available";
            if (serviceDisplayContainer) serviceDisplayContainer.innerHTML = '<p class="no-results-message">Please go back to <a href="index.html">Home</a> and select a valid service.</p>';
            const filtersContainer = document.querySelector('.filters-container');
            if (filtersContainer) {
                filtersContainer.style.display = 'none';
            }
        }
    }

    // Logic specifically for professional account page (professional-account.html)
    if (professionalProfileForm) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loggedInUserType = localStorage.getItem('loggedInUserType');

        if (loggedInUser && loggedInUserType === 'professional') {
            const professional = findProfessionalByUsername(loggedInUser); // Find the professional's data
            if (professional) {
                loadProfessionalProfile(professional);

                // Event listener for main service checkboxes on profile page to update specific services
                profMainServiceCheckboxesContainer.addEventListener('change', () => {
                    updateSpecificServices(profSpecificServicesCheckboxesDiv, profMainServiceCheckboxesContainer, true, professional.specificServices || []);
                });

                // Event listener for country change on profile page
                profCountrySelect.addEventListener('change', () => {
                    populateProfLocalities(profCountrySelect.value, professional.locality);
                });

                // Add event listener for "Manage All Bookings" button
                if (manageAllBookingsButton) {
                    manageAllBookingsButton.addEventListener('click', () => {
                        // Corrected path to professional-bookings.html
                        window.location.href = 'professional-bookings.html'; 
                    });
                }

            } else {
                console.error('Professional data not found for logged in user:', loggedInUser);
                professionalProfileForm.innerHTML = '<p class="form-message error">Professional profile could not be loaded. Please log in again.</p>';
                // Optionally redirect to login
            }
        } else {
            // Not logged in as a professional, redirect to login or show message
            professionalProfileForm.innerHTML = '<p class="form-message error">You must be logged in as a professional to view this page. <a href="login.html">Login here</a></p>';
            professionalProfileForm.style.textAlign = 'center';
        }

        professionalProfileForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();
            profileUpdateMessage.style.display = 'none';
            profileUpdateMessage.className = 'form-message';

            const loggedInUsername = localStorage.getItem('loggedInUser');
            if (!loggedInUsername) {
                profileUpdateMessage.textContent = 'You are not logged in.';
                profileUpdateMessage.className = 'form-message error';
                profileUpdateMessage.style.display = 'block';
                return;
            }

            // Find the professional to update in Firestore
            const professionalRef = doc(db, `artifacts/${appId}/public/data/professionals`, loggedInUsername);
            let professionalToUpdate = null;
            try {
                const docSnap = await getDoc(professionalRef);
                if (docSnap.exists()) {
                    professionalToUpdate = { id: docSnap.id, ...docSnap.data() };
                } else {
                    profileUpdateMessage.textContent = 'Could not find your professional profile.';
                    profileUpdateMessage.className = 'form-message error';
                    profileUpdateMessage.style.display = 'block';
                    return;
                }
            } catch (error) {
                console.error("Error fetching professional data for update:", error);
                profileUpdateMessage.textContent = 'Error fetching profile data. Please try again.';
                profileUpdateMessage.className = 'form-message error';
                profileUpdateMessage.style.display = 'block';
                return;
            }


            // Gather updated data from the form
            const newFirstName = profFirstNameInput.value;
            const newLastName = profLastNameInput.value;
            const newCountryCode = profCountryCodeSelect ? profCountryCodeSelect.value : '';
            const newMobileNumberRaw = profMobileNumberInput.value;
            const newMobileNumber = newCountryCode + newMobileNumberRaw; // Combine dial code and number
            const newCountry = profCountrySelect.value;
            const newLocality = profLocalitySelect.value;
            const newDescription = profDescriptionTextarea.value;
            const newMainServices = Array.from(profMainServiceCheckboxesContainer.querySelectorAll('input[name="profMainService"]:checked')).map(cb => cb.value);
            const newSpecificServices = Array.from(profSpecificServicesCheckboxesDiv.querySelectorAll('input[name="profServicesOffered"]:checked')).map(cb => cb.value);


            // Validate inputs (similar to signup form but focused on profile fields)
            if (newFirstName.trim() === '' || newLastName.trim() === '' || newMobileNumberRaw.trim() === '' || newCountry === '' || newLocality === '') {
                 profileUpdateMessage.textContent = 'Please fill in all required personal information fields.';
                 profileUpdateMessage.className = 'form-message error';
                 profileUpdateMessage.style.display = 'block';
                 return;
            }
             // Validate mobile number to be exactly 8 digits after the dial code
             if (!newMobileNumberRaw.match(/^\d{8}$/)) { // Changed regex to exactly 8 digits
                profileUpdateMessage.textContent = 'Please enter a valid 8-digit mobile number (excluding country code).';
                profileUpdateMessage.className = 'form-message error';
                profileUpdateMessage.style.display = 'block';
                return;
            }

            // Simulate file upload (for real app, this would send to server/cloud storage)
            const photoFile = uploadPhotoInput.files[0];
            let newAvatarUrl = professionalToUpdate.avatar;
            if (photoFile) {
                newAvatarUrl = URL.createObjectURL(photoFile); // Temporary URL for preview
                console.log('Simulating photo upload:', photoFile.name);
            }

            // Update the professional's data in Firestore
            try {
                await updateDoc(professionalRef, {
                    name: `${newFirstName} "${loggedInUsername}" ${newLastName}`,
                    mobileNumber: newMobileNumber,
                    country: newCountry,
                    locality: newLocality,
                    avatar: newAvatarUrl,
                    specialty: newSpecificServices.length > 0 ? newSpecificServices.join(', ') : newMainServices.join(', '),
                    description: newDescription,
                    mainServices: newMainServices,
                    specificServices: newSpecificServices
                });
                profileUpdateMessage.textContent = 'Profile updated successfully!';
                profileUpdateMessage.className = 'form-message success';
                profileUpdateMessage.style.display = 'block';
                // Also update in-memory data if needed for immediate UI reflection without re-fetch
                // Object.assign(professionalToUpdate, { ...updated fields... });
            } catch (e) {
                console.error("Error updating professional document:", e);
                profileUpdateMessage.textContent = 'Error updating profile. Please try again.';
                profileUpdateMessage.className = 'form-message error';
                profileUpdateMessage.style.display = 'block';
                return;
            }

            // Update preview image immediately
            profilePhotoPreview.src = newAvatarUrl;


            console.log('Updated Professional Data:', professionalToUpdate);
        });

        // Delete Account functionality
        if (deleteAccountButton) {
            deleteAccountButton.addEventListener('click', () => {
                deleteAccountMessage.style.display = 'none';
                deleteAccountMessage.className = 'form-message';

                // Replaced alert/confirm with custom modal logic
                const confirmModal = document.createElement('div');
                confirmModal.className = 'modal-overlay';
                confirmModal.innerHTML = `
                    <div class="modal-content">
                        <h3>Confirm Account Deletion</h3>
                        <p>Are you sure you want to permanently delete your professional account? This action cannot be undone.</p>
                        <div class="modal-buttons">
                            <button id="confirmDeleteYes" class="button-delete">Yes, Delete</button>
                            <button id="confirmDeleteNo" class="button-primary">No, Cancel</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(confirmModal);

                document.getElementById('confirmDeleteYes').addEventListener('click', async () => { // Made async
                    confirmModal.remove(); // Close modal
                    const loggedInUsername = localStorage.getItem('loggedInUser');
                    if (loggedInUsername && db && auth && auth.currentUser) {
                        try {
                            const professionalDocRef = doc(db, `artifacts/${appId}/public/data/professionals`, loggedInUsername);
                            await deleteDoc(professionalDocRef);
                            console.log("Professional document deleted from Firestore.");

                            // Also delete the Firebase Auth user
                            await auth.currentUser.delete();
                            console.log("Firebase Auth user deleted.");

                            localStorage.removeItem('isLoggedIn');
                            localStorage.removeItem('loggedInUser');
                            localStorage.removeItem('loggedInUserType');
                            deleteAccountMessage.textContent = 'Your account has been successfully deleted. Redirecting...';
                            deleteAccountMessage.className = 'form-message success';
                            deleteAccountMessage.style.display = 'block';
                            setTimeout(() => {
                                window.location.href = 'index.html';
                            }, 2000);
                        } catch (error) {
                            console.error("Error deleting professional account:", error);
                            deleteAccountMessage.textContent = `Error: Could not delete your account. ${error.message}`;
                            deleteAccountMessage.className = 'form-message error';
                            deleteAccountMessage.style.display = 'block';
                        }
                    } else {
                        deleteAccountMessage.textContent = 'You are not logged in or cannot perform this action.';
                        deleteAccountMessage.className = 'form-message error';
                        deleteAccountMessage.style.display = 'block';
                    }
                });

                document.getElementById('confirmDeleteNo').addEventListener('click', () => {
                    confirmModal.remove(); // Close modal
                    deleteAccountMessage.textContent = 'Account deletion cancelled.';
                    deleteAccountMessage.className = 'form-message'; // Clear status
                    deleteAccountMessage.style.display = 'block';
                });
            });
        }
    }


    // Logic specifically for customer account page (customer-account.html)
    if (customerProfileForm) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loggedInUserType = localStorage.getItem('loggedInUserType');

        if (loggedInUser && loggedInUserType === 'customer') {
            const customer = findCustomerByUsername(loggedInUser);
            if (customer) {
                loadCustomerProfile(customer);

                // Handle photo upload preview for customer
                if (uploadCustPhotoInput) {
                    uploadCustPhotoInput.addEventListener('change', function(event) {
                        const file = event.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = function(e) {
                                if (custProfilePhotoPreview) {
                                    custProfilePhotoPreview.src = e.target.result;
                                }
                            };
                            reader.readAsDataURL(file);
                        } else {
                            if (custProfilePhotoPreview) {
                                custProfilePhotoPreview.src = customer.avatar || 'https://placehold.co/150x150/CCCCCC/000000?text=No+Photo';
                            }
                        }
                    });
                }
                
                // Add event listener for "View My Bookings" button for customers
                if (viewMyBookingsButton) {
                    viewMyBookingsButton.addEventListener('click', () => {
                        window.location.href = 'customer-bookings.html';
                    });
                }

            } else {
                console.error('Customer data not found for logged in user:', loggedInUser);
                customerProfileForm.innerHTML = '<p class="form-message error">Customer profile could not be loaded. Please log in again.</p>';
                customerProfileForm.style.textAlign = 'center';
            }
        } else {
            customerProfileForm.innerHTML = '<p class="form-message error">You must be logged in as a customer to view this page. <a href="login.html">Login here</a></p>';
            customerProfileForm.style.textAlign = 'center';
        }

        customerProfileForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();
            customerProfileUpdateMessage.style.display = 'none';
            customerProfileUpdateMessage.className = 'form-message';

            const loggedInUsername = localStorage.getItem('loggedInUser');
            if (!loggedInUsername) {
                customerProfileUpdateMessage.textContent = 'You are not logged in.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }

            // Find the customer to update in Firestore
            const customerRef = doc(db, `artifacts/${appId}/public/data/customers`, loggedInUsername);
            let customerToUpdate = null;
            try {
                const docSnap = await getDoc(customerRef);
                if (docSnap.exists()) {
                    customerToUpdate = { id: docSnap.id, ...docSnap.data() };
                } else {
                    customerProfileUpdateMessage.textContent = 'Could not find your customer profile.';
                    customerProfileUpdateMessage.className = 'form-message error';
                    customerProfileUpdateMessage.style.display = 'block';
                    return;
                }
            } catch (error) {
                console.error("Error fetching customer data for update:", error);
                customerProfileUpdateMessage.textContent = 'Error fetching profile data. Please try again.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }


            const newFirstName = custFirstNameInput.value;
            const newLastName = custLastNameInput.value;
            const newCountryCode = custCountryCodeSelect ? custCountryCodeSelect.value : '';
            const newMobileNumberRaw = custMobileNumberInput.value;
            const newMobileNumber = newMobileNumberRaw ? (newCountryCode + newMobileNumberRaw) : ''; // Combine dial code and number, or empty if no raw number
            
            // Validate inputs
            if (newFirstName.trim() === '' || newLastName.trim() === '') {
                 customerProfileUpdateMessage.textContent = 'First name and last name are required.';
                 customerProfileUpdateMessage.className = 'form-message error';
                 customerProfileUpdateMessage.style.display = 'block';
                 return;
            }
            if (newMobileNumberRaw.trim() !== '' && !newMobileNumberRaw.match(/^\d{8}$/)) { // Validate if not empty
                customerProfileUpdateMessage.textContent = 'Please enter an 8-digit mobile number if provided.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }

            // Simulate file upload for customer photo
            const photoFile = uploadCustPhotoInput.files[0];
            let newAvatarUrl = customerToUpdate.avatar;
            if (photoFile) {
                newAvatarUrl = URL.createObjectURL(photoFile);
                console.log('Simulating customer photo upload:', photoFile.name);
            }

            // Update customer's data in Firestore
            try {
                await updateDoc(customerRef, {
                    name: `${newFirstName} ${newLastName}`,
                    mobileNumber: newMobileNumber,
                    avatar: newAvatarUrl
                });
                customerProfileUpdateMessage.textContent = 'Profile updated successfully!';
                customerProfileUpdateMessage.className = 'form-message success';
                customerProfileUpdateMessage.style.display = 'block';
                // Also update in-memory data if needed for immediate UI reflection without re-fetch
                // Object.assign(customerToUpdate, { ...updated fields... });
            } catch (e) {
                console.error("Error updating customer document:", e);
                customerProfileUpdateMessage.textContent = 'Error updating profile. Please try again.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }

            // Update preview image immediately
            if (custProfilePhotoPreview) {
                custProfilePhotoPreview.src = newAvatarUrl;
            }
            console.log('Updated Customer Data:', customerToUpdate);
        });
        // Delete Customer Account functionality
        if (deleteCustomerAccountButton) {
            deleteCustomerAccountButton.addEventListener('click', () => {
                deleteCustomerAccountMessage.style.display = 'none';
                deleteCustomerAccountMessage.className = 'form-message';

                // Custom modal for confirmation
                const confirmModal = document.createElement('div');
                confirmModal.className = 'modal-overlay'; // Use modal-overlay for styling
                confirmModal.innerHTML = `
                    <div class="modal-content">
                        <h3>Confirm Account Deletion</h3>
                        <p>Are you sure you want to permanently delete your customer account? This action cannot be undone.</p>
                        <div class="modal-buttons">
                            <button id="confirmCustDeleteYes" class="button-delete">Yes, Delete</button>
                            <button id="confirmCustDeleteNo" class="button-primary">No, Keep Booking</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(confirmModal);

                document.getElementById('confirmCustDeleteYes').addEventListener('click', async () => { // Made async
                    confirmModal.remove(); // Close modal
                    const loggedInUsername = localStorage.getItem('loggedInUser');
                    if (loggedInUsername && db && auth && auth.currentUser) {
                        try {
                            const customerDocRef = doc(db, `artifacts/${appId}/public/data/customers`, loggedInUsername);
                            await deleteDoc(customerDocRef);
                            console.log("Customer document deleted from Firestore.");

                            // Also delete the Firebase Auth user
                            await auth.currentUser.delete();
                            console.log("Firebase Auth user deleted.");

                            localStorage.removeItem('isLoggedIn');
                            localStorage.removeItem('loggedInUser');
                            localStorage.removeItem('loggedInUserType');
                            deleteCustomerAccountMessage.textContent = 'Your account has been successfully deleted. Redirecting...';
                            deleteCustomerAccountMessage.className = 'form-message success';
                            deleteCustomerAccountMessage.style.display = 'block';
                            setTimeout(() => {
                                window.location.href = 'index.html';
                            }, 2000);
                        } catch (error) {
                            console.error("Error deleting customer account:", error);
                            deleteCustomerAccountMessage.textContent = `Error: Could not delete your account. ${error.message}`;
                            deleteCustomerAccountMessage.className = 'form-message error';
                            deleteCustomerAccountMessage.style.display = 'block';
                        }
                    } else {
                        deleteCustomerAccountMessage.textContent = 'You are not logged in or cannot perform this action.';
                        deleteCustomerAccountMessage.className = 'form-message error';
                        deleteCustomerAccountMessage.style.display = 'block';
                    }
                });

                document.getElementById('confirmCustDeleteNo').addEventListener('click', () => {
                    confirmModal.remove(); // Close modal
                    deleteCustomerAccountMessage.textContent = 'Account deletion cancelled.';
                    deleteCustomerAccountMessage.className = 'form-message'; // Clear status
                    deleteCustomerAccountMessage.style.display = 'block';
                });
            });
        }
    }

    // Logic specifically for messaging-page.html
    if (messageThreadsList && conversationDisplay) {
        loadMessageThreads();

        // Event listener for sending messages
        if (sendMessageButton) {
            sendMessageButton.addEventListener('click', sendMessage);
            messageTextarea.addEventListener('keypress', (event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault(); // Prevent new line
                    sendMessage();
                }
            });
        }

        // Check if there's a professional ID in the URL to pre-load a conversation
        const urlParams = new URLSearchParams(window.location.search);
        const proIdFromUrl = urlParams.get('proId');
        if (proIdFromUrl) {
            loadConversation(proIdFromUrl);
            // Highlight the corresponding thread if it exists
            const threadItemToHighlight = document.querySelector(`.message-thread-item[data-professional-id="${proIdFromUrl}"]`);
            if (threadItemToHighlight) {
                Array.from(messageThreadsList.children).forEach(item => item.classList.remove('active'));
                threadItemToHighlight.classList.add('active');
            }
        }
    }

    // Logic for the message button on plumber-profile.html
    if (messageJohnButton) {
        messageJohnButton.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const loggedInUserType = localStorage.getItem('loggedInUserType');

            if (isLoggedIn && loggedInUserType === 'customer') {
                // Get the professional's ID from the URL or a data attribute on the button/page
                const urlParams = new URLSearchParams(window.location.search);
                const professionalId = urlParams.get('id'); // Assuming the ID is passed in the URL
                window.location.href = `messaging-page.html?proId=${professionalId}`;
            } else if (isLoggedIn && loggedInUserType === 'professional') {
                showTemporaryMessage('Professionals cannot message other professionals directly from this profile page.', 'error');
            } else {
                showTemporaryMessage('You need to be logged in as a customer to use messaging features.', 'error');
                setTimeout(() => {
                    window.location.href = 'customer-signup.html';
                }, 2000); // Redirect after 2 seconds
            }
        });
    }

    // Logic for the book appointment button on plumber-profile.html
    // Assuming this button exists on a profile page and needs to pass the proId
    if (bookAppointmentButton) {
        bookAppointmentButton.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const loggedInUserType = localStorage.getItem('loggedInUserType');

            if (isLoggedIn && loggedInUserType === 'customer') {
                // Get the professional's ID from the URL or a data attribute on the button/page
                const urlParams = new URLSearchParams(window.location.search);
                const professionalId = urlParams.get('id'); // Assuming the ID is passed in the URL
                window.location.href = `book-appointment.html?proId=${professionalId}`;
            } else {
                // Show error message using the temporary message function
                showTemporaryMessage('You need to be a customer to book an appointment. Please sign up or log in as a customer.', 'error');
                setTimeout(() => {
                    window.location.href = 'customer-signup.html';
                }, 2000); // Redirect after 2 seconds
            }
        });
    }

    // Logic for book-appointment.html (Date validation)
    const bookingDateInput = document.getElementById('bookingDate');
    if (bookingDateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const minDate = `${year}-${month}-${day}`;
        bookingDateInput.setAttribute('min', minDate);
    }


    // Global function to show temporary messages (replaces alert/confirm)
    function showTemporaryMessage(message, type = 'info', duration = 3000) {
        let messageElement = document.getElementById('tempMessageDisplay');
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.id = 'tempMessageDisplay';
            document.body.appendChild(messageElement);

            // Add basic styling for the temporary message
            const tempMessageStyle = document.createElement('style');
            tempMessageStyle.textContent = `
                #tempMessageDisplay {
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    padding: 15px 25px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: var(--text-light);
                    z-index: 1001;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                    max-width: 90%;
                    text-align: center;
                }
                #tempMessageDisplay.info {
                    background-color: var(--primary-blue);
                }
                #tempMessageDisplay.success {
                    background-color: var(--accent-lime);
                }
                #tempMessageDisplay.error {
                    background-color: var(--error-red);
                }
                #tempMessageDisplay.show {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            `;
            document.head.appendChild(tempMessageStyle);
        }

        messageElement.textContent = message;
        messageElement.className = ''; // Clear previous classes
        messageElement.classList.add(type);
        messageElement.classList.add('show');

        setTimeout(() => {
            messageElement.classList.remove('show');
        }, duration);
    }


    // Common modal styles for confirmation dialogs (already present, ensuring it's available)
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 400px;
            width: 90%;
        }
        .modal-content h3 {
            color: var(--secondary-charcoal);
            margin-top: 0;
            font-size: 24px;
        }
        .modal-content p {
            margin-bottom: 25px;
            font-size: 16px;
            color: var(--text-dark);
        }
        .modal-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        .modal-buttons button {
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: background-color 0.3s ease, transform 0.2s ease;
            border: none;
        }
        .modal-buttons .button-delete {
            background-color: var(--error-red);
            color: var(--text-light);
        }
        .modal-buttons .button-delete:hover {
            background-color: #c82333;
            transform: translateY(-2px);
        }
        .modal-buttons .button-primary {
            background-color: var(--primary-blue);
            color: var(--text-light);
        }
        .modal-buttons .button-primary:hover {
            background-color: #004499;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(styleTag);
});

    };
