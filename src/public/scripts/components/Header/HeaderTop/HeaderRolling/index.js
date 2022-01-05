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
    this.rollingTimeout;
    this.currentSlide = 0;
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
    this.rollingTimeout = setTimeout(() => {
      this.setState({ currentSlide: this.currentSlide === this.totalRollingCount ? 0 : ++this.currentSlide });
    }, this.$state.rollingSpeed);
  }
  async mounted() {
    const { rollingList } = this.$props;
    const { rollingSpeed, rollingHeight, currentSlide } = this.$state;

    this.transition(rollingList, rollingSpeed, rollingHeight, currentSlide);
    if (this.currentSlide === this.totalRollingCount) {
      clearTimeout(this.rollingTimeout);
      setTimeout(() => {
        this.currentSlide = 0;
        this.transition(rollingList, 0, rollingHeight, this.currentSlide);
        // this.setState({ currentSlide: this.currentSlide === this.totalRollingCount ? 0 : ++this.currentSlide });
        setTimeout(() => {
          this.setState({ currentSlide: this.currentSlide === this.totalRollingCount ? 0 : ++this.currentSlide });
        }, 0);
      }, rollingSpeed);
    }
  }
  transition(rollingList, rollingSpeed, rollingHeight, currentSlide) {
    rollingList.style.transition = `${rollingSpeed}ms`;
    rollingList.style.transform = `translate3d(0px, -${rollingHeight * currentSlide}px, 0px)`;
  }
}
