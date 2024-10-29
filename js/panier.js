const products = {
    1: {
        name: "Red Printed T-shirt",
        price: 20.00,
        description: "Give your summer wardrobe a style upgrade with the HTX Men's Active T-shirt.",
        image: "Images/product-1.jpg"
    },
    2: {
        name: "Black Shoes",
        price: 50.00,
        description: "Stylish black shoes for all occasions.",
        image: "Images/product-2.jpg"
    },
    3: {
        name: "Black Underwear",
        price: 75.00,
        description: "Comfortable and stylish black underwear.",
        image: "Images/product-3.jpg"
    },
    4: {
        name: "Black Puma T-Shirt",
        price: 59.00,
        description: "Trendy black Puma T-shirt for casual wear.",
        image: "Images/product-4.jpg"
    },
    5: {
        name: "Nike Air Shoes",
        price: 80.00,
        description: "Comfortable and stylish Nike shoes.",
        image: "Images/product-5.jpg"
    },
    6: {
        name: "Black Puma Shirts",
        price: 79.00,
        description: "Stylish black Puma shirts for casual wear.",
        image: "Images/product-6.jpg"
    },
    7: {
        name: "Socks 3 Colors",
        price: 25.00,
        description: "Comfortable socks available in three colors.",
        image: "Images/product-7.jpg"
    },
    8: {
        name: "Black Rolex Watch",
        price: 60.00,
        description: "A stylish black Rolex watch for every occasion.",
        image: "Images/product-8.jpg"
    },
    9: {
        name: "Classic Rolex Watch",
        price: 100.00,
        description: "A classic Rolex watch that never goes out of style.",
        image: "Images/product-9.jpg"
    },
    10: {
        name: "Puma Shoes Flag",
        price: 30.00,
        description: "Stylish Puma shoes with a flag design.",
        image: "Images/product-10.jpg"
    },
    11: {
        name: "Green Sketcher",
        price: 20.00,
        description: "Comfortable green sketcher shoes.",
        image: "Images/product-11.jpg"
    },
    12: {
        name: "Black Nike Underwear",
        price: 50.00,
        description: "Stylish and comfortable black Nike underwear.",
        image: "Images/product-12.jpg"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    let totalPrice = 0;

    // Function to display cart items
    function displayCartItems() {
        cartContainer.innerHTML = ""; // Clear previous items
        totalPrice = 0; // Reset total price

        cart.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const product = products[item.id]; // Get product details using id from the cart

            const itemTotalPrice = product.price * item.quantity; // Calculate total price for the item
            totalPrice += itemTotalPrice; // Update total price

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-price" id="price-${item.id}">${itemTotalPrice.toFixed(2)} DH</p>
                <div class="quantity-container">
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" id="quantity-${item.id}">
                    <button class="remove-button" id="remove-${item.id}">Remove</button>
                </div>
            `;

            cartContainer.appendChild(productDiv);

            // Add event listener for quantity input change
            const quantityInput = document.getElementById(`quantity-${item.id}`);
            quantityInput.addEventListener("change", function() {
                const newQuantity = parseInt(this.value);
                if (newQuantity < 1) {
                    this.value = 1; // Reset to 1 if less than 1
                }
                updateItemPrice(item.id, newQuantity, product.price);
            });

            // Add event listener for remove button
            const removeButton = document.getElementById(`remove-${item.id}`);
            removeButton.addEventListener("click", function() {
                removeItemFromCart(item.id);
            });
        });
        
        document.getElementById("total-price").textContent = totalPrice.toFixed(2) + " $"; // Display total price
    }

    // Function to update item price and total
    function updateItemPrice(productId, quantity, productPrice) {
        const itemTotalPrice = productPrice * quantity;
        const priceElement = document.getElementById(`price-${productId}`);
        priceElement.textContent = itemTotalPrice.toFixed(2) + " $"; // Update price display

        // Update the total price
        totalPrice = 0; // Reset total price
        cart.forEach(item => {
            const currentQuantity = item.id === productId ? quantity : item.quantity; // Update quantity if it's the current item
            totalPrice += productPrice * currentQuantity;
        });
        document.getElementById("total-price").textContent = totalPrice.toFixed(2) + " $"; // Update total price display
    }

    // Function to remove item from cart
    function removeItemFromCart(productId) {
        cart = cart.filter(item => item.id !== productId); // Remove the item
        localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage
        displayCartItems(); // Refresh the cart display
    }

    // Call the function to display items
    displayCartItems();
});
