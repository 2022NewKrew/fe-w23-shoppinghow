import { $ } from "../utils/util.js";
import { Component } from "../core/Component.js";
import { HotDeal } from "./contents/index.js";

export default class Content extends Component {
  setup() {}
  template() {
    return `
      <div class="hot-deal" component="hot-deal"></div>
    `;
  }
  mounted() {
    const $hotDeal = $('[component="hot-deal"]', this.$target);

    new HotDeal($hotDeal);
  }
  setEvent() {}
}
