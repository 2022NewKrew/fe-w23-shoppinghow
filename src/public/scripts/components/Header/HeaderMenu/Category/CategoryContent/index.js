import { $ } from "@utils/query";
import { api } from "@utils/api";
import { Component } from "@core/Component";
export default class CategoryContent extends Component {
  setUp() {
    this.$state = {
      categoryTabList: [],
    };
    this.curTop = null;
    this.curMiddle = null;
  }
  template() {
    const { categoryTabList } = this.$state;
    return `
            <ul class="category__content--tab-list">
                ${
                  Object.keys(categoryTabList).length > 0 &&
                  Object.keys(categoryTabList)
                    .map(item => {
                      return `
                        <li class="top">
                            ${item}
                        </li>
                    `;
                    })
                    .join("")
                }
            </ul>
            <ul class="category__content--middle-tab"></ul>
            <ul class="category__content--low-tab"></ul>
        `;
  }
  setEvent() {
    $(".category__content--tab-list", this.$target).addEventListener("mouseover", this.tabMouseOverHandler.bind(this));
    $(".category__content--middle-tab", this.$target).addEventListener("mouseover", this.middleMouseOverHandler.bind(this));
  }
  removeEvent() {
    $(".category__content--tab-list", this.$target).removeEventListener("mouseover", this.tabMouseOverHandler.bind(this));
    $(".category__content--middle-tab", this.$target).removeEventListener("mouseover", this.middleMouseOverHandler.bind(this));
  }

  tabMouseOverHandler({ target }) {
    const { categoryTabList } = this.$state;
    if (target.tagName === "LI") {
      this.curTop = target.innerText;
      this.curMiddle = Object.keys(categoryTabList[this.curTop])[0];
      this.setMiddleCategory.call(this); // default는 첫번째 top 이 선택된 걸로
      this.setLowCategory.call(this);
    }
  }
  middleMouseOverHandler({ target }) {
    const { categoryTabList } = this.$state;
    if (target.tagName === "LI") {
      this.curMiddle = target.innerText;
      this.setLowCategory.call(this);
    }
  }
  mounted() {
    const { categoryTabList } = this.$state;
    this.getCategory(categoryTabList);
    if (Object.keys(categoryTabList).length > 0) {
      this.curTop = Object.keys(categoryTabList)[0];
      this.curMiddle = Object.keys(categoryTabList[this.curTop])[0];
      this.setMiddleCategory.call(this); // default는 첫번째 top 이 선택된 걸로
      this.setLowCategory.call(this);
    }
  }
  setMiddleCategory() {
    const { categoryTabList } = this.$state;
    const selectedMiddleList = Object.keys(categoryTabList[this.curTop]);
    const middleTemplate = selectedMiddleList
      .map(item => {
        return `
          <li class="middle">
              ${item}
          </li>
      `;
      })
      .join("");
    $(".category__content--middle-tab", this.$target).innerHTML = middleTemplate;
  }
  setLowCategory() {
    const { categoryTabList } = this.$state;
    const selectedLowList = categoryTabList[this.curTop][this.curMiddle];
    const lowTemplate = selectedLowList
      .map(item => {
        return `
          <li class="low">
              ${item}
          </li>
      `;
      })
      .join("");
    $(".category__content--low-tab", this.$target).innerHTML = lowTemplate;
  }
  async getCategory(watch) {
    const { result } = await api.get("category");
    if (JSON.stringify(watch) !== JSON.stringify(result)) {
      this.setState({ categoryTabList: result });
    }
  }
}
