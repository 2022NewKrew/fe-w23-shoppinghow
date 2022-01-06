import Component from "../core/Component";

const ROLLING_TIME = 3000;
const HEIGHT = 60;
// const TRANSITION_DURATION = "500ms";
const FOCUS_OUT_TIME = 500;

export default class Top10Input extends Component {
  slidePlaying;
  timeId;

  setup() {
    this.timeId = 0;
    this.slidePlaying = null;
  }

  template() {
    // const { top10List } = this.props;
    const top10List = require("../data/searchTop10.json").top10;
    return `
        <div class="search">
          <form>
            <input type="text" class="search__input" />
            <button class="search__icon">🔍</button>
          </form>
          <div class="search__box">
            <ul class="search-top10" id="top10Container">
              ${top10List
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

  mounted() {
    this.initSlide();
    this.runSlide();
  }

  setEvent() {
    const searchInput = ".search__input";
    const top10Container = this.$target.querySelector("#top10Container");
    // const input = document.querySelector(".search__input");
    let timeId;

    this.addEvent("mouseover", searchInput, this.pauseSlide.bind(this));

    this.addEvent("mouseout", searchInput, this.resumeSlide.bind(this));

    this.addEvent(
      "focus",
      searchInput,
      (e) => {
        e.target.style.backgroundColor = "white";
        this.pauseSlide();
      },
      true
    );

    this.addEvent(
      "blur",
      searchInput,
      (e) => {
        e.target.style.backgroundColor = "transparent";
        this.runSlide(top10Container);
      },
      true
    );
  }

  initSlide() {
    const $top10Container = this.$target.querySelector("#top10Container");

    $top10Container.children[0].classList.add("current-top-item");
    $top10Container.children[1].classList.add("next-top-item");
    $top10Container.lastElementChild.classList.add("previous-top-item");
  }

  runSlide() {
    const $top10Container = this.$target.querySelector("#top10Container");

    const $prevItem = $top10Container.querySelector(".previous-top-item");
    const $curItem = $top10Container.querySelector(".current-top-item");
    const $nextItem = $top10Container.querySelector(".next-top-item");
    // console.log($prevItem, $curItem, $nextItem);

    this.slidePlaying = setTimeout(() => {
      $prevItem.classList.remove("previous-top-item");

      $curItem.classList.remove("current-top-item");
      $curItem.classList.add("previous-top-item");

      $nextItem.classList.remove("next-top-item");
      $nextItem.classList.add("current-top-item");

      if ($nextItem.nextElementSibling) {
        $nextItem.nextElementSibling.classList.add("next-top-item");
      } else {
        $top10Container.firstElementChild.classList.add("next-top-item");
      }

      this.runSlide();
    }, ROLLING_TIME);
  }

  pauseSlide() {
    clearTimeout(this.slidePlaying);
    this.slidePlaying = null;
  }

  resumeSlide() {
    if (!this.slidePlaying) {
      this.runSlide();
    }
  }
}

// const ROLLING_TIME = 3000;
// const HEIGHT = 60;
// const TRANSITION_DURATION = "500ms";
// const FOCUS_OUT_TIME = 500;

// class Top10Input2 {
//   #top10Idx;
//   #top10List;
//   #slidePlaying;

//   constructor() {
//     this.#top10Idx = 0;
//     this.#top10List = this.#fetchTop10List();
//   }

//   #fetchTop10List() {
//     const top10 = require("../data/searchTop10.json").top10;
//     return top10;
//   }

//   findIndex(top10List) {
//     top10List.forEach((e, idx) => {
//       if (e.classList.contains("current-top-item")) {
//         this.#top10Idx = idx;
//       }
//     });
//   }

//   findActiveSlide(top10Container) {
//     // current active-slide 찾기
//     const top10List = Array.from(top10Container.children);
//     const top10ListLength = top10List.length;
//     this.findIndex(top10List);

//     const prevItem =
//       top10Container.children[
//         this.#top10Idx - 1 < 0 ? top10ListLength - 1 : this.#top10Idx - 1
//       ];
//     const curItem = top10Container.children[this.#top10Idx];
//     const nextItem =
//       top10Container.children[
//         this.#top10Idx + 1 === top10ListLength ? 0 : this.#top10Idx + 1
//       ];
//     const nextNextItem =
//       top10Container.children[
//         this.#top10Idx + 2 >= top10ListLength
//           ? this.#top10Idx - top10ListLength + 2
//           : this.#top10Idx + 2
//       ];

//     return [prevItem, curItem, nextItem, nextNextItem];
//   }

//   initSlide() {
//     top10Container.style.transitionDuration = TRANSITION_DURATION;

//     const [prevItem, curItem, nextItem] = this.findActiveSlide(top10Container);

//     curItem.classList.add("current-top-item");
//     nextItem.classList.add("next-top-item");
//   }

//   runSlide(top10Container) {
//     const run = () => {
//       top10Container.style.transitionDuration = TRANSITION_DURATION;

//       // previous, current, next active-slide 찾기
//       const [prevItem, curItem, nextItem, nextNextItem] =
//         this.findActiveSlide(top10Container);

//       prevItem.classList.remove("previous-top-item");

//       curItem.classList.remove("current-top-item");
//       curItem.classList.add("previous-top-item");

//       nextItem.classList.remove("next-top-item");
//       nextItem.classList.add("current-top-item");

//       nextNextItem.classList.add("next-top-item");
//     };

//     this.#slidePlaying = setInterval(run, ROLLING_TIME);
//   }

//   pauseSlide() {
//     clearInterval(this.#slidePlaying);
//   }

//   addSlideEventListener(input) {
//     let timeId;

//     input.addEventListener("mouseover", (e) => {
//       clearTimeout(timeId);
//     });

//     input.addEventListener("mouseout", (e) => {
//       timeId = setTimeout(() => {
//         input.blur();
//       }, FOCUS_OUT_TIME);
//     });

//     input.addEventListener("focus", (e) => {
//       input.style.backgroundColor = "white";
//       this.pauseSlide();
//     });

//     input.addEventListener("blur", (e) => {
//       input.style.backgroundColor = "transparent";
//       this.runSlide(top10Container);
//     });
//   }

//   render() {
//     window.addEventListener("DOMContentLoaded", () => {
//       const top10Container = document.querySelector("#top10Container");
//       const input = document.querySelector(".search__input");
//       this.initSlide(top10Container);
//       this.runSlide(top10Container);
//       this.addSlideEventListener(input);
//     });

//     return `
//         <div class="search">
//             <form>
//               <input type="text" class="search__input" />
//               <button class="search__icon">🔍</button>
//             </form>
//             <div class="search__box">
//                 <ul class="search-top10" id="top10Container">
//                 ${this.#top10List
//                   .map(
//                     ({ rank, title }) => `
//                     <li class="search-top10__item">${rank}. ${title}</li>
//                     `
//                   )
//                   .join("")}
//                 </ul>
//             </div>
//         </div>
//       `;
//   }
// }
