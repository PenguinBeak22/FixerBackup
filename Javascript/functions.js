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
    const mainServiceCheckboxesContainer = document.getElementById('mainServiceCheckboxes');
    const specificServicesCheckboxesDiv = document.getElementById('specificServicesCheckboxes');
    const formMessage = document.getElementById('formMessage');
    const countrySelect = document.getElementById('country');
    const localitySelect = document.getElementById('locality');

    // Function to populate countries dropdown
    function populateCountries() {
        // Clear existing options, keep the default hint
        countrySelect.innerHTML = '<option value="">-- Select Country --</option>';
        for (const countryName in countriesAndLocalities) {
            const option = document.createElement('option');
            option.value = countryName;
            option.textContent = countryName;
            countrySelect.appendChild(option);
        }
        // Set Malta as default selected, if desired
        countrySelect.value = "Malta";
        // Trigger locality update for the default country
        updateLocalities();
    }

    // Function to update localities dropdown based on selected country
    function updateLocalities() {
        localitySelect.innerHTML = '<option value="">-- Select Locality --</option>';
        localitySelect.disabled = true; // Disable until a country is selected

        const selectedCountry = countrySelect.value;
        if (selectedCountry && countriesAndLocalities[selectedCountry]) {
            const localities = countriesAndLocalities[selectedCountry].sort(); // Sort localities alphabetically
            localities.forEach(locality => {
                const option = document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                localitySelect.appendChild(option);
            });
            localitySelect.disabled = false; // Enable locality dropdown
        }
    }

    function updateSpecificServices() {
        // Clear existing checkboxes and hint
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

    // Initial calls to populate dropdowns and services
    populateCountries();
    updateSpecificServices();

    // Event listener for changes in the country select
    countrySelect.addEventListener('change', updateLocalities);

    // Event listener for changes in the main service checkboxes
    mainServiceCheckboxesContainer.addEventListener('change', updateSpecificServices);

    // Handle form submission
    document.getElementById('professionalApplicationForm').addEventListener('submit', function (event) {
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
                populateCountries(); // Re-populate countries
                updateLocalities(); // Re-populate localities based on default country
            } else {
                formMessage.textContent = 'Failed to submit application. Please try again later.';
                formMessage.className = 'form-message error';
            }
            formMessage.style.display = 'block';
        }, 1000);
    });
});