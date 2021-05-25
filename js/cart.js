const cartBtn = document.querySelector('.basket-preview')
const cart = document.querySelector('.cart-outer-box')
const clearBtn = document.querySelector('.cart-btns').children[0]
const checkoutBtn = document.querySelector('.cart-btns').children[1]
const cartItemsList = Array.from(document.querySelector('.cart-items').children)


// clearBtn.addEventListener('click', function clearCart(e) {
//     cartItemsList.innerHTML = ""
// })

cartBtn.addEventListener('click', function cartSwitch(e) {
        cart.classList.toggle('hide')
})

function updateTotal() {
        var sum = 0;
     // count items and total in cart
        cartItemsList.forEach(function addToSum(el) {
               sum += Number(el.querySelector('.price'))
        })
     // update total in cart
}
