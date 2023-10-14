import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

let cartItems = {};

export default async function productDetails(productId) {
    
    cartItems = await findProductById(productId);
    
    renderProductDetails();

    document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
    let idItems = getLocalStorage("so-cart");

    if (!idItems) {
        idItems = [];
    }

    idItems.push(cartItems)
    setLocalStorage("so-cart", idItems);
}
function renderProductDetails() {
    document.querySelector("#productName").innerText = cartItems.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText = cartItems.NameWithoutBrand;
    document.querySelector("#productImage").src = cartItems.Image;
    document.querySelector("#productImage").alt = cartItems.Name;
    document.querySelector("#productFinalPrice").innerText = cartItems.FinalPrice;
    document.querySelector("#productColorName").innerText = cartItems.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = cartItems.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = cartItems.Id;

}
  
 
