import { Component } from '@core';

export class RecentlyViewedMenu extends Component {
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
        <a href="#">최근본상품</a>
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
}
