// Centralized Data for various services and their specific offerings
// This structure now holds all types of professionals


const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(); // Initializes with default credentials from the environment
const db = admin.firestore();


exports.createFirestoreUserProfile = functions.auth.user().onCreate(async (user) => {
    // 'user' object here contains details of the newly created Firebase Auth user
    // (UID, email, display name if set, etc.)

    const userRef = db.collection("users").doc(user.uid);

    // You'll need to decide how to get the 'userType' and other specific data (like username)
    // for customers vs. tradespeople, as this info isn't directly in the Auth 'user' object.
    // You have a few options:
    // A) Add a custom claim to the user's Auth token during client-side signup (advanced).
    // B) Have the client *then* write the specific type info to a separate temporary collection,
    //    and the Cloud Function picks it up, then deletes it. (More complex).
    // C) Simplest for a quick start: default to 'customer' and let the user update later,
    //    or assume a user is a 'tradesperson' if they sign up via that form and then
    //


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
            specificServices: ['Emergency Leaks', 'Drain Cleaning', 'Water Heater Repair'],
            email: 'john.paul@example.com' // Added email for login simulation
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
            specificServices: ['Bathroom Installations', 'Pipe Repair', 'Boiler Servicing'],
            email: 'mary.evans@example.com' // Added email for login simulation
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
            specificServices: ['General Plumbing', 'Fixture Installation', 'Leak Detection'],
            email: 'alex.pace@example.com' // Added email for login simulation
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
            specificServices: ['Commercial Plumbing', 'Water Conservation', 'Backflow Prevention'],
            email: 'sarah.camilleri@example.com' // Added email for login simulation
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
            specificServices: ['Drainage Systems', 'Septic Tank Maintenance', 'Water Filtration'],
            email: 'david.rossi@example.com' // Added email for login simulation
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
            specificServices: ['Residential Plumbing', 'Leak Detection', 'Bathroom Remodels'],
            email: 'emily.smith@example.com' // Added email for login simulation
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
            specificServices: ['Custom Cabinets', 'Furniture Assembly', 'Deck Building'],
            email: 'bob.smith@example.com' // Added email for login simulation
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
            specificServices: ['Flooring Installation', 'Custom Shelving', 'Door Repair'],
            email: 'anna.wood@example.com' // Added email for login simulation
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
            specificServices: ['Electrical Wiring', 'Light Fixture Installation', 'Outlet Repair'],
            email: 'mark.davis@example.com' // Added email for login simulation
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
            specificServices: ['Interior Painting', 'Exterior Painting', 'Wallpaper Installation'],
            email: 'lisa.white@example.com' // Added email for login simulation
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
            specificServices: ['Residential Cleaning', 'Deep Cleaning', 'Commercial Cleaning'],
            email: 'chris.green@example.com' // Added email for login simulation
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
            specificServices: ['Custom Metalwork', 'Wrought Iron Gates', 'Repairs'],
            email: 'greg.black@example.com' // Added email for login simulation
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
    "Malta": ["Birkirkara", "Bormla (Cospicua)", "Fgura", "Floriana", "Fontana", "Għajnsielem", "Għarb", "Għargħur", "Għasri", "Għaxaq", "Gudja", "Gżira", "Ħamrun", "Iklin", "Isla (Senglea)", "Kalkara", "Kerċem", "Kirkop", "Lija", "Luqa", "Marsa", "Marsaskala", "Marsaxlokk", "Mdina", "Mellieħa", "Mosta", "Mqabba", "Msida", "Mtarfa", "Munxar", "Nadur", "Naxxar", "Paola", "Pembroke", "Pietà", "Qala", "Qormi", "Qrendi", "Rabat (Gozo)", "Rabat (Malta)", "Safi", "San Ġiljan (St. Julian's)", "San Lawrenz", "San Pawl il-Baħar (St. Paul's Bay)", "Sannat", "Santa Luċija", "Santa Venera", "Siġġiewi", "Sliema", "Swieqi", "Ta' Xbiex", "Tarxien", "Valletta", "Xagħra", "Xewkija", "Xgħajra", "Żabbar", "Żebbuġ (Gozo)", "Żebbuġ (Malta)", "Żejtun", "Żurrieq"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Edinburgh", "Leeds", "Sheffield", "Newcastle"]
};

// Firebase Imports and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import {getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// --- IMPORTANT: YOU MUST REPLACE THESE PLACEHOLDER VALUES WITH YOUR ACTUAL FIREBASE CONFIG ---
// 1. Go to your Firebase Console: https://console.firebase.google.com/
// 2. Select your project.
// 3. In the left menu, click "Project settings" (gear icon ⚙️).
// 4. Scroll down to "Your apps" and select your Web App (or add one if you haven't).
// 5. Copy the 'firebaseConfig' object provided there and paste it below, replacing this entire block.
const firebaseConfig = {
    apiKey: "AIzaSyABazepGHmdDtJ3qfgBPbZgLTEhsD8i8ks",
  authDomain: "fixerupper-d3d19.firebaseapp.com",
  projectId: "fixerupper-d3d19",
  storageBucket: "fixerupper-d3d19.firebasestorage.app",
  messagingSenderId: "536236224510",
  appId: "1:536236224510:web:72e5d1b4ae35d9368edaaf",
  measurementId: "G-78WR2HXYTZ"
  };
// --- END OF FIREBASE CONFIGURATION ---

// Add this line to log the firebaseConfig and check its content
console.log("Firebase Config (from functions.js):", firebaseConfig);

let app;
let db;
let auth;
let currentUserId = null; // To store the authenticated user's ID

// Always attempt to initialize Firebase app
try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUserId = user.uid;
            console.log("Firebase Auth State Changed: User Logged In. UID:", currentUserId); // Added UID logging
            if (localStorage.getItem('loggedInUserType') === 'customer') {
                loadCustomerDataFromFirestore();
            }
        } else {
            currentUserId = null;
            console.log("Firebase Auth State Changed: User Logged Out.");
        }
    });
} catch (error) {
    console.error("Error initializing Firebase:", error);
    // If initialization fails, app, db, auth will remain undefined,
    // and subsequent checks will prevent their use.
}


// --- Utility Functions ---

/**
 * Navigates to a specified URL.
 * @param {string} url The URL to navigate to.
 */
function navigateTo(url) {
    window.location.href = url;
}

/**
 * Shows a modal dialog.
 * @param {string} title The title of the modal.
 * @param {string} message The message content of the modal.
 * @param {boolean} showButtons Whether to show confirmation/cancel buttons.
 * @param {function} onConfirm Callback function for confirm button.
 * @param {function} onCancel Callback function for cancel button.
 * @param {string} confirmText Text for the confirm button.
 * @param {string} cancelText Text for the cancel button.
 * @param {string} confirmClass CSS class for the confirm button (e.g., 'button-delete').
 */
function showModal(title, message, showButtons = false, onConfirm = null, onCancel = null, confirmText = 'Confirm', cancelText = 'Cancel', confirmClass = 'button-confirm') {
    let modal = document.getElementById('myModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'myModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h3 id="modalTitle"></h3>
                <p id="modalMessage"></p>
                <div class="modal-buttons" id="modalButtons">
                    <button id="confirmButton"></button>
                    <button id="cancelButton"></button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;

    const modalButtons = document.getElementById('modalButtons');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');

    if (showButtons) {
        modalButtons.style.display = 'flex';
        confirmButton.textContent = confirmText;
        confirmButton.className = confirmClass; // Apply the class
        cancelButton.textContent = cancelText;
        cancelButton.className = 'button-cancel'; // Default class for cancel
        confirmButton.onclick = () => {
            if (onConfirm) onConfirm();
            hideModal();
        };
        cancelButton.onclick = () => {
            if (onCancel) onCancel();
            hideModal();
        };
    } else {
        modalButtons.style.display = 'none';
    }

    modal.style.display = 'block';

    const closeButton = modal.querySelector('.close-button');
    if (closeButton) {
        closeButton.onclick = hideModal;
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            hideModal();
        }
    };
}

