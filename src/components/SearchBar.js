class SearchBar {
  #topItemList;
  #topItemIdx;
  #topItemLength;

  constructor() {
    this.#topItemList = this.getTopItemList();
    this.#topItemIdx = 0;
    this.#topItemLength = this.#topItemList.length;
  }

  // TODO: 데이터 fetch 사용
  getTopItemList() {
    return [
      "런닝화",
      "생수",
      "노트북",
      "이어폰",
      "앨범",
      "멜론",
      "시험과제",
      "액자",
      "퍼즐",
      "양말",
    ];
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
    }, 2000);
  }

  render() {
    // TODO: 마우스 오버시 애니메이션 멈춤
    window.addEventListener("DOMContentLoaded", this.doRolling.bind(this));

    return `<div class="search">             
                <ul class="search-top">
                    ${this.#topItemList
                      .map(
                        (item, idx) =>
                          '<li class="search-top__item">' +
                          (idx + 1) +
                          ". " +
                          item +
                          "</li>"
                      )
                      .join("\n")}
<!--                   <li class="search-top__item">1. ${
      this.#topItemList[0]
    }</li>-->
                </ul>
                <form>
                    <input type="text" class="search__input">
                    <button class="search__icon">🔍</button>
                </form>
            </div>`;
  }
}

export default SearchBar;
