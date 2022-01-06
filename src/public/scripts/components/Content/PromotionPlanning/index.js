import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class PromotionPlanning extends Component {
  setUp() {
    this.$state = {
      planningList: [],
    };
  }
  template() {
    const { planningList } = this.$state;
    return `
        ${
          planningList.length > 0 &&
          planningList
            .map(
              item => `
          <a href="#" target="_blank" class="planning__link"
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
        <button class="planning__left-btn"></button>
        <button class="planning__right-btn"></button>
        <div class="planning__paging"><span></span><span></span><span></span></div>
      
    `;
  }
  async mounted() {
    const { result } = await api.get("event/slide");
    if (JSON.stringify(this.$state.planningList) !== JSON.stringify(result)) {
      this.setState({ planningList: result });
    }
  }
  setEvent() {}
}
