import { Component } from "../../core/Component";

export default class HeaderRolling extends Component {
  setUp() {}
  template() {
    const { top10 } = this.$props;
    debugger;
    return `
        ${top10
          .map(
            item => `
            <li class="search-top10__item">${item}</li>
        `,
          )
          .join("")}
        `;
  }
}
