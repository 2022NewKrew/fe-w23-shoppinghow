const ROLLING_TIME = 1000;
const HEIGHT = 60;
const TRANSITION_DURATION = "500ms";
const FOCUS_OUT_TIME = 500;

export default class top10Input {
  #top10Idx;
  #top10List;
  #top10ListLength;
  #slidePlaying;

  constructor() {
    this.#top10Idx = 0;
    this.#top10List = this.#fetchTop10List();
    this.#top10ListLength = this.#top10List.length;
  }

  insertFirstAndLast() {
    const top10Container = document.querySelector("#top10Container");
    const firstChild1 = top10Container.children.item(0).cloneNode(true);
    const lastChild1 = top10Container.children.item(9).cloneNode(true);
    // top10Container.insertBefore(lastChild1, top10Container.firstChild);
    top10Container.appendChild(firstChild1);
  }

  #fetchTop10List() {
    const top10 = require("../data/searchTop10.json").top10;
    return top10;
  }

  runSlide() {
    const run = () => {
      const top10Container = document.querySelector("#top10Container");

      top10Container.style.transitionDuration = TRANSITION_DURATION;

      // 현재 슬라이드에 active class 추가
      // const top10Lists = top10Container.children;
      // top10Lists.item(this.#top10Idx).classList.add("active-slide");
      // this.#top10Idx - 1 >= 0
      //   ? top10Lists.item(this.#top10Idx - 1).classList.remove("active-slide")
      //   : top10Lists
      //       .item(this.#top10ListLength - 1)
      //       .classList.remove("active-slide");

      // 현재 슬라이드 위치에 따라 높이 조절
      this.#top10Idx <= this.#top10ListLength - 1
        ? (top10Container.style.transform = `translateY(-${
            HEIGHT * this.#top10Idx
          }px)`)
        : (top10Container.style.transform = `translateY(0px)`);

      this.#top10Idx =
        this.$top10Idx + 1 === this.#top10ListLength ? 0 : this.#top10Idx + 1;

      // 슬라이드 위치가 마지막이라면 다시 처음으로 이동
      if (this.#top10Idx <= this.#top10ListLength) {
        top10Container.style.transform = `translateY(-${
          HEIGHT * this.#top10Idx
        }px)`;
      } else {
        this.#top10Idx = 0;
        top10Container.style.transition = "transform 0s";
        top10Container.style.transform = `translateY(0px)`;
      }
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
    input.addEventListener("focusin", (e) => {
      top10Container.style.visibility = "hidden";
      input.parentNode.style.border = "1px solid red";
      this.pauseSlide();
    });
    input.addEventListener("focusout", (e) => {
      top10Container.style.visibility = "visible";
      input.parentNode.style.border = "none";
      this.runSlide();
    });
    input.addEventListener("mouseenter", (e) => {
      clearTimeout(timeId);
    });
    input.addEventListener("mouseleave", (e) => {
      timeId = setTimeout(() => {
        input.blur();
      }, FOCUS_OUT_TIME);
    });
  }

  render() {
    window.addEventListener("DOMContentLoaded", () => {
      this.insertFirstAndLast();
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
