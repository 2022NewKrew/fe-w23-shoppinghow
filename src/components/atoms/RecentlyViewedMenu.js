import { Component } from '@core';
import { $ } from '@utils';

const HOVER_DELAY_TIME = 1000;

export class RecentlyViewedMenu extends Component {
  setup() {
    this.isMouseover;
  }

  template() {
    const { recentlyViewedList = [] } = this.props;

    const recentlyViewdItemTemplate = ({ info, link, img }) => /* html */ `
        <li>
            <a href="${link}" target="_blank">
                <img src="${img}" alt="${info}">
            </a>
        </li>
    `;

    return /*html*/ `
        <a class="recentlyViewedMenu__item" href="#">최근본상품</a>
        <div class="recentlyViewedMenu__modal">
            <h5>최근본 상품 ${recentlyViewedList.length}</h5>
            <ul class="recentlyViewedMenu__productList">
                ${recentlyViewedList.map(recentlyViewdItemTemplate).join('')}
            </ul>
            <div class="recentlyViewedMenu__login">
                <span>
                    로그인 하시면 더 많은
                    <br>
                    MY 쇼핑 정보를 확인 하실 수 있습니다.
                </span>
                <a href="#">
                    로그인하기
                </a>
            </div>
        </div>
    `;
  }

  mounted() {
    this.$modal = $('.recentlyViewedMenu__modal', this.$target);

    this.$target.onmouseenter = () => {
      this.isMouseover = true;
      this.$modal.classList.add('on');
    };

    this.$target.onmouseleave = () => {
      this.isMouseover = false;

      setTimeout(() => {
        if (this.isMouseover) return;

        this.$modal.classList.remove('on');
      }, HOVER_DELAY_TIME);
    };
  }
}
