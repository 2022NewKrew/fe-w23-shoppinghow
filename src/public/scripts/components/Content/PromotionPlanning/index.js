import { $, $All } from "@utils/query.js";
import { Component } from "@core/Component";
import { Carousel } from "@core/Carousel";
import { api } from "@utils/api.js";

export default class PromotionPlanning extends Component {
  setUp() {
    this.$state = {
      planningList: [],
    };
    this.carousel = null;
    this.carouselSpeed = 3500;
    this.carouselItemWidth = 635;
    this.totalCarouselCount = 3;
    this.currentCarouselItem = 0;
    this.carouselList = null;
    this.carouselBtnList = null;
    this.carouselBtnOn = false;
    this.$pagingBtnMouseoverHandler = this.pagingBtnMouseoverHandler.bind(this);
    this.$pagingPrevClickHandler = this.pagingPrevClickHandler.bind(this);
    this.$pagingNextClickHandler = this.pagingNextClickHandler.bind(this);
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
          ${[0, 1, 2]
            .map(
              item => `
                    <span class="promotion__planning--btn-paging">
                      <span class="promotion__planning--num-page" data-value="${item}"></span>
                    </span>
                  `,
            )
            .join("")}
        </div>
        <button class="promotion__planning--right-btn">></button>
      </div>
    `;
  }
  setEvent() {
    $(".promotion__planning--paging", this.$target).addEventListener("mouseover", this.$pagingBtnMouseoverHandler);
    $(".promotion__planning--left-btn", this.$target).addEventListener("click", this.$pagingPrevClickHandler);
    $(".promotion__planning--right-btn", this.$target).addEventListener("click", this.$pagingNextClickHandler);
  }
  removeEvent() {
    $(".promotion__planning--paging", this.$target).removeEventListener("mouseover", this.$pagingBtnMouseoverHandler);
    $(".promotion__planning--left-btn", this.$target).removeEventListener("click", this.$pagingPrevClickHandler);
    $(".promotion__planning--right-btn", this.$target).removeEventListener("click", this.$pagingNextClickHandler);
  }
  pagingBtnMouseoverHandler({ target }) {
    if (target.classList.contains("promotion__planning--num-page")) {
      const selectedSlideOrder = target.getAttribute("data-value");
      this.carousel.jumpTo(selectedSlideOrder);
    }
  }
  pagingNextClickHandler({ target }) {
    if (!this.carouselBtnOn && target.classList.contains("promotion__planning--right-btn")) {
      this.carouselBtnOn = true;
      this.carousel.nextBtnClick();
      setTimeout(() => {
        this.carouselBtnOn = false;
      }, this.carouselSpeed / 2);
    }
  }
  pagingPrevClickHandler({ target }) {
    if (!this.carouselBtnOn && target.classList.contains("promotion__planning--left-btn")) {
      this.carouselBtnOn = true;
      this.carousel.prevBtnClick();
      setTimeout(() => {
        this.carouselBtnOn = false;
      }, this.carouselSpeed / 2);
    }
  }
  mounted() {
    const { planningList } = this.$state;
    this.carouselList = $(".promotion__planning--wrap", this.$target);
    this.carouselBtnList = $All(".promotion__planning--num-page", this.$target);
    this.getSlide();
    if (planningList.length > 0) {
      this.carousel =
        this.carousel ??
        new Carousel(planningList, this.carouselList, this.currentCarouselItem, this.carouselSpeed, this.carouselItemWidth, 1, this.carouselBtnList);
    }
  }
  async getSlide() {
    const { result } = await api.get("event/slide");
    const transResult = this.transSlideResult(result);
    this.settingCarouselCSS(transResult.length);
    if (JSON.stringify(this.$state.planningList) !== JSON.stringify(transResult)) {
      this.setState({ planningList: transResult });
    }
    // Object.entries().sort().toString()
  }
  settingCarouselCSS(length) {
    this.carouselBtnList[0].style["background-color"] = "black";
    this.carouselList.style.width = length * this.carouselItemWidth + "px";
    this.carouselList.style.transform = "translate3d(-" + this.carouselItemWidth + "px, 0px, 0px)";
  }
  transSlideResult(result) {
    const lastSlide = result[result.length - 1];
    const firstSlide = result[0];
    result.unshift(lastSlide);
    result.push(firstSlide);
    return result;
  }
}
