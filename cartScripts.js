//Increments/Decrements order quantity
function handleQuantity(action) {
    let num = parseInt(document.getElementById('quantity').innerHTML)
    if(action === -1 && num > 0){
        num -= 1
    } else if (action === 1) {
        num += 1
    }
    document.getElementById('quantity').innerHTML = num
}
    
    
function toggleCartModal() {
    const modal = document.getElementById('cart-modal')
    if(document.getElementById('cart-modal').style.display === 'block'){
        document.getElementById('cart-modal').style.display = 'none'
    } else{
        document.getElementById('cart-modal').style.display = 'block'
    }
}
    
    
function addToCart(){
    createCartEntry()
    
    const modal = document.getElementById('cart-modal')
    
    //Show "Checkout" button if this is the first cart item added
    document.getElementById('checkout-button').style.display = 'block'
}
    
    
    
function createCartEntry() {
    const modal = document.getElementById('cart-item-container')
    
    //Get Price and Product info for template literals
    const quantity = parseInt(document.getElementById('quantity').innerHTML)
    const price = parseInt(document.getElementById('sale-price').children[0].innerHTML)
    const total = quantity * price
    const name = document.querySelector('h1').innerHTML
    
    document.getElementById('cart-empty').style.display = 'none'
    
    let id = getID()
    
    
    //If there's a smarter/more eloquent way of doing this please let me know
    modal.innerHTML += `<div class='modal-main' id='${id}'>
    <img src="images/image-product-1-thumbnail.jpg" alt="" class='cart-thumbnail'>
    <div class='modal-product-info'>
    <span class='item-name'>${name}</span>
    <div class='math-total-price-container'>
        <span class='math'>$${price}.00 x ${quantity}</span>
    <span class='total-price'>$${total}.00</span>
    </div>
    </div>
    <img src="images/icon-delete.svg" alt="" class='trash-icon' onClick=deleteItem(${id})>
    </div>`
    
    const cartQuantity = document.getElementById('cart-quantity')
    cartQuantity.style.display = 'inline'
    cartQuantity.innerHTML = id
}
    
//Gets next ID for the cart item (ID is used for deletion)
function getID() {
    const items = document.querySelectorAll('.modal-main')
    try {
        const id = parseInt(items[items.length - 1].id)
        return id + 1
    } catch (error) {
        return 1
    } 
}
    
    
function deleteItem(id){
    const item = document.getElementById(id)
    item.remove()
    
    const containerEmpty = document.getElementById('cart-item-container')
    if(containerEmpty.childNodes.length === 0){
        document.getElementById('cart-empty').style.display = 'block'
        document.getElementById('checkout-button').style.display = 'none'
        document.getElementById('cart-quantity').style.display = 'none'
    } else {
        document.getElementById('cart-quantity').innerHTML = document.querySelectorAll('.modal-main').length
    }
    
}