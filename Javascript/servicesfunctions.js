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

    // Elements from plumbing.html (plumber listing page)
    const filterCountrySelect = document.getElementById('filterCountry');
    const filterLocalitySelect = document.getElementById('filterLocality');
    const minRatingSelect = document.getElementById('minRating'); // Changed from minReviewsInput
    const sortBySelect = document.getElementById('sortBy');
    const plumbersDisplayContainer = document.getElementById('plumbersDisplay'); // The main container for plumber cards

    // --- Functions for Professional Application Form (apply.html) ---

    // This function is for the apply.html page's dynamic checkboxes
    function updateSpecificServices() {
        if (!specificServicesCheckboxesDiv || !mainServiceCheckboxesContainer) return; // Exit if elements don't exist (i.e., on plumbing.html)

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

    // --- Functions for Plumber Listing Page (plumbing.html) ---

    function populateCountryFilters() {
        if (!filterCountrySelect) return; // Exit if element doesn't exist (i.e., on apply.html)

        const uniqueCountries = new Set();
        plumbersData.forEach(plumber => uniqueCountries.add(plumber.country));

        filterCountrySelect.innerHTML = '<option value="all">All Countries</option>';
        Array.from(uniqueCountries).sort().forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            filterCountrySelect.appendChild(option);
        });
        // Set Malta as default selected for filtering, if desired for this specific page
        // filterCountrySelect.value = "Malta";
        populateLocalityFilters(); // Populate localities based on initial country selection
    }

    function populateLocalityFilters() {
        if (!filterLocalitySelect) return; // Exit if element doesn't exist

        filterLocalitySelect.innerHTML = '<option value="all">All Localities</option>';
        filterLocalitySelect.disabled = true; // Disable until a country is selected

        const selectedCountry = filterCountrySelect.value;
        if (selectedCountry && selectedCountry !== 'all' && countriesAndLocalities[selectedCountry]) {
            const uniqueLocalities = new Set();
            // Filter plumbers by selected country to get relevant localities
            plumbersData.filter(p => p.country === selectedCountry)
                        .forEach(p => uniqueLocalities.add(p.locality));

            // Use the list from countriesAndLocalities for a comprehensive list if preferred
            // const localities = countriesAndLocalities[selectedCountry].sort();

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
        if (!plumbersDisplayContainer) return; // Exit if element doesn't exist

        plumbersDisplayContainer.innerHTML = ''; // Clear previous plumbers

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
                <button class="book-now-button" onclick="location.href='plumber-profile.html?id=${plumber.id}'">Book Now</button>
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
        let filtered = [...plumbersData]; // Start with a copy of all plumbers

        // 1. Filter by Country
        const selectedCountry = filterCountrySelect ? filterCountrySelect.value : 'all';
        if (selectedCountry !== 'all') {
            filtered = filtered.filter(plumber => plumber.country === selectedCountry);
        }

        // 2. Filter by Locality
        const selectedLocality = filterLocalitySelect ? filterLocalitySelect.value : 'all';
        if (selectedLocality !== 'all') {
            filtered = filtered.filter(plumber => plumber.locality === selectedLocality);
        }

        // 3. Filter by Minimum Rating
        const minRating = minRatingSelect ? parseFloat(minRatingSelect.value) : 0; // Get float value
        if (minRating > 0) { // Only filter if a minimum rating is selected
            filtered = filtered.filter(plumber => plumber.rating >= minRating);
        }

        // 4. Sort
        const sortBy = sortBySelect ? sortBySelect.value : 'default';
        if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
        } else if (sortBy === 'oldest') {
            filtered.sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));
        } else if (sortBy === 'highestRated') {
            filtered.sort((a, b) => b.rating - a.rating);
        }
        // 'default' implies no specific sort, preserves original order

        displayPlumbers(filtered);
    }

    // --- Event Listeners and Initial Calls ---

    // For apply.html page
    if (professionalApplicationForm) {
        updateSpecificServices(); // Initial call for apply.html
        mainServiceCheckboxesContainer.addEventListener('change', updateSpecificServices);

        // Handle form submission for apply.html
        professionalApplicationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            formMessage.style.display = 'none'; // Hide previous messages

            const formData = new FormData(this);
            const data = {};

            // Manually collect mainService and servicesOffered as arrays
            data.mainService = [];
            Array.from(this.querySelectorAll('input[name="mainService"]:checked')).forEach(checkbox => {
                data.mainService.push(checkbox.value);
            });

            data.servicesOffered = [];
            Array.from(this.querySelectorAll('input[name="servicesOffered"]:checked')).forEach(checkbox => {
                data.servicesOffered.push(checkbox.value);
            });

            // Collect other form data, including new country and locality selects
            for (let [key, value] of formData.entries()) {
                if (key !== 'mainService' && key !== 'servicesOffered') {
                    data[key] = value;
                }
            }

            console.log('Application Data:', data);

            // Simulate API call delay
            setTimeout(() => {
                const isSuccess = true; // Simulate success

                if (isSuccess) {
                    formMessage.textContent = 'Application submitted successfully! We will review your details and get back to you soon.';
                    formMessage.className = 'form-message success';
                    this.reset(); // Clear the form
                    // Re-initialize specific services checkboxes and location dropdowns after reset
                    updateSpecificServices();
                    // populateCountries(); // Only if apply.html had country/locality selects
                    // updateLocalities(); // Only if apply.html had country/locality selects
                } else {
                    formMessage.textContent = 'Failed to submit application. Please try again later.';
                    formMessage.className = 'form-message error';
                }
                formMessage.style.display = 'block';
            }, 1000);
        });
    }

    // For plumbing.html page
    if (plumbersDisplayContainer) { // Check if plumber display container exists to run plumbing-specific logic
        populateCountryFilters();
        filterAndSortPlumbers(); // Initial display of plumbers

        filterCountrySelect.addEventListener('change', () => {
            populateLocalityFilters(); // Update localities first
            filterAndSortPlumbers(); // Then filter and display
        });
        filterLocalitySelect.addEventListener('change', filterAndSortPlumbers);
        minRatingSelect.addEventListener('change', filterAndSortPlumbers); // Changed to 'change' event and minRatingSelect
        sortBySelect.addEventListener('change', filterAndSortPlumbers);
    }
});
