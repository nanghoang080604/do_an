
// -----------------------------------------------------------------
function toggleMenu() {
    var menu = document.querySelector('.leftmenu');
    menu.style.width = (menu.style.width === '250px') ? '0' : '250px';
}

function xoa(phantu) {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?'))
    {
        var listcu = phantu.parent().parent().parent().html()
        var listm = listcu.replace(phantu.parent().html(), "")
        var listmoi = listm.replace('<tr id="sanpham"></tr>', "")
        phantu.parent().remove()
        listDongHoLen = listmoi;
    }
}

function seach() {
    var filter, layMa, layTen, a, i, txtValue;
    filter = $("#mySearch").val().toUpperCase();

    layMa = $(".ma");
    for (i = 0; i < layMa.length; i++) {
        a = layMa[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            layMa[i].parentElement.style.display = "";
        }
        else {
            layMa[i].parentElement.style.display = 'none';
        }
    }

    layTen = $(".ten");
    for (i = 0; i < layTen.length; i++) {
        a = layTen[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            layTen[i].parentElement.style.display = "";
        }
        else {
            layTen[i].parentElement.style.display = 'none';
        }
    }
}

function hien(id) {
    var k = $(".main>div.container-1");
    for (var i = 1; i <= k.length; i++) {
        $(".main>div.container-1:nth-child(" + i + ")").addClass("none");
    }
    $("." + id).removeClass("none");
    // Kiểm tra xem đã đúng id và nội dung đã được hiển thị hay chưa
    //console.log("Hiển thị nội dung cho id:", id);
}

$('.them-click').click(function () {
    $('.them-none.chiThem').addClass('open');

    $('.quanLyDongHoThemSuaXoa').addClass('none');
})

$('.close').click(function () {
    $('.them-none').removeClass('open');
    $('.quanLyDongHoThemSuaXoa').removeClass('none');
})

var listDongHoLen;

