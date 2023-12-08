/*----------------------HIỆN THỊ SẢN PHẨM----------*/
const productContainer = document.getElementById('product-container');

// Lặp qua danh sách sản phẩm và hiển thị chúng
function showAllProducts() {
    // Xóa toàn bộ sản phẩm hiện tại trước khi hiển thị tất cả sản phẩm
    productContainer.innerHTML = '';
    // Lặp qua danh sách sản phẩm và hiển thị tất cả sản phẩm
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productLink = document.createElement('a');
        productLink.href = product.url;

        const productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productLink.appendChild(productImage);
        productLink.appendChild(productName);
        productLink.appendChild(productPrice);

        productDiv.appendChild(productLink);
        productContainer.appendChild(productDiv);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    showAllProducts();
});
/*-------phân trang--------------*/
function showProductsByGender(gender) {
    // Xóa toàn bộ sản phẩm hiện tại trước khi hiển thị sản phẩm mới
    productContainer.innerHTML = '';

    // Lặp qua danh sách sản phẩm và hiển thị sản phẩm dựa trên giới tính
    products.forEach(product => {
        if (product.type === gender) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const productLink = document.createElement('a');
            productLink.href = product.url;

            const productImage = document.createElement('img');
            productImage.src = product.img;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productLink.appendChild(productImage);
            productLink.appendChild(productName);
            productLink.appendChild(productPrice);

            productDiv.appendChild(productLink);
            productContainer.appendChild(productDiv);
        }
    });
}

// Khi người dùng chọn "Nam"
document.getElementById('nam').addEventListener('click', function() {
    showProductsByGender('nam');
});

// Khi người dùng chọn "Nữ"
document.getElementById('nu').addEventListener('click', function() {
    showProductsByGender('nu');
});

// Hiển thị sản phẩm theo giới tính mặc định (ví dụ: "Nam")
showProductsByGender('nam');
/*-------- chia theo brand-------------*/
function showProductsByBrand(brand) {
    // Xóa toàn bộ sản phẩm hiện tại trước khi hiển thị sản phẩm mới
    productContainer.innerHTML = '';

    // Lặp qua danh sách sản phẩm và hiển thị sản phẩm của hãng được chọn
    products.forEach(product => {
        if (product.brand === brand) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const productLink = document.createElement('a');
            productLink.href = product.url;

            const productImage = document.createElement('img');
            productImage.src = product.img;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productLink.appendChild(productImage);
            productLink.appendChild(productName);
            productLink.appendChild(productPrice);

            productDiv.appendChild(productLink);
            productContainer.appendChild(productDiv);
        }
    });
}
<<<<<<< HEAD
    function mausotrang(element) {
        // Bỏ chọn tất cả các số trang khác
        var trangElements = document.querySelectorAll('.tpctrang a');
        trangElements.forEach(function (el) {
            el.style.color = ''; // Đặt màu về mặc định
        });

        // Chọn số trang được click và thay đổi màu
        element.style.color = 'orange'; // Màu cam
    }

=======
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
/*---------------hiện thị lựa chọn tìm kiếm------------*/
function showSearchOptions() {
    // Hiển thị modal khi click vào nút tìm kiếm
    document.getElementById('searchOptionsModal').style.display = 'block';
}

function closeSearchOptionsModal() {
<<<<<<< HEAD
    var modal = document.getElementById("searchOptionsModal");
    document.getElementById("tkt_ten").classList.remove("hidden");
    document.getElementById("tk_khac").classList.remove("hidden");
    document.getElementById("productNameInput").classList.add("hidden");
    document.getElementById("brandSelect").classList.add("hidden");
    document.getElementById("minPriceInput").classList.add("hidden");
    document.getElementById("maxPriceInput").classList.add("hidden");
    document.getElementById("search2").classList.add("hidden");
    modal.style.display = "none";
}


=======
    // Ẩn modal khi click vào nút đóng hoặc bên ngoài modal
    document.getElementById('searchOptionsModal').style.display = 'none';
}

>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
function showSearchOptionsModal() {
    var modal = document.getElementById("searchOptionsModal");
    modal.style.display = "block";
}

function closeSearchOptionsModal() {
    var modal = document.getElementById("searchOptionsModal");
    modal.style.display = "none";
}
function showSearchByName() {
    // Đóng modal
    closeSearchOptionsModal();

    // Hiển thị dòng nhắc
    alert("Mời bạn nhập vào thanh tìm kiếm trên trang web.");
}
function showSearchByBrandAndPrice() {
    document.getElementById("tkt_ten").classList.add("hidden");
    document.getElementById("tk_khac").classList.add("hidden");
    document.getElementById("productNameInput").classList.remove("hidden");
<<<<<<< HEAD
    document.getElementById("brandSelect").classList.remove("hidden");
=======
    document.getElementById("brandInput").classList.remove("hidden");
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
    document.getElementById("minPriceInput").classList.remove("hidden");
    document.getElementById("maxPriceInput").classList.remove("hidden");
    document.getElementById("search2").classList.remove("hidden");

}
function showSearchOptions() {
    // Mở modal
    document.getElementById("searchOptionsModal").style.display = "block";
}
/*--------------------------tìm kiếm theo tên-----------------------------*/
// Lấy trường nhập văn bản và nút tìm kiếm từ DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Lấy thẻ thông báo và lưu trữ nó trong biến
const noResultsMessage = document.getElementById('noResultsMessage');

