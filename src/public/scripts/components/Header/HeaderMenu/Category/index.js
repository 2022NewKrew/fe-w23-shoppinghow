import { $ } from "@utils/query.js";
import { checkButtonTag, checkDivTag } from "@utils/check";
import { Component } from "@core/Component";
import CategoryContent from "./CategoryContent";

export default class Category extends Component {
  setUp() {
    this.$state = {
      categoryDisplay: false,
    };
    this.$titleMouseEnterHandler = this.titleMouseEnterHandler.bind(this);
    this.$contentMouseLeaveHandler = this.contentMouseLeaveHandler.bind(this);
    this.$contentMouseEnterHandler = this.contentMouseEnterHandler.bind(this);
    this.$categoryContentTimeout = null;
  }
  template() {
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
    $(".category__title", this.$target).addEventListener("mouseenter", this.$titleMouseEnterHandler);
    $(".category__content", this.$target).addEventListener("mouseleave", this.$contentMouseLeaveHandler);
    $(".category__content", this.$target).addEventListener("mouseenter", this.$contentMouseEnterHandler);
  }
  removeEvent() {
    $(".category__title", this.$target).removeEventListener("mouseenter", this.$titleMouseEnterHandler);
    $(".category__content", this.$target).removeEventListener("mouseleave", this.$contentMouseLeaveHandler);
    $(".category__content", this.$target).addEventListener("mouseenter", this.$contentMouseEnterHandler);
  }
  titleMouseEnterHandler({ target }) {
    if (checkButtonTag(target)) {
      target.nextElementSibling.style.display = "flex";
    }
  }
  contentMouseLeaveHandler({ target }) {
    if (checkDivTag(target)) {
      this.$categoryContentTimeout = setTimeout(() => {
        target.style.display = "none";
      }, 1000);
    }
  }
  contentMouseEnterHandler({ target }) {
    if (typeof this.$categoryContentTimeout === "number") {
      clearTimeout(this.$categoryContentTimeout);
    }
  }
}
