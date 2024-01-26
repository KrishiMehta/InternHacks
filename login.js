function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'user' && password === 'pass') {
        // Successful login (you can redirect or perform other actions here)
        errorMessage.textContent = '';
        alert('Login successful!');
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
}