// Xử lý sự kiện click trên nút tìm kiếm
searchButton.addEventListener('click', function() {
    // Lấy giá trị nhập từ trường nhập văn bản
    const searchText = searchInput.value.toLowerCase();

    // Kiểm tra tên sản phẩm và hiển thị sản phẩm nếu tên chứa từ khóa tìm kiếm
    productContainer.innerHTML = ''; // Xóa sản phẩm hiện tại
    let foundProducts = false;

    products.forEach(product => {
        if (product.name.toLowerCase().includes(searchText)) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const productLink = document.createElement('a');
            productLink.href = product.url;

            const productImage = document.createElement('img');
            productImage.src = product.img;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productLink.appendChild(productImage);
            productLink.appendChild(productName);
            productLink.appendChild(productPrice);

            productDiv.appendChild(productLink);
            productContainer.appendChild(productDiv);

            foundProducts = true;
        }
    });

    
/*---------------------------tìm kiếm bằng hãng tên sản phẩm giá---------------------------*/
// Hàm tìm kiếm sản phẩm theo hãng, tên và giá
function searchProducts() {
    // Lấy giá trị từ các trường nhập
<<<<<<< HEAD
    const brandSelect = document.getElementById('brandSelect');
    const brand = brandSelect.options[brandSelect.selectedIndex].value.toLowerCase();
=======
    const brand = document.getElementById('brandInput').value.toLowerCase();
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
    const name = document.getElementById('productNameInput').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPriceInput').value.replace(/\D+/g, '')) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPriceInput').value.replace(/\D+/g, '')) || Infinity;

    // Lọc sản phẩm theo điều kiện tìm kiếm
    const filteredProducts = products.filter(product => {
        const lowerCaseProductBrand = product.brand.toLowerCase();
        const lowerCaseProductName = product.name.toLowerCase();
<<<<<<< HEAD
        const productPrice = parseFloat(product.price.replace(/\D+/g, ''));
=======
        const productPrice = parseFloat(product.price.replace(/\D+/g, '')); // Chuyển giá thành số
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552

        return lowerCaseProductBrand.includes(brand)
            && lowerCaseProductName.includes(name)
            && (!minPrice || productPrice >= minPrice)
            && (!maxPrice || productPrice <= maxPrice);
    });

<<<<<<< HEAD

=======
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
    // Hiển thị sản phẩm đã lọc
    displayFilteredProducts(filteredProducts);

    // Trả về danh sách sản phẩm đã lọc
    return filteredProducts;
}

// Hàm hiển thị sản phẩm đã lọc
function displayFilteredProducts(filteredProducts) {
    productContainer.innerHTML = ''; // Xóa sản phẩm hiện tại

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const productLink = document.createElement('a');
            productLink.href = product.url;

            const productImage = document.createElement('img');
            productImage.src = product.img;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productLink.appendChild(productImage);
            productLink.appendChild(productName);
            productLink.appendChild(productPrice);

            productDiv.appendChild(productLink);
            productContainer.appendChild(productDiv);
        });
    }
}
const searchButton = document.getElementById('search2');
searchButton.addEventListener('click', function() {
<<<<<<< HEAD
    
    // Gọi hàm searchProducts() khi nút được click
    const filteredProducts = searchProducts();
    closeSearchOptionsModal();
    alert("Bạn hãy kéo xuống để thay được kết qua tìm kiếm nhé!");
=======
    // Gọi hàm searchProducts() khi nút được click
    const filteredProducts = searchProducts();
    closeSearchOptionsModal();
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
    // Kiểm tra xem có sản phẩm nào được tìm thấy không
    if (filteredProducts.length === 0) {
        noResultsMessage.style.display = 'block'; // Hiển thị thông báo
    } else {
        noResultsMessage.style.display = 'none'; // Ẩn thông báo
    }
});
// Hiển thị hoặc ẩn thông báo dựa trên kết quả tìm kiếm
if (foundProducts) {
    noResultsMessage.style.display = 'none'; // Ẩn thông báo
} else {
    noResultsMessage.style.display = 'block'; // Hiển thị thông báo
}
});
// Nếu người dùng nhấn Enter trong trường nhập văn bản, cũng thực hiện tìm kiếm
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
<<<<<<< HEAD
        alert("Bạn hãy kéo xuống để thay được kết qua tìm kiếm nhé!");
