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

  render() {
    // TODO: 마우스 오버시 애니메이션 멈춤
    window.addEventListener("DOMContentLoaded", () => {
      const $searchTopList = document.querySelector(".search-top");
      setInterval(() => {
        if (this.#topItemIdx === 0) {
          $searchTopList.style.transition = "transform 1s";
        }
        $searchTopList.style.transform = `translateY(-${
          (this.#topItemIdx + 1) * 60
        }px)`;
        this.#topItemIdx++;
        if (this.#topItemIdx === this.#topItemLength + 1) {
          $searchTopList.style.transition = "none";
          $searchTopList.style.transform = `translateY(0px)`;
          this.#topItemIdx = 0;
        }
      }, 1000);
    });

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
                    
                      <li class="search-top__item">1. ${
                        this.#topItemList[0]
                      }</li>
                </ul>
                <form>
                    <input type="text" class="search__input">
                    <button class="search__icon">🔍</button>
                </form>
            </div>`;
  }
}

export default SearchBar;
