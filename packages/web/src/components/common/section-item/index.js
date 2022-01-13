import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class SectionItem {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("li", { className: "section_item" });

    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    const { title, thumb, priceInfo } = this.state;
    this.$target.dataset.thumb = thumb;
    this.$target.innerHTML = `
        <a href="javascript:;">
            <span class="thumb_hotdeal"><img src="${thumb}"/></span>
            <strong class="tit_g">${title}</strong>
            ${this.cretateDetailPrice(priceInfo)}
        </a>
        `;
  }
  cretateDetailPrice({ price, percent, isHotDeal }) {
    return `
      <span class="detail_price">
        <span class="info_discount">
          <span class="txt_discount">${
            isHotDeal
              ? price
              : Number.parseInt(price * Number((100 - percent) / 100))
          }<span class="txt_unit">원</span></span>
          <span class="txt_percent ${isHotDeal ? "price_hotdeal" : ""}">
            ${
              isHotDeal ? "핫딜가" : percent + '<span class="txt_unit">%</span>'
            }
          </span>
        </span>
        ${!isHotDeal ? `<span class="txt_price">${price}</span>` : ""}
      </span>
    `;
  }
}
