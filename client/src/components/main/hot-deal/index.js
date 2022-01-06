import ItemFrame from '../item-frame';
import './index.scss';

export default class HotDeal {
  constructor({ $parent }) {
    const hotdeal = document.createElement('div');
    hotdeal.className = 'hot-deal';
    hotdeal.innerHTML = '<h2 class="section-title">품절주의, 역대급 핫딜</h2>';

    this.itemFrame = new ItemFrame({ $parent: hotdeal });
    $parent.appendChild(hotdeal);
  }

  setState(props) {
    this.itemFrame.setState(props.hotDealList);
  }
}
