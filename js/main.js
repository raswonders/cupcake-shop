const filterBtns = Array.from(document.querySelectorAll(".filter-btn-row .filter-btn"))
const shoppingItems = Array.from(document.querySelectorAll(".shopping-item"))
const searchBarBtn = document.querySelector("form.search-bar")
const searchBar = document.getElementById("search-input")

// adds listeners for filter buttons
filterBtns.forEach(function(el) {
    el.addEventListener('click', function(event) {
        // passes regexp because search bar using regexp
        let itemNameRegExp = new RegExp(el.dataset.itemName);
        filterShoppingItems(itemNameRegExp);
    })
})

// adds listener for searchBtn
searchBarBtn.addEventListener('submit', function(event) {
    filterShoppingItems(searchBarGetRegex())
    event.preventDefault()
})

function searchBarGetRegex() {
    return new RegExp(searchBar.value,'i')
}

function filterShoppingItems(regex) {
    shoppingItems.forEach(function(el) {
        if ( regex.test("all") || regex.test(el.querySelector(".item-name").textContent)) {
            el.hidden = false
        } else {
            el.hidden = true
        }
    })
}
