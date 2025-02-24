// Hamburger menu
//document.addEventListener("DOMContentLoaded", function () {

const toggle = document.querySelector("#navToggle");
const mobile_menu = document.querySelector('.mobile-menu');

//if (toggle && mobile-menu) {
navToggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
    mobile_menu.classList.toggle('active');
});





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

//Trans his//

        /* AN ARRAY OF THE TRANSACTION hISTORY */
        document.addEventListener("DOMContentLoaded", function() {
            const transactions = [
                { name: "Paypal - Received", amount: 2200, date: "2025-02-16", type: "income", icon: "fab fa-paypal" },
                { name: "Spotify Premium", amount: -199, date: "2025-02-05", type: "expense", icon: "fab fa-spotify" },
                { name: "Transferwise", amount: 890, date: "2025-01-30", type: "income", icon: "fas fa-exchange-alt" },
                { name: "SCA Payment", amount: -420, date: "2025-01-20", type: "expense", icon: "fas fa-shopping-bag" },
                { name: "Uber", amount: -105, date: "2025-01-11", type: "expense", icon: "fas fa-car 🚗" },
                { name: "Spa Session", amount: -300, date: "2025-01-03", type: "expense", icon: "fas fa-spa" },
                { name: "Groceries", amount: -1000, date: "2024-12-27", type: "expense", icon: "fas fa-shopping-cart" },
                { name: "Electricity", amount: -580, date: "2024-12-24", type: "expense", icon: "fas fa-lightbulb " },
                { name: "Salary", amount: 3500, date: "2024-12-23", type: "income", icon: "fas fa-money-bill-wave" },
                
            ];

            /* ITERATING THE ARRAY TO DISPLAY */
            const transactionList = document.getElementById("transaction-list");
            const sortOptions = document.getElementById("sort-options");

            function renderTransactions(filteredTransactions) {
                transactionList.innerHTML = "";
                filteredTransactions.forEach(transaction => {
                    const transactionItem = document.createElement("div");
                    transactionItem.classList.add("transaction", transaction.type);
                    transactionItem.innerHTML = `
                        <div class="details">
                            <i class="icon ${transaction.icon}"></i>
                            <div>
                                <p>${transaction.name}</p>
                                <small>${transaction.date}</small>
                            </div>
                        </div>
                        <div class="amount">${transaction.amount > 0 ? "+" : "-"}$${Math.abs(transaction.amount)}</div>
                    `;
                    transactionList.appendChild(transactionItem);
                });
            }

            /* DROPDOWN MENU SECTION THAT CATEGORIZE THE TRANSACTION HISTORY */
            function filterTransactions(option) {
                const now = new Date();
                let filtered = transactions;
                if (option === "week") {
                    filtered = transactions.filter(t => new Date(t.date) >= new Date(now.setDate(now.getDate() - 7)));
                } else if (option === "month") {
                    filtered = transactions.filter(t => new Date(t.date).getMonth() === new Date().getMonth());
                } else if (option === "year") {
                    filtered = transactions.filter(t => new Date(t.date).getFullYear() === new Date().getFullYear());
                }
                renderTransactions(filtered);
            }

            sortOptions.addEventListener("change", function() {
                filterTransactions(this.value);
            });

            renderTransactions(transactions);
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



// copied file

// script.js

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












document.addEventListener("DOMContentLoaded", function() {
    const doneButton = document.querySelector(".done");

    doneButton.addEventListener("click", function() {
        // Get input values
        const amountInput = document.querySelector("input[name='cost']");
        const dateInput = document.querySelector("input[name='date']");
        const invoiceInput = document.querySelector("input[name='mesa']");

        const amount = amountInput.value.trim();
        const date = dateInput.value.trim();
        const invoice = invoiceInput.value.trim();

        // Validate input fields
        if (amount === "" || date === "") {
            showPopup("❌ Error: Please fill in all required fields.");
        } else if (isNaN(amount) || Number(amount) <= 0) {
            showPopup("⚠️ Error: Enter a valid amount.");
        } else {
            showPopup("✅ Income added successfully!");
            // Clear inputs after success
            amountInput.value = "";
            dateInput.value = "";
            invoiceInput.value = "";
        }
    });
});

// Function to show the popup
function showPopup(message) {
    const popup = document.getElementById("popup-message");
    const popupText = document.getElementById("popup-text");

    popupText.textContent = message;
    popup.classList.remove("hidden");
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup-message").classList.add("hidden");
}

