const products = [
    { 
        img:'../anh/dongho1.jpg',
        name:'Orient Open Heart RA-AR0001S10B',
        type:'nam',
        price:'11.000.000',
        hang:'Orient'
     },

    { img:'../anh/dongho2.jpg',
        name:'Casio World Time AE',
        type:'nam',
        price:'1.300.000',
        hang:'Casio' },
    { 
        img:'../anh/dongho3.jpg',
        name:'Tissot Le Locle Powermatic 80',
        type:'nam',
        price:'23.000.000',
        hang:'Tissot' 
    },
    { img:'../dhnu/53766-RGMGGE-2-1-399x399.webp',
        name:'Saga 53766-GPZMGGE-2',
        type:'nu',
        price:'6.800.000',
        hang:'Saga'
    },
    { 
        img:'../anh/MTP-1375D-1AVDF.webp',
        name:'Casio MTP-1375D-1AVDF – Nam – Quartz ',
        type:'nam',
        price:'2.177.000 ',
        hang:'Casio'
     },
    { 
        img:'../dhnu/3_53555-SVMWSV-2-399x399.webp',
        name:'Saga 53555-SVMWSV',
        type:'nu',
        price:'5.300.000',
        hang:'Saga' 
    },
    { 
        img:'../anh/RA-AS0101S10B.webp',
        name:'Orient Sun And Moon RA-AS0101S10B',
        type:'nam',
        price:'12.850.000',
        hang:'Orient'
     },
     { 
        img:'../anh/T137.427.11.011.00.webp',
        name:'Tissot PRX T137.427.11.011.00',
        type:'nam',
        price:'56.000.000',
        hang:'Tissot'
     },
     { 
        img:'../dhnu/53766-SVSVSV-2-399x399.webp',
        name:'Saga 53766-SVSVSV-2',
        type:'nu',
        price:'7.600.000',
        hang:'Saga' 
    },
    { 
        img:'../anh/RE-AV0B03B00B.webp',
        name:'Orient Star RE-AV0B03B00B',
        type:'nam',
        price:'25.750.000',
        hang:'Orient'
     },
    // Thêm các mục sản phẩm khác ở đây
];
    // Lấy đối tượng chứa danh sách sản phẩm
const productContainer = document.querySelector('.container');

// Lặp qua danh sách sản phẩm và hiển thị chúng
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.img; // Sử dụng thuộc tính "img" thay vì "image"
    productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    productContainer.appendChild(productDiv);
});


/*
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
}*/
