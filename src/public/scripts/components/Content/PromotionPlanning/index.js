import { $, $All } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class PromotionPlanning extends Component {
  setUp() {
    this.$state = {
      planningList: [],
    };
    this.slidingSpeed = 3500;
    this.slidingWidth = 635;
    this.totalSlideCount = 3;
    this.slidingInterval = undefined;
    this.currentSlide = 0;
    this.slidingList = null;
    this.slidingBtnList = null;
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
        <button class="promotion__planning--left-btn"><</button>
        
        <div class="promotion__planning--paging">
          <span class="promotion__planning--btn-paging">
            <span class="promotion__planning--num-page"></span>
          </span>
          <span class="promotion__planning--btn-paging">
            <span class="promotion__planning--num-page"></span>
          </span>
          <span class="promotion__planning--btn-paging">
            <span class="promotion__planning--num-page"></span>
          </span>
        </div>
        <button class="promotion__planning--right-btn">></button>
      </div>
    `;
  }
  setEvent() {}

  mounted() {
    this.slidingList = $(".promotion__planning--wrap", this.$target);
    this.slidingBtnList = $All(".promotion__planning--num-page", this.$target);
    this.slidingBtnList[0].style["background-color"] = "black";
    this.transitionInterval();
    this.getSlide();
  }
  async getSlide() {
    const { result } = await api.get("event/slide");
    result.push(result[0]);
    this.slidingList.style.width = result.length * 635 + "px";
    if (JSON.stringify(this.$state.planningList) !== JSON.stringify(result)) {
      if (typeof this.slidingInterval === "number") {
        clearTimeout(this.slidingInterval);
      }
      this.setState({ planningList: result });
    }
  }
  transition(list, speed, size, to) {
    list.style.transition = `${speed}ms`;
    list.style.transform = `translate3d(-${size * to}px, 0px, 0px)`;
  }
  transitionInterval() {
    // 다음 슬라이드로 일단 이동! -> setTimeout 의 delay 이전에 모든 애니메이션이 끝나야 한다.
    this.slidingInterval = setTimeout(() => {
      this.checkBtn(this.currentSlide, "#ccc");
      this.transition(this.slidingList, this.slidingSpeed / 2, this.slidingWidth, ++this.currentSlide);
      this.checkBtn(this.currentSlide, "#000");
      // 맨 마지막이면 처음으로 몰래 이동
      if (this.currentSlide === this.totalSlideCount) {
        this.currentSlide = 0;
        setTimeout(() => {
          this.transition(this.slidingList, 0, this.slidingWidth, this.currentSlide);
        }, this.slidingSpeed / 2 + 10);
      }
      this.transitionInterval();
    }, this.slidingSpeed);
  }
  checkBtn(to, color) {
    to = to === this.totalSlideCount ? 0 : to;
    this.slidingBtnList[to].style["background-color"] = color;
  }
}
