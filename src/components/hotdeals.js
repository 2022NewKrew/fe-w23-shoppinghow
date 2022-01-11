import Component from "../core/Component";
import Item from "./Item.js";
const data = require("../data/hotdeals.json");
export default class Hotdeals extends Component {
  hotdealData;
  setup() {
    this.hotdealData = data.hotdeals;
  }
  template() {
    return `
      <div class="hot-deal">
        <h2 class="section-title">품절주의, 역대급 핫딜</h2>
        <ul class="hot-deal-list">
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
              </li>`
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  mounted() {
    const $hotdealList = this.$target.querySelector(".hot-deal-list");
    this.hotdealData.forEach((data) => {
      new Item($hotdealList, data);
    });
    // new Items($hotdealList, this.hotdealData);
  }
}
