import { HeaderSearchBar, RecentlyViewedMenu } from '@components';
import { Component } from '@core';
import { $ } from '@utils';

export class Header extends Component {
  template() {
    return /*html*/ `
        <header class="header">
            <div class="header__top">
                <div class="logo">
                    <img alt="쇼핑하우" src="//search1.daumcdn.net/search/cdn/simage/shopping/v2/common/nav/logo_shw_2021.png" />
                </div>
                <div class="search"></div>
            </div>

            <nav class="header__nav">
                <div class="header__navContent">
                    <div class="category">
                        <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
                        <ul class="category-first">
                            <li></li>
                        </ul>
                        <ul class="category-second">
                            <li></li>
                        </ul>
                        <ul class="category-third">
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
                    <ul class="privateMenu">
                        <li class="loginMenu"><a href="#">로그인</a></li>
                        <li class="recentlyViewedMenu"><a href="#">최근본상품</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;
  }

  rendered() {
    new HeaderSearchBar($('.search', this.$target), {
      renderType: 'replaceHTML',
    });

    new RecentlyViewedMenu($('.recentlyViewedMenu', this.$target));
  }
}
