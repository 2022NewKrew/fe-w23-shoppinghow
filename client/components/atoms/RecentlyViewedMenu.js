import { Component } from '@core';
import { RecentlyViewedStore } from '@stores';
import { $ } from '@utils';

const HOVER_DELAY_TIME = 400;

export class RecentlyViewedMenu extends Component {
  setup() {
    this.isMouseover = false;
  }

  template() {
    return /*html*/ `
        <a class="recentlyViewedMenu__item" href="#">최근본상품</a>
        <div class="recentlyViewedMenu__modal">
            <h5 class ="recentlyViewedMenu__title">최근본 상품 0</h5>
            <ul class="recentlyViewedMenu__productList"></ul>
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

  rendered() {
    this.$modal = $('.recentlyViewedMenu__modal', this.$target);

    this.$title = $('.recentlyViewedMenu__title', this.$modal);
    this.$productList = $('.recentlyViewedMenu__productList', this.$modal);
    this.renderModalContent();

    this.$target.onmouseenter = this.onhover.bind(this);
    this.$target.onmouseleave = this.onleave.bind(this);
  }

  mounted() {
    RecentlyViewedStore.subscribe(this.renderModalContent.bind(this));
  }

  // util

  renderModalContent() {
    const { recentlyViewedList } = RecentlyViewedStore.getState();

    this.$title.innerText = `최근본 상품 ${recentlyViewedList.length}`;

    const recentlyViewdItemTemplate = ({ title, img, url }) => /* html */ `
        <li>
            <a href="${url}" target="_blank">
                <img src="${img}" alt="${title}">
            </a>
        </li>
    `;
    this.$productList.innerHTML = recentlyViewedList.map(recentlyViewdItemTemplate).join('');
  }

  onhover() {
    this.isMouseover = true;
    this.$modal.classList.add('on');
  }

  onleave() {
    this.isMouseover = false;

    setTimeout(() => {
      if (this.isMouseover) return;

      this.$modal.classList.remove('on');
    }, HOVER_DELAY_TIME);
  }
}
