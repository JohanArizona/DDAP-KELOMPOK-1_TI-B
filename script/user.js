document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const loginLink = document.getElementById('login-link');
    const profileLink = document.getElementById('profile-link');
    
    if (isLoggedIn) {
        loginLink.style.display = 'none';
        profileLink.style.display = 'block';
        
    }
    
    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const usernameInput = document.getElementById('email').value;
            const passwordInput = document.getElementById('password').value;
            
            const username = 'oceangate@gmail.com';
            const password = '12345';
            
            if (usernameInput === username && passwordInput === password) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').textContent = 'Invalid username or password.';
            }
        });
    }
});
