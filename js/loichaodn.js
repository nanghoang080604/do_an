function checkAndSubmit() {
  const sdtInput = document.getElementById("sdt");
  const pwInput = document.getElementById("pw");

  if(sdtInput.value==="0862923233"&&pwInput.value==="hoangvietnang123")
  {
    window.location.href="./admin.html";
  }
  else
  {
    if (sdtInput.checkValidity() && pwInput.checkValidity()) {
      // Chuyển hướng đến trang khác
      window.location.href = "./index2.html";
      return true;
    } else {
      alert("Vui lòng điền đủ thông tin.");
      return false;
    }
  }
  
}

function checkAndSubmitRegistration() {
  const htInput = document.getElementById("ht");
  const adInput = document.getElementById("ad");
  const sdtInput = document.getElementById("sdt");
  const pwInput = document.getElementById("pw");
  const pwagInput = document.getElementById("pwag");

  if(htInput.checkValidity() && adInput.checkValidity() && sdtInput.checkValidity() && pwInput.checkValidity() && pwagInput.checkValidity() && pwInput.value==pwagInput.value)
  {
    saveRegistrationInfo();
    // Chuyển hướng đến trang khác
    window.location.href = "./index2.html";
    return true;
  } else if (pwInput.value !== pwagInput.value) {
    alert("Mật khẩu xác nhận sai");
  } else {
    alert("Vui lòng điền đủ thông tin.");
    return false;
  }
}

function saveRegistrationInfo() {
  // Kiểm tra và xử lý đăng ký ở đây
  // Lấy giá trị từ các trường nhập
  const hoTen = document.getElementById("ht").value;
  const diaChi = document.getElementById("ad").value;
  const soDienThoai = document.getElementById("sdt").value;

  // Lưu thông tin vào localStorage
  localStorage.setItem("hoTen", hoTen);
  localStorage.setItem("diaChi", diaChi);
  localStorage.setItem("soDienThoai", soDienThoai);

}