/**
 * Hides the modal dialog.
 */
function hideModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'none';
    }
}


// --- Authentication Functions ---

/**
 * Handles user sign-up.
 * @param {string} email User's email.
 * @param {string} password User's password.
 * @param {string} userType Type of user ('customer' or 'tradesperson').
 * @param {object} userData Additional user data to store in Firestore. Must include 'username'.
 */
async function signUp(email, password, userType, userData = {}) {
    console.log("Attempting to sign up with email:", email, "userType:", userType, "username:", userData.username); // Added debug log
    if (!auth) {
        showModal("Error", "Firebase authentication not initialized. Please ensure Firebase configuration is correct.", false);
        console.error("Firebase Auth is undefined. Cannot sign up.");
        return;
    }
    if (!db) {
        showModal("Error", "Firestore database not initialized. Please ensure Firebase configuration is correct.", false);
        console.error("Firestore DB is undefined. Cannot sign up.");
        return;
    }

    try {
        // --- Uniqueness Checks (Email and Username) ---
        console.log("Checking for existing email and username in Firestore...");
        const usersRef = collection(db, "users");
        const emailQuery = query(usersRef, where("email", "==", email));
        const usernameQuery = query(usersRef, where("username", "==", userData.username)); // Assuming username is passed in userData

        const [emailSnapshot, usernameSnapshot] = await Promise.all([
            getDocs(emailQuery),
            getDocs(usernameQuery)
        ]);

        if (!emailSnapshot.empty) {
            showModal("Sign Up Error", "This email is already registered. Please use a different email or log in.", false);
            console.error("Sign Up Failed: Email already in use:", email);
            return;
        }
        if (!usernameSnapshot.empty) {
            showModal("Sign Up Error", "This username is already taken. Please choose a different username.", false);
            console.error("Sign Up Failed: Username already taken:", userData.username);
            return;
        }
        console.log("Email and username are unique.");

        // --- Create User in Firebase Authentication ---
        console.log("Calling createUserWithEmailAndPassword...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User successfully created in Firebase Auth. UID:", user.uid);

        // --- Store User Data in Firestore ---
        const userRef = doc(db, "users", user.uid); // Use UID as document ID
        console.log("Setting user document in Firestore for UID:", user.uid);
        await setDoc(userRef, {
            email: email,
            userType: userType,
            authUid: user.uid, // Store the Firebase Auth UID in the document
            ...userData,
            createdAt: new Date()
        });
        console.log("User document successfully set in Firestore for UID:", user.uid);

        localStorage.setItem('loggedInUserId', user.uid);
        localStorage.setItem('loggedInUserType', userType);
        // Store the username in local storage for consistency with existing dummy data logic
        localStorage.setItem('loggedInUser', userData.username); 
        localStorage.setItem('isLoggedIn', 'true'); // Explicitly set isLoggedIn

        showModal("Success", "Account created successfully! Redirecting...", false);

        // Navigate after a short delay to allow user to see the success message
        setTimeout(() => {
            if (userType === 'customer') {
                navigateTo('main-index-page.html');
            } else if (userType === 'tradesperson') {
                navigateTo('plumber-profile-page.html'); // Navigate to a default profile page for tradespeople
            }
        }, 1500); // 1.5 second delay
        
    } catch (error) {
        console.error("Error during sign-up process:", error);
        let errorMessage = `Failed to create account: ${error.message}`;
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = "This email is already registered. Please use a different email or log in.";
        } else if (error.code === 'auth/weak-password') {
            errorMessage = "Password is too weak. Please choose a stronger password.";
        }
        showModal("Sign Up Error", errorMessage, false);
    }
}

/**
 * Handles user login.
 * @param {string} email User's email.
 * @param {string} password User's password.
 * @returns {Promise<void>}
 */
async function logIn(email, password) {
    console.log("Attempting to log in with email:", email); // Added debug log
    if (!auth) {
        showModal("Error", "Firebase authentication not initialized. Please ensure Firebase configuration is correct.", false);
        console.error("Firebase Auth is undefined. Cannot log in.");
        return;
    }
    if (!db) {
        showModal("Error", "Firestore database not initialized. Please ensure Firebase configuration is correct.", false);
        console.error("Firestore DB is undefined. Cannot log in.");
        return;
    }

    try {
        console.log("Calling signInWithEmailAndPassword..."); // Added debug log
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user.uid);

        // Fetch user type from Firestore
        const userDocRef = doc(db, "users", user.uid);
        console.log("Fetching user document from Firestore for UID:", user.uid); // Added debug log
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const userType = userData.userType;
            const username = userData.username; // Get username from Firestore
            console.log("User data found in Firestore. User Type:", userType, "Username:", username); // Added debug log

            localStorage.setItem('loggedInUserId', user.uid);
            localStorage.setItem('loggedInUserType', userType); // Store user type in local storage
            localStorage.setItem('loggedInUser', username); // Store username for consistency
            localStorage.setItem('isLoggedIn', 'true'); // Explicitly set isLoggedIn

            showModal("Success", "Logged in successfully! Redirecting...", false);
            setTimeout(() => {
                if (userType === 'customer') {
                    navigateTo('main-index-page.html');
                } else if (userType === 'tradesperson') {
                    navigateTo('plumber-profile-page.html'); // Navigate to tradesperson specific page
                }
            }, 1500); // 1.5 second delay

        } else {
            console.warn("User data not found in Firestore for UID:", user.uid);
            // Optionally, sign out if user data is missing to prevent inconsistencies
            await auth.signOut();
            showModal("Login Error", "User profile incomplete. Please contact support.", false);
        }

    } catch (error) {
        console.error("Error logging in:", error);
        let errorMessage = `Failed to log in: ${error.message}`;
        if (error.code === 'auth/invalid-credential') { // Common error for wrong email/password
            errorMessage = "Invalid email or password. Please try again.";
        } else if (error.code === 'auth/user-disabled') {
            errorMessage = "Your account has been disabled. Please contact support.";
        }
        showModal("Login Error", errorMessage, false);
    }
}

/**
 * Handles user logout.
 */
async function logOut() {
    if (!auth) {
        showModal("Error", "Firebase authentication not initialized.", false);
        console.error("Firebase Auth is undefined. Cannot log out.");
        return;
    }
    try {
        await auth.signOut();
        localStorage.removeItem('loggedInUserId');
        localStorage.removeItem('loggedInUserType');
        localStorage.removeItem('loggedInUser'); // Clear username on logout
        localStorage.removeItem('isLoggedIn'); // Clear isLoggedIn flag
        showModal("Success", "Logged out successfully.", false);
        navigateTo('login.html'); // Redirect to login page
    } catch (error) {
        console.error("Error logging out:", error);
        showModal("Logout Error", `Failed to log out: ${error.message}`, false);
    }
}

/**
 * Checks if a user is currently logged in.
 * @returns {boolean}
 */
function isLoggedIn() {
    // This function can be used to quickly check if a user is logged in
    // based on local storage, but the onAuthStateChanged listener is the
    // definitive source for Firebase auth state.
    return localStorage.getItem('loggedInUserId') !== null;
}

/**
 * Retrieves the currently logged-in user's ID.
 * @returns {string|null} The user ID if logged in, otherwise null.
 */
function getLoggedInUserId() {
    return localStorage.getItem('loggedInUserId');
}

/**
 * Retrieves the currently logged-in user's type.
 * @returns {string|null} The user type ('customer' or 'tradesperson') if logged in, otherwise null.
 */
function getLoggedInUserType() {
    return localStorage.getItem('loggedInUserType');
}


// --- Firestore Data Operations ---

/**
 * Saves or updates customer data in Firestore.
 * @param {string} userId The ID of the user.
 * @param {object} customerData The customer data to save.
 */
