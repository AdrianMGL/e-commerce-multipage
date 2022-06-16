"use-strict";
/**
 *
 * DATA NEW ARRIVALS
 *
 */


//  const items2 = [
//   {
//     id: 1,
//     name: "Windbreaker Jacket",
//     subtitle: "Accessory",
//     price: 14.0,
//     discount: 29.99,
//     image: "./assets/image/new-1.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 2,
//     name: "Air Jordan Zipper",
//     subtitle: "Accessory",
//     price: 11.99,
//     discount: 21.99,
//     image: "./assets/image/new-2.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 3,
//     name: "Fur Jacket",
//     subtitle: "Accessory",
//     price: 4.9,
//     discount: 9.99,
//     image: "./assets/image/new-3.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 4,
//     name: "Fleece Jacket",
//     subtitle: "Accessory",
//     price: 24.5,
//     discount: 44.99,
//     image: "./assets/image/new-4.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 5,
//     name: "Nike Hoodie Jacket",
//     subtitle: "Accessory",
//     price: 7.8,
//     discount: 14.99,
//     image: "./assets/image/new-5.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 6,
//     name: "Fleece Jacket",
//     subtitle: "Accessory",
//     price: 5.99,
//     discount: 12.99,
//     image: "./assets/image/new-6.png",
//     category: "new",
//     quantity: 10,
//   },
//   {
//     id: 7,
//     name: "Hoodies",
//     subtitle: "Accessory",
//     price: 15.99,
//     discount: 19.99,
//     image: "./assets/image/new-7.png",
//     category: "hoodies",
//     quantity: 10,
//   },
// ];


/**
 *
 * DATA
 *
 */

const itemsProducts = [
  {
    id: 1,
    name: "Cartoon Jackets",
    subtitle: "Accessory",
    price: 14.5,
    discount: 29.8,
    image: "./assets/image/product-1.png",
    category: "new",
    quantity: 10,
  },
  {
    id: 2,
    name: "Clothing Hat Coat",
    subtitle: "Accessory",
    price: 11.8,
    discount: 21.5,
    image: "./assets/image/product-2.png",
    category: "sales",
    quantity: 11,
  },
  {
    id: 3,
    name: "Fur Jacket",
    subtitle: "Accessory",
    price: 4.99,
    discount: 9.99,
    image: "./assets/image/product-3.png",
    category: "sale",
    quantity: 12,
  },
  {
    id: 4,
    name: "Fleece Jacket",
    subtitle: "Accessory",
    price: 24.7,
    discount: 44.2,
    image: "./assets/image/product-4.png",
    category: "new",
    quantity: 13,
  },
  {
    id: 5,
    name: "WindBreaker Jackets",
    subtitle: "Accessory",
    price: 10.99,
    discount: 20.99,
    image: "./assets/image/product-5.png",
    category: "new",
    quantity: 14,
  },
  {
    id: 6,
    name: "Adidas tracksuit",
    subtitle: "Accessory",
    price: 17.6,
    discount: 27.7,
    image: "./assets/image/product-6.png",
    category: "Sale",
    quantity: 15,
  },
];

/**
 * 
 */

let listProducts = document.querySelector(".cart-load");
let messageContent = document.querySelector(".message__content");

let cartContainer = document.querySelector(".cart__container");
let cartCount = document.querySelector("#cart-count");

let cartBuy = [];

 let themeIcon = document.getElementById("theme-toggler");
 let body = document.querySelector("body");
 
 /**
  * DARK & LIGHT THEME TOGGLE
  * 
  */
 
 themeIcon.addEventListener("click", (e) => {
   body.classList.toggle("dark-theme");
   let isDark = body.classList.contains("dark-theme");
 
   if (isDark) {
     themeIcon.classList.replace("bx-moon", "bx-sun");
 
     localStorage.setItem("theme", "dark_theme");
   } else {
     themeIcon.classList.replace("bx-sun", "bx-moon");
 
     localStorage.setItem("theme", "light_theme");
   }
 });
 

 /**
  * CHECK AND APPLY LAST TIME SELECTED THEME FROM LOCALSTORAGE
  *
  */
 
 if (localStorage.getItem("theme") === "dark_theme") {
   themeIcon.classList.replace("bx-moon", "bx-sun");
   body.classList.toggle("dark-theme");
 } else {
   body.classList.toggle("light-theme");
   themeIcon.classList.replace("bx-sun", "bx-moon");
 }

 /**
  * CART
  *
  */

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cart")) {
    cartBuy = JSON.parse(localStorage.getItem("cart"));
    mostrarProductosCart();
  }

  mostrarProductos();
});

