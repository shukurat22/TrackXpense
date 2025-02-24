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

// Hamburger menu
//document.addEventListener("DOMContentLoaded", function () {

const toggle = document.querySelector("#navToggle");
const mobile_menu = document.querySelector('.mobile-menu');

//if (toggle && mobile-menu) {
navToggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
    mobile_menu.classList.toggle('active');
});

// Smooth Scroll Functionality for Navigation and Footer Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'       // Align to the top of the section
            });
        }
    });
});

