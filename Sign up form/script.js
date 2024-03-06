document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate form fields
        if (!usernameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim()) {
            errorMessage.textContent = "All fields are required!";
        } else {
            // Submit the form (you can add your own logic here)
            console.log("Form submitted successfully!");
        }
    });
});