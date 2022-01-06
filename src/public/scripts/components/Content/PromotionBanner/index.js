import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class PromotionBanner extends Component {
  setUp() {
    this.$state = {
      top100: {
        id: "",
        src: "",
        width: "",
        height: "",
        alt: "",
      },
    };
  }
  template() {
    const { top100 } = this.$state;
    return `
      <div class="promotion__best--wrap">
        <a href="#" class="promotion__planning--link">
          <img
            src="${top100.src}"
            width="${top100.width}"
            height="${top100.height}"
            class="img_g"
            alt="${top100.alt}"
          />
        </a>
      </div>
    `;
  }
  async mounted() {
    const { result } = await api.get("event/top100");
    if (JSON.stringify(this.$state.top100) !== JSON.stringify(result[0])) {
      this.setState({ top100: result[0] });
    }
  }
  setEvent() {}
}
