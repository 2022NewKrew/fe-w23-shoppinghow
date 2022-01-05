import { $ } from "@utils/query.js";
import { Component } from "@core/Component";

export default class Category extends Component {
  setUp() {}
  template() {
    return `
        <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
        <ul class="category-first">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        <ul class="category-second">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        <ul class="category-third">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    `;
  }
  setEvent() {}
}
