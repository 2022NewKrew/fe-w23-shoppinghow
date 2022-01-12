import Component from "../core/Component";
import data from "../data/searchTop10.json";

const ROLLING_TIME = 2000;

export default class Top10Input extends Component {
  slidePlaying;
  timeId;
  element;

  setup() {
    this.timeId = 0;
    this.slidePlaying = null;
    this.element = this.createTemplate();
    this.initSlide(this.element);
  }

  createTemplate() {
    const element = document.createElement("div");
    const top10List = data.top10;

    element.insertAdjacentHTML(
      "beforeend",
      `
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
    `
    );
    return element;
  }

  template() {
    return this.element.innerHTML;
  }

  setEvent() {
    const searchInput = ".search__input";
    const top10Container = this.element.querySelector("#top10Container");

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

  afterRender() {
    this.runSlide();
  }

  initSlide(element) {
    const $top10Container = element.querySelector("#top10Container");
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
