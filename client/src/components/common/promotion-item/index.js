import './index.scss';
import { THEME_ICON } from '@/static/constants/image-path';

export default class PromotionItem {
  constructor({ $parent, info }) {
    const promotionItem = document.createElement('li');
    promotionItem.className = 'promotion-item';
    promotionItem.innerHTML = `
        <a href="" class="promotion-item-link">
            <img src=${info.imageSrc} class="promotion-item-img" alt="상품 이미지">
            <strong class="promotion-item-title">${info.title}</strong>
            <div class="promotion-item-content">${info.content}</div>
            <img class="promotion-item-theme" src=${THEME_ICON} alt="테마 아이콘"/>
        </a>`;
    $parent.appendChild(promotionItem);
  }
}
