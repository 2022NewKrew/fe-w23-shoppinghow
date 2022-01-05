import { RECENTLY_VIEWED_THINGS_ICON } from '../../../static/constants/image-path';
import './index.scss';

export default class RecentlyViewedThing {
  constructor({ $parent }) {
    this.recentlyViewedThing = document.createElement('div');
    this.recentlyViewedThing.className = 'recently-viewed-thing';
    this.render();
    $parent.appendChild(this.recentlyViewedThing);
  }

  setState(props) {}

  render() {
    this.recentlyViewedThing.innerHTML = `
        <img class="recently-viewed-thing-img" src=${RECENTLY_VIEWED_THINGS_ICON} alt='최근 본 상품 아이콘'/>
        <span>최근본 상품</span>
    `;
  }
}
