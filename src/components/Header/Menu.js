import Component from "@core/Component";
import PrivateMenu from "@components/Header/PrivateMenu";

class Menu extends Component {
  template() {
    return `
        <div class="header-menu">
            <div class="category">
                <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
                <div class="category__lists-wrapper">
                   <ul class="category-first">
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                  </ul>
                  <ul class="category-second">
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                  </ul>
                  <ul class="category-third">
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                  </ul>
                </div>
            </div>
            <div class="gubun-bar"></div>
            <ul class="top-menu">
                <li class="top-menu__btn"><a href="#">핫딜</a></li>
                <li class="top-menu__btn"><a href="">베스트100</a></li>
                <li class="top-menu__btn"><a href="">할인특가</a></li>
                <li class="top-menu__btn"><a href="">기획전</a></li>
            </ul>
        </div>`;
  }

  mounted() {
    const $headerMenu = this.$target.querySelector(".header-menu");
    new PrivateMenu($headerMenu);
  }
}

export default Menu;