=======
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
        searchButton.click();
        closeSearchOptionsModal(); // Kích hoạt sự kiện click trên nút tìm kiếm
    }
});
<<<<<<< HEAD
/*----------------GIỎ HÀNG--------------*/
=======
/*----------------------------HIỆN THỊ NỘI DUNG CÁ NHÂN-----------
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
        });*/
        /*----------------GIỎ HÀNG--------------*/
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
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
<<<<<<< HEAD
        alert("Sản phẩm đã được thêm vào giỏ hàng!")
        const productName = document.getElementById('tensp').textContent;
        
        // Check if the product is already in the cart
        const existingCartItem = Array.from(cartItems.children).find(item => {
            const itemName = item.querySelector('.product-info h3').textContent;
            return itemName === productName;
        });

        if (existingCartItem) {
            // Product already exists in the cart, increment quantity
            const quantityInput = existingCartItem.querySelector('input');
            quantityInput.value = parseInt(quantityInput.value) + 1;
        } else {
            // Product is not in the cart, create a new item
            cartCount++;
            updateCartCount();
            const product1 = createCartItem();
            cartItems.appendChild(product1);
            deleteCart();
        }

=======
        cartCount++;
        updateCartCount();
        const product1= createCartItem();
        cartItems.appendChild(product1);
        deleteCart(); // Gắn sự kiện xóa sản phẩm sau khi sản phẩm được tạo
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
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
<<<<<<< HEAD
    quantityInput.type = 'text';
=======
    quantityInput.type = 'number';
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
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
<<<<<<< HEAD
=======
    
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552

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
<<<<<<< HEAD

=======
//mua hàng
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
//mua hàng
function muahang() {
    if (cartCount > 0) {
        const chotButton = document.getElementById('chot');
        const ttongLabel = document.getElementById('ttong');
<<<<<<< HEAD
        
=======

        // Tạo một bản sao của tất cả sản phẩm trong giỏ hàng
        const cartItemsClone = cartItems.cloneNode(true);

        // Thêm bản sao vào lsmua
        document.getElementById('lsmua').appendChild(cartItemsClone);

>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
        // Xóa tất cả sản phẩm trong giỏ hàng
        cartItems.innerHTML = '';

        // Cập nhật số lượng và tổng tiền
        cartCount = 0;
        totalAmount = 0;
        updateCartCount();
        ttongLabel.textContent = `${totalAmount.toLocaleString()} ₫`;
<<<<<<< HEAD
         // Cập nhật tổng tiền sau khi mua hàng
         carttotal();
=======

>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
        // Hiển thị thông báo
        alert('Bạn đã mua thành công sản phẩm');

        // Đóng giỏ hàng
        cart.classList.add('hidden');
        overlay.classList.add('hidden');
        isCartVisible = false;
<<<<<<< HEAD
        // Thêm sản phẩm vào lịch sử mua
        const product = {
            imgSrc: document.getElementById('anhduoclay').src,
            name: document.getElementById('tensp').textContent,
            price: document.getElementById('d3').textContent
        };
        addProductToHistory(product);
=======

        // Đóng lịch sử mua
        document.getElementById("lsmua").style.display = "none";

        // Tạo một phiên bản đơn giản của sản phẩm trong giỏ hàng và thêm vào lịch sử mua
        const cartItemHistory = createCartItem2();
        const lsmua = document.getElementById('lsmua');
        lsmua.innerHTML = '';  // Xóa tất cả nội dung hiện tại trong lsmua
        lsmua.appendChild(cartItemHistory);
        lsmua.scrollTop = lsmua.scrollHeight; // Cuộn xuống để hiển thị sản phẩm mới

>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
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
<<<<<<< HEAD
function addProductToHistory(product) {
    document.getElementById("textlsmua").style.display = "none";
    const lsmua = document.getElementById('lsmua');

    // Tạo một phiên bản đơn giản của sản phẩm trong giỏ hàng và thêm vào lịch sử mua
    const productHistory = createProductHistory(product);
    lsmua.appendChild(productHistory);
    lsmua.scrollTop = lsmua.scrollHeight; // Cuộn xuống để hiển thị sản phẩm mới
}
function createProductHistory(product) {
    const productHistory = document.createElement('div');
    productHistory.classList.add('product-history');

    // Tạo ảnh sản phẩm
    const img = document.createElement('img');
    img.src = product.imgSrc;
    productHistory.appendChild(img);

    // Tạo tên sản phẩm
    const productName = document.createElement('p');
    productName.textContent = product.name;
    productHistory.appendChild(productName);

    // Tạo giá sản phẩm
    const price = document.createElement('h2');
    price.textContent = product.price;
    productHistory.appendChild(price);

    return productHistory;
}
/*---------------thông báo tìm kiếm ở các html chi tiết------------*/
function tbao_tkiemphu()
{
    window.location.href = "./index1.html";
    alert("Bạn đã được sang trang HTML chính mời bạn tìm kiếm ở đây");
}
//ở chi tiết sản phẩm đã đang nhập
function tbao_tkiem()
{
    window.location.href = "./index2.html";
    alert("Bạn đã được sang trang HTML chính mời bạn tìm kiếm ở đây");
}

=======
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
/*---------------------------lưu giữ liệu giỏ hàng để các trang html khác có sp---------------*/
// Lưu dữ liệu giỏ hàng
localStorage.setItem('cart', JSON.stringify(cartData));

// Đọc dữ liệu giỏ hàng
const storedCart = JSON.parse(localStorage.getItem('cart'));
>>>>>>> c1f2f89d0daefc6e0237cccee4be11ada2d83552
