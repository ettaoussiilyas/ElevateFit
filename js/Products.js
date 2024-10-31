function categorieTshirt() {
    const selectedValue = document.getElementById('catigorie').value;
    const categories = ["tshirt", "shoes", "underwear", "socks", "watch"];
    
    categories.forEach(function(category) {
        const elements = document.getElementsByClassName(category);
        Array.from(elements).forEach(function(element) {
            if (selectedValue === category || selectedValue === "") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
    });
}
// sorting by price

function showRangeInput() {
    const sortOptions = document.getElementById("sort-options");
    const rangeInputContainer = document.getElementById("range-input-container");

    if (sortOptions.value === "price") {
        rangeInputContainer.style.display = "block";
    } else {
        rangeInputContainer.style.display = "none";
        // showAllProducts();
    }
}
// showing change of price

function updatePriceValue(value) {
    const priceValue = document.getElementById("price-value");
    priceValue.textContent = `$${value}`; // Display the current range value
    filterProductsByPrice(value);
}

// showing by price

function filterProductsByPrice(maxPrice) {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute("data-price"));
        if (productPrice <= maxPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function showAllProducts() {
    const products = document.querySelectorAll(".product-card");
    products.forEach(product => {
        product.style.display = "block";
    });
}

// ************************direct card adding****************************

document.addEventListener("DOMContentLoaded", function() {
    const totalPrice = localStorage.getItem("totalPrice") || "0.00";

    if (document.getElementById("price-header-products")) {
        document.getElementById("price-header-products").textContent = totalPrice + " $";
    }
    if (document.getElementById("price-header-home")) {
        document.getElementById("price-header-home").textContent = totalPrice + " $";
    }
});