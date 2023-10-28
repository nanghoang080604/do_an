const products = [
    { name: "Sản phẩm 1" },
    { name: "Sản phẩm 2" },
    { name: "Sản phẩm 3" },
    // Thêm các mục sản phẩm khác ở đây
];

function searchProduct() {
    const searchInput = document.getElementById("searchInput").value;
    const searchResults = document.getElementById("searchResults");

    // Xóa kết quả tìm kiếm trước đó
    searchResults.innerHTML = '';

    if (searchInput.length > 0) {
        const foundProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchInput)
        );

        if (foundProducts.length > 0) {
            foundProducts.forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.textContent = product.name;
                searchResults.appendChild(resultItem);
            });

            // Sử dụng class "show" để hiển thị phần tử
            searchResults.classList.add("show");
        } else {
            // Hiển thị thông báo "Không có sản phẩm" nếu không có kết quả
            searchResults.textContent = "Không có sản phẩm";

            // Sử dụng class "show" để hiển thị phần tử
            searchResults.classList.add("show");
        }
    } else {
        // Ẩn kết quả tìm kiếm nếu không có từ khóa tìm kiếm
        searchResults.innerHTML = '';
    }
}
