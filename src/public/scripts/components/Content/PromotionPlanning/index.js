import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class PromotionPlanning extends Component {
  setUp() {
    this.$state = {
      planningList: [],
      slidingSpeed: 3500,
      slidingWidth: 635,
    };
    this.totalSlideCount = 3;
    this.slidingTimeout = undefined;
    this.finalRollingCheck = false;
    this.currentSlide = 0;
    this.slidingList = undefined;
  }
  template() {
    const { planningList } = this.$state;
    return `
      <div class="promotion__planning--wrap">
        ${
          planningList.length > 0 &&
          planningList
            .map(
              item => `
          <a href="#" target="_blank" class="promotion__planning--link"
            ><img
              src="${item.src}"
              width="${item.width}"
              height="${item.height}"
              class="img_g"
              alt="${item.alt}"
          /></a>
        `,
            )
            .join("")
        }
      </div>
      <div class="promotion__planning--btn-box">
        <button class="promotion__planning--left-btn"></button>
        <button class="promotion__planning--right-btn"></button>
        <div class="promotion__planning--paging">
          <span>_</span><span>_</span><span>_</span>
        </div>
      </div>
    `;
  }
  setEvent() {
    const { slidingSpeed, slidingWidth } = this.$state;
    this.slidingList = $(".promotion__planning--wrap", this.$target);
    this.rollingTimeout = setInterval(() => {
      this.transition(this.slidingList, slidingSpeed, slidingWidth, ++this.currentSlide, "A").then(() => {
        if (this.currentSlide === this.totalSlideCount) {
          this.currentSlide = 0;
          this.transition(this.slidingList, 0, slidingWidth, this.currentSlide, "B");
        }
      });
    }, slidingSpeed);
  }

  async mounted() {
    const { result } = await api.get("event/slide");
    result.push(result[0]);
    this.slidingList.style.width = result.length * 635 + "px";

    if (JSON.stringify(this.$state.planningList) !== JSON.stringify(result)) {
      this.callSetState({ planningList: result });
    }
  }

  async transition(list, speed, size, to, l) {
    return new Promise((res, rej) => {
      list.style.transition = `${speed}ms`;
      list.style.transform = `translate3d(-${size * to}px, 0px, 0px)`;
      setTimeout(() => {
        res();
      }, speed - 30); // 꼼수..
    });
  }

  callSetState(newState) {
    if (typeof this.rollingTimeout === "number") {
      clearInterval(this.rollingTimeout);
    }
    this.setState(newState);
  }
}
