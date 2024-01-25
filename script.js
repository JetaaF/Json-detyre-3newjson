let prova = {
    "products": [
        {
            
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/7/1.jpg",
                "https://cdn.dummyjson.com/product-images/7/2.jpg",
                "https://cdn.dummyjson.com/product-images/7/3.jpg",
                "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/8/1.jpg",
                "https://cdn.dummyjson.com/product-images/8/2.jpg",
                "https://cdn.dummyjson.com/product-images/8/3.jpg",
                "https://cdn.dummyjson.com/product-images/8/4.jpg",
                "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
            "images": [
                "https://cdn.dummyjson.com/product-images/10/1.jpg",
                "https://cdn.dummyjson.com/product-images/10/2.jpg",
                "https://cdn.dummyjson.com/product-images/10/3.jpg",
                "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
            ]
        }
    ],
}

let con = document.querySelector('#la tbody')
for( let i = 0; i< prova.products.length; i++){
    let koh = prova.products[i];
    let row = con.insertRow();

    
    row.insertCell(0).innerHTML = `<img src = "${koh.thumbnail}" </img>`;
    row.insertCell(1).innerHTML = koh.description;
}