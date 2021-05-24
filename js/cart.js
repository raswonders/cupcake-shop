const cartBtn = document.querySelector('.basket-preview')
const cart = document.querySelector('.cart-outer-box')
const clearBtn = document.querySelector('.cart-btns').children[0]
const checkoutBtn = document.querySelector('.cart-btns').children[1]
const cartItemsList = document.querySelector('.cart-items')


// clearBtn.addEventListener('click', function clearCart(e) {
//     cartItemsList.innerHTML = ""
// })

cartBtn.addEventListener('click', function cartSwitch(e) {
        cart.classList.toggle('hide')
})