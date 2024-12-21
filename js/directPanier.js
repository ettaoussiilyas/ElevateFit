function directionPanier(idAricle){

    const quantity = 1
    const productId = idAricle;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex > -1) {

        cart[existingProductIndex].quantity += parseInt(quantity);
    } else {
        
        cart.push({ id: productId, quantity: parseInt(quantity) });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = `panier.html`;

}