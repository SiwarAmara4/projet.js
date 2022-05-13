var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]

    button.addEventListener('click', function(e){
        buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })

}




var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)

}


var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++)  {
var button = addToCartButtons[i]
button.addEventListener('click', function(e){
    var button = e.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title,price,imageSrc)

})

}



function quantityChanged(event){
var input = event.target
if (isNaN(input.value)|| input.value <= 0){
input.value = 1
}
updateCartTotal()

}
function addToCartClicked(event){

}

function addItemToCart(title,price,imageSrc){

var cartRow = document.createElement('div')
const textnode = document.createTextNode(title);
const priceNode = document.createTextNode(price);

cartRow.appendChild(textnode);
cartRow.appendChild(priceNodev);
var cartItems = document.getElementsByClassName('cart-items')[0]    

cartItems.append(cartRow)
}


function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var total = 0
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
    [0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)


}
total = Math.round(total * 100) / 100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

}