/**
 *
 * DATA
 *
 */

 export const items2 = [
  {
    id: 1,
    name: "Windbreaker Jacket",
    subtitle: "Accessory",
    price: 14.0,
    discount: 29.99,
    image: "./assets/image/new-1.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 2,
    name: "Air Jordan Zipper",
    subtitle: "Accessory",
    price: 11.99,
    discount: 21.99,
    image: "./assets/image/new-2.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 3,
    name: "Fur Jacket",
    subtitle: "Accessory",
    price: 4.9,
    discount: 9.99,
    image: "./assets/image/new-3.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 4,
    name: "Fleece Jacket",
    subtitle: "Accessory",
    price: 24.5,
    discount: 44.99,
    image: "./assets/image/new-4.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 5,
    name: "Nike Hoodie Jacket",
    subtitle: "Accessory",
    price: 7.8,
    discount: 14.99,
    image: "./assets/image/new-5.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 6,
    name: "Fleece Jacket",
    subtitle: "Accessory",
    price: 5.99,
    discount: 12.99,
    image: "./assets/image/new-6.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 7,
    name: "Hoodies",
    subtitle: "Accessory",
    price: 15.99,
    discount: 19.99,
    image: "./assets/image/new-7.png",
    category: "hoodies",
    quantity: 10,
  },
];

let listProducts2 = document.querySelector(".fore");
let cartBuy2 = [];

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos2();
});

function mostrarProductos2() {
  let fragmentHTML = "";

  items2.forEach((product) => {
    fragmentHTML += `
      <div class="new__content  swiper-slide ">
        <div class="new__tag">${product.category}</div>
          <img src=${product.image} alt="Arrival" class="new__img"/>
            <h3 class="new__title">${product.name}</h3>
            <span class="new__subtitle">${product.subtitle}</span>
               
            <div class="new__prices">
              <span class="new__price">$${product.price}</span>
              <span class="new__discount">$${product.discount}</span>
            </div>
               
            <a <a data-id="${product.id}" class="button shop__button product-button" id="product-button">
              <i class="bx bx-cart-alt new__icon"></i>
            </a>
      </div>     
      `;
    //  console.log(fragmentHTML)
  });
  //console.log(fragmentHTML)

  listProducts2.innerHTML = fragmentHTML;
  // console.log(listProducts)

  let productsButton2 = document.querySelectorAll(".product-button");

  productsButton2.forEach((button) => {
    button.addEventListener("click", (evento) => {
      let id = parseInt(button.getAttribute("data-id"));
      let product = items2.find((item) => {
        return item.id === id;
      });

      cartBuy2.push(product);
      console.log(cartBuy2);
    });
  });
}