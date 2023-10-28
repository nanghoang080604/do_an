
/*lời chào*/

function checkAndSubmit() {
    const sdtInput = document.getElementById("sdt");
    const pwInput = document.getElementById("pw");

    if (sdtInput.checkValidity() && pwInput.checkValidity()) {
      // Chuyển hướng đến trang khác
      window.location.href = "./gdchinh.html";
      return true;
    } else {
      alert("Vui lòng điền đủ thông tin.");
      return false;
    }
  }
  function checkAndSubmit2() {
    const htInput = document.getElementById("ht");
    const adInput = document.getElementById("ad");
    const sdtInput = document.getElementById("sdt");
    const pwInput = document.getElementById("pw");
    const pwagInput = document.getElementById("pwag");


    if (htInput.checkValidity()&&htInput.checkValidity()&&sdtInput.checkValidity() && pwInput.checkValidity()&&pwagInput.checkValidity()&&pwInput.value===pwagInput.value) {
      // Chuyển hướng đến trang khác
      window.location.href = "./gdchinh.html";
      return true;
    }
    else if(pwInput.value!=pwagInput.value){
      alert("Mật khẩu xác nhận sai");
    }else {
      alert("Vui lòng điền đủ thông tin.");
      return false;
    }
  }

/* tìm kiếm theo tên*/
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

/*thay đổi địa chỉ*/
// Lấy các phần tử từ HTML bằng ID
const chinhsuaLink = document.getElementById("chinhsua");
const thaydoiDiv = document.getElementById("moi");
const hthanhButton = document.getElementById("hthanh");
const tenField = document.getElementById("htmoi");
const sdtField = document.getElementById("sdtmoi");
const dcField = document.getElementById("dcmoi");

// Gán sự kiện click cho liên kết "chỉnh sửa"
chinhsuaLink.addEventListener("click", function() {
  // Hiển thị trang thay đổi địa chỉ
  event.preventDefault(); 
  thaydoiDiv.style.display = "block";
  // Ẩn trang cá nhân
  document.getElementById("tquat").style.display = "none";
});

// Gán sự kiện click cho nút "HOÀN THÀNH"
hthanhButton.addEventListener("click", function() {
  // Lấy giá trị từ input fields và gán vào trang cá nhân
  document.getElementById("ten").textContent = tenField.value;
  document.getElementById("sdt").textContent = "Số điện thoại: " + sdtField.value;
  document.getElementById("dc").textContent = "Địa chỉ: " + dcField.value;
  // Ẩn trang thay đổi địa chỉ
  thaydoiDiv.style.display = "none";
  // Hiển thị trang cá nhân
  document.getElementById("tquat").style.display = "block";
});

