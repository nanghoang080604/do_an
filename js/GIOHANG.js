const addToCartButtons = document.querySelectorAll('.them_vgh');
const cart = document.getElementById('cartgh');
const cartItems = document.getElementById('cartItems');
const closeCartButton = document.getElementById('closeCart');
const cartCountText = document.getElementById('cartCount');

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        const product = document.createElement('div');
        product.textContent = `Sản phẩm ${cartCount}`;
        cartItems.appendChild(product);
        updateCartCount();
        cart.classList.remove('hidden');
    });
});

closeCartButton.addEventListener('click', () => {
    cart.classList.add('hidden');
});

function updateCartCount() {
    cartCountText.textContent = `${cartCount}`;
}
