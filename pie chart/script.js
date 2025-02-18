document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const subscribeBtn = document.getElementById("subscribe-btn");

    subscribeBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
            emailInput.value = ""; // Clear input field
        }
    });
});
