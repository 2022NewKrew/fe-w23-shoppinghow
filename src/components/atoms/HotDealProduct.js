import { Component } from '@core';

export class HotDealProduct extends Component {
  template() {
    const {
      product: {
        title,
        img,
        url,
        price,
        originPrice,
        discount: { type, text },
      },
    } = this.$props;

    return /*html*/ `
      <li class="product">
        <a href="${url}" class="product__link">
            <span class="product__thumb">
                <img alt="썸네일" src="${img}">
            </span>

            <strong class="product__title">${title}</strong>

            <span class="product__price">
                <span class="txt__price">${price}<span class="txt__unit">원</span></span>
                <span class="txt__originPrice">${originPrice}</span>
                <span class="txt__discountPercent">
                    ${text}
                    ${type === 'percent' ? `<span class="txt__unit">%</span>` : ``}
                </span>
            </span>
        </a>
      </li>
    `;
  }

  render() {
    this.$root.insertAdjacentHTML('beforeend', this.template());
    this.mounted();
  }
}
