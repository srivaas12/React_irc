function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const formTitle = document.getElementById('formTitle');

    if (loginForm.style.display === 'none') {
        // Switch to login form
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.textContent = 'Login';
    } else {
        // Switch to sign-up form
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
    }
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // You can add your login logic here
    // For now, let's just display the entered username and password
    alert(`User logged in with username: ${username} and password: ${password}`);
    return false; // Prevent form submission for this example
}

function signUpUser() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // You can add your sign-up logic here
    // For now, let's just display the entered username and password
    alert(`User signed up with username: ${username} and password: ${password}`);
    return false; // Prevent form submission for this example
}