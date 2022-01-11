import { Component } from "@core/Component";
import { $ } from "@utils/query";
import HeaderRolling from "./HeaderRolling";
import HeaderRecent from "./HeaderRecent";
import HeaderKeyword from "./HeaderKeyword";
import HeaderAuto from "./HeaderAuto";

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
    this.$headerRecent = null;
    this.$headerKeyword = null;
    this.$headerInfoWrap = null;
    this.$searchFocusHandler = this.searchFocusHandler.bind(this);
    this.$searchBlurHandler = this.searchBlurHandler.bind(this);
    this.$searchInputHandler = this.searchInputHandler.bind(this);
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
          <div class="search__info--wrap">
            <div component="header-recent" class="search__recent"></div>
            <div component="header-keyword" class="search__keyword"></div>
          </div>
          <div component="header-auto" class="search__auto"></div>
        </form>
        <div class="top10-wrap"  >
          <ol class="search-top10" component="header-rolling"></ol>
        </div>
      </div>
    `;
  }
  setEvent() {
    $("input.search__input", this.$target).addEventListener("focus", this.$searchFocusHandler);
    $("input.search__input", this.$target).addEventListener("blur", this.$searchBlurHandler);
    $("input.search__input", this.$target).addEventListener("input", this.$searchInputHandler);
  }
  removeEvent() {
    $("input.search__input", this.$target).removeEventListener("focus", this.$searchFocusHandler);
    $("input.search__input", this.$target).removeEventListener("blur", this.$searchBlurHandler);
    $("input.search__input", this.$target).removeEventListener("input", this.$searchInputHandler);
  }
  searchFocusHandler({ target }) {
    this.$headerRolling.style.display = "none";
    this.$headerInfoWrap.style.display = "flex";
    target.closest("form").style.border = "1px solid pink";
  }
  searchBlurHandler({ target }) {
    this.$headerRolling.style.display = "";
    this.$headerInfoWrap.style.display = "none";
    this.$headerAuto.style.display = "none";
    target.value = "";
    target.closest("form").style.border = "1px solid #cecfd1";
  }
  searchInputHandler({ target }) {
    console.log(target.value);
    this.$headerInfoWrap.style.display = "none";
    this.$headerAuto.style.display = "block";
  }
  mounted() {
    this.$headerRolling = $('[component="header-rolling"]', this.$target);
    this.$headerKeyword = $('[component="header-keyword"]', this.$target);
    this.$headerRecent = $('[component="header-recent"]', this.$target);
    this.$headerAuto = $('[component="header-auto"]', this.$target);

    new HeaderRolling(this.$headerRolling, {
      top10: this.$state.top10,
      rollingList: $(".search-top10", this.$target),
    });
    new HeaderKeyword(this.$headerKeyword);
    new HeaderRecent(this.$headerRecent);
    new HeaderAuto(this.$headerAuto);

    this.$headerInfoWrap = $(".search__info--wrap", this.$target);
  }
}
