// validate.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");

        if (!emailField.checkValidity()) {
            emailField.setCustomValidity("Please enter a valid email address.");
        }

        if (!phoneField.checkValidity()) {
            phoneField.setCustomValidity("Please enter a 10-digit phone number.");
        }
    });
});
