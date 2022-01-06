const ROLLING_TIME = 1000;
const HEIGHT = 60;
const TRANSITION_DURATION = "500ms";
const FOCUS_OUT_TIME = 500;

export default class Top10Input {
  #top10Idx;
  #top10List;
  #top10ListLength;
  #slidePlaying;

  constructor() {
    this.#top10Idx = 0;
    this.#top10List = this.#fetchTop10List();
    this.#top10ListLength = this.#top10List.length;
  }

  #fetchTop10List() {
    const top10 = require("../data/searchTop10.json").top10;
    return top10;
  }

  findActiveSlide(top10Container) {
    // current active-slide 찾기
    const top10List = Array.from(top10Container.children);
    top10List.forEach((e, idx) => {
      if (e.classList.contains("current-top-item")) {
        this.#top10Idx = idx;
      }
    });

    const prevItem =
      top10Container.children[
        this.#top10Idx - 1 < 0 ? this.#top10ListLength - 1 : this.#top10Idx - 1
      ];
    const curItem = top10Container.children[this.#top10Idx];
    const nextItem =
      top10Container.children[
        this.#top10Idx + 1 === this.#top10ListLength ? 0 : this.#top10Idx + 1
      ];
    const nextNextItem =
      top10Container.children[
        this.#top10Idx + 2 >= this.#top10ListLength
          ? this.#top10Idx - this.#top10ListLength + 3
          : this.#top10Idx + 2
      ];

    return [prevItem, curItem, nextItem, nextNextItem];
  }

  initSlide() {
    const top10Container = document.querySelector("#top10Container");

    top10Container.style.transitionDuration = TRANSITION_DURATION;

    const [prevItem, curItem, nextItem] = this.findActiveSlide(top10Container);

    curItem.classList.add("current-top-item");
    nextItem.classList.add("next-top-item");
  }

  runSlide() {
    const run = () => {
      const top10Container = document.querySelector("#top10Container");

      top10Container.style.transitionDuration = TRANSITION_DURATION;

      // previous, current, next active-slide 찾기
      const [prevItem, curItem, nextItem, nextNextItem] =
        this.findActiveSlide(top10Container);

      prevItem.classList.remove("previous-top-item");

      curItem.classList.remove("current-top-item");
      curItem.classList.add("previous-top-item");

      nextItem.classList.remove("next-top-item");
      nextItem.classList.add("current-top-item");

      nextNextItem.classList.add("next-top-item");
    };

    this.#slidePlaying = setInterval(run, ROLLING_TIME);
  }

  pauseSlide() {
    clearInterval(this.#slidePlaying);
  }

  addSlideEventListner() {
    let timeId;
    const top10Container = document.querySelector("#top10Container");
    const input = document.querySelector(".search__input");

    input.onfocus = () => {
      input.style.backgroundColor = "white";
      this.pauseSlide();
    };

    input.onblur = () => {
      input.style.backgroundColor = "transparent";
      this.runSlide();
    };

    input.addEventListener("mouseover", (e) => {
      clearTimeout(timeId);
    });

    input.addEventListener("mouseout", (e) => {
      timeId = setTimeout(() => {
        input.blur();
      }, FOCUS_OUT_TIME);
    });
  }

  render() {
    window.addEventListener("DOMContentLoaded", () => {
      this.initSlide();
      this.runSlide();
      this.addSlideEventListner();
    });

    return `
        <div class="search">
            <form>
              <input type="text" class="search__input" />
              <button class="search__icon">🔍</button>
            </form>
            <div class="search__box">
                <ul class="search-top10" id="top10Container">
                ${this.#top10List
                  .map(
                    ({ rank, title }) => `
                    <li class="search-top10__item">${rank}. ${title}</li>
                    `
                  )
                  .join("")}
                </ul>
            </div>
        </div>
      `;
  }
}
