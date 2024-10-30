
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');
const products = {
    1: {
        name: "Red Printed T-shirt",
        price: "$20.00",
        description: "Give your summer wardrobe a style upgrade with the HTX Men's Active T-shirt.",
        image: "Images/product-1.jpg"
    },
    2: {
        name: "Black Shoes",
        price: "$50.00",
        description: "Stylish black shoes for all occasions.",
        image: "Images/product-2.jpg"
    },
    3: {
        name: "Black Underwear",
        price: "$75.00",
        description: "Comfortable and stylish black underwear.",
        image: "Images/product-3.jpg"
    },
    4: {
        name: "Black Puma T-Shirt",
        price: "$59.00",
        description: "Trendy black Puma T-shirt for casual wear.",
        image: "Images/product-4.jpg"
    },
    5: {
        name: "Nike Air Shoes",
        price: "$80.00",
        description: "Comfortable and stylish Nike shoes.",
        image: "Images/product-5.jpg"
    },
    6: {
        name: "Black Puma Shirts",
        price: "$79.00",
        description: "Stylish black Puma shirts for casual wear.",
        image: "Images/product-6.jpg"
    },
    7: {
        name: "Socks 3 Colors",
        price: "$25.00",
        description: "Comfortable socks available in three colors.",
        image: "Images/product-7.jpg"
    },
    8: {
        name: "Black Rolex Watch",
        price: "$60.00",
        description: "A stylish black Rolex watch for every occasion.",
        image: "Images/product-8.jpg"
    },
    9: {
        name: "Classic Rolex Watch",
        price: "$100.00",
        description: "A classic Rolex watch that never goes out of style.",
        image: "Images/product-9.jpg"
    },
    10: {
        name: "Puma Shoes Flag",
        price: "$30.00",
        description: "Stylish Puma shoes with a flag design.",
        image: "Images/product-10.jpg"
    },
    11: {
        name: "Green Sketcher",
        price: "$20.00",
        description: "Comfortable green sketcher shoes.",
        image: "Images/product-11.jpg"
    },
    12: {
        name: "Black Nike Underwear",
        price: "$50.00",
        description: "Stylish and comfortable black Nike underwear.",
        image: "Images/product-12.jpg"
    }
};

if (productId && products[productId]) {
    const product = products[productId];
    document.querySelector('h1').innerText = product.name;
    document.querySelector('h4').innerText = product.price;
    document.querySelector('p').innerText = product.description;
    document.getElementById('product-img-01').src = product.image;
    document.getElementById('product-img-02').src = product.image;
    document.getElementById('product-img-03').src = product.image;
    document.getElementById('product-img-04').src = product.image;
    document.getElementById('product-img-05').src = product.image;
    
}
// ******************ajouter au panier*******************

// function ajouterAuPanier() {
//     const urlParams = new URLSearchParams(window.location.search);
    
//     const productId = urlParams.get('product');
    
//     const quantity = document.getElementById("quantity").value;
    
//     const url = `panier.html?product=${productId}&quantity=${quantity}`;
    
//     const redirect = document.getElementById("./rederiction-panier");
//     redirect.href=`${url}`

// }

document.getElementById("rederiction-panier").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    const quantity = document.getElementById("quantity").value;


        // Get existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex > -1) {

        cart[existingProductIndex].quantity += parseInt(quantity);
    } else {
        
        cart.push({ id: productId, quantity: parseInt(quantity) });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = `panier.html`;

});

