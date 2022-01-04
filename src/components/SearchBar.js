const TOP_ITEMS_ROLLING_DELAY = 2000;

class SearchBar {
  #topItemIdx;
  #topItemLength;

  constructor() {
    this.#topItemIdx = 0;
  }

  componentDidMount() {
    fetch("http://localhost:3000/topItems.json")
      .then((res) => res.json())
      .then((topItemList) => {
        this.#topItemLength = topItemList.length;
        this.putTopItems(topItemList);
        this.doRolling();
      });
  }

  putTopItems(topItemList) {
    const $searchTopList = document.querySelector(".search-top");
    topItemList.map((item, idx) => {
      const $topListItem = document.createElement("li");
      $topListItem.classList.add("search-top__item");
      $topListItem.innerText = `${idx + 1}. ${item}`;
      $searchTopList.appendChild($topListItem);
    });
  }

  doRolling() {
    const $searchTopList = document.querySelector(".search-top");
    const prevItem =
      $searchTopList.children[
        this.#topItemIdx - 1 < 0
          ? this.#topItemLength - 1
          : this.#topItemIdx - 1
      ];
    const curItem = $searchTopList.children[this.#topItemIdx];
    const nextItem =
      $searchTopList.children[
        this.#topItemIdx + 1 === this.#topItemLength ? 0 : this.#topItemIdx + 1
      ];

    curItem.classList.add("current-top-item");
    nextItem.classList.add("next-top-item");

    setTimeout(() => {
      prevItem.classList.remove("previous-top-item");

      curItem.classList.add("previous-top-item");
      curItem.classList.remove("current-top-item");

      nextItem.classList.remove("next-top-item");
      nextItem.classList.add("current-top-item");
      this.#topItemIdx =
        this.#topItemIdx + 1 === this.#topItemLength ? 0 : this.#topItemIdx + 1;

      this.doRolling();
    }, TOP_ITEMS_ROLLING_DELAY);
  }

  render() {
    // TODO: 마우스 오버시 애니메이션 멈춤
    window.addEventListener(
      "DOMContentLoaded",
      this.componentDidMount.bind(this)
    );

    return `<div class="search">             
                <ul class="search-top">
                </ul>
                <form>
                    <input type="text" class="search__input">
                    <button class="search__icon">🔍</button>
                </form>
            </div>`;
  }
}

export default SearchBar;
