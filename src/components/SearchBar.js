import Component from "@core/Component";

const TOP_ITEMS_ROLLING_DELAY = 2000;

class SearchBar extends Component {
  rollingTimeoutId;

  setup() {
    this.rollingTimeoutId = null;
  }

  template() {
    const { topItemList } = this.props;
    return `
        <div class="search">             
            <ul class="search-top">
            ${topItemList
              .map(
                (item, idx) =>
                  '<li class="search-top__item">' +
                  (idx + 1) +
                  ". " +
                  item +
                  "</li>"
              )
              .join("\n")}
            </ul>
            <form class="search__form">
                <input type="text" class="search__input">
                <button class="search__icon">🔍</button>
            </form>
        </div>
    `;
  }

  mounted() {
    this.initRolling();
    this.doRolling();
  }

  setEvent() {
    const searchSelector = ".search";
    const searchInputSelector = ".search__input";

    this.addEvent("mouseover", searchSelector, this.pauseRolling.bind(this));
    this.addEvent("mouseout", searchSelector, this.resumeRolling.bind(this));
    this.addEvent(
      "focus",
      searchInputSelector,
      (e) => {
        e.target.style.backgroundColor = "white";
        this.pauseRolling();
      },
      { capture: true }
    );

    this.addEvent(
      "blur",
      searchInputSelector,
      (e) => {
        e.target.style.backgroundColor = "transparent";
        this.resumeRolling();
      },
      { capture: true }
    );
  }

  initRolling() {
    const $searchTopItemList = this.$target.querySelector(".search-top");
    $searchTopItemList.children[0].classList.add("current-top-item");
    $searchTopItemList.children[1].classList.add("next-top-item");
    $searchTopItemList.lastElementChild.classList.add("previous-top-item");
  }

  doRolling() {
    const $searchTopItemList = this.$target.querySelector(".search-top");
    const $prevItem = $searchTopItemList.querySelector(".previous-top-item");
    const $curItem = $searchTopItemList.querySelector(".current-top-item");
    const $nextItem = $searchTopItemList.querySelector(".next-top-item");

    $curItem.classList.add("current-top-item");
    $nextItem.classList.add("next-top-item");

    this.rollingTimeoutId = setTimeout(() => {
      $prevItem.classList.remove("previous-top-item");

      $curItem.classList.add("previous-top-item");
      $curItem.classList.remove("current-top-item");

      $nextItem.classList.remove("next-top-item");
      $nextItem.classList.add("current-top-item");

      if ($nextItem.nextElementSibling) {
        $nextItem.nextElementSibling.classList.add("next-top-item");
      } else {
        $searchTopItemList.firstElementChild.classList.add("next-top-item");
      }

      this.doRolling();
    }, TOP_ITEMS_ROLLING_DELAY);
  }

  pauseRolling() {
    clearTimeout(this.rollingTimeoutId);
    this.rollingTimeoutId = null;
  }

  resumeRolling() {
    if (!this.rollingTimeoutId) {
      this.doRolling();
    }
  }
}

export default SearchBar;
