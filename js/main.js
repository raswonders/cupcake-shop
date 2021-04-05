const filterBtns = Array.from(document.querySelectorAll(".filter-btn-row .filter-btn"))
const shoppingItems = Array.from(document.querySelectorAll(".shopping-item"));

// adds listeners for filter buttons
filterBtns.forEach(function(el) {
    el.addEventListener('click', function(event) {
        filterShoppingItems(el.dataset.itemName);
    })
})

function filterShoppingItems(itemName) {
    shoppingItems.forEach(function(el) {
        if (itemName == "all" || itemName == el.querySelector(".item-name").textContent) {
            el.hidden = false
        } else {
            el.hidden = true
        }
    })
}
