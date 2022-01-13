import Component from "../core/Component";
import RecentProductModel from "../models/RecentProductModel";

export default class Item extends Component {
  itemData;
  setup() {
    this.itemData = this.$props;
  }
  template() {
    const { idx, title, price, original, discounted, img } = this.$props;
    return `
        <li class="hot-deal__item" data-id="${idx}">
          <a class="hot-deal__link">
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
      `;
  }

  setEvent() {
    const { idx } = this.$props;
    const elems = `[data-id="${idx}"]`;
    this.addEvent("click", elems, (e) => {
      RecentProductModel.addRecentProduct(this.$props);
    });
  }
}
