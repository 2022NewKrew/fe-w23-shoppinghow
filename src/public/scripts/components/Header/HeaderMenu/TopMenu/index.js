import { $ } from "@utils/query.js";
import { Component } from "@core/Component";

export default class TopMenu extends Component {
  setUp() {
    this.$state = {
      topMenuList: ["핫딜", "베스트100", "할인특가", "기획전"],
    };
  }
  template() {
    const { topMenuList } = this.$state;
    return `
        ${topMenuList
          .map(
            item => `
            <li class="top-menu__btn"><a href="#">${item}</a></li>
        `,
          )
          .join("")}
    `;
  }
  setEvent() {}
}
