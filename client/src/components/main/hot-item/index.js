import ItemFrame from '../item-frame';
import './index.scss';

export default class HotItem {
  constructor({ $parent }) {
    const hotItem = document.createElement('div');
    hotItem.className = 'hot-item';
    hotItem.innerHTML = '<h2 class="section-title">쇼핑 급상승 키워드</h2>';

    this.itemFrame = new ItemFrame({ $parent: hotItem });
    $parent.appendChild(hotItem);
  }

  setState(props) {
    this.itemFrame.setState(props.hotItemList);
  }
}
