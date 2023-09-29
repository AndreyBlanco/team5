import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

let cartItems = {};

export function productDetails(productId) {
    console.log(productId);
    addProductToCart(productId)
    renderProductDetails();
}

function addProductToCart(product) {
    setLocalStorage("so-cart", product);
}

async function renderProductDetails() {
    const idItems = getLocalStorage("so-cart");

    cartItems = await findProductById(idItems);
        
    document.querySelector("#productName").innerHTML = cartItems.Name;
    document.querySelector("#productNameWithoutBrand").innerHTML = cartItems.NameWithoutBrand;
    document.querySelector("#productImage").src = cartItems.Image;
    document.querySelector("#productImage").alt = cartItems.Name;
    document.querySelector("#productFinalPrice").innerHTML = cartItems.FinalPrice;
    document.querySelector("#productColorName").innerHTML = cartItems.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = cartItems.DescriptionHtmlSimple;

}
  
 
