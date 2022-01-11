import { $ } from "@utils/query.js";
import { checkButtonTag, checkDivTag } from "@utils/check";
import { Component } from "@core/Component";
import CategoryContent from "./CategoryContent";

export default class Category extends Component {
  setUp() {
    this.$state = {
      categoryDisplay: false,
    };
    this.$contentMouseEnterHandler = this.contentMouseEnterHandler.bind(this);
    this.$contentMouseLeaveHandler = this.contentMouseLeaveHandler.bind(this);
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
    $(".category__title", this.$target).addEventListener("mouseenter", this.$contentMouseEnterHandler);
    $(".category__content", this.$target).addEventListener("mouseleave", this.$contentMouseLeaveHandler);
  }
  removeEvent() {
    $(".category__title", this.$target).removeEventListener("mouseenter", this.$contentMouseEnterHandler);
    $(".category__content", this.$target).removeEventListener("mouseleave", this.$contentMouseLeaveHandler);
  }
  contentMouseEnterHandler({ target }) {
    if (checkButtonTag(target)) {
      target.nextElementSibling.style.display = "flex";
    }
  }
  contentMouseLeaveHandler({ target }) {
    if (checkDivTag(target)) {
      setTimeout(() => {
        target.style.display = "none";
      }, 1000);
    }
  }
}
