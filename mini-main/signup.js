document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');
    
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match';
        event.preventDefault(); // Prevent form submission
    } else if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !specialCharRegex.test(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one special character';
        event.preventDefault(); // Prevent form submission
    } else {
        passwordError.textContent = '';
    }
});