async function saveCustomerDataToFirestore(userId, customerData) {
    if (!db) {
        console.error("Firestore is undefined. Cannot save customer data.");
        showModal("Error", "Database not initialized. Please ensure Firebase configuration is correct.", false);
        return;
    }
    try {
        const customerRef = doc(db, "users", userId); // Assuming 'users' collection for all user types
        await updateDoc(customerRef, customerData); // Use updateDoc if doc exists, setDoc for new or overwrite
        console.log("Customer data saved to Firestore for user:", userId);
        showModal("Success", "Profile updated successfully!", false);
    } catch (error) {
        console.error("Error saving customer data to Firestore:", error);
        showModal("Error", `Failed to save profile: ${error.message}`, false);
    }
}

/**
 * Loads customer data from Firestore.
 * @returns {Promise<object|null>} The customer data or null if not found/error.
 */
async function loadCustomerDataFromFirestore() {
    const userId = getLoggedInUserId();
    if (!userId || !db) {
        console.log("No user ID or Firestore not initialized. Cannot load customer data.");
        return null;
    }

    try {
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const customerData = userDocSnap.data();
            console.log("Customer data loaded:", customerData);
            return customerData;
        } else {
            console.log("No customer data found for user:", userId);
            return null;
        }
    } catch (error) {
        console.error("Error loading customer data from Firestore:", error);
        showModal("Error", `Failed to load profile data: ${error.message}`, false);
        return null;
    }
}

/**
 * Saves or updates tradesperson data in Firestore.
 * @param {string} userId The ID of the tradesperson.
 * @param {object} tradespersonData The tradesperson data to save.
 */
async function saveTradespersonDataToFirestore(userId, tradespersonData) {
    if (!db) {
        console.error("Firestore is undefined. Cannot save tradesperson data.");
        showModal("Error", "Database not initialized. Please ensure Firebase configuration is correct.", false);
        return;
    }
    try {
        const tradespersonRef = doc(db, "users", userId); // Assuming 'users' collection for all user types
        await updateDoc(tradespersonRef, tradespersonData); // Use updateDoc if doc exists, setDoc for new or overwrite
        console.log("Tradesperson data saved to Firestore for user:", userId);
        showModal("Success", "Profile updated successfully!", false);
    } catch (error) {
        console.error("Error saving tradesperson data to Firestore:", error);
        showModal("Error", `Failed to save profile: ${error.message}`, false);
    }
}


/**
 * Loads tradesperson data from Firestore.
 * @param {string} userId The ID of the tradesperson.
 * @returns {Promise<object|null>} The tradesperson data or null if not found/error.
 */
async function loadTradespersonDataFromFirestore(userId) {
    if (!userId || !db) {
        console.log("No user ID or Firestore not initialized. Cannot load tradesperson data.");
        return null;
    }

    try {
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const tradespersonData = userDocSnap.data();
            console.log("Tradesperson data loaded:", tradespersonData);
            return tradespersonData;
        } else {
            console.log("No tradesperson data found for user:", userId);
            return null;
        }
    } catch (error) {
        console.error("Error loading tradesperson data from Firestore:", error);
        showModal("Error", `Failed to load profile data: ${error.message}`, false);
        return null;
    }
}

/**
 * Fetches all tradespeople of a specific category from Firestore.
 * @param {string} category The category of tradespeople to fetch (e.g., 'plumbing').
 * @returns {Promise<Array<object>>} A promise that resolves to an array of tradesperson data.
 */
async function getTradespeopleByCategory(category) {
    if (!db) {
        console.error("Firestore is undefined. Cannot fetch tradespeople.");
        return [];
    }

    try {
        // Query users collection for tradespeople of the given category
        const q = query(collection(db, "users"),
            where("userType", "==", "tradesperson"),
            where("trade", "==", category)); // Assuming 'trade' field exists for tradespeople

        const querySnapshot = await getDocs(q);
        const tradespeople = [];
        querySnapshot.forEach((doc) => {
            tradespeople.push({ id: doc.id, ...doc.data() });
        });
        console.log(`Fetched ${tradespeople.length} tradespeople for category: ${category}`);
        return tradespeople;
    } catch (error) {
        console.error(`Error fetching tradespeople for category ${category}:`, error);
        showModal("Error", `Failed to load tradespeople: ${error.message}`, false);
        return [];
    }
}


// --- Booking and Job Management ---

/**
 * Creates a new job request/booking in Firestore.
 * @param {string} customerId The ID of the customer making the request.
 * @param {string} tradespersonId The ID of the tradesperson being requested.
 * @param {object} jobDetails Details of the job (e.g., serviceType, description, date, time, status).
 * @returns {Promise<string>} A promise that resolves with the ID of the newly created job.
 */
async function createJobRequest(customerId, tradespersonId, jobDetails) {
    if (!db) {
        console.error("Firestore is undefined. Cannot create job request.");
        showModal("Error", "Database not initialized. Please ensure Firebase configuration is correct.", false);
        return null;
    }
    try {
        const jobsCollectionRef = collection(db, "jobs");
        const newJobRef = await addDoc(jobsCollectionRef, {
            customerId: customerId,
            tradespersonId: tradespersonId,
            ...jobDetails,
            createdAt: new Date(),
            status: jobDetails.status || "pending" // Default status
        });
        console.log("New job request created with ID:", newJobRef.id);
        showModal("Success", "Job request submitted successfully!", false);
        return newJobRef.id;
    } catch (error) {
        console.error("Error creating job request:", error);
        showModal("Error", `Failed to submit job request: ${error.message}`, false);
        return null;
    }
}

/**
 * Updates the status or details of an existing job.
 * @param {string} jobId The ID of the job to update.
 * @param {object} updates An object containing the fields to update.
 */
async function updateJobStatus(jobId, updates) {
    if (!db) {
        console.error("Firestore is undefined. Cannot update job status.");
        showModal("Error", "Database not initialized. Please ensure Firebase configuration is correct.", false);
        return;
    }
    try {
        const jobRef = doc(db, "jobs", jobId);
        await updateDoc(jobRef, {
            ...updates,
            updatedAt: new Date()
        });
        console.log("Job updated successfully:", jobId);
        showModal("Success", "Job status updated!", false);
    } catch (error) {
        console.error("Error updating job:", error);
        showModal("Error", `Failed to update job: ${error.message}`, false);
    }
}

/**
 * Fetches jobs related to a specific user (customer or tradesperson).
 * @param {string} userId The ID of the customer or tradesperson.
 * @param {string} userType The type of user ('customer' or 'tradesperson').
 * @returns {Promise<Array<object>>} A promise that resolves to an array of job data.
 */
async function getJobsForUser(userId, userType) {
    if (!db) {
        console.error("Firestore is undefined. Cannot fetch jobs.");
        return [];
    }

    try {
        let q;
        if (userType === 'customer') {
            q = query(collection(db, "jobs"), where("customerId", "==", userId));
        } else if (userType === 'tradesperson') {
            q = query(collection(db, "jobs"), where("tradespersonId", "==", userId));
        } else {
            console.error("Invalid user type for fetching jobs:", userType);
            return [];
        }

        const querySnapshot = await getDocs(q);
        const jobs = [];
        querySnapshot.forEach((doc) => {
            jobs.push({ id: doc.id, ...doc.data() });
        });
        console.log(`Fetched ${jobs.length} jobs for ${userType}: ${userId}`);
        return jobs;
    } catch (error) {
        console.error(`Error fetching jobs for ${userType} ${userId}:`, error);
        showModal("Error", `Failed to load jobs: ${error.message}`, false);
        return [];
    }
}


// --- Search and Filter Functions ---

/**
 * Filters tradespeople based on criteria like specialty and locality.
 * @param {string} category The main category (e.g., 'plumbing').
 * @param {string} searchTerm Search term for name or specialty.
 * @param {string} locality Filter by locality.
 * @param {boolean} showPremium Filter by premium status.
 * @returns {Array<object>} Filtered list of tradespeople.
 */
