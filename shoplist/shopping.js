document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("ul.list li");
    const heading = document.querySelector("h2");

    let itemCount = listItems.length;

    listItems.forEach(item => {
        const itemName = item.textContent.trim().toLowerCase();

        if (itemName === "fresh figs" || itemName === "kale" || itemName === "honey") {
            item.className = "cool";
        }
    });

    heading.textContent = `Buy Groceries (${itemCount} items)`;
});
