import { CATEGORY_HOVER_ICON, CATEGORY_ICON } from '@/static/constants/image-path';
import { $ } from '@/utils/helper';
import './index.scss';

export default class Category {
  constructor({ $parent }) {
    this.category = document.createElement('div');
    this.category.className = 'category';
    this.render();
    $parent.appendChild(this.category);

    this.category.addEventListener('mouseenter', this.handleMouseEnterCategory.bind(this));
    this.category.addEventListener('mouseleave', this.handleMouseLeaveCategory.bind(this));
  }

  setState(props) {}

  render() {
    this.category.innerHTML = `
        <img class="category-img" src=${CATEGORY_ICON} alt='카테고리 아이콘'/>
        <span>카테고리</span>
        <div class="gubun-bar"></div>
    `;
  }

  handleMouseEnterCategory() {
    $('.category-img', this.category).src = CATEGORY_HOVER_ICON;
  }

  handleMouseLeaveCategory() {
    $('.category-img', this.category).src = CATEGORY_ICON;
  }
}
{
  // TODO:
  // 추후 하위 카테고리 추가
  /* <ul class="category-first">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="category-second">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="category-third">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul> */
}
