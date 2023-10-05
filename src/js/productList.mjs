import { getData } from "./productData.mjs";


function productCartTemplate(product) {
    console.log(product);
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
    <img
      src=${product.Image}
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default async function productList(selector, category){
    var el = document.querySelector(selector);
   
    const products = await getData(category);
   
    products.forEach(product => {
        el.insertAdjacentHTML("afterbegin", productCartTemplate(product));

    });
 
   
  
}