function filterTradespeople(category, searchTerm = '', locality = '', showPremium = false) {
    let filtered = tradespeopleData[category] || [];

    if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(person =>
            person.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            person.specialty.toLowerCase().includes(lowerCaseSearchTerm) ||
            (person.description && person.description.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }

    if (locality) {
        filtered = filtered.filter(person => person.locality === locality);
    }

    if (showPremium) {
        filtered = filtered.filter(person => person.isPremium);
    }

    return filtered;
}

/**
 * Sorts tradespeople based on a specific criterion.
 * @param {Array<object>} tradespeople List of tradespeople to sort.
 * @param {string} sortBy The criterion to sort by ('rating', 'reviews', 'joinDate', 'promotionRank').
 * @param {string} sortOrder 'asc' for ascending, 'desc' for descending.
 * @returns {Array<object>} Sorted list of tradespeople.
 */
function sortTradespeople(tradespeople, sortBy, sortOrder = 'desc') {
    return [...tradespeople].sort((a, b) => {
        let valA, valB;

        switch (sortBy) {
            case 'rating':
                valA = a.rating || 0;
                valB = b.rating || 0;
                break;
            case 'reviews':
                valA = a.reviews || 0;
                valB = b.reviews || 0;
                break;
            case 'joinDate':
                valA = new Date(a.joinDate).getTime();
                valB = new Date(b.joinDate).getTime();
                break;
            case 'promotionRank':
                valA = a.promotionRank || Infinity; // Lower rank is higher priority
                valB = b.promotionRank || Infinity;
                break;
            default:
                return 0;
        }

        if (sortOrder === 'asc') {
            return valA - valB;
        } else {
            return valB - valA;
        }
    });
}


// --- Data Provisioning Functions ---

/**
 * Returns all available tradespeople data by category.
 * @returns {object} The entire tradespeopleData object.
 */
function getAllTradespeopleData() {
    return tradespeopleData;
}

/**
 * Returns data for specific service types.
 * @returns {object} The entire servicesData object.
 */
function getServicesData() {
    return servicesData;
}

/**
 * Returns data for countries and localities.
 * @returns {object} The entire countriesAndLocalities object.
 */
function getCountriesAndLocalities() {
    return countriesAndLocalities;
}

/**
 * Fetches a single tradesperson's data by their ID.
 * @param {string} tradespersonId The ID of the tradesperson.
 * @returns {object|null} The tradesperson object or null if not found.
 */
function getTradespersonById(tradespersonId) {
    for (const category in tradespeopleData) {
        const tradesperson = tradespeopleData[category].find(p => p.id === tradespersonId);
        if (tradesperson) {
            return tradesperson;
        }
    }
    return null;
}

// Export functions if running in a module environment
// This allows other scripts to import and use these functions
export {
    navigateTo,
    showModal,
    hideModal,
    signUp,
    logIn,
    logOut,
    isLoggedIn,
    getLoggedInUserId,
    getLoggedInUserType,
    saveCustomerDataToFirestore,
    loadCustomerDataFromFirestore,
    saveTradespersonDataToFirestore,
    loadTradespersonDataFromFirestore,
    createJobRequest,
    updateJobStatus,
    getJobsForUser,
    filterTradespeople,
    sortTradespeople,
    getAllTradespeopleData,
    getServicesData,
    getCountriesAndLocalities,
    getTradespersonById,
    tradespeopleData // Exporting for direct access if needed, though functions are preferred
};

document.addEventListener('DOMContentLoaded', async () => {
    console.log("functions.js script loaded and DOMContentLoaded fired."); // Added this log

    // Attempt to sign in with custom token provided by Canvas, or anonymously
    // This part is for Canvas environment, might not be relevant for GitHub Pages
    // if (auth) { // Only attempt if auth is initialized
    //     if (typeof __initial_auth_token !== 'undefined') {
    //         try {
    //             await signInWithCustomToken(auth, __initial_auth_token);
    //             console.log('Signed in with custom token from Canvas.');
    //         } catch (error) {
    //             console.error('Error signing in with custom token:', error);
    //             await signInAnonymously(auth); // Fallback to anonymous if custom token fails
    //             console.log('Signed in anonymously after custom token failure.');
    //         }
    //     } else {
    //         await signInAnonymously(auth); // Sign in anonymously if no custom token
    //         console.log('Signed in anonymously.');
    //     }
    // }


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
    const profSpecialtyInput = document.getElementById('profSpecialty'); // This element is present in the HTML
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
        // Query the 'users' collection where authUid matches currentUserId
        const usersCol = collection(db, `users`);
        const q = query(usersCol, where('authUid', '==', currentUserId));
        try {
            const querySnapshot = await getDocs(q);
            // Assuming authUid is unique, there should be at most one document
            if (!querySnapshot.empty) {
                const customerDoc = querySnapshot.docs[0];
                const customerDataLoaded = { id: customerDoc.id, ...customerDoc.data() };
                console.log("Customer data loaded from Firestore:", customerDataLoaded);
                // Update the in-memory customerData array if needed, or just use the loaded data
                // For this demo, we'll just return it and let the calling context handle it
                return customerDataLoaded;
            } else {
                console.log("No customer data found in Firestore for current user UID:", currentUserId);
                return null;
            }
        } catch (error) {
            console.error("Error loading customer data from Firestore:", error);
            showModal("Error", "Failed to load customer data from database.", false);
            return null;
        }
    }


    // --- Functions for Header Buttons (Login/Logout, Account/Sign Up) ---
    function handleAuthButtons() {
        // Debugging: Check if buttons are found
        if (loginHeaderButton) {
            console.log("Login button with ID 'loginHeaderButton' found.");
        } else {
            console.error("Login button with ID 'loginHeaderButton' NOT found.");
        }
        if (signUpHeaderButton) {
            console.log("Sign Up button with ID 'signUpHeaderButton' found.");
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
                    console.log("Login button clicked: Redirecting to account page...");
                    if (loggedInUserType === 'tradesperson') { // Changed to 'tradesperson'
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
                    console.log("Sign Up button clicked: Logging out...");
                    await logOut(); // Use the shared logOut function
                };
            } else {
                // If user is NOT logged in, show "Login" and "Sign Up" buttons
                loginHeaderButton.textContent = 'Login';
                loginHeaderButton.className = 'login-button';
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.onclick = () => {
                    console.log("Login button clicked: Redirecting to login.html...");
                    window.location.href = 'login.html'; // Redirect to login page
                };

                signUpHeaderButton.textContent = 'Sign Up';
                signUpHeaderButton.className = 'cta-button';
                signUpHeaderButton.style.backgroundColor = '';
                signUpHeaderButton.style.color = '';
                signUpHeaderButton.onclick = () => {
                    console.log("Sign Up button clicked: Redirecting to signup.html...");
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
    async function loadProfessionalProfile(professionalId) {
        if (!professionalProfileForm) return;

        const professional = await loadTradespersonDataFromFirestore(professionalId);

        if (!professional) {
            console.error('Professional data not found for logged in user ID:', professionalId);
            professionalProfileForm.innerHTML = '<p class="form-message error">Professional profile could not be loaded. Please log in again.</p>';
            return;
        }

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
        profSpecialtyInput.value = professional.specialty || ''; // This line is now re-enabled

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
        // This function is still using the dummy customerData array.
        // In a real app, you'd query Firestore for the user by username.
        return customerData.find(cust => cust.username.toLowerCase() === username.toLowerCase());
    }

    // Function to load customer profile data into the form
    async function loadCustomerProfile(customerDataFromFirestore) {
        if (!customerProfileForm || !customerDataFromFirestore) return;

        custFirstNameInput.value = customerDataFromFirestore.name.split(' ')[0] || '';
        custLastNameInput.value = customerDataFromFirestore.name.split(' ').slice(-1)[0] || '';
        custEmailInput.value = customerDataFromFirestore.email || 'not-available@example.com';
        
        // Populate country dial code dropdown for customer profile
        if (custCountryCodeSelect) {
            populateCountryDialCodes(custCountryCodeSelect, customerDataFromFirestore.mobileNumber);
        }
        // Populate mobile number input (without dial code)
        if (custMobileNumberInput && customerDataFromFirestore.mobileNumber) {
            const dialCode = Object.values(countryDialCodes).find(code => customerDataFromFirestore.mobileNumber.startsWith(code));
            if (dialCode) {
                custMobileNumberInput.value = customerDataFromFirestore.mobileNumber.substring(dialCode.length);
            } else {
                custMobileNumberInput.value = customerDataFromFirestore.mobileNumber;
            }
        } else {
            custMobileNumberInput.value = '';
        }

        custProfilePhotoPreview.src = customerDataFromFirestore.avatar || 'https://placehold.co/150x150/CCCCCC/000000?text=No+Photo';
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

        if (!loggedInUser || loggedInUserType !== 'tradesperson') { // Changed to 'tradesperson'
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
                <p>Are you sure you want to permanently cancel this booking? This action cannot be undone.</p>
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
            console.log("Professional Application Form submitted."); // Debugging log
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
            // Password complexity checks: at least one letter, one number, one '$'
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$]).{8,}$/;
            if (!passwordRegex.test(password)) {
                formMessage.textContent = 'Password must be at least 8 characters long and include at least one letter, one number, and one "$" symbol.';
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

            console.log("Calling signUp for professional:", { email, password, userType: 'tradesperson' }); // Debugging log
            // Call the shared signUp function
            await signUp(email, password, 'tradesperson', {
                username: username.toLowerCase().replace(/\s/g, '-'), // Ensure username is stored
                name: `${firstName} "${username}" ${lastName}`,
                mobileNumber: mobileNumber,
                specialty: selectedSpecificServices.length > 0 ? selectedSpecificServices.join(', ') : selectedMainServices.join(', '),
                rating: 0,
                reviews: 0,
                description: description,
                avatar: `https://placehold.co/100x100/A7D129/FFFFFF?text=${username.substring(0,2).toUpperCase()}`,
                country: country,
                locality: locality,
                joinDate: new Date().toISOString().split('T')[0],
                specificServices: selectedSpecificServices,
                // The 'id' field is now handled by Firebase Auth UID in Firestore doc ID
            });
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
            console.log("Customer Signup Form submitted."); // Debugging log
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
            // Password complexity checks: at least one letter, one number, one '$'
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$]).{8,}$/;
            if (!passwordRegex.test(password)) {
                formMessage.textContent = 'Password must be at least 8 characters long and include at least one letter, one number, and one "$" symbol.';
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

            console.log("Calling signUp for customer:", { email, password, userType: 'customer' }); // Debugging log
            // Call the shared signUp function
            await signUp(email, password, 'customer', {
                username: username.toLowerCase().replace(/\s/g, '-'), // Ensure username is stored
                name: `${firstName} ${lastName}`,
                mobileNumber: mobileNumber, // Store mobile number with dial code
                avatar: `https://placehold.co/150x150/FFD700/36454F?text=${firstName.substring(0,1).toUpperCase()}${lastName.substring(0,1).toUpperCase()}`, // Generate initial avatar
                joinDate: new Date().toISOString().split('T')[0],
                // The 'id' field is now handled by Firebase Auth UID in Firestore doc ID
            });
        });
    }


    // Logic for login page (login.html)
    if (loginForm) {
        console.log("Login form element found. Attaching submit listener."); // Debugging log
        loginForm.addEventListener('submit', async function(event) { // Made async
            event.preventDefault();
            console.log("Login Form submitted."); // Debugging log

            formMessage.style.display = 'none'; // Use the generic formMessage
            formMessage.className = 'form-message';

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            console.log("Login attempt for username:", username, "password:", password); // Debugging log

            if (username === '' || password === '') {
                formMessage.textContent = 'Please enter both username and password.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                console.warn("Validation failed: Missing username or password."); // Debugging log
                return;
            }

            // In a real app, you would fetch user data from Firestore based on username
            // to get their associated email for Firebase Auth login.
            // For this demo, we'll simulate finding the email.
            let targetEmail = '';
            let userType = '';
            let foundUser = null;

            console.log("Attempting to find user email for username:", username); // Debugging log
            // Query Firestore to find the user by username
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", username));
            try {
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    foundUser = querySnapshot.docs[0].data();
                    targetEmail = foundUser.email;
                    userType = foundUser.userType;
                    console.log("Found user in Firestore:", foundUser.name, "email:", targetEmail, "type:", userType);
                } else {
                    console.warn("No user found in Firestore for username:", username);
                }
            } catch (error) {
                console.error("Error querying user by username from Firestore:", error);
                formMessage.textContent = 'Error during login. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            if (!targetEmail) {
                formMessage.textContent = 'Invalid username or password.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                console.warn("No target email found for username:", username); // Debugging log
                return;
            }
            console.log("Found target email:", targetEmail, "for user type:", userType); // Debugging log

            // Call the shared logIn function
            console.log("Calling logIn with email:", targetEmail, "and password (hidden)."); // Debugging log
            await logIn(targetEmail, password);

            // The showModal and navigateTo are now handled by the logIn function
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
        const loggedInUserId = getLoggedInUserId(); // This is the Firebase Auth UID
        const loggedInUserType = getLoggedInUserType();

        if (loggedInUserId && loggedInUserType === 'tradesperson') {
            loadProfessionalProfile(loggedInUserId); // Pass the UID to load data

            // Event listener for main service checkboxes on profile page to update specific services
            profMainServiceCheckboxesContainer.addEventListener('change', async () => {
                const professional = await loadTradespersonDataFromFirestore(loggedInUserId); // Re-fetch for current services
                updateSpecificServices(profSpecificServicesCheckboxesDiv, profMainServiceCheckboxesContainer, true, professional ? professional.specificServices : []);
            });

            // Event listener for country change on profile page
            profCountrySelect.addEventListener('change', async () => {
                const professional = await loadTradespersonDataFromFirestore(loggedInUserId); // Re-fetch for current locality
                populateProfLocalities(profCountrySelect.value, professional ? professional.locality : '');
            });

            // Add event listener for "Manage All Bookings" button
            if (manageAllBookingsButton) {
                manageAllBookingsButton.addEventListener('click', () => {
                    // Corrected path to professional-bookings.html
                    window.location.href = 'professional-bookings.html'; 
                });
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

            const loggedInUserId = getLoggedInUserId();
            if (!loggedInUserId) {
                profileUpdateMessage.textContent = 'You are not logged in.';
                profileUpdateMessage.className = 'form-message error';
                profileUpdateMessage.style.display = 'block';
                return;
            }

            // Find the professional to update in Firestore
            const professionalRef = doc(db, `users`, loggedInUserId); // Use UID as document ID
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
            } catch (e) {
                console.error("Error fetching professional data for update:", e);
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
            const newSpecialty = profSpecialtyInput.value; // Get value from specialty input
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
                    name: `${newFirstName} "${professionalToUpdate.username}" ${newLastName}`, // Use existing username for consistency
                    mobileNumber: newMobileNumber,
                    country: newCountry,
                    locality: newLocality,
                    avatar: newAvatarUrl,
                    specialty: newSpecialty, // Use the value from the input field
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

                document.getElementById('confirmDeleteYes').addEventListener('click', async () => {
                    confirmModal.remove(); // Close modal
                    const userIdToDelete = getLoggedInUserId();
                    if (!userIdToDelete || !auth || !db) {
                        deleteAccountMessage.textContent = 'Cannot delete account: User not logged in or Firebase not initialized.';
                        deleteAccountMessage.className = 'form-message error';
                        deleteAccountMessage.style.display = 'block';
                        return;
                    }

                    try {
                        // Delete user document from Firestore
                        await deleteDoc(doc(db, "users", userIdToDelete));
                        console.log("User document deleted from Firestore for UID:", userIdToDelete);

                        // Delete user from Firebase Authentication
                        // NOTE: This operation can only be performed on the server-side for security reasons
                        // or if the user has recently re-authenticated. For a client-side app,
                        // this will likely fail with 'auth/requires-recent-login' if not re-authenticated.
                        // For a full solution, you'd need a Firebase Cloud Function or similar backend.
                        // For this client-side demo, we'll simulate it but acknowledge the limitation.
                        // await auth.currentUser.delete(); // This line would be problematic client-side
                        console.warn("Firebase Auth user deletion is typically done server-side for security. Simulating client-side deletion.");

                        // Simulate successful deletion for the demo
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('loggedInUser');
                        localStorage.removeItem('loggedInUserType');
                        localStorage.removeItem('loggedInUserId');

                        deleteAccountMessage.textContent = 'Account deleted successfully. Redirecting...';
                        deleteAccountMessage.className = 'form-message success';
                        deleteAccountMessage.style.display = 'block';
                        setTimeout(() => navigateTo('index.html'), 2000);

                    } catch (error) {
                        console.error("Error deleting account:", error);
                        deleteAccountMessage.textContent = `Error deleting account: ${error.message}. Please log out and log in again, then try deleting.`;
                        deleteAccountMessage.className = 'form-message error';
                        deleteAccountMessage.style.display = 'block';
                    }
                });

                document.getElementById('confirmDeleteNo').addEventListener('click', () => {
                    confirmModal.remove(); // Close modal
                    deleteAccountMessage.textContent = 'Account deletion cancelled.';
                    deleteAccountMessage.className = 'form-message info';
                    deleteAccountMessage.style.display = 'block';
                });
            });
        }
    }

    // Logic specifically for customer account page (customer-account.html)
    if (customerProfileForm) {
        const loggedInUserId = getLoggedInUserId(); // This is the Firebase Auth UID
        const loggedInUserType = getLoggedInUserType();

        if (loggedInUserId && loggedInUserType === 'customer') {
            // Load customer data from Firestore
            loadCustomerDataFromFirestore().then(customer => {
                if (customer) {
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
                    custFirstNameInput.value = customer.name.split(' ')[0] || '';
                    custLastNameInput.value = customer.name.split(' ').slice(-1)[0] || '';
                    custEmailInput.value = customer.email || 'not-available@example.com';
                    custProfilePhotoPreview.src = customer.avatar || 'https://placehold.co/150x150/CCCCCC/000000?text=No+Photo';
                } else {
                    console.error('Customer data not found for logged in user:', loggedInUserId);
                    customerProfileForm.innerHTML = '<p class="form-message error">Customer profile could not be loaded. Please log in again.</p>';
                }
            });

            // Add event listener for "View My Bookings" button
            if (viewMyBookingsButton) {
                viewMyBookingsButton.addEventListener('click', () => {
                    window.location.href = 'customer-bookings.html';
                });
            }

        } else {
            customerProfileForm.innerHTML = '<p class="form-message error">You must be logged in as a customer to view this page. <a href="login.html">Login here</a></p>';
            customerProfileForm.style.textAlign = 'center';
        }

        customerProfileForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            customerProfileUpdateMessage.style.display = 'none';
            customerProfileUpdateMessage.className = 'form-message';

            const loggedInUserId = getLoggedInUserId();
            if (!loggedInUserId) {
                customerProfileUpdateMessage.textContent = 'You are not logged in.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }

            const customerRef = doc(db, "users", loggedInUserId); // Changed to 'users' collection
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
            const newMobileNumber = newCountryCode + newMobileNumberRaw;

            if (newFirstName.trim() === '' || newLastName.trim() === '') {
                customerProfileUpdateMessage.textContent = 'Please enter your first and last name.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }
            if (newMobileNumberRaw.trim() !== '' && !newMobileNumberRaw.match(/^\d{8}$/)) {
                customerProfileUpdateMessage.textContent = 'Mobile number must be an 8-digit number if provided.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
                return;
            }

            const photoFile = uploadCustPhotoInput.files[0];
            let newAvatarUrl = customerToUpdate.avatar;
            if (photoFile) {
                newAvatarUrl = URL.createObjectURL(photoFile);
                console.log('Simulating customer photo upload:', photoFile.name);
            }

            try {
                await updateDoc(customerRef, {
                    name: `${newFirstName} ${newLastName}`,
                    mobileNumber: newMobileNumber,
                    avatar: newAvatarUrl
                });
                customerProfileUpdateMessage.textContent = 'Profile updated successfully!';
                customerProfileUpdateMessage.className = 'form-message success';
                customerProfileUpdateMessage.style.display = 'block';
                custProfilePhotoPreview.src = newAvatarUrl; // Update preview
            } catch (e) {
                console.error("Error updating customer document:", e);
                customerProfileUpdateMessage.textContent = 'Error updating profile. Please try again.';
                customerProfileUpdateMessage.className = 'form-message error';
                customerProfileUpdateMessage.style.display = 'block';
            }
        });

        // Delete Customer Account functionality
        if (deleteCustomerAccountButton) {
            deleteCustomerAccountButton.addEventListener('click', () => {
                deleteCustomerAccountMessage.style.display = 'none';
                deleteCustomerAccountMessage.className = 'form-message';

                const confirmModal = document.createElement('div');
                confirmModal.className = 'modal-overlay';
                confirmModal.innerHTML = `
                    <div class="modal-content">
                        <h3>Confirm Account Deletion</h3>
                        <p>Are you sure you want to permanently delete your customer account? This action cannot be undone.</p>
                        <div class="modal-buttons">
                            <button id="confirmDeleteYes" class="button-delete">Yes, Delete</button>
                            <button id="confirmDeleteNo" class="button-primary">No, Cancel</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(confirmModal);

                document.getElementById('confirmDeleteYes').addEventListener('click', async () => {
                    confirmModal.remove();
                    const userIdToDelete = getLoggedInUserId();
                    if (!userIdToDelete || !auth || !db) {
                        deleteCustomerAccountMessage.textContent = 'Cannot delete account: User not logged in or Firebase not initialized.';
                        deleteCustomerAccountMessage.className = 'form-message error';
                        deleteCustomerAccountMessage.style.display = 'block';
                        return;
                    }

                    try {
                        await deleteDoc(doc(db, "users", userIdToDelete));
                        console.log("User document deleted from Firestore for UID:", userIdToDelete);

                        // await auth.currentUser.delete(); // Client-side deletion of auth user is problematic without recent re-auth
                        console.warn("Firebase Auth user deletion is typically done server-side for security. Simulating client-side deletion.");


                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('loggedInUser');
                        localStorage.removeItem('loggedInUserType');
                        localStorage.removeItem('loggedInUserId');

                        deleteCustomerAccountMessage.textContent = 'Account deleted successfully. Redirecting...';
                        deleteCustomerAccountMessage.className = 'form-message success';
                        deleteCustomerAccountMessage.style.display = 'block';
                        setTimeout(() => navigateTo('index.html'), 2000);

                    } catch (error) {
                        console.error("Error deleting account:", error);
                        deleteCustomerAccountMessage.textContent = `Error deleting account: ${error.message}. Please log out and log in again, then try deleting.`;
                        deleteCustomerAccountMessage.className = 'form-message error';
                        deleteCustomerAccountMessage.style.display = 'block';
                    }
                });

                document.getElementById('confirmDeleteNo').addEventListener('click', () => {
                    confirmModal.remove();
                    deleteCustomerAccountMessage.textContent = 'Account deletion cancelled.';
                    deleteCustomerAccountMessage.className = 'form-message info';
                    deleteCustomerAccountMessage.style.display = 'block';
                });
            });
        }
    }

    // Logic for plumber-profile.html (dynamic loading of professional data)
    if (document.body.classList.contains('plumber-profile-page')) { // Check for a specific body class
        const urlParams = new URLSearchParams(window.location.search);
        const professionalId = urlParams.get('id');

        if (professionalId) {
            const professional = getTradespersonById(professionalId);
            if (professional) {
                document.title = `Fixalo – ${professional.name}'s Profile`;
                document.querySelector('.profile-avatar').src = professional.avatar;
                document.querySelector('.profile-name').textContent = professional.name;
                document.querySelector('.profile-specialty').textContent = professional.specialty;
                document.querySelector('.profile-rating').innerHTML = `${generateStarRating(professional.rating)} ${professional.rating} (${professional.reviews} reviews)`;
                document.querySelector('.profile-description-section p').textContent = professional.description;
                document.querySelector('.info-box p a[href^="tel:"]').textContent = professional.mobileNumber || '+356 1234 5678';
                document.querySelector('.info-box p a[href^="tel:"]').href = `tel:${professional.mobileNumber}`;
                document.querySelector('.info-box p a[href^="mailto:"]').textContent = professional.email || 'not-available@example.com';
                document.querySelector('.info-box p a[href^="mailto:"]').href = `mailto:${professional.email}`;

                // Dynamically populate services offered
                const servicesList = document.querySelector('.services-list');
                if (servicesList) {
                    servicesList.innerHTML = ''; // Clear existing
                    (professional.specificServices || []).forEach(service => {
                        const li = document.createElement('li');
                        li.innerHTML = `<i class="fas fa-check-circle"></i> ${service}`;
                        servicesList.appendChild(li);
                    });
                     if (professional.specificServices && professional.specificServices.length === 0) {
                        servicesList.innerHTML = '<li><p class="select-hint">No specific services listed. See description for details.</p></li>';
                    }
                }

                // Update "Back to Plumbers List" link
                const backLink = document.querySelector('.back-link');
                if (backLink) {
                    // Assuming you want to go back to the service listing page for their main service
                    // This is a simplification; a real app might store the original service category
                    const mainServiceCategory = Object.keys(tradespeopleData).find(cat =>
                        tradespeopleData[cat].some(p => p.id === professionalId)
                    );
                    if (mainServiceCategory) {
                        backLink.href = `service-listing.html?service=${mainServiceCategory}`;
                    } else {
                        backLink.href = 'services.html'; // Fallback to general services page
                    }
                }

                // Message John button logic
                const messageJohnButton = document.getElementById('messageJohnButton');
                if (messageJohnButton) {
                    messageJohnButton.addEventListener('click', function() {
                        const loggedInUserType = localStorage.getItem('loggedInUserType');
                        if (loggedInUserType === 'customer') {
                            // Redirect to messages page, potentially pre-selecting this professional
                            navigateTo(`messaging-page.html?professionalId=${professionalId}`);
                        } else if (loggedInUserType === 'tradesperson') {
                            showModal('Action Not Allowed', 'You are logged in as a professional. You cannot message other professionals from their public profile.', false);
                        } else {
                            // Not logged in, prompt to sign up as customer
                            showModal('Sign Up to Message', 'Please sign up or log in as a customer to message professionals.', true,
                                () => navigateTo('customer-signup.html'), // On confirm, go to customer signup
                                null, // No specific cancel action
                                'Sign Up as Customer',
                                'Cancel'
                            );
                        }
                    });
                }

                // Book Appointment button logic
                const bookAppointmentButton = document.querySelector('.profile-book-button');
                if (bookAppointmentButton) {
                    bookAppointmentButton.addEventListener('click', function() {
                        const loggedInUserType = localStorage.getItem('loggedInUserType');
                        if (loggedInUserType === 'customer') {
                            // Redirect to booking page, passing professional ID
                            navigateTo(`book-appointment.html?professionalId=${professionalId}`);
                        } else if (loggedInUserType === 'tradesperson') {
                            showModal('Action Not Allowed', 'You are logged in as a professional. You cannot book appointments for yourself or other professionals from this page.', false);
                        } else {
                            // Not logged in, prompt to sign up as customer
                            showModal('Sign Up to Book', 'Please sign up or log in as a customer to book appointments.', true,
                                () => navigateTo('customer-signup.html'), // On confirm, go to customer signup
                                null, // No specific cancel action
                                'Sign Up as Customer',
                                'Cancel'
                            );
                        }
                    });
                }


            } else {
                // Professional not found
                document.title = "Fixalo – Professional Not Found";
                document.querySelector('.page-banner .banner-content').innerHTML = `
                    <h1 class="profile-name">Professional Not Found 😔</h1>
                    <p class="profile-specialty">The professional you are looking for does not exist.</p>
                    <a href="services.html" class="back-link">← Back to Services</a>
                `;
                document.querySelector('.plumber-profile-container').innerHTML = `
                    <p class="no-results-message">Please check the URL or browse our <a href="services.html">services</a> to find a professional.</p>
                `;
            }
        } else {
            // No professional ID in URL
            document.title = "Fixalo – Professional Not Found";
            document.querySelector('.page-banner .banner-content').innerHTML = `
                <h1 class="profile-name">Professional Not Found 😔</h1>
                <p class="profile-specialty">No professional ID provided in the URL.</p>
                <a href="services.html" class="back-link">← Back to Services</a>
            `;
            document.querySelector('.plumber-profile-container').innerHTML = `
                <p class="no-results-message">Please check the URL or browse our <a href="services.html">services</a> to find a professional.</p>
            `;
        }
    }

    // Logic for messaging-page.html
    if (messageThreadsList) {
        loadMessageThreads();
        // If a professionalId is in the URL, load that specific conversation
        const urlParams = new URLSearchParams(window.location.search);
        const professionalIdFromUrl = urlParams.get('professionalId');
        if (professionalIdFromUrl) {
            loadConversation(professionalIdFromUrl);
            // Highlight the corresponding thread item if it exists
            const threadItem = document.querySelector(`.message-thread-item[data-professional-id="${professionalIdFromUrl}"]`);
            if (threadItem) {
                Array.from(messageThreadsList.children).forEach(item => item.classList.remove('active'));
                threadItem.classList.add('active');
            }
        }
    }

    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', sendMessage);
        messageTextarea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevent new line
                sendMessage();
            }
        });
    }

    // Logic for professional-bookings.html
    if (unconfirmedBookingsList && confirmedBookingsList) {
        loadProfessionalBookings();
    }

    // Logic for customer-bookings.html
    if (customerUpcomingBookingsList && customerPastBookingsList) {
        loadCustomerBookings();
    }
});

