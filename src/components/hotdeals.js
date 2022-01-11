import Component from "../core/Component";
import Items from "./Items.js";
const data = require("../data/hotdeals.json");
export default class Hotdeals extends Component {
  hotdealData;
  setup() {
    this.hotdealData = data.hotdeals;
  }
  template() {
    return `
      <div class="hot-deal">
        <h2 class="section-title">품절주의, 역대급 핫딜</h2>
        <ul class="hot-deal-list">
        </ul>
      </div>
    `;
  }

  mounted() {
    const $hotdealList = this.$target.querySelector(".hot-deal-list");
    new Items($hotdealList, this.hotdealData);
  }
}
