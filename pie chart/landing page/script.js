// script.js

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

// Function to handle the "TRACK NOW" button click
document.querySelector('.but').addEventListener('click', function() {
    alert('Thank you for choosing TrackXpense! Let’s get started.');
});

// Function to handle the "Learn More" button click (if uncommented in HTML)
document.querySelector('.cta-button')?.addEventListener('click', function() {
    alert('Learn more about how TrackXpense can help you manage your finances.');
});

// Function to handle the newsletter subscription
document.getElementById('subscribe-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to handle social media icon clicks
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        alert('You are being redirected to our social media page.');
        // You can add actual redirection logic here if needed
    });
});

// Function to handle the app store button clicks
document.querySelectorAll('.store-buttons img').forEach(button => {
    button.addEventListener('click', function() {
        const store = button.alt;
        alert(`You are being redirected to the ${store}.`);
        // You can add actual redirection logic here if needed
    });
});

// Function to handle the contact card interactions
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const contactType = item.querySelector('img').alt;
        alert(`You clicked on the ${contactType} information.`);
    });
});

// Function to handle the footer links
document.querySelectorAll('.footer-links ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = link.textContent;
        alert(`You are being redirected to the ${page} page.`);
        // You can add actual redirection logic here if needed
    });
});

// Function to handle the about list item clicks
document.querySelectorAll('.about-list li').forEach(item => {
    item.addEventListener('click', function() {
        const text = item.querySelector('p').textContent;
        alert(`You clicked on: ${text}`);
    });
});