// Dummy data for messages and bookings (replace with Firestore in a real app)
let messagesData = JSON.parse(localStorage.getItem('messagesData')) || [
    { id: 'msg1', from: 'customer1', to: 'john-paul', text: 'Hi John, are you available for a leak repair next week?', timestamp: 1700000000000, isRead: true },
    { id: 'msg2', from: 'john-paul', to: 'customer1', text: 'Hi! Yes, I have some slots. What day works for you?', timestamp: 1700000010000, isRead: true },
    { id: 'msg3', from: 'customer1', to: 'john-paul', text: 'How about Tuesday morning?', timestamp: 1700000020000, isRead: false },
    { id: 'msg4', from: 'customer2', to: 'anna-wood', text: 'Hi Anna, can you help with a custom cabinet project?', timestamp: 1700000030000, isRead: true }
];

let bookingsData = JSON.parse(localStorage.getItem('bookingsData')) || [
    { id: 'book1', customerId: 'customer1', customerName: 'Jane Doe', customerPhone: '+35699112233', professionalId: 'john-paul', professionalName: 'John Paul', serviceType: 'Plumbing', description: 'Emergency Leak Repair', date: '2025-07-20', time: '10:00 AM - 11:00 AM', status: 'Pending' },
    { id: 'book2', customerId: 'customer2', customerName: 'Mark Smith', customerPhone: '+35677445566', professionalId: 'john-paul', professionalName: 'John Paul', serviceType: 'Plumbing', description: 'Boiler Servicing', date: '2025-07-25', time: '02:00 PM - 03:00 PM', status: 'Confirmed' },
    { id: 'book3', customerId: 'customer1', customerName: 'Jane Doe', customerPhone: '+35699112233', professionalId: 'alex-pace', professionalName: 'Alex Pace', serviceType: 'Plumbing', description: 'Faucet Installation', date: '2025-06-10', time: '09:00 AM - 10:00 AM', status: 'Completed' }
];

