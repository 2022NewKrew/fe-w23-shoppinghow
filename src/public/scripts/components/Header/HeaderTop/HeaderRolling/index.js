import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderRolling extends Component {
  setUp() {
    this.$state = {
      rollingSpeed: 1500,
      rollingHeight: 22,
    };
    this.totalRollingCount = 10;
    this.rollingTimeout = undefined;
    this.currentSlide = 0;
    this.rollingList = this.$props.rollingList;
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
    const { rollingSpeed, rollingHeight } = this.$state;
    this.rollingTimeout = setInterval(() => {
      this.transition(this.rollingList, rollingSpeed, rollingHeight, ++this.currentSlide).then(() => {
        if (this.currentSlide === this.totalRollingCount) {
          this.currentSlide = 0;
          this.transition(this.rollingList, 0, rollingHeight, this.currentSlide);
        }
      });
    }, rollingSpeed);
  }

  mounted() {}
  async transition(list, speed, size, to) {
    return new Promise((res, rej) => {
      list.style.transition = `${speed}ms`;
      list.style.transform = `translate3d(0px, -${size * to}px, 0px)`;
      setTimeout(() => {
        res();
      }, speed - 30); // 꼼수..
    });
  }
}
