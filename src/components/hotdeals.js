const hotdealData = require("../data/hotdeals.json").hotdeals;

export default function createHotdeals() {
  const hotdeals = document.createElement("div");

  hotdeals.innerHTML = `
    <div class="hot-deal">
        <h2 class="section-title">품절주의, 역대급 핫딜</h2>
        <ul class="hot-deal-list"></ul>
    </div>
    `;

  const hotdealContainer = document.getElementById("hotdeals");
  hotdealContainer.appendChild(hotdeals);
}

window.addEventListener("DOMContentLoaded", () => {
  makeHotDealItems();
});

function makeHotDealItems() {
  const target = document.querySelector(".hot-deal-list");
  const hotdealItems = `
    ${hotdealData
      .map(
        ({ title, price, original, discounted, img }) => `
            <li class="hot-deal__item">
            <a href="" class="hot-deal__link">
                <span class="hot-deal__thumb">
                    <img src=${img} class="hot-deal__img" alt=${title}>
                </span>
  
                <strong class="hot-deal__title">${title}</strong>
  
                <span class="hot-deal__detail-price">
                    <span class="txt-price">${price}원</span>
                    <span class="txt-price-percent">${discounted}</span>
                </span>
            </a>
        </li>
  `
      )
      .join("")}
  `;

  target.innerHTML = hotdealItems;
}
