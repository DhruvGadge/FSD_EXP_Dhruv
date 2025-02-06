document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let errors = [];

    // Validate username
    if (username === "") {
        errors.push("Username cannot be empty or spaces.");
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errors.push("Email is not valid.");
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errors.push("Phone number must be 10 digits.");
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Password must be at least 7 characters long, contain one uppercase letter, one digit, and one special character (&,$,#,@).");
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Show errors or success message
    const errorMessages = document.getElementById("errorMessages");
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
    } else {
        errorMessages.style.color = "green";
        errorMessages.innerHTML = "Registration Successful!";
    }
});
