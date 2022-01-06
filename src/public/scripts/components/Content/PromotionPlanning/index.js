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
  async mounted() {
    const { result } = await api.get("event/slide");
    if (JSON.stringify(this.$state.planningList) !== JSON.stringify(result)) {
      this.setState({ planningList: result });
    }

    $(".promotion__planning--wrap", this.$target).style.width = this.$state.planningList.length * 635 + "px";
  }
  setEvent() {}
}
