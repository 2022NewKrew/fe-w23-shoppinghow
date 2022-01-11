import Component from "../core/Component";

export default class Item extends Component {
  template() {
    const { title, price, original, discounted, img } = this.$props;
    return `
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
      `;
  }
}
