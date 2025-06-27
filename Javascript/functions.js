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
            joinDate: '2010-03-15'
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
            joinDate: '2013-05-01'
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
            joinDate: '2016-09-10'
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
            joinDate: '2011-02-20'
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
            joinDate: '2017-04-05'
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
            joinDate: '2014-08-12'
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
            joinDate: '2010-01-01'
        }
    ]
};

// Data for specific service types (for application form, etc.)
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


document.addEventListener('DOMContentLoaded', () => {
    // Elements from professional-apply-page.html (professional application form)
    const mainServiceCheckboxesContainer = document.getElementById('mainServiceCheckboxes');
    const specificServicesCheckboxesDiv = document.getElementById('specificServicesCheckboxes');
    const professionalApplicationForm = document.getElementById('professionalApplicationForm');
    const formMessage = document.getElementById('formMessage');
    const countrySelectApply = document.getElementById('country');
    const localitySelectApply = document.getElementById('locality');

    // Elements for login.html
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginFormMessage = document.getElementById('formMessage'); // Use a distinct name to avoid conflict if already used


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

    let currentServiceType = null; // Will store 'plumbing', 'carpentry', etc.
    let currentProfessionalsData = []; // The array of professionals for the current service


    // --- Functions for Header Buttons (Login/Logout, Account/Sign Up) ---
    function handleAuthButtons() {
        if (loginHeaderButton && signUpHeaderButton) {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const loggedInUser = localStorage.getItem('loggedInUser');

            if (isLoggedIn) {
                loginHeaderButton.textContent = 'Account';
                loginHeaderButton.onclick = () => {
                    console.log(`Navigating to account page for user: ${loggedInUser}`);
                    // window.location.href = 'account.html';
                };
                // Reset to default button style for Account (which was login-button initially)
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.className = 'login-button'; // Ensure it retains its class for styling

                signUpHeaderButton.textContent = 'Logout';
                signUpHeaderButton.style.backgroundColor = 'var(--secondary-charcoal)'; // Darker color for Logout
                signUpHeaderButton.style.color = 'var(--text-light)'; // White text on dark background
                signUpHeaderButton.className = 'cta-button'; // Ensure it keeps the button class for base styling
                signUpHeaderButton.onclick = () => {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('loggedInUser');
                    window.location.href = 'index.html';
                };
            } else {
                loginHeaderButton.textContent = 'Login';
                // Reset to default login button styling
                loginHeaderButton.className = 'login-button'; // Ensure it has the base styling
                loginHeaderButton.style.backgroundColor = '';
                loginHeaderButton.style.color = '';
                loginHeaderButton.onclick = () => {
                    window.location.href = 'login.html';
                };

                signUpHeaderButton.textContent = 'Sign Up';
                // Reset to default CTA button styling
                signUpHeaderButton.className = 'cta-button';
                signUpHeaderButton.style.backgroundColor = '';
                signUpHeaderButton.style.color = '';
                signUpHeaderButton.onclick = () => {
                    window.location.href = 'professional-apply-page.html';
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

        // Determine specific text and banner image based on serviceType
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
                // Fallback for unknown service types
                break;
        }

        // Update document title
        document.title = title;

        // Update banner content if elements exist
        if (serviceTitleElement) {
            serviceTitleElement.textContent = title.replace('Fixalo – ', ''); // Remove 'Fixalo -' for banner h1
            // Optional: update banner background image dynamically
            const pageBanner = document.querySelector('.page-banner');
            if (pageBanner) {
                // EncodeURIComponent for spaces/special chars in URL
                pageBanner.style.backgroundImage = `linear-gradient(rgba(54, 69, 79, 0.7), rgba(54, 69, 79, 0.7)), url('https://placehold.co/1600x600/36454F/FFFFFF?text=${encodeURIComponent(bannerImageText)}')`;
            }
        }
        if (serviceDescriptionElement) {
            serviceDescriptionElement.textContent = description;
        }
        if (availableProfessionalsTitle) {
            availableProfessionalsTitle.textContent = sectionTitle;
        }
    }


    // Populates the country filter dropdown on the service listing page
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
        populateLocalityFilters(professionalsData); // Also update localities when country changes
    }

    // Populates the locality filter dropdown based on the selected country
    function populateLocalityFilters(professionalsData) {
        if (!filterLocalitySelect) return;

        filterLocalitySelect.innerHTML = '<option value="all">All Localities</option>';
        filterLocalitySelect.disabled = true; // Disable until a country is selected

        const selectedCountry = filterCountrySelect.value;
        if (selectedCountry && selectedCountry !== 'all' && countriesAndLocalities[selectedCountry]) {
            const uniqueLocalities = new Set();
            // Filter professionals by selected country to get relevant localities
            professionalsData.filter(p => p.country === selectedCountry)
                        .forEach(p => uniqueLocalities.add(p.locality));

            Array.from(uniqueLocalities).sort().forEach(locality => {
                const option = document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                filterLocalitySelect.appendChild(option);
            });
            filterLocalitySelect.disabled = false; // Enable locality dropdown
        }
    }

    // Displays the filtered and sorted professionals on the page
    function displayProfessionals(professionalsToDisplay) {
        if (!serviceDisplayContainer) return;

        serviceDisplayContainer.innerHTML = ''; // Clear existing content

        if (professionalsToDisplay.length === 0) {
            serviceDisplayContainer.innerHTML = '<p class="no-results-message">No professionals found matching your criteria.</p>';
            return;
        }

        professionalsToDisplay.forEach(professional => {
            const professionalCard = document.createElement('div');
            professionalCard.className = 'plumber-card'; // Reusing existing card styling from styles.css
            professionalCard.innerHTML = `
                <div class="plumber-header">
                    <img src="${professional.avatar}" alt="Professional ${professional.name} Profile" class="plumber-avatar">
                    <h3>${professional.name}</h3>
                </div>
                <p class="plumber-specialty">${professional.specialty}</p>
                <div class="plumber-rating">
                    ${generateStarRating(professional.rating)} ${professional.rating} (${professional.reviews} reviews)
                </div>
                <p class="plumber-description">${professional.description}</p>
                <button class="book-now-button" onclick="location.href='plumber-profile.html?id=${professional.id}'">View Profile</button>
            `;
            serviceDisplayContainer.appendChild(professionalCard);
        });
    }

    // Generates the HTML for star ratings
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

    // Filters and sorts the professionals based on current filter selections
    function filterAndSortProfessionals() {
        let filtered = [...currentProfessionalsData]; // Use the currently active service's data

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

        displayProfessionals(filtered);
    }

    // --- Functions for Professional Application Form (professional-apply-page.html) ---

    function updateSpecificServices() {
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
            const services = servicesData[serviceCategory]; // Use the servicesData for application form
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

    // --- Main Initialization Logic ---

    // Initialize header buttons on all pages
    handleAuthButtons();

    // Logic specifically for professional application form (professional-apply-page.html)
    if (professionalApplicationForm) {
        populateApplyCountries();
        countrySelectApply.addEventListener('change', updateApplyLocalities);
        updateSpecificServices();
        mainServiceCheckboxesContainer.addEventListener('change', updateSpecificServices);

        professionalApplicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const email = document.getElementById('email').value;
            const selectedMainServices = Array.from(this.querySelectorAll('input[name="mainService"]:checked')).map(checkbox => checkbox.value);
            const selectedSpecificServices = Array.from(this.querySelectorAll('input[name="servicesOffered"]:checked')).map(checkbox => checkbox.value);
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

            formMessage.textContent = 'Application submitted! Please check your email for a confirmation link to activate your account.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            const newProfessional = {
                id: username.toLowerCase().replace(/\s/g, '-') + '-' + Date.now(),
                name: `${document.getElementById('firstName').value} "${username}" ${document.getElementById('lastName').value}`,
                specialty: selectedSpecificServices.length > 0 ? selectedSpecificServices.join(', ') : selectedMainServices.join(', '),
                rating: 0,
                reviews: 0,
                description: document.getElementById('description').value,
                avatar: `https://placehold.co/100x100/A7D129/FFFFFF?text=${username.substring(0,2).toUpperCase()}`,
                country: country,
                locality: locality,
                joinDate: new Date().toISOString().split('T')[0]
            };

            console.log('Simulating email sent to:', email);
            console.log('New Professional Data (ready for confirmation and database storage):', newProfessional);

            setTimeout(() => {
                // Add new professional to the relevant service data array
                selectedMainServices.forEach(service => {
                    if (tradespeopleData[service]) {
                        tradespeopleData[service].push(newProfessional);
                        console.log(`Simulated: New professional added to ${service} data (temporary for this session):`, newProfessional);
                    }
                });

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUser', username);
                handleAuthButtons();
                professionalApplicationForm.reset();
                updateSpecificServices();
                populateApplyCountries();
                updateApplyLocalities();
            }, 3000);
        });
    }

    // Logic for login page (login.html)
    if (loginForm) {
        const VALID_USERNAME = 'user123';
        const VALID_PASSWORD = 'password123';

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            loginFormMessage.style.display = 'none';
            loginFormMessage.className = 'form-message';

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === '' || password === '') {
                loginFormMessage.textContent = 'Please enter both username and password.';
                loginFormMessage.className = 'form-message error';
                loginFormMessage.style.display = 'block';
                return;
            }

            setTimeout(() => {
                if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                    loginFormMessage.textContent = 'Login successful! Redirecting to homepage...';
                    loginFormMessage.className = 'form-message success';
                    loginFormMessage.style.display = 'block';

                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('loggedInUser', username);

                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    loginFormMessage.textContent = 'Invalid username or password.';
                    loginFormMessage.className = 'form-message error';
                    loginFormMessage.style.display = 'block';
                }
            }, 1000);
        });
    }


    // Logic specifically for generic service listing page (service-listing.html)
    // Check if elements unique to service-listing.html are present (e.g., serviceDisplayContainer)
    if (serviceDisplayContainer && serviceTitleElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceTypeFromUrl = urlParams.get('service'); // Get service type from URL

        if (serviceTypeFromUrl && tradespeopleData[serviceTypeFromUrl]) {
            currentServiceType = serviceTypeFromUrl;
            currentProfessionalsData = tradespeopleData[currentServiceType];

            updateServicePageContent(currentServiceType); // Update dynamic text on the page
            populateCountryFilters(currentProfessionalsData); // Populate filters based on current service data
            filterAndSortProfessionals(); // Initial display of professionals with filters/sort applied
            
            // Add event listeners for filters specific to this page
            filterCountrySelect.addEventListener('change', () => {
                populateLocalityFilters(currentProfessionalsData);
                filterAndSortProfessionals();
            });
            filterLocalitySelect.addEventListener('change', filterAndSortProfessionals);
            minRatingSelect.addEventListener('change', filterAndSortProfessionals);
            sortBySelect.addEventListener('change', filterAndSortProfessionals);

        } else {
            // Handle case where service type is invalid or not provided in URL
            document.title = "Fixalo – Service Not Found";
            if (serviceTitleElement) serviceTitleElement.textContent = "Service Not Found";
            if (serviceDescriptionElement) serviceDescriptionElement.textContent = "The service you are looking for does not exist or could not be loaded.";
            if (availableProfessionalsTitle) availableProfessionalsTitle.textContent = "No Professionals Available";
            if (serviceDisplayContainer) serviceDisplayContainer.innerHTML = '<p class="no-results-message">Please go back to <a href="index.html">Home</a> and select a valid service.</p>';
            // Hide filters if no valid service is loaded
            const filtersContainer = document.querySelector('.filters-container');
            if (filtersContainer) {
                filtersContainer.style.display = 'none';
            }
        }
    }
});
