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
        searchButton.click(); // Kích hoạt sự kiện click trên nút tìm kiếm
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