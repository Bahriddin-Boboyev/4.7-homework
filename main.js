import { products } from "./data.js";
const btnGroup = document.querySelector(".btn-group");
const product1 = document.querySelector(".product1");

const renderBtn = () => {
  btnGroup.innerHTML = products
    .map((item) => {
      return `
    <button class="btn" id="${item.id}">${item.category}</button>
    `;
    })
    .join("");
};

renderBtn();

const renderAll = () => {
  let allProduct = "";
  for (let i of products) {
    if (i.product) {
      allProduct += i.product
        ?.map((item) => {
          return `
        <ul id="${item.id}">
        <div class="img-block"><img src="${item.img}" alt="img"></div>
        <li class="title">name: <span class="span">${item.name}</span></li>
        <li class="price">cost: <span class="span">${item.price}$</span></li>
        </ul>
        `;
        })
        .join("");
    }
  }
  product1.innerHTML = allProduct;
};

renderAll();

const renderOther = (index) => {
  let otherProduct = ''
  for(let i of products){
    if(i.id == index){
      if (i.product) {
        otherProduct += i.product
          ?.map((item) => {
            return `
          <ul id="${item.id}">
          <div class="img-block"><img src="${item.img}" alt="img"></div>
          <li class="title">name: <span class="span">${item.name}</span></li>
          <li class="price">cost: <span class="span">${item.price}$</span></li>
          </ul>
          `;
          })
          .join("");
    }
    product1.innerHTML = otherProduct;
    }
    }
};

btnGroup.addEventListener("click", (event) => {
  if (event.target.id == "all") {
    // product1.style.display = "inline-block";
    renderAll();
  } else {
    // product1.style.display = "none";
    products.forEach((item, index) => {
      if (event.target.id == item.id) {
        renderOther(index)
      }
    });
  }
});
