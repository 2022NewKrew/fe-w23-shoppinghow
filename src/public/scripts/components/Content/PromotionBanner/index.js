import { $ } from "@utils/query.js";
import { Component } from "@core/Component";

export default class PromotionBanner extends Component {
  setUp() {
    this.$state = {
      best: {
        src: "//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC",
        alt: "기획전 이벤트",
      },
      planningList: [
        {
          src: "//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct",
          alt: "",
        },
      ],
      bannerWidth: 485,
      bannerHeight: 340,
    };
  }
  template() {
    const { best, planningList, bannerWidth, bannerHeight } = this.$state;
    return `
      <div class="best">
        <a href="#" class="best__link">
          <img
            src="${best.src}"
            width="${bannerWidth}"
            height="${bannerHeight}"
            class="img_g"
            alt="${best.alt}"
          />
        </a>
      </div>
      <div class="planning">
        ${planningList
          .map(
            item => `
          <a href="#" target="_blank" class="planning__link"
            ><img
              src="${item.src}"
              width="${bannerWidth}"
              height="${bannerHeight}"
              class="img_g"
              alt="${item.alt}"
          /></a>
        `,
          )
          .join("")}
        <button class="planning__left-btn"></button>
        <button class="planning__right-btn"></button>
        <div class="planning__paging"><span></span><span></span><span></span></div>
      </div>
    `;
  }
  setEvent() {}
}
