
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
