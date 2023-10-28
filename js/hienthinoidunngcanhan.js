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