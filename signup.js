function validateSignup() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var signupMessage = document.getElementById('signup-message');

    // Simple validation
    if (username && email && password) {
        // Successful signup (you can redirect or perform other actions here)
        signupMessage.textContent = 'Signup successful!';
        clearSignupForm();
    } else {
        // Display error message
        signupMessage.textContent = 'Please fill in all the fields.';
    }
}

function clearSignupForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
