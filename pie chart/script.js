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

        
