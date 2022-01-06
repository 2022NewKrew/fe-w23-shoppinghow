import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderRolling extends Component {
  setUp() {
    this.$state = {
      rollingSpeed: 1500,
      rollingHeight: 22,
      currentSlide: 0,
    };
    this.totalRollingCount = 10;
    this.rollingTimeout = undefined;
    this.finalRollingCheck = false;
  }
  template() {
    const { top10 } = this.$props;
    return `
        ${top10
          .map(
            item => `
            <li class="search-top10__item">${item}</li>
        `,
          )
          .join("")}
      `;
  }
  setEvent() {
    const { currentSlide } = this.$state;
    this.rollingTimeout = setTimeout(() => {
      if (this.finalRollingCheck) this.finalRollingCheck = false;
      this.setState({ currentSlide: currentSlide === this.totalRollingCount ? 1 : currentSlide + 1 });
    }, this.$state.rollingSpeed);
  }

  mounted() {
    const { rollingList } = this.$props;
    const { rollingSpeed, rollingHeight, currentSlide } = this.$state;
    this.transition(rollingList, rollingSpeed, rollingHeight, currentSlide, "A").then(() => {
      if (currentSlide === this.totalRollingCount) {
        //
        this.transition(rollingList, 0, rollingHeight, 0, "B"); // 눈속임용
        this.finalRollingCheck = true;
      }
    });
  }
  async transition(rollingList, rollingSpeed, rollingHeight, currentSlide, l) {
    return new Promise((res, rej) => {
      rollingList.style.transition = `${rollingSpeed}ms`;
      rollingList.style.transform = `translate3d(0px, -${rollingHeight * currentSlide}px, 0px)`;
      setTimeout(() => {
        res();
      }, rollingSpeed - 30); // 꼼수..
    });
  }
}
