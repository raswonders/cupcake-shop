const cartPreview = document.querySelector('.basket-preview')
const cart = document.querySelector('.cart-outer-box')
const clearBtn = document.querySelector('.cart-btns').children[0]
const checkoutBtn = document.querySelector('.cart-btns').children[1]
const cartItemsList = document.querySelector('.cart-items')
const cartPreviewContent = document.querySelector('.cart-preview-content')
const cartTotal = document.querySelector('.cart-total')
const cartBtns = document.querySelectorAll('.shopping-item-cart')

clearBtn.addEventListener('click', function clearCart(e) {
    cartItemsList.innerHTML = ""
    updateTotal()
})

cartPreview.addEventListener('click', function cartSwitch(e) {
        cart.classList.toggle('hide')
})

function updateTotal() {
        var sum = 0;
        // count items and total
        let items = Array.from(cartItemsList.children)
        items.forEach(function addToSum(el) {
               sum += Number(el.querySelector('.price').innerText.match(/\d+/)[0])
        })
        // update overview btn and total in cart
        cartPreviewContent.innerHTML = `${items.length} Item(s) - $${sum}`
        cartTotal.innerHTML = `$${sum}`
}

for (let btn of cartBtns) {
    btn.addEventListener('click', function addItem(e) {
        e.preventDefault()
        let imgElem = btn.closest('.shopping-item-img')
        let imgLink = imgElem.querySelector('img').src
        let shopItemElem = btn.closest('.shopping-item')
        let itemName = shopItemElem.querySelector('.item-name').textContent
        let itemPrice = shopItemElem.querySelector('.price').textContent
        cartItemsList.insertAdjacentHTML('beforeend', createItem(imgLink, itemName, itemPrice))
        updateTotal()
        addRemoveItemListeners()
    })
}

function addRemoveItemListeners() {
    for (let item of cartItemsList.children) {
        item.querySelector('.trash').addEventListener('click', function removeItem(e) {
            cartItemsList.removeChild(e.target.closest('li'))
        })
    }
}

function createItem(img, name, price) {
    return `<li class="cart-item"><img class="cart-img" src="${img}"><div>${name}<br><span class="price">${price}</span></div><a class="trash" href="#"><i class="fa fa-trash"></i></a></li>`
}
