import { $ } from "@utils/query.js";
import { Component } from "@core/Component";

export default class HotDeal extends Component {
  setUp() {}
  template() {
    return `
      <h2 class="section-title">품절주의, 역대급 핫딜</h2>
      <ul class="hot-deal-list"></ul>
    `;
  }
  setEvent() {}
}
