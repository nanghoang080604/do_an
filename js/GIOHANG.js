const addToCartButtons = document.querySelectorAll('.them_vgh');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');
const closeCartButton = document.getElementById('closeCart');
const cartCountText = document.getElementById('cartCount');
const overlay = document.getElementById('overlay');
let cartCount = 0;
let isCartVisible=false;
let totalAmount = 0;
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
        const product1= createCartItem();
        cartItems.appendChild(product1);
        deleteCart(); // Gắn sự kiện xóa sản phẩm sau khi sản phẩm được tạo
        carttotal(); // Tính tổng tiền sau khi thêm sản phẩm
    });
});
closeCartButton.addEventListener('click', () => {
    cart.classList.add('hidden');
    overlay.classList.add('hidden');
});

function createCartItem() {
    const product1= document.createElement('div');
    product1.classList.add('cart-item');

    // Tạo ảnh sản phẩm
    const img = document.createElement('img');
    img.src = document.getElementById('anhduoclay').src;
    product1.appendChild(img);
    //tạo produtinfo
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    product1.appendChild(productInfo);

    // Tên sản phẩm
    const productName = document.createElement('h3');
    productName.textContent = document.getElementById('tensp').textContent;
    productInfo.appendChild(productName);

    // Giá sản phẩm
    const price = document.createElement('p');
    price.textContent = document.getElementById('d3').textContent;
    productInfo.appendChild(price);

    // Nút tăng giảm số lượng
    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('decrease');
    decreaseButton.textContent = '-';
    product1.appendChild(decreaseButton);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 1;
    quantityInput.min = 1;
    product1.appendChild(quantityInput);

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('increase');
    increaseButton.textContent = '+';
    product1.appendChild(increaseButton);
    //tăng
    increaseButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        carttotal(); // Tính tổng tiền sau khi thêm sản phẩm
    });
    //giảm
    decreaseButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            carttotal(); // Tính tổng tiền sau khi thêm sản phẩm
        }
    });

    // Nút xóa sản phẩm
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Xóa';
    product1.appendChild(deleteButton);

    return product1;
}

function updateCartCount() {
    cartCountText.textContent = `${cartCount}`;
}
//xóa sản phẩm
function deleteCart() {
    var deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(function (button) {
        if (!button.hasAttribute("data-clicked")) {
            button.setAttribute("data-clicked", "true");

            button.addEventListener("click", function () {
                var cartItem = button.parentElement;
                cartItem.remove();
                cartCount--; // Trừ đi 1 khi xóa sản phẩm
                updateCartCount(); 
                carttotal(); // Tính tổng tiền sau khi xóa sản phẩm
            });
        }
    });
}


//tổng tiền
function carttotal() {
    totalAmount = 0;

    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach((item) => {
        const priceText = item.querySelector('.product-info p').textContent;
        const price = parseInt(priceText.replace(/\D/g, '')); // Lấy số từ chuỗi giá
        const quantity = parseInt(item.querySelector('input').value);
        const productTotal = price * quantity;
        totalAmount += productTotal;
    });

    // Hiển thị tổng tiền
    ttongLabel.textContent = `${totalAmount.toLocaleString()} ₫`;
}

closeCartButton.addEventListener('click', () => {
    cart.classList.add('hidden');
    overlay.classList.add('hidden');
    isCartVisible = false; // Đánh dấu rằng giỏ hàng đang ẩn
});
//mua hàng
const chotButton = document.getElementById('chot');
const ttongLabel = document.getElementById('ttong');
chotButton.addEventListener('click', () => {
    // Xóa tất cả sản phẩm trong giỏ hàng
    cartItems.innerHTML = '';
    cartCount = 0;
    updateCartCount();

    // Hiển thị thông báo
    alert('Bạn đã mua thành công sản phẩm');
    //update tổng tiền
    totalAmount=0;
    ttongLabel.textContent = `${totalAmount.toLocaleString()} ₫`;
    //tắt giỏ hàng
    cart.classList.add('hidden');
    overlay.classList.add('hidden');
    isCartVisible = false;
});
const cartButton = document.getElementById('cartgh');

cartButton.addEventListener('click', () => {
    if (!isCartVisible) { // Hiển thị giỏ hàng nếu nó đang ẩn
        cart.classList.remove('hidden');
        overlay.classList.remove('hidden');
        isCartVisible = true; // Đánh dấu rằng giỏ hàng đang hiển thị
    }
});