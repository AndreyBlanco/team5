import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function shoppingCart() {
    const cartItems = getLocalStorage("so-cart");
    const outputEl = document.querySelector(".product-list");
    renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
}

function cartItemTemplate(item) {
    const newItem = `<li class="card-card divider">
    <a href="#" class="card-card__image">
    <img
      src=${item.Image}
      alt="Image of ${item.Name}"
    />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="card-card__color">${item.Colors[0].ColorName}</p>
    <p class="card-card__quantity">qty: 1</p>
    <p class="card-card__price">$${item.FinalPrice}</p></a>
    </li>`;

    return newItem;
    
}