const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title:"Maybach S680",
    price: 5299,
    colors: [
      { code: "black", img:"img/maybach.png" },
      
    ],
  },
  {
    id: 2,
    title: "Bentley Flying Spur",
    price: 4999,
    colors: [
      { code: "blue", img:"img/Untitled_design-removebg-preview (1).png" },
      
    ],
  },
  {
    id: 3,
    title: "Rolls Royce Cullinan BB",
    price: 5799,
    colors: [
      { code: "black", img:"img/Untitled_design-removebg-preview.png" },
      
    ],
  },
  {
    id: 4,
    title: "Ferrari Purosangue",
    price: 4999,
    colors: [
      { code: "red", img:"img/2-removebg-preview.png" },
      
    ]
  },
  {
    id: 5,
    title: "Lamborghini Revuelto",
    price: 5299,
    colors: [
      { code: "black", img:"img/1-removebg-preview.png"  },
    ]
  },
    {
    id: 6,
    title: "Mclaren P1",
    price: 5799,
    colors: [
      { code: "black", img:"img/3-removebg-preview.png" },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

let selectedSize = null;

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Slide animation
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Set new product
    choosenProduct = products[index];

    // Update product details
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update color boxes safely
    currentProductColors.forEach((color, i) => {
      if (choosenProduct.colors[i]) {
        color.style.display = "inline-block";
        color.style.backgroundColor = choosenProduct.colors[i].code;
      } else {
        // Hide unused color elements
        color.style.display = "none";
      }
    });

    // Reset size selection on product change
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    selectedSize = null;
  });
});

// Color switching
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
    }
  });
});

// Size selection
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    selectedSize = size.textContent;
  });
});

// Payment popup
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});