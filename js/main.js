const filterBtns = Array.from(document.querySelectorAll(".filter-btn-row .filter-btn"))
const shoppingItems = Array.from(document.querySelectorAll(".shopping-item"));

// adds listeners for filter buttons
filterBtns.forEach(function(el) {
    el.addEventListener('click', function(event) {
        // passes regexp because search bar using regexp
        let itemNameRegExp = new RegExp(el.dataset.itemName);
        filterShoppingItems(itemNameRegExp);

    })
})

function filterShoppingItems(regex) {
    shoppingItems.forEach(function(el) {
        if ( regex.test("all") || regex.test(el.querySelector(".item-name").textContent)) {
            el.hidden = false
        } else {
            el.hidden = true
        }
    })
}
