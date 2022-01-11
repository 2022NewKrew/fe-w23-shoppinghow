import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import CategoryContent from "./CategoryContent";

export default class Category extends Component {
  setUp() {
    this.$state = {
      categoryDisplay: false,
    };
  }
  template() {
    const { categoryDisplay } = this.$state.categoryDisplay;
    return `
        <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
        <div component="category-content" class="category__content"></div>
    `;
  }
  mounted() {
    const $categoryContent = $('[component="category-content"]', this.$target);

    new CategoryContent($categoryContent, { categoryDisplay: this.$state.categoryDisplay });
  }
  setEvent() {
    $(".category__title", this.$target).addEventListener("mouseenter", ({ target }) => {
      if (this.checkButtonTag(target)) {
        target.nextElementSibling.style.display = "flex";
      }
    });
    $(".category__content", this.$target).addEventListener("mouseleave", ({ target }) => {
      if (this.checkDivTag(target)) {
        setTimeout(() => {
          target.style.display = "none";
        }, 1000);
      }
    });
  }
  checkButtonTag(target) {
    return target.tagName === "BUTTON";
  }
  checkDivTag(target) {
    return target.tagName === "DIV";
  }
}
