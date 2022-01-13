import { Component } from '@core';
import { RecentlyViewedStore } from '@stores';
import { $, renderMoney } from '@utils';
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
    } = this.props;

    return /*html*/ `
      <li class="product">
        <a href="${url}" target="_blank" class="product__link">
            <span class="product__thumb">
                <img alt="썸네일" src="${img}">
            </span>

            <strong class="product__title">${title}</strong>

            <span class="product__price">
                <span class="txt__price">${renderMoney(price)}<span class="txt__unit">원</span></span>
                <span class="txt__originPrice">${renderMoney(originPrice)}</span>
                ${
                  type === 'percent'
                    ? /* html */ `
                  <span class="txt__discountPercent">
                    ${text}<span class="txt__unit">%</span>
                  </span>
                `
                    : /* html */ `
                  <span class="txt__discountPercent txt__hotdeal">
                    ${text}
                  </span>
                `
                }

            </span>
        </a>
      </li>
    `;
  }

  rendered() {
    const {
      product: { title, img, url },
    } = this.props;

    $('.product__link', this.$target).addEventListener('click', (e) => {
      RecentlyViewedStore.dispatch('ADD_VIEW', { item: { title, img, url } });
    });
  }
}
