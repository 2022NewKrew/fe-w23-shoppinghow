import Component from '../../../core/Component.js';
import './index.scss';
import RecentItems from './RecentItems/index.js';

export default class HeaderMenu extends Component {
  template() {
    return `
    <div class="header-menu">
        <div class="category">
          <button class="category__title">
            카테고리
            <span class="category_icon"></span>
          </button>
        </div>
        <div class="gubun-bar"></div>
        <ul class="top-menu">
          <li class="top-menu__btn">
            <a href="#">핫딜</a>
          </li>
          <li class="top-menu__btn">
            <a href="">베스트100</a>
          </li>
          <li class="top-menu__btn">
            <a href="">할인특가</a>
          </li>
          <li class="top-menu__btn">
            <a href="">기획전</a>
          </li>
        </ul>
        <ul class="private-menu">
          <li class="private-menu__btn">
            <a class="private-a login" href="#">
              <span class="login_icon"></span>
              로그인
            </a>
          </li>
          <li class="private-menu__btn recently_viewed">
            <a class="private-a recent_product" href="#">
              <span class="product_icon"></span>
              <span class="arrow"></span>
              최근본상품
            </a>
            <div class="recent_items"></div>
          </li>
        </ul>
      </div>
      `;
  }

  mounted() {
    const $recentItems = this.$('.recent_items');
    new RecentItems($recentItems, {});
  }

  setEvent() {
    const $recentlyViewed = this.$('.recently_viewed');
    const showRecentItems = () => $recentlyViewed.classList.add('show');
    const hideRecentItems = () => $recentlyViewed.classList.remove('show');
    $recentlyViewed.addEventListener('mouseenter', showRecentItems);
    $recentlyViewed.addEventListener('mouseleave', hideRecentItems);
  }
}
