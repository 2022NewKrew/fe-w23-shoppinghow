import { $ } from "@utils/query.js";
import { Component } from "@core/Component";

export default class PrivateMenu extends Component {
  setUp() {}
  template() {
    return `
        <li class="private-menu__btn"><a href="#">로그인</a></li>
        <li class="private-menu__btn">
        <a href="#">최근본상품</a>
        </li>
    `;
  }
  setEvent() {}
}
