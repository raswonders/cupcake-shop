var lastActiveEl

class ImgRef {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
}

const images = []
images.push(new ImgRef('images/cake-1.jpeg', 'fruity cake'))
images.push(new ImgRef('images/cake-2.jpeg', 'banana cake'))
images.push(new ImgRef('images/cake-3.jpeg', 'pink cake'))
images.push(new ImgRef('images/cupcake-1.jpeg', 'mixed flavour cupcake'))
images.push(new ImgRef('images/cupcake-2.jpeg', 'chocolate cupcake'))
images.push(new ImgRef('images/cupcake-3.jpeg', 'blue cupcake'))
images.push(new ImgRef('images/doughnut-1.jpeg', 'pink doughnut'))
images.push(new ImgRef('images/doughnut-2.jpeg', 'mixed flavour doughnut'))
images.push(new ImgRef('images/doughnut-3.jpeg', 'teddy-bear doughnut'))
images.push(new ImgRef('images/sweets-1.jpeg', 'multicolored sweets'))
images.push(new ImgRef('images/sweets-2.jpeg', 'gummy sweets'))
images.push(new ImgRef('images/sweets-3.jpeg', 'chocolate sweets'))

let index = 0
const modalSliderIcons = Array.from(document.querySelectorAll('.modal-img-slider .modal-btn'))
const modalCrossIcon = document.querySelector('.modal-btn-cross')
const modalSection = document.querySelector('.modal')
const shoppingItemImages = Array.from(document.querySelectorAll('.shopping-item-img img'))

modalSliderIcons.forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal-btn-left')) {
            index--;
        } else if (e.target.classList.contains('modal-btn-right')) {
            index++;
        }

        if (index < 0) {
            index = images.length - 1
        } else if (index >= images.length) {
            index = 0
        }

        updateModal()
        e.preventDefault()
    })
})

modalCrossIcon.addEventListener('click', function (e) {
    hideModal()
    e.preventDefault()
})

shoppingItemImages.forEach(function(shopItem) {
    shopItem.addEventListener('click', function (e) {
        let url = e.target.src
        let filename = url.substring(url.lastIndexOf('/') + 1)

        images.some(function(img, i) {
            index = i;
            return img.src.includes(filename)
        })

        updateModal()
        showModal()
        e.preventDefault()
    })
})

function showModal() {
    lastActiveEl = document.activeElement
    modalSection.style.display = 'flex'
    modalSection.focus()
}

function hideModal() {
    modalSection.style.display = 'none'
    lastActiveEl.focus()
}

function updateModal() {
    let imgView = document.querySelector('.img-view')
    imgView.src = images[index].src
    imgView.alt = images[index].alt
}