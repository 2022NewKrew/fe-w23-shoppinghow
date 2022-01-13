import './index.scss';
import { adjustDiscount } from '@/utils/helper';

export default class Item {
  constructor({ $parent, info, index }) {
    const item = document.createElement('li');
    item.className = 'item';
    item.dataset.idx = index;
    this.info = info;
    item.innerHTML = this.getFixedInitView(this.info, index);

    $parent.appendChild(item);
  }

  getFixedInitView(info, index) {
    return `
        ${this.createHotItemName(info, index)}
          <img src=${info.imageSrc} class="item-img" alt="상품 이미지">
          <strong class="item-title">${this.createItemTitle(info)}</strong>
          <span class="item-detail-price">
              ${this.createPrice(info)}
          </span>`;
  }

  createHotItemName(info, index) {
    return !info.discount ? `<span class='hot-item-title'>${index + 1}. ${info.title}</span>` : '';
  }

  createItemTitle(info) {
    return !info.discount ? info.content : info.title;
  }

  createPrice(info) {
    return info.discount ? this.createHotDealPrice(info.discount, info.price) : this.createHotItemPrice(info.price);
  }

  createHotDealPrice(discount, price) {
    return discount === '핫딜가'
      ? `<span class="txt-price">${price.toLocaleString()}원</span>
         <span class="txt-price-percent">핫딜가</span>`
      : `<span class="txt-price">${adjustDiscount(price, discount)}</span>
         <span class="txt-price-before-discount">${price.toLocaleString()}원</span>
         <span class="txt-price-percent">${discount}</span>`;
  }

  createHotItemPrice(price) {
    return `<span class="txt-price">${price.toLocaleString()}원</span>`;
  }
}
