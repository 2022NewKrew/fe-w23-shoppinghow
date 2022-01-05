import { Component } from '@core';

export class Header extends Component {
  setup() {
    this.$root.className = 'header';
  }

  template() {
    return /*html*/ `
        <div class="header__top">
            <div class="logo">
            <img alt="쇼핑하우" src="//search1.daumcdn.net/search/cdn/simage/shopping/v2/common/nav/logo_shw_2021.png" />
            </div>
            <div class="search">
            <form>
                <input type="text" class="search__input" />
                <button type="submit" class="search__icon">🔍</button>
            </form>
            <ul class="search__top10">
                <li class="search__top10Item">3. 아디다스 런닝화</li>
            </ul>
            </div>
        </div>

        <nav class="header__nav">
            <div class="header__navContent">
            <div class="category">
                <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
                <ul class="category-first">
                <li></li>
                <li></li>
                </ul>
                <ul class="category-second">
                <li></li>
                <li></li>
                </ul>
                <ul class="category-third">
                <li></li>
                <li></li>
                </ul>
            </div>

            <div class="separator"></div>

            <ul class="topMenu">
                <li class="topMenu__btn"><a href="#">핫딜</a></li>
                <li class="topMenu__btn"><a href="">베스트100</a></li>
                <li class="topMenu__btn"><a href="">할인특가</a></li>
                <li class="topMenu__btn"><a href="">기획전</a></li>
            </ul>
            <ul class="private-menu">
                <li class="private-menu__btn"><a href="#">로그인</a></li>
                <li class="private-menu__btn"><a href="#">최근본상품</a></li>
            </ul>
            </div>
        </nav>
        `;
  }
}
