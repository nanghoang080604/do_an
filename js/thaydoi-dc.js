/*---------------trang wed----------*/
    // Lấy thông tin từ localStorage
    const hoTen = localStorage.getItem('hoTen');
    const diaChi = localStorage.getItem('diaChi');
    const soDienThoai = localStorage.getItem('soDienThoai');

    // Hiển thị thông tin lên trang cá nhân
    document.getElementById('ten').textContent = hoTen || 'Người Dùng';
    document.getElementById('sdt').textContent = `Số điện thoại: ${soDienThoai || 'Chưa cập nhật'}`;
    document.getElementById('dc').textContent = `Địa chỉ: ${diaChi || 'Chưa cập nhật'}`;
// Lấy các phần tử từ HTML bằng ID
const chinhsuaLink = document.getElementById("chinhsua");
const thaydoiDiv = document.getElementById("moi");
const hthanhButton = document.getElementById("hthanh");
const tenField = document.getElementById("htmoi");
const sdtField = document.getElementById("sdtmoi");
const dcField = document.getElementById("dcmoi");

// Gán sự kiện click cho liên kết "chỉnh sửa"
// Gán sự kiện click cho liên kết "chỉnh sửa"
chinhsuaLink.addEventListener("click", function(event) {
  event.preventDefault();
  // Hiển thị trang thay đổi địa chỉ
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