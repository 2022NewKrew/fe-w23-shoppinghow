import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderRecent extends Component {
  setUp() {
    this.$state = {
      recentSearchList: [],
    };
    this.$recentContent = null;
    this.$contentRemoveClickHandler = this.contentRemoveClickHandler.bind(this);
  }
  template() {
    const { recentSearchList } = this.$state;
    return `
        <div class="search__recent--title">최근 검색어</div>
        <div class="search__recent--content">
         ${
           recentSearchList.length > 0
             ? recentSearchList
                 .map(
                   (item, idx) => `
                    <div class="search__recent--items">
                      <span>${item}</span>
                      <div class="btn" data-idx="${idx}">X</div>
                    </div>
                  `,
                 )
                 .join("")
             : ""
         }
         
        </div>
      `;
  }
  setEvent() {
    this.$recentContent.addEventListener("click", this.$contentRemoveClickHandler);
  }
  removeEvent() {
    this.$recentContent.removeEventListener("click", this.$contentRemoveClickHandler);
  }
  mounted() {
    this.$recentContent = $(".search__recent--content", this.$target);

    const savedRecentList = JSON.parse(localStorage.getItem("searchList"));
    if (JSON.stringify(this.$state.recentSearchList) !== JSON.stringify(savedRecentList)) {
      this.setState({ recentSearchList: savedRecentList });
    }
  }
  renderHeaderRecent() {
    const recentSearchList = JSON.parse(localStorage.getItem("searchList"));
    if (JSON.stringify(this.$state.recentSearchList) !== JSON.stringify(recentSearchList)) {
      this.setState({ recentSearchList: recentSearchList });
    }
  }
  contentRemoveClickHandler({ target }) {
    if (!target.classList.contains("btn")) return;

    const clickedTargetIdx = target.getAttribute("data-idx");
    const recentSearchList = this.$state.recentSearchList.slice();
    recentSearchList.splice(clickedTargetIdx, 1);
    localStorage.setItem("searchList", JSON.stringify(recentSearchList));
    if (JSON.stringify(this.$state.recentSearchList) !== JSON.stringify(recentSearchList)) {
      this.setState({ recentSearchList: recentSearchList });
    }
  }
}
