import Carousel from '../carousel';
import Item from '../item';
import PromotionItem from '../promotion-item';
import './index.scss';
import store from '@/store';

const CAROUSEL_MAX_LENGTH = 3;
const RECENTLY_VIEWED_THING_IMG_LIMIT = 6;

export default class ItemFrame {
  itemList = [];

  constructor({ $parent, itemType }) {
    this.itemType = itemType;
    this.itemFrame = document.createElement('ul');
    this.itemFrame.className = 'item-frame';
    $parent.appendChild(this.itemFrame);

    this.itemFrame.addEventListener('click', this.addToRecentlyViewedThings.bind(this));
  }

  addToRecentlyViewedThings(e) {
    if (e.target.closest('.item')) {
      const idx = e.target.closest('.item').dataset.idx;
      const itemInfo = this.itemList[idx];
      store.addToLocalStorage(itemInfo.imageSrc, 'recentlyViewedThings', RECENTLY_VIEWED_THING_IMG_LIMIT);
    }
  }

  setState(props) {
    this.itemList = props;
    this.render();
  }

  render() {
    switch (this.itemType) {
      case 'item':
        this.itemFrame.innerHTML = '';
        this.itemList.forEach((item, index) => new Item({ $parent: this.itemFrame, info: item, index }));
        break;
      case 'mainBanner':
        let carouselCount = 0;
        const carouselList = [];
        this.itemFrame.innerHTML = '';
        this.itemList.forEach((item, index) => {
          if (!index) {
            this.itemFrame.innerHTML = `<div class="banner-container"><img class="banner-image" src=${item.imageSrc} /></div>`;
            return;
          }
          if (item?.carousel) {
            carouselCount++;
            carouselList.push(item);
            if (carouselCount === CAROUSEL_MAX_LENGTH) new Carousel({ $parent: this.itemFrame, info: carouselList });
            return;
          }
          new PromotionItem({ $parent: this.itemFrame, info: item });
        });
        break;
      case 'promotionItem':
        break;
      default:
        break;
    }
  }
}
