import { Component } from "@core/Component";
import { $ } from "@utils/query";
import { api } from "@utils/api";
import { AutoCompleteStore } from "@store/AutoCompleteStore";
import HeaderRolling from "./HeaderRolling";
import HeaderRecent from "./HeaderRecent";
import HeaderKeyword from "./HeaderKeyword";
import HeaderAuto from "./HeaderAuto";

export default class HeaderTop extends Component {
  setUp() {
    this.$state = {
      top10: [],
    };
    this.$headerRolling = null;
    this.$headerRecent = null;
    this.$headerKeyword = null;
    this.$headerInfoWrap = null;
    this.$searchFocusHandler = this.searchFocusHandler.bind(this);
    this.$searchMouseLeaveHandler = this.searchMouseLeaveHandler.bind(this);
    this.$searchInputHandler = this.searchInputHandler.bind(this);
    this.$searchSubmitClickHandler = this.searchSubmitClickHandler.bind(this);
    this.$debounce = null;
    this.$searchInput = null;
    this.$searchContainer = null;
    this.$searchSubmitBtn = null;

    this.searchMouseLeaveTimeout = null;
    this.recentSearchList = [];

    this.$HeaderRecentComponent = null;
  }
  template() {
    return `
      <div class="title">
        <h1>쇼핑하우</h1>
      </div>
      <div class="search">
        <form>
          <input type="text" class="search__input" />
          <div class="search__icon">🔍</div>
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
    this.$searchInput.addEventListener("focus", this.$searchFocusHandler);
    this.$searchInput.addEventListener("input", this.$searchInputHandler);
    this.$searchContainer.addEventListener("mouseleave", this.$searchMouseLeaveHandler);
    this.$searchSubmitBtn.addEventListener("click", this.$searchSubmitClickHandler);
  }
  removeEvent() {
    this.$searchInput.removeEventListener("focus", this.$searchFocusHandler);
    this.$searchInput.removeEventListener("input", this.$searchInputHandler);
    this.$searchContainer.removeEventListener("mouseleave", this.$searchMouseLeaveHandler);
    this.$searchSubmitBtn.removeEventListener("click", this.$searchSubmitClickHandler);
  }

  mounted() {
    this.$headerRolling = $('[component="header-rolling"]', this.$target);
    this.$headerKeyword = $('[component="header-keyword"]', this.$target);
    this.$headerRecent = $('[component="header-recent"]', this.$target);
    this.$headerAuto = $('[component="header-auto"]', this.$target);
    this.$searchInput = $("input.search__input", this.$target);
    this.$searchContainer = $(".search", this.$target);
    this.$searchSubmitBtn = $("div.search__icon", this.$target);

    new HeaderRolling(this.$headerRolling, {
      top10: this.$state.top10,
      rollingList: this.$headerRolling,
    });
    new HeaderKeyword(this.$headerKeyword, {
      top10: this.$state.top10,
    });
    this.$HeaderRecentComponent = new HeaderRecent(this.$headerRecent);
    new HeaderAuto(this.$headerAuto);

    this.$headerInfoWrap = $(".search__info--wrap", this.$target);
    const { result } = api.top10();
    if (JSON.stringify(result) !== JSON.stringify(this.$state.top10)) {
      this.setState({ top10: result });
    }
  }
  searchSubmitClickHandler({ target }) {
    if (target.value === "") return;
    const query = this.$searchInput.value;
    const searchList = JSON.parse(localStorage.getItem("searchList")) ?? [];
    localStorage.setItem("searchList", JSON.stringify([...searchList, query]));
    this.$HeaderRecentComponent.setState({ recentSearchList: [...searchList, query] });
    this.$searchInput.value = "";
    this.$searchInput.focus();
    this.$headerInfoWrap.style.display = "flex";
    this.$headerAuto.style.display = "none";
  }
  searchFocusHandler({ target }) {
    this.$headerRolling.style.display = "none";
    this.$headerInfoWrap.style.display = "flex";
    target.closest("form").style.border = "1px solid pink";
  }
  searchMouseLeaveHandler({ target }) {
    if (typeof this.searchMouseLeaveTimeout === "number") {
      clearTimeout(this.searchMouseLeaveTimeout);
    }
    this.searchMouseLeaveTimeout = setTimeout(() => {
      this.$headerRolling.style.display = "";
      this.$headerInfoWrap.style.display = "none";
      this.$headerAuto.style.display = "none";
      this.$searchInput.blur();
      this.$searchInput.value = "";
      $("form", target).style.border = "1px solid #cecfd1";
    }, 500);
  }
  searchInputHandler({ target }) {
    this.$headerInfoWrap.style.display = "none";
    this.$headerAuto.style.display = "block";
    if (typeof this.$debounce === "number") {
      clearTimeout(this.$debounce);
    }
    this.$debounce = setTimeout(async () => {
      console.log("dispatch!!!");
      AutoCompleteStore.dispatch({
        actionKey: "COMPLETE",
        item: { query: target.value },
      });
    }, 300);
  }
}
