const products = [
  {
    id: 1,
    name: "Samsung S23",
    price: 38000,
    storage: "6GB + 256GB",
    color: "Off White",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 2,
    name: "Samsung Galaxy A55 5G",
    price: 24999,
    storage: "8GB + 128GB",
    color: "Awesome Lime",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 FE 5G",
    price: 36999,
    storage: "8GB + 128GB",
    color: "Mint",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 4,
    name: "iPhone 15 (128GB)",
    price: 79900,
    storage: "128GB",
    color: "Black",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 5,
    name: "iPhone 15 Plus",
    price: 89900,
    storage: "128GB",
    color: "Red",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 6,
    name: "OnePlus 12R 5G",
    price: 42999,
    storage: "8GB + 128GB",
    color: "Jade Fog",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 7,
    name: "OnePlus Nord CE 4 Lite 5G",
    price: 17999,
    storage: "8GB + 128GB",
    color: "Mega Blue",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 8,
    name: "Redmi Note 13 Pro+",
    price: 30999,
    storage: "8GB + 256GB",
    color: "Black",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 9,
    name: "Redmi Note 13 Pro",
    price: 25999,
    storage: "8GB + 256GB",
    color: "Aurora Green",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 10,
    name: "iQOO Neo 10 Pro 5G",
    price: 31998,
    storage: "8GB + 256GB",
    color: "Inferno Red",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 11,
    name: "Motorola Edge 70 5G",
    price: 31291,
    storage: "8GB + 256GB",
    color: "Rust",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 12,
    name: "POCO X6 5G",
    price: 24999,
    storage: "8GB + 256GB",
    color: "White",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 13,
    name: "Realme GT5 Pro",
    price: 44999,
    storage: "12GB + 256GB",
    color: "Black",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 14,
    name: "Vivo T4 Pro 5G",
    price: 15499,
    storage: "8GB + 128GB",
    color: "Deep Sea Blue",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 15,
    name: "Vivo V29 Pro 5G",
    price: 39999,
    storage: "8GB + 256GB",
    color: "Himalayan Blue",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 16,
    name: "OPPO Reno11 5G",
    price: 29999,
    storage: "8GB + 128GB",
    color: "Blue",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
  {
    id: 17,
    name: "Nothing Phone (2)",
    price: 44999,
    storage: "12GB + 256GB",
    color: "White",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90",
    InsideCart: false,
    indItemCount: 0,
  },
];

let itemCounter = 0;
let subTotal = 0;

const cartSection = document.querySelector("#cart-section");
const counterDisplay = document.querySelector("#counter");
const cartText = document.querySelector(".cartText");

const subTotalDisplay = document.createElement("div");
subTotalDisplay.classList.add("subTotalDisplay");
cartSection.appendChild(subTotalDisplay);

const updateSubtotal = () => {
  subTotalDisplay.textContent = "Subtotal: ₹" + subTotal;
};

const updateCounter = () => {
  counterDisplay.innerText = itemCounter;
};

const renderCart = (product) => {
  cartText.innerText = "Cart items";

  const cartItemCard = document.createElement("div");
  cartItemCard.classList.add("cartItemCard");
  cartSection.insertBefore(cartItemCard, subTotalDisplay);

  const cartItemImage = document.createElement("img");
  cartItemImage.classList.add("cartItemImage");
  cartItemImage.src = product.image;

  const cartItemInfo = document.createElement("div");
  cartItemInfo.classList.add("cartItemInfo");
  cartItemInfo.innerHTML = `
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <p>${product.storage}</p>
  `;

  const indItemCtr = document.createElement("div");
  indItemCtr.classList.add("indItemCtr");

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";

  const countDisplay = document.createElement("span");
  countDisplay.textContent = product.indItemCount;

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";

  const removeBtn = document.createElement("span");
  removeBtn.textContent = "×";
  removeBtn.classList.add("remove");

  plusBtn.addEventListener("click", () => {
    product.indItemCount++;
    subTotal += product.price;
    countDisplay.textContent = product.indItemCount;
    updateSubtotal();
  });

  minusBtn.addEventListener("click", () => {
    itemDecrement(product, countDisplay, cartItemCard);
  });

  removeBtn.addEventListener("click", () => {
    removeFromCart(product, cartItemCard);
  });

  indItemCtr.appendChild(minusBtn);
  indItemCtr.appendChild(countDisplay);
  indItemCtr.appendChild(plusBtn);

  cartItemInfo.appendChild(indItemCtr);
  cartItemInfo.appendChild(removeBtn);

  cartItemCard.appendChild(cartItemImage);
  cartItemCard.appendChild(cartItemInfo);
};

const removeFromCart = (product, cartItemCard) => {
  itemCounter--;

  subTotal -= product.price * product.indItemCount;
  updateSubtotal();
  updateCounter();

  product.indItemCount = 0;
  product.InsideCart = false;

  cartItemCard.remove();

  if (itemCounter === 0) {
    cartText.innerText = "No Cart items";
  }
};

const itemDecrement = (product, countDisplay, cartItemCard) => {
  if (product.indItemCount === 1) {
    removeFromCart(product, cartItemCard);
  } else {
    product.indItemCount--;
    subTotal -= product.price;
    countDisplay.textContent = product.indItemCount;
    updateSubtotal();
  }
};

const addToCart = (product) => {
  if (product.InsideCart) {
    alert("Item already in the cart");
    return;
  }

  product.indItemCount = 1;
  product.InsideCart = true;

  itemCounter++;
  subTotal += product.price;

  updateSubtotal();
  updateCounter();
  renderCart(product);
};

const productSection = document.querySelector("#product-section");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const Card = document.createElement("div");
  Card.classList.add("Card");

  const productImg = document.createElement("img");
  productImg.classList.add("productImg");
  productImg.src = product.image;

  const productInfo = document.createElement("div");
  productInfo.classList.add("productInfo");
  productInfo.innerHTML = `
    <h1>${product.name}</h1>
    <h2>₹${product.price}</h2>
    <p>Storage: ${product.storage}</p>
    <p>Color: ${product.color}</p>
  `;

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener("click", () => {
    addToCart(product);
  });

  productInfo.appendChild(addBtn);

  Card.appendChild(productImg);
  Card.appendChild(productInfo);

  productSection.appendChild(Card);
}
const searchedQuerry = document.querySelector("#search");
const searchSection = document.querySelector(".searchedItems");
searchedQuerry.addEventListener("input", (e) => {
  let input = e.target.value.toLowerCase();

  searchSection.innerHTML = "";

  if (!input) return;

  for (let i = 0; i < products.length; i++) {
    let productName = products[i].name.toLowerCase();

    if (productName.startsWith(input)) {

      const searchItemCard = document.createElement("div");
      searchItemCard.classList.add("searchItemCard");

      const searchItemImage = document.createElement("img");
      searchItemImage.classList.add("searchItemImage");
      searchItemImage.src = products[i].image;

      const searchItemInfo = document.createElement("div");
      searchItemInfo.classList.add("searchItemInfo");
      searchItemInfo.innerHTML = `
        <h3>${products[i].name}</h3>
      `;
      const addBtn = document.createElement("button");
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener("click", () => {
    addToCart(products[i]);
  });

  searchItemInfo.appendChild(addBtn);

      searchItemCard.appendChild(searchItemImage);
      searchItemCard.appendChild(searchItemInfo);

      searchSection.appendChild(searchItemCard);
    }
  }
});
