
/* chuyển động ảnh*/
let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("a1");
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);
/*----------------GIỎ HÀNG--------------*/
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
    const ttongLabel = document.getElementById('ttong');
    ttongLabel.textContent = `${totalAmount.toLocaleString()} ₫`;


}

closeCartButton.addEventListener('click', () => {
    cart.classList.add('hidden');
    overlay.classList.add('hidden');
    isCartVisible = false; // Đánh dấu rằng giỏ hàng đang ẩn
});
//mua hàng
//mua hàng
function muahang() {
    if (cartCount > 0) {
        const chotButton = document.getElementById('chot');
        const ttongLabel = document.getElementById('ttong');
        
        // Tạo một bản sao của tất cả sản phẩm trong giỏ hàng
        const cartItemsClone = cartItems.cloneNode(true);

        // Thêm bản sao vào lsmua
        document.getElementById('lsmua').appendChild(cartItemsClone);

        // Xóa tất cả sản phẩm trong giỏ hàng
        cartItems.innerHTML = '';

        // Cập nhật số lượng và tổng tiền
        cartCount = 0;
        totalAmount = 0;
        updateCartCount();
        ttongLabel.textContent = `${totalAmount.toLocaleString()} ₫`;

        // Hiển thị thông báo
        alert('Bạn đã mua thành công sản phẩm');

        // Đóng giỏ hàng
        cart.classList.add('hidden');
        overlay.classList.add('hidden');
        isCartVisible = false;

        // Đóng lịch sử mua
        document.getElementById("lsmua").style.display = "none";

        // Tạo một phiên bản đơn giản của sản phẩm trong giỏ hàng và thêm vào lịch sử mua
        const cartItemHistory = createCartItem2();
        const lsmua = document.getElementById('lsmua');
        lsmua.innerHTML = '';  // Xóa tất cả nội dung hiện tại trong lsmua
        lsmua.appendChild(cartItemHistory);
        lsmua.scrollTop = lsmua.scrollHeight; // Cuộn xuống để hiển thị sản phẩm mới
    } else {
        alert('Bạn chưa có sản phẩm nào trong giỏ hàng');
    }
}


const cartButton = document.getElementById('cartgh');

cartButton.addEventListener('click', () => {
    if (!isCartVisible) { // Hiển thị giỏ hàng nếu nó đang ẩn
        cart.classList.remove('hidden');
        overlay.classList.remove('hidden');
        isCartVisible = true; // Đánh dấu rằng giỏ hàng đang hiển thị
    }
});
/*----------------------------HIỆN THỊ NỘI DUNG CÁ NHÂN-----------*/
const canhan = document.getElementById("canhan");
        const noidungcn = document.getElementById("noidungcn");

        canhan.addEventListener("click", function(event) {
            event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
            if (noidungcn.style.display === "none" || noidungcn.style.display === "") {
                noidungcn.style.display = "block";
            } else {
                noidungcn.style.display = "none";
            }
        });

        // Bắt sự kiện click bất kỳ nơi nào trên trang để ẩn #noidungcn khi click ra ngoài
        document.addEventListener("click", function() {
            noidungcn.style.display = "none";
        });

        // Ngăn chặn sự kiện click trên #noidungcn từ lan ra ngoài
        noidungcn.addEventListener("click", function(event) {
            event.stopPropagation();
        });
/*------------------lựa chọn địa chỉ--------------*/
//mở lựa div lựa chọn
function showlc() {
    document.getElementById("lcdc").style.display = "block";
}
//đóng lựa chọn
function closelc() {
    var modal = document.getElementById("lcdc");
    modal.style.display = "none";
}
function dctcn(){
    closelc();
    muahang();
    
}
//nhập thông tin mới
function closedcmoi()
{
    var modal = document.getElementById("nhapttmoi");
    modal.style.display = "none";
}
function dcmoi()
{
    closelc();
    document.getElementById("nhapttmoi").style.display = "block";
}
//check nhập thông tin
function checktt() {
    const htInput = document.getElementById("ht");
    const adInput = document.getElementById("ad");
    const sdtInput = document.getElementById("sdt");
    if (htInput.checkValidity()&&htInput.checkValidity()&&sdtInput.checkValidity() ) {
      // Chuyển hướng đến trang khác
     closedcmoi();
     muahang();
      return true;
    }
    else {
      alert("Vui lòng điền đủ thông tin.");
      return false;
    }
  }
  /*------------------lịch sử mua------------*/
  function damua()
  {
    document.getElementById("lsmua").style.display = "block";
    document.getElementById("closelsmua").style.display = "block";
  }
  function closelsmua()
{
    var modal = document.getElementById("lsmua");
    modal.style.display = "none";
    document.getElementById("closelsmua").style.display = "none";
}
function createCartItem2() {
    const product1 = document.createElement('div');
    product1.classList.add('cart-item');

    // Tạo ảnh sản phẩm
    const img = document.createElement('img');
    img.src = document.getElementById('anhduoclay').src;
    product1.appendChild(img);

    // Tạo produtinfo
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

    return product1;
}
