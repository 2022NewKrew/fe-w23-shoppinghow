import Component from "../core/Component";

const ROLLING_TIME = 2000;
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
        this.runSlide();
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

    $curItem.classList.add("current-top-item");
    $nextItem.classList.add("next-top-item");

    this.slidePlaying = setTimeout(() => {
      $prevItem.classList.remove("previous-top-item");

      $curItem.classList.add("previous-top-item");
      $curItem.classList.remove("current-top-item");

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