// Dummy customer data (replace with Firestore in a real app)
// This is used for login simulation and customer profile loading
let customerData = JSON.parse(localStorage.getItem('customerData')) || [
    { id: 'customer1', username: 'jane.doe', email: 'jane.doe@example.com', name: 'Jane Doe', mobileNumber: '+35699112233', avatar: 'https://placehold.co/150x150/FFD700/36454F?text=JD', joinDate: '2024-01-01' },
    { id: 'customer2', username: 'mark.smith', email: 'mark.smith@example.com', name: 'Mark Smith', mobileNumber: '+35677445566', avatar: 'https://placehold.co/150x150/A7D129/36454F?text=MS', joinDate: '2024-02-15' }
];

// Country Dial Codes (a more comprehensive list would be needed for a real app)
const countryDialCodes = {
    "Malta": "+356",
    "Italy": "+39",
    "United Kingdom": "+44",
    "United States": "+1",
    "Canada": "+1",
    "Australia": "+61",
    "Germany": "+49",
    "France": "+33",
    "Spain": "+34",
    "Netherlands": "+31",
    "Belgium": "+32",
    "Sweden": "+46",
    "Norway": "+47",
    "Denmark": "+45",
    "Ireland": "+353",
    "Switzerland": "+41",
    "Austria": "+43",
    "Portugal": "+351",
    "Greece": "+30",
    "Cyprus": "+357",
    "Luxembourg": "+352",
    "Finland": "+358",
    "Iceland": "+354",
    "New Zealand": "+64",
    "South Africa": "+27",
    "Brazil": "+55",
    "Mexico": "+52",
    "Argentina": "+54",
    "Chile": "+56",
    "Colombia": "+57",
    "Peru": "+51",
    "Egypt": "+20",
    "Morocco": "+212",
    "United Arab Emirates": "+971",
    "Saudi Arabia": "+966",
    "Qatar": "+974",
    "Kuwait": "+965",
    "Bahrain": "+973",
    "Oman": "+968",
    "Turkey": "+90",
    "India": "+91",
    "China": "+86",
    "Japan": "+81",
    "South Korea": "+82",
    "Singapore": "+65",
    "Malaysia": "+60",
    "Thailand": "+66",
    "Indonesia": "+62",
    "Philippines": "+63",
    "Vietnam": "+84",
    "Russia": "+7",
    "Ukraine": "+380",
    "Poland": "+48",
    "Czech Republic": "+420",
    "Hungary": "+36",
    "Romania": "+40",
    "Bulgaria": "+359",
    "Croatia": "+385",
    "Serbia": "+381",
    "Bosnia and Herzegovina": "+387",
    "Slovenia": "+386",
    "Slovakia": "+421",
    "Lithuania": "+370",
    "Latvia": "+371",
    "Estonia": "+372",
    "Albania": "+355",
    "North Macedonia": "+389",
    "Montenegro": "+382",
    "Kosovo": "+383",
    "Moldova": "+373",
    "Georgia": "+995",
    "Armenia": "+374",
    "Azerbaijan": "+994",
    "Kazakhstan": "+7",
    "Uzbekistan": "+998",
    "Kyrgyzstan": "+996",
    "Tajikistan": "+992",
    "Turkmenistan": "+993",
    "Afghanistan": "+93",
    "Pakistan": "+92",
    "Bangladesh": "+880",
    "Sri Lanka": "+94",
    "Nepal": "+977",
    "Myanmar": "+95",
    "Laos": "+856",
    "Cambodia": "+855",
    "Mongolia": "+976",
    "Fiji": "+679",
    "Papua New Guinea": "+675",
    "Solomon Islands": "+677",
    "Vanuatu": "+678",
    "New Caledonia": "+687",
    "French Polynesia": "+689",
    "Egypt": "+20",
    "Nigeria": "+234",
    "Kenya": "+254",
    "Ethiopia": "+251",
    "Tanzania": "+255",
    "Uganda": "+256",
    "Ghana": "+233",
    "Ivory Coast": "+225",
    "Cameroon": "+237",
    "Angola": "+244",
    "Mozambique": "+258",
    "Madagascar": "+261",
    "Zambia": "+260",
    "Zimbabwe": "+263",
    "Botswana": "+267",
    "Namibia": "+264",
    "Congo (DRC)": "+243",
    "Sudan": "+249",
    "Algeria": "+213",
    "Tunisia": "+216",
    "Libya": "+218",
    "Chad": "+235",
    "Niger": "+227",
    "Mali": "+223",
    "Mauritania": "+222",
    "Senegal": "+221",
    "Guinea": "+224",
    "Burkina Faso": "+226",
    "Benin": "+229",
    "Togo": "+228",
    "Sierra Leone": "+232",
    "Liberia": "+231",
    "Gambia": "+220",
    "Cape Verde": "+238",
    "Sao Tome and Principe": "+239",
    "Equatorial Guinea": "+240",
    "Gabon": "+241",
    "Central African Republic": "+236",
    "Rwanda": "+250",
    "Burundi": "+257",
    "Djibouti": "+253",
    "Eritrea": "+291",
    "Somalia": "+252",
    "Comoros": "+269",
    "Seychelles": "+248",
    "Mauritius": "+230",
    "Malawi": "+265",
    "Lesotho": "+266",
    "Eswatini": "+268",
    "Reunion": "+262",
    "Mayotte": "+262",
    "South Sudan": "+211",
    "Venezuela": "+58",
    "Colombia": "+57",
    "Ecuador": "+593",
    "Bolivia": "+591",
    "Paraguay": "+595",
    "Uruguay": "+598",
    "Guyana": "+592",
    "Suriname": "+597",
    "French Guiana": "+594",
    "Cuba": "+53",
    "Jamaica": "+1-876",
    "Haiti": "+509",
    "Dominican Republic": "+1-809",
    "Puerto Rico": "+1-787",
    "Trinidad and Tobago": "+1-868",
    "Bahamas": "+1-242",
    "Barbados": "+1-246",
    "Saint Lucia": "+1-758",
    "Grenada": "+1-473",
    "Saint Vincent and the Grenadines": "+1-784",
    "Antigua and Barbuda": "+1-268",
    "Dominica": "+1-767",
    "Saint Kitts and Nevis": "+1-869",
    "Belize": "+501",
    "Guatemala": "+502",
    "El Salvador": "+503",
    "Honduras": "+504",
    "Nicaragua": "+505",
    "Costa Rica": "+506",
    "Panama": "+507",
    "Greenland": "+299",
    "Faroe Islands": "+298",
    "Gibraltar": "+350",
    "San Marino": "+378",
    "Vatican City": "+379",
    "Monaco": "+377",
    "Andorra": "+376",
    "Liechtenstein": "+423",
    "Maldives": "+960",
    "Brunei": "+673",
    "Timor-Leste": "+670",
    "Palau": "+680",
    "Micronesia": "+691",
    "Marshall Islands": "+692",
    "Nauru": "+674",
    "Kiribati": "+686",
    "Tuvalu": "+688",
    "Samoa": "+685",
    "Tonga": "+676",
    "Cook Islands": "+682",
    "Niue": "+683",
    "Tokelau": "+690",
    "Wallis and Futuna": "+681",
    "American Samoa": "+1-684",
    "Guam": "+1-671",
    "Northern Mariana Islands": "+1-670",
    "US Virgin Islands": "+1-340",
    "British Virgin Islands": "+1-284",
    "Anguilla": "+1-264",
    "Montserrat": "+1-664",
    "Turks and Caicos Islands": "+1-649",
    "Cayman Islands": "+1-345",
    "Bermuda": "+1-441",
    "Saint Pierre and Miquelon": "+508",
    "Falkland Islands": "+500",
    "South Georgia and the South Sandwich Islands": "+500",
    "Saint Helena, Ascension and Tristan da Cunha": "+290",
    "Norfolk Island": "+672",
    "Christmas Island": "+61",
    "Cocos (Keeling) Islands": "+61",
    "Pitcairn Islands": "+64",
    "Tokelau": "+690",
    "Heard Island and McDonald Islands": "+672",
    "French Southern and Antarctic Lands": "+262",
    "Bouvet Island": "+47",
    "Svalbard and Jan Mayen": "+47",
    "British Indian Ocean Territory": "+246",
    "United States Minor Outlying Islands": "+1",
    "Isle of Man": "+44",
    "Guernsey": "+44",
    "Jersey": "+44"
};