$('#file').change(function () {
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(input) {
        if (input.files) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#load').attr('src', e.target.result);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});


$('#sua').change(function () {
    alert("ád")
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(input) {
        if (input.files) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#loadsua').attr('src', e.target.result);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});
function themDongHo() {
    var hang = $("tbody#dstd").html();
    var masp = $("#masp").val();
    var ten = $("#ten").val();
    var gia = $("#gia").val();
    var sl = $("#sl").val();
    var loai = $("#loai").val();
    var anh = $('#load').attr('src');;

    var html = '<tr id="sanpham">\
    <td class="ma maopen sorting_1">'+ masp + '</td>\
    <td class="loai maloaiopen">'+ loai + '</td>\
    <td class="sorting_1 imgopen"><img src="'+ anh + '" style="width:100%" class="imgtd"></td>\
    <td class="ten tenopen">'+ ten + '</td>\
    <td class="sorting_1 giaopen">'+ gia + '</td>\
    <td class="soluongopen">'+ sl + '</td>\
    <td onclick="xoa($(this))" class="deletebutton"><i class="fas fa-trash-alt"></i></td>\
    <td onclick="sua($(this))" class="editbutton"><i class="fas fa-edit"></i></td>\
  </tr>';
    $("tbody#dstd").html(hang + html);
    // Show a notification (hiển thị thông báo)
    alert('Đã thêm đồng hồ thành công!');
}

$("#quanLyDongHo").click(function () {
    $("#listDongHo").html(listDongHoLen);
    listDongHoLen = $("#listDongHo").html();
})




$('.ChonDaXacThuc').click(function () {
    $('article.hienChonDaXacThuc').css('display', 'grid')
    $('article.hienChonChuaXacThuc').css('display', 'none');
    $('article.hienChonDaThucHien').css('display', 'none');
})
$('.ChonChuaXacThuc').click(function () {
    $('article.hienChonChuaXacThuc').css('display', 'grid')
    $('article.hienChonDaXacThuc').css('display', 'none');
    $('article.hienChonDaThucHien').css('display', 'none');
})
$('.chonDaHoanThien').click(function () {
    $('article.hienChonDaThucHien').css('display', 'grid')
    $('article.hienChonChuaXacThuc').css('display', 'none');
    $('article.hienChonDaXacThuc').css('display', 'none');
})

$(".dieuChinhDonHang").click(function () {
    $(".menu").css("display","none")
    $(".dieuChinhDonHang").css("display", "none")
    //$(".chitietdonhang").css("display", "none")
});

$(".bars-dieuChinh i").click(function () {
    $(".menu").css("display","block")
    $(".dieuChinhDonHang").css("display","block")
    $(".chitietdonhang").css("display", "none")
});


//$("button.menu-button.chitiet").click(function()
//{
//$(".chitietdonhang").css("display","block")
//})

/*$(".chitietdonhang").click(function () {
    $(".chitietdonhang").css("display", "none")
})*/

function xemCTDonHang() {
    $(".menu").css("display", "none");
    $(".dieuChinhDonHang").css("display", "none");
    $(".chitietdonhang").css("display", "block");
}

$(".menu-subitem4").click(function(){
    xemCTDonHang();
})


// sua
function sua(elm) {
    $('.them-none.sua').addClass('open');
    var matd = elm.parent().find('.maopen').html();
    var maloaitd = elm.parent().find('.maloaiopen').html();
    var imgtd = elm.parent().find('img').attr('src');
    var tentd = elm.parent().find('.tenopen').html();
    var giatd = elm.parent().find('.giaopen').html();
    var soluongtd = elm.parent().find('.soluongopen').html();
    $("#masp").val(matd)
    $("#loai").val(maloaitd)
    $("#ten").val(tentd)
    $("#sl").val(soluongtd)
    $("#gia").val(giatd)
    $("#load.imgtd").attr("src", imgtd)
}

$(document).ready(function () {
    var matd = localStorage.getItem("matdi4");
    var maloaitd = localStorage.getItem("maloaitdi4");
    var imgtd = localStorage.getItem("imgtdi4");
    var tentd = localStorage.getItem("tentdi4");
    var giatd = localStorage.getItem("giatdi4");
    var soluongtd = localStorage.getItem("soluongtdi4");
    var html = '<tbody style="text-align: left;">\
                    <tr>\
                        <td>Ảnh :</td>\
                        <td>\
                            <img id="loadsua" class="imgtd" src="'+ imgtd + '">\
                        </td>\
                        <td>\
                            <input style="width: 120px!important;" required type="file"  name="filesua" id="sua"  accept="image/*" class="inputfile"/>\
                            <label for="sua">Chọn file ảnh</label>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td style="width: 150px">Mã đồng hồ : </td>\
                        <td style="width: 360px">\
                            <input id="masp" value="'+ matd + '" required type="text">\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>Hãng đồng hồ :</td>\
                            <td>\
                                <select id="loai" required id="loai" >\
                                <option value="">'+ maloaitd + '</option>\
                                <option value="Orient">Orient</option>\
                                <option value="Casio">Casio</option>\
                                <option value="Tissot">Tissot</option>\
                                <option value="Saga">Saga</option>\
                            </select>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>Tên đồng hồ : </td>\
                        <td>\
                            <input id="ten" required type="text" value="'+ tentd + '">\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>Giá đồng hồ :</td>\
                        <td>\
                            <input id="gia" value="'+ giatd + '" required type="number">\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>Số lượng :</td>\
                        <td> <input id="sl" value="'+ soluongtd + '" required type="number"></td>\
                    </tr>\
                </tbody>';

    $("#i4td").html(html);
})



$('.them-none.sua').click(function () {
    $('.them-none.sua').addClass('none');
})

function suaDongHo(elm) {
    var matd = elm.parent().children().children().children().find('input#masp').val();
    var maloaitd = elm.parent().children().children().children().children().find('#loai').val();
    var imgtd = elm.parent().children().children().children().find('img#load').attr('src');
    var tentd = elm.parent().children().children().children().find('input#ten').val();
    var giatd = elm.parent().children().children().children().find('input#gia').val();
    var soluongtd = elm.parent().children().children().children().find('input#sl').val();

    var html = '<td class="ma maopen sorting_1">' + matd + '</td>\
    <td class="loai maloaiopen">'+ maloaitd + '</td>\
    <td class="sorting_1 imgopen"><img src="'+ imgtd + '" style="width:200px" class="imgtd"></td>\
    <td class="ten tenopen">'+ tentd + '</td>\
    <td class="sorting_1 giaopen">'+ giatd + '</td>\
    <td class="soluongopen">'+ soluongtd + '</td>\
    <td onclick="xoa($(this))" class="deletebutton"><i class="fas fa-trash-alt"></i></td>\
    <td onclick="sua($(this))" class="editbutton"><i class="fas fa-edit"></i></td>'
    $('#sanpham').html(html);
}




// Hàm get set cho danh sách người dùng
function getListUser() {
    var data = JSON.parse(window.localStorage.getItem('ListUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function setListUser(l) {
    window.localStorage.setItem('ListUser', JSON.stringify(l));
}







// vô hiệu hóa người dùng (tạm dừng, không cho đăng nhập vào)
function voHieuHoaNguoiDung(inp, taikhoan) {
    var listUser = getListUser();
    for (var u of listUser) {
        if (u.username == taikhoan) {
            let value = !inp.checked
            u.off = value;
            setListUser(listUser);

            setTimeout(() => alert(`${value ? 'Khoá' : 'Mở khoá'} tải khoản ${u.username} thành công.`), 500);
            break;
        }
    }
    var span = inp.parentElement.nextElementSibling;
    span.innerHTML = (inp.checked ? 'Đã Chặn' : 'Chặn');
    return true;
}

//Xóa người dùng mới
function xoaNguoiDung(taikhoan) {
    if (window.confirm('Bạn có chắc muốn xóa Khách hàng này không?')) {
        var listcu = taikhoan.parent().parent().parent().html()
        var listm = listcu.replace(phantu.parent().html(), "")
        var listmoi = listm.replace('<tr id="KH"></tr>', "")
        taikhoan.parent().remove()
        listKH = listmoi;
    }

}

var listKH;
$("#quanLyKhachHang").click(function () {
    $("#listKhachHang").html(listKH);
    listKH = $("#listKhachHang").html();
})

function damua() {
    document.getElementById("chitietdonhang-table").style.display = "block";
    document.getElementById("close_ctdh").style.display = "block";
}
function close_ctdh() {
    var modal = document.getElementById("chitietdonhang-table");
    modal.style.display = "none";
    document.getElementById("close_ctdh").style.display = "none";
}



