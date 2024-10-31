document.addEventListener("DOMContentLoaded", function() {
    const totalPrice = localStorage.getItem("totalPrice") || "0.00";

    if (document.getElementById("price-header-checkout")) {
        document.getElementById("price-header-checkout").textContent = totalPrice + " $";
    }
    document.getElementById("total-price-checkout").textContent = totalPrice + " $";
    document.getElementById("total-price-checkout-reductio").textContent = totalPrice + " $";
});