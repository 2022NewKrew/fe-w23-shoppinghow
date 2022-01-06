import Component from "@core/Component";
import Promotion from "@components/Promotion";

class Contents extends Component {
  template() {
    return `
        <div class="promotion"></div>
        <div class="hot-deal"></div>
        <div class="rising-keyword"></div>
        <div class="recommendation"></div>
    `;
  }

  mounted() {
    const $promotion = this.$target.querySelector(".promotion");
    new Promotion($promotion);
  }
}

export default Contents;
