import Component from "../core/Component";

export default class Items extends Component {
  template() {
    const hotdealData = this.$props;
    const item = ({ title, price, original, discounted, img }) => {
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
    };
    return `
      ${hotdealData.map(item).join("")}
    `;
  }
}
