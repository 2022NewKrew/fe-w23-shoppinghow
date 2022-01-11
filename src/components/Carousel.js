import Component from "../core/Component";
import { throttle } from "../utils/common";

const data = require("../data/plannings.json");

export default class Carousel extends Component {
  slideList;
  element;
  setup() {
    this.createTemplate();
  }

  createTemplate() {
    this.element = document.createElement("div");
    this.slideList = data.plannings;
    this.element.insertAdjacentHTML(
      "beforeend",
      `
      <div class="planning">
        <button class="planning__left-btn planning__btn"><</button>
        <div class="planning__lists__container">
            <ul class="planning__lists">
                ${this.slideList
                  .map(
                    ({ title, img, index }) => `
                    <li href="#" target="_blank" data-index=${index} class="${
                      index === 0
                        ? "planning__link cur-item"
                        : index === 1
                        ? "planning__link next-item"
                        : index === this.slideList.length - 1
                        ? "planning__link prev-item"
                        : "planning__link"
                    }" >
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
          ${this.slideList
            .map(
              ({ index }) => `
                <span data-index=${index} class="${
                index === 0 ? "planning__page cur-page" : "planning__page"
              }"
                >
                </span>`
            )
            .join("")}
        </div>
      </div>
      `
    );
  }

  template() {
    return this.element.innerHTML;
  }

  setEvent() {
    const $page = this.element.querySelector(".planning__pages").children;
    const $list = this.element.querySelector(".planning__lists").children;

    this.addEvent(
      "mouseover",
      ".planning__page",
      (e) => {
        this.addActiveClass(Number(e.target.dataset.index), "none");
      },
      true
    );

    // 버튼 이벤트 추가
    const prevBtn = ".planning__left-btn";
    const nextBtn = ".planning__right-btn";

    const slideList = require("../data/plannings.json").plannings;

    let idx = Number(this.element.querySelector(".cur-page").dataset.index);

    this.addEvent(
      "click",
      prevBtn,
      throttle(() => {
        idx -= 1;
        idx = idx < 0 ? slideList.length - 1 : idx;
        this.addTransition();
        this.addActiveClass(idx, "prev");
      }, 300)
    );

    this.addEvent(
      "click",
      nextBtn,
      throttle(() => {
        idx += 1;
        idx = idx === slideList.length ? 0 : idx;
        this.addTransition();
        this.addActiveClass(idx, "next");
      }, 300)
    );
  }

  cleanActiveClass() {
    this.$target.querySelector(".cur-item").classList.remove("cur-item");

    this.$target.querySelector(".prev-item").classList.remove("prev-item");

    this.$target.querySelector(".next-item").classList.remove("next-item");
  }

  addActiveClass(idx, direction) {
    const $page = this.$target.querySelector(".planning__pages").children;
    const $list = this.$target.querySelector(".planning__lists").children;

    this.cleanActiveClass();

    // slide에 active class 추가 및 제거
    const slideList = require("../data/plannings.json").plannings;

    const prevItem = $list[idx - 1 < 0 ? slideList.length - 1 : idx - 1];
    const nextItem = $list[idx + 1 === slideList.length ? 0 : idx + 1];
    const curItem = $list[idx];

    prevItem.classList.add("prev-item");
    nextItem.classList.add("next-item");
    curItem.classList.add("cur-item");

    // 하단 페이지 바 active class 추가 및 제거

    this.$target.querySelector(".cur-page").classList.remove("cur-page");

    const curPage = $page[idx];
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
      const $items = this.$target.getElementsByClassName("planning__link");
      Array.from($items).forEach((e) => {
        e.style.transition = "none";
      });
    }
  }

  addTransition() {
    const items = this.$target.getElementsByClassName("planning__link");
    Array.from(items).forEach((e) => {
      e.style.transition = "transform 0.5s";
    });
  }
}