function mostrarProductos() {
  let fragmentHTML = "";

  itemsProducts.forEach((product) => {
    fragmentHTML += `
      <div class="new__content shop__content ">
        <div class="shop__tag">${product.category}</div>
          <img src=${product.image} alt="product " class="shop__img"/>
          <h3 class="shop__title">${product.name}</h3>
          <span class="shop__subtitle">${product.subtitle}</span>
             
          <div class="shop__prices">
            <span class="shop__price">$${product.price}</span>
            <span class="shop__discounts">$${product.discount}</span>
          </div>
              
          <a data-id="${product.id}" class="button shop__button product-button" id="product-button">
            <i class="bx bx-cart-alt shop__icon"></i>
          </a>
      </div>
      `;
    //  console.log(fragmentHTML)
  });
  //console.log(fragmentHTML)

  listProducts.innerHTML = fragmentHTML;
  // console.log(listProducts)

  let productsButton = document.querySelectorAll("#product-button");

  productsButton.forEach((button) => {
    button.addEventListener("click", (evento) => {
      let id = parseInt(button.getAttribute("data-id"));
      let product = itemsProducts.find((item) => {
        return item.id === id;
      });
      agregarProducto(product);
      // cartBuy.push(product);
      // console.log(cartBuy);
    });
  });
}

/**
 * 
 * @param {*} producto 
 */

function agregarProducto(producto) {
  let resultadoFind = cartBuy.find((item) => item.id === producto.id);
  // resultadoFind = "actualizacion"

  if (resultadoFind) {
    let stock = cartBuy[resultadoFind.index].quantity;
    let quantitySelected = cartBuy[resultadoFind.index].quantitySelected;

    if (stock > quantitySelected) {
      cartBuy[resultadoFind.index].quantitySelected += 1;
    } else {
      alert("No tenemos suficiente inventario");
      mostrarMensaje();
    }
  } else {
    producto.quantitySelected = 1;
    producto.index = cartBuy.length;

    cartBuy.push(producto);
  }
  localStorage.setItem("cart", JSON.stringify(cartBuy));
  console.log(cartBuy);
  mostrarProductosCart();
}

/**
 * 
 */

function mostrarProductosCart() {
  let fragmentoHTML = ``;
  let suma = 0;
  let cantidadTotal = 0;

  cartBuy.forEach((item) => {

    fragmentoHTML += `
          <article class="cart__card">
            <div class="cart__box">
              <img src=${item.image} alt="cart 1" class="cart__img"/>
            </div>
          
            <div class="card__details">
              <h3 class="cart__title">${item.name}</h3>
              <span class="cart__stock"><small>Stock:</small> ${item.quantity} | </span>
              <span class="cart__price">$${item.price}</span>

              <div class="cart__amount">
                <div class="cart__amount-content">
                  <span class="cart__amount-box">
                    <i class="bx bx-minus"></i>
                  </span>

                  <span class="cart__amount-number"> ${item.quantitySelected} <small>Units</small></span>
                  <span class="cart__amount-box">
                
                  <i data-id="${item.id}" class="bx bx-plus  product-button" id="product-button" ></i>
                  </span>
                </div>
                <i class="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>
      `;

    let totalProducto = item.quantitySelected * item.price;
    suma += totalProducto;

    cantidadTotal += item.quantitySelected;

  });

  fragmentoHTML += `
        <div class="cart__prices">
            <span class="cart__prices-item">Products: ${cantidadTotal} </span>
            <span class="cart__prices-total">Total: $${suma.toFixed(2)}</span>
        </div>

        <div class="cart__button" id="message-button">
          <a href="#" class="button">Checkout
              <i class="bx bxs-check-shield button__icon"></i>
          </a>
        </div> 
          `;

  cartContainer.innerHTML = fragmentoHTML;
  cartCount.textContent = cantidadTotal;
  cartShop.classList.add("bx-tada");
}



/**
 * SWIPER
 *
 */

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/**
 * CHANGE BACKGROUND NAV HEADER
 *
 */

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/**
 * SWIPER
 *
 */

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: "true",
});

/**
 * SHOW CART
 *
 */

const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

/**===== CART SHOW =====*/
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

/**===== CART HIDDEN =====*/
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*===================== SHOW MESSAGE =====================*/

const message = document.getElementById("message"),
  messageButton = document.querySelector("#message-button"),
  messageClose = document.getElementById("message-close");

/**===== MESSAGE SHOW =====*/
if (messageButton) {
  messageButton.addEventListener("click", () => {
    message.classList.add("show-message");
  });
}

/**===== MESSAGE HIDDEN =====*/
if (messageClose) {
  messageClose.addEventListener("click", () => {
    message.classList.remove("show-message");
  });
}

/**
 * SHOW SCROLL UP
 *
 */

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/**
 * SHOW MENU MOBILE
 *
 */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/**===== SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/**===== REMOVE =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/**
 * 
 */

/*
function mostrarMensaje() {
  fragmentHTML += `
    <i class="bx bx-x message__close" id="message-close"></i>
      <h2 class="message__title-center">Sorry</h2>
      
        <h3>We don't have enough inventory</h3>

      `;

  messageContent.innerHTML = fragmentHTML;
}
*/
