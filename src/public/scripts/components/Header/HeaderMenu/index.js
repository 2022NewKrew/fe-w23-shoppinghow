import { Component } from "@core/Component";
import { $ } from "@utils/query";
import Category from "./Category";
import TopMenu from "./TopMenu";
import PrivateMenu from "./PrivateMenu";

export default class HeaderMenu extends Component {
  setUp() {}
  template() {
    return `
      <div component="category" class="category"></div>
      <ul component="top-menu" class="top-menu"></ul>
      <ul component="private-menu" class="private-menu"></ul>
    `;
  }
  mounted() {
    const $category = $('[component="category"]', this.$target);
    const $topMenu = $('[component="top-menu"]', this.$target);
    const $privateMenu = $('[component="private-menu"]', this.$target);

    new Category($category);
    new TopMenu($topMenu);
    new PrivateMenu($privateMenu);
  }
  setEvent() {}
}
