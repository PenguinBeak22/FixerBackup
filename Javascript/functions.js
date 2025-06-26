// Data for services and their specific offerings
const servicesData = {
    plumbing: [
        'Emergency Leaks', 'Drain Cleaning', 'Water Heater Repair',
        'Bathroom Installations', 'Pipe Repair', 'Boiler Servicing',
        'Fixture Installation', 'Leak Detection'
    ],
    carpentry: [
        'Furniture Assembly', 'Custom Cabinets', 'Door Installation',
        'Window Repair', 'Deck Building', 'Flooring Installation'
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
    "Malta": ["Birkirkara", "Bormla (Cospicua)", "Fgura", "Floriana", "Fontana", "Għajnsielem", "Għarb", "Għargħur", "Għasri", "Għaxaq", "Gudja", "Gżira", "Ħamrun", "Iklin", "Isla (Senglea)", "Kalkara", "Kerċem", "Kirkop", "Lija", "Luqa", "Marsa", "Marsaskala", "Marsaxlokk", "Mdina", "Mellieħa", "Mosta", "Mqabba", "Msida", "Mtarfa", "Munxar", "Nadur", "Naxxar", "Paola", "Pembroke", "Pietà", "Qala", "Qormi", "Qrendi", "Rabat (Gozo)", "Rabat (Malta)", "Safi", "San Ġiljan (St. Julian's)", "San Lawrenz", "San Pawl il-Baħar (St. Paul's Bay)", "Sannat", "Santa Luċija", "Santa Venera", "Siġġiewi", "Sliema", "Swieqi", "Ta' Xbiex", "Tarxien", "Valletta", "Victoria (Rabat, Gozo)", "Xagħra", "Xewkija", "Xgħajra", "Żabbar", "Żebbuġ (Gozo)", "Żebbuġ (Malta)", "Żejtun", "Żurrieq"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Bristol", "Edinburgh", "Leeds", "Sheffield", "Newcastle"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao"]
};

// Sample Plumbers Data (for plumbing.html)
// Added joinDate and an explicit ID for sorting/linking
const plumbersData = [
    {
        id: 'john-paul',
        name: 'John "The Pipe" Paul',
        specialty: 'Emergency Leaks, Drain Cleaning, Water Heater Repair',
        rating: 4.5,
        reviews: 87,
        description: 'With over 15 years of experience, John offers prompt and reliable plumbing services across Malta. Known for his attention to detail and friendly approach.',
        avatar: 'https://placehold.co/100x100/A7D129/FFFFFF?text=JP',
        country: 'Malta',
        locality: 'Birkirkara',
        joinDate: '2010-03-15' //YYYY-MM-DD
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
        joinDate: '2012-07-22'
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
        joinDate: '2015-11-01'
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
        joinDate: '2018-01-10'
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
        joinDate: '2008-05-20'
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
        joinDate: '2011-09-05'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    // Elements from apply.html (professional application form)
    const mainServiceCheckboxesContainer = document.getElementById('mainServiceCheckboxes');
    const specificServicesCheckboxesDiv = document.getElementById('specificServicesCheckboxes');
    const professionalApplicationForm = document.getElementById('professionalApplicationForm'); // Ensure this ID is correct for the form
    const formMessage = document.getElementById('formMessage'); // Message div for application form
    const countrySelectApply = document.getElementById('country'); // Renamed for clarity for apply.html
    const localitySelectApply = document.getElementById('locality'); // Renamed for clarity for apply.html


    // Elements from plumbing.html (plumber listing page)
    const filterCountrySelect = document.getElementById('filterCountry');
    const filterLocalitySelect = document.getElementById('filterLocality');
    const minRatingSelect = document.getElementById('minRating');
    const sortBySelect = document.getElementById('sortBy');
    const plumbersDisplayContainer = document.getElementById('plumbersDisplay'); // The main container for plumber cards

    // Elements for header buttons (present on all pages)
    const loginHeaderButton = document.getElementById('loginHeaderButton');
    const signUpHeaderButton = document.getElementById('signUpHeaderButton');


    // --- Functions for Header Buttons (Login/Logout, Account/Sign Up) ---
    // This function checks the login status from localStorage and updates the header buttons accordingly.
    // It should be called on every page load to maintain consistent UI.
    function handleAuthButtons() {
        // Check if the necessary buttons exist on the current page.
        if (loginHeaderButton && signUpHeaderButton) {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const loggedInUser = localStorage.getItem('loggedInUser');

            if (isLoggedIn) {
                // User is logged in: change "Login" to "Account" and "Sign Up" to "Logout"
                loginHeaderButton.textContent = 'Account';
                // Add a placeholder click handler for the Account button.
                // In a real application, this would redirect to a user's account management page.
                loginHeaderButton.onclick = () => {
                    console.log(`Navigating to account page for user: ${loggedInUser}`);
                    // window.location.href = 'account.html'; // Uncomment and create account.html if needed
                };
                // Ensure the Login button (now Account) has its original styling reset or adjusted if needed.
                loginHeaderButton.style.backgroundColor = ''; // Reset any specific styles
                loginHeaderButton.style.color = ''; // Reset any specific styles

                signUpHeaderButton.textContent = 'Logout';
                // Apply a distinct style for the Logout button for clarity.
                signUpHeaderButton.style.backgroundColor = 'var(--secondary-charcoal)'; // Darker color for Logout
                signUpHeaderButton.style.color = 'var(--text-light)'; // White text on dark background
                signUpHeaderButton.className = 'cta-button'; // Ensure it keeps the button class for base styling
                // Add the click handler for the Logout button.
                signUpHeaderButton.onclick = () => {
                    // Clear login state from localStorage
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('loggedInUser');
                    // Redirect to the homepage after logout
                    window.location.href = 'index.html';
                };
            } else {
                // User is not logged in: display "Login" and "Sign Up"
                loginHeaderButton.textContent = 'Login';
                // Reset to default login button styling
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.onclick = () => {
                    window.location.href = 'login.html'; // Redirect to the login page
                };

                signUpHeaderButton.textContent = 'Sign Up';
                // Reset to default CTA button styling
                signUpHeaderButton.className = 'cta-button'; // Ensure it has the base CTA styling
                signUpHeaderButton.style.backgroundColor = ''; // Reset any specific styles
                signUpHeaderButton.style.color = ''; // Reset any specific styles
                signUpHeaderButton.onclick = () => {
                    window.location.href = 'professional-apply-page.html'; // Redirect to the sign-up page
                };
            }
        }
    }


    // --- Functions for Professional Application Form (apply.html) ---

    // This function is for the apply.html page's dynamic checkboxes
    function updateSpecificServices() {
        // Only run if elements for apply.html exist
        if (!specificServicesCheckboxesDiv || !mainServiceCheckboxesContainer) return;

        specificServicesCheckboxesDiv.innerHTML = '';
        const selectedMainServiceCheckboxes = Array.from(mainServiceCheckboxesContainer.querySelectorAll('input[name="mainService"]:checked'));
        const selectedCategories = selectedMainServiceCheckboxes.map(checkbox => checkbox.value);

        if (selectedCategories.length === 0) {
            specificServicesCheckboxesDiv.innerHTML = '<p class="select-hint">Select at least one \'Main Service Category\' above to see specific services.</p>';
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
             specificServicesCheckboxesDiv.innerHTML = '<p class="select-hint">No specific services defined for the selected category(ies). Please describe in the "About" section.</p>';
             return;
        }

        Array.from(uniqueServices).sort().forEach(service => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'servicesOffered';
            checkbox.value = service;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${service}`));
            specificServicesCheckboxesDiv.appendChild(label);
        });
    }

    // Functions to populate country and locality dropdowns for apply.html
    function populateApplyCountries() {
        if (!countrySelectApply) return; // Exit if element doesn't exist

        countrySelectApply.innerHTML = '<option value="">-- Select Country --</option>';
        for (const countryName in countriesAndLocalities) {
            const option = document.createElement('option');
            option.value = countryName;
            option.textContent = countryName;
            countrySelectApply.appendChild(option);
        }
    }

    function updateApplyLocalities() {
        if (!localitySelectApply) return; // Exit if element doesn't exist

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

    // --- Functions for Plumber Listing Page (plumbing.html) ---

    function populateCountryFilters() {
        if (!filterCountrySelect) return;

        const uniqueCountries = new Set();
        plumbersData.forEach(plumber => uniqueCountries.add(plumber.country));

        filterCountrySelect.innerHTML = '<option value="all">All Countries</option>';
        Array.from(uniqueCountries).sort().forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            filterCountrySelect.appendChild(option);
        });
        populateLocalityFilters();
    }

    function populateLocalityFilters() {
        if (!filterLocalitySelect) return;

        filterLocalitySelect.innerHTML = '<option value="all">All Localities</option>';
        filterLocalitySelect.disabled = true;

        const selectedCountry = filterCountrySelect.value;
        if (selectedCountry && selectedCountry !== 'all' && countriesAndLocalities[selectedCountry]) {
            const uniqueLocalities = new Set();
            plumbersData.filter(p => p.country === selectedCountry)
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


    function displayPlumbers(plumbersToDisplay) {
        if (!plumbersDisplayContainer) return;

        plumbersDisplayContainer.innerHTML = '';

        if (plumbersToDisplay.length === 0) {
            plumbersDisplayContainer.innerHTML = '<p class="no-results-message">No plumbers found matching your criteria.</p>';
            return;
        }

        plumbersToDisplay.forEach(plumber => {
            const plumberCard = document.createElement('div');
            plumberCard.className = 'plumber-card';
            plumberCard.innerHTML = `
                <div class="plumber-header">
                    <img src="${plumber.avatar}" alt="Plumber ${plumber.name} Profile" class="plumber-avatar">
                    <h3>${plumber.name}</h3>
                </div>
                <p class="plumber-specialty">${plumber.specialty}</p>
                <div class="plumber-rating">
                    ${generateStarRating(plumber.rating)} ${plumber.rating} (${plumber.reviews} reviews)
                </div>
                <p class="plumber-description">${plumber.description}</p>
                <button class="book-now-button" onclick="location.href='profile.html?id=${plumber.id}'">Book Now</button>
            `;
            plumbersDisplayContainer.appendChild(plumberCard);
        });
    }

    function generateStarRating(rating) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                starsHtml += '<i class="fas fa-star"></i>'; // Full star
            } else if (rating >= i - 0.5) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>'; // Half star
            } else {
                starsHtml += '<i class="far fa-star"></i>'; // Empty star
            }
        }
        return starsHtml;
    }

    function filterAndSortPlumbers() {
        let filtered = [...plumbersData];

        const selectedCountry = filterCountrySelect ? filterCountrySelect.value : 'all';
        if (selectedCountry !== 'all') {
            filtered = filtered.filter(plumber => plumber.country === selectedCountry);
        }

        const selectedLocality = filterLocalitySelect ? filterLocalitySelect.value : 'all';
        if (selectedLocality !== 'all') {
            filtered = filtered.filter(plumber => plumber.locality === selectedLocality);
        }

        const minRating = minRatingSelect ? parseFloat(minRatingSelect.value) : 0;
        if (minRating > 0) {
            filtered = filtered.filter(plumber => plumber.rating >= minRating);
        }

        const sortBy = sortBySelect ? sortBySelect.value : 'default';
        if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
        } else if (sortBy === 'oldest') {
            filtered.sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));
        } else if (sortBy === 'highestRated') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        displayPlumbers(filtered);
    }

    // --- Event Listeners and Initial Calls ---

    // Initialize header buttons on all pages where 'loginHeaderButton' and 'signUpHeaderButton' are present.
    // This call is placed outside specific form checks so it runs regardless of the page's primary content.
    handleAuthButtons();

    // Logic specifically for professional application form (apply.html)
    if (professionalApplicationForm) {
        populateApplyCountries(); // Populate countries for apply form
        countrySelectApply.addEventListener('change', updateApplyLocalities);
        updateSpecificServices();
        mainServiceCheckboxesContainer.addEventListener('change', updateSpecificServices);

        professionalApplicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formMessage.style.display = 'none';
            formMessage.className = 'form-message'; // Reset classes

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const email = document.getElementById('email').value;
            const selectedMainServices = Array.from(this.querySelectorAll('input[name="mainService"]:checked')).map(checkbox => checkbox.value);
            const selectedSpecificServices = Array.From(this.querySelectorAll('input[name="servicesOffered"]:checked')).map(checkbox => checkbox.value);
            const country = countrySelectApply.value;
            const locality = localitySelectApply.value;

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


            // All validations pass, simulate backend process
            formMessage.textContent = 'Application submitted! Please check your email for a confirmation link to activate your account.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            const newProfessional = {
                id: username.toLowerCase().replace(/\s/g, '-') + '-' + Date.now(), // Simple unique ID
                name: `${document.getElementById('firstName').value} "${username}" ${document.getElementById('lastName').value}`, // Example name format
                specialty: selectedSpecificServices.length > 0 ? selectedSpecificServices.join(', ') : selectedMainServices.join(', '),
                rating: 0, // New professionals start with no rating
                reviews: 0,
                description: document.getElementById('description').value,
                avatar: `https://placehold.co/100x100/A7D129/FFFFFF?text=${username.substring(0,2).toUpperCase()}`,
                country: country,
                locality: locality,
                joinDate: new Date().toISOString().split('T')[0] // Current date (YYYY-MM-DD)
            };

            console.log('Simulating email sent to:', email);
            console.log('New Professional Data (ready for confirmation and database storage):', newProfessional);

            // Simulate account creation and addition to relevant data arrays upon "confirmation"
            setTimeout(() => {
                // If the main service includes 'plumbing', add to plumbersData
                if (selectedMainServices.includes('plumbing')) {
                    plumbersData.push(newProfessional);
                    console.log('Simulated: New plumber added to plumbersData (temporary for this session):', newProfessional);
                }
                // Set login status for the newly signed up user
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', username);

                // Re-render header buttons to reflect login status immediately after sign-up
                handleAuthButtons();

                professionalApplicationForm.reset(); // Reset the form after simulated submission
                updateSpecificServices(); // Re-initialize dynamic checkboxes after reset
                populateApplyCountries(); // Re-populate countries dropdown
                updateApplyLocalities(); // Re-populate localities based on default country
            }, 3000); // Simulate delay for confirmation
        });
    }

    // Logic specifically for plumber listing page (plumbing.html)
    if (plumbersDisplayContainer) {
        populateCountryFilters();
        filterAndSortPlumbers(); // Initial display of plumbers

        filterCountrySelect.addEventListener('change', () => {
            populateLocalityFilters();
            filterAndSortPlumbers();
        });
        filterLocalitySelect.addEventListener('change', filterAndSortPlumbers);
        minRatingSelect.addEventListener('change', filterAndSortPlumbers);
        sortBySelect.addEventListener('change', filterAndSortPlumbers);
    }
});

 document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const formMessage = document.getElementById('formMessage');

            // Hardcoded credentials for demonstration
            const VALID_USERNAME = 'user123';
            const VALID_PASSWORD = 'password123';

            if (loginForm) {
                loginForm.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent default form submission

                    formMessage.style.display = 'none'; // Hide previous messages
                    formMessage.className = 'form-message'; // Reset classes

                    const username = usernameInput.value.trim();
                    const password = passwordInput.value.trim();

                    // Basic client-side validation
                    if (username === '' || password === '') {
                        formMessage.textContent = 'Please enter both username and password.';
                        formMessage.className = 'form-message error';
                        formMessage.style.display = 'block';
                        return;
                    }

                    // Simulate API call for authentication
                    setTimeout(() => {
                        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                            formMessage.textContent = 'Login successful! Redirecting to homepage...';
                            formMessage.className = 'form-message success';
                            formMessage.style.display = 'block';

                            // Set login status in localStorage
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('loggedInUser', username); // Store username

                            // Redirect to homepage after a short delay
                            setTimeout(() => {
                                window.location.href = 'index.html';
                            }, 1500);
                        } else {
                            formMessage.textContent = 'Invalid username or password.';
                            formMessage.className = 'form-message error';
                            formMessage.style.display = 'block';
                        }
                    }, 1000); // Simulate network delay
                });
            }
        });