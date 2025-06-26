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