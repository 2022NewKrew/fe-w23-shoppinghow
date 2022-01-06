export default class Carousel {
  #slideList;
  #slideLength;

  constructor() {
    this.#slideList = this.#fetchPlannings();
    this.#slideLength = this.#slideList.length;
  }

  #fetchPlannings() {
    const file = require("../data/plannings.json").plannings;
    return file;
  }

  initCarousel() {
    const list = document.querySelector(".planning__lists").children;
    const prevItem = list[this.#slideLength - 1];
    const curItem = list[0];
    const nextItem = list[1];
    prevItem.classList.add("prev-item");
    curItem.classList.add("cur-item");
    nextItem.classList.add("next-item");

    const page = document.querySelector(".planning__pages").children;
    page[0].classList.add("cur-page");
  }

  addHoverEventListener() {
    const page = document.querySelector(".planning__pages").children;
    Array.from(page).forEach((e, idx) => {
      e.addEventListener("mouseover", () => {
        this.addActiveClass(idx, "none");
      });
    });
  }

  addActiveClass(idx, direction) {
    const list = document.querySelector(".planning__lists").children;

    // slide에 active class 추가 및 제거
    const prevItem = list[idx - 1 < 0 ? this.#slideLength - 1 : idx - 1];
    const nextItem = list[idx + 1 === this.#slideLength ? 0 : idx + 1];
    const curItem = list[idx];

    for (let i of [prevItem, nextItem, curItem]) {
      i.classList.remove("cur-item");
      i.classList.remove("prev-item");
      i.classList.remove("next-item");
    }
    prevItem.classList.add("prev-item");
    nextItem.classList.add("next-item");
    curItem.classList.add("cur-item");

    // 하단 페이지 바 active class 추가 및 제거
    const page = document.querySelector(".planning__pages").children;
    const curPage = page[idx];

    Array.from(page).forEach((e) => {
      e.classList.remove("cur-page");
    });

    curPage.classList.add("cur-page");

    // smooth transition을 위해 방향에 따라 z-index 추가
    if (direction === "next") {
      prevItem.style.zIndex = "1";
      curItem.style.zIndex = "1";
      nextItem.style.zIndex = "0";
    } else if (direction === "prev") {
      prevItem.style.zIndex = "0";
      curItem.style.zIndex = "1";
      nextItem.style.zIndex = "1";
    } else {
      const items = document.getElementsByClassName("planning__link");
      Array.from(items).forEach((e) => {
        e.style.transition = "none";
      });
    }
  }

  throttle(callback, delay) {
    let timerId;
    return (event) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(callback, delay, event);
    };
  }

  addButtonEventListener() {
    const prevBtn = document.querySelector(".planning__left-btn");
    const nextBtn = document.querySelector(".planning__right-btn");

    let idx = this.findCurrentIndex();
    prevBtn.addEventListener(
      "click",
      this.throttle(() => {
        idx -= 1;
        idx = idx < 0 ? this.#slideLength - 1 : idx;
        this.addTransition();
        this.addActiveClass(idx, "prev");
      }, 300)
    );
    nextBtn.addEventListener(
      "click",
      this.throttle(() => {
        idx += 1;
        idx = idx === this.#slideLength ? 0 : idx;
        this.addTransition();
        this.addActiveClass(idx, "next");
      }, 300)
    );
  }

  addTransition() {
    const items = document.getElementsByClassName("planning__link");
    Array.from(items).forEach((e) => {
      e.style.transition = "transform 0.5s";
    });
  }

  findCurrentIndex() {
    const page = document.querySelector(".planning__pages").children;
    const idx = 0;
    Array.from(page).forEach((e, idx) => {
      if (e.classList.contains("cur-page")) {
        idx = idx;
      }
    });
    return idx;
  }

  render() {
    window.addEventListener("DOMContentLoaded", () => {
      this.initCarousel();
      this.addHoverEventListener();
      this.addButtonEventListener();
    });
    return `
          <div class="planning">
            <button class="planning__left-btn planning__btn"><</button>
            <div class="planning__lists__container">
                <ul class="planning__lists">
                    ${this.#slideList
                      .map(
                        ({ title, img, index }) => `
                        <li href="#" target="_blank" class="planning__link" data-index=${index}>
                            <img
                                src=${img}
                                width="485"
                                height="340"
                                class="img_g"
                                alt=${title}
                            />
                        </li>
                    `
                      )
                      .join("")}

                </ul>
            </div>
            <button class="planning__right-btn planning__btn" >></button>
            <div class="planning__pages">
            ${this.#slideList
              .map(
                (i, idx) =>
                  `<span class="planning__page" data-index=${idx}></span>`
              )
              .join("")}
            </div>
        </div>
      
      `;
  }
}
