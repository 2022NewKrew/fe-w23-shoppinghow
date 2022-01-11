import { Component } from "@core/Component";
import { $ } from "@utils/query";
import HeaderRolling from "./HeaderRolling";

export default class HeaderTop extends Component {
  setUp() {
    this.$state = {
      title: "쇼핑하우",
      top10: [
        "1. 스노우보드",
        "2. 스테비아토마토",
        "3. led마스크",
        "4. 런닝머신",
        "5. 단백질보충제",
        "6. 앰플",
        "7. 육수팩",
        "8. 유산균",
        "9. 제기세트",
        "10. 스케이트",
        "1. 스노우보드",
        "2. 스테비아토마토",
      ],
    };
    this.$headerRolling = null;
  }
  template() {
    return `
      <div class="title">
        <h1>쇼핑하우</h1>
      </div>
      <div class="search">
        <form>
          <input type="text" class="search__input" />
          <button class="search__icon">🔍</button>
        </form>
        <div class="top10-wrap"  >
          <ol class="search-top10" component="header-rolling"></ol>
        </div>
      </div>
    `;
  }
  setEvent() {
    $("input.search__input", this.$target).addEventListener("focus", this.searchInputFocusHandler.bind(this));
    $("input.search__input", this.$target).addEventListener("blur", this.searchInputBlurHandler.bind(this));
  }
  removeEvent() {
    $("input.search__input", this.$target).removeEventListener("focus", this.searchInputFocusHandler.bind(this));
    $("input.search__input", this.$target).removeEventListener("blur", this.searchInputBlurHandler.bind(this));
  }
  searchInputFocusHandler({ target }) {
    this.$headerRolling.style.display = "none";
    target.closest("form").style.border = "1px solid pink";
  }
  searchInputBlurHandler({ target }) {
    this.$headerRolling.style.display = "";
    target.value = "";
    target.closest("form").style.border = "1px solid #cecfd1";
  }
  mounted() {
    this.$headerRolling = $('[component="header-rolling"]', this.$target);

    new HeaderRolling(this.$headerRolling, {
      top10: this.$state.top10,
      rollingList: $(".search-top10", this.$target),
    });
  }
}
