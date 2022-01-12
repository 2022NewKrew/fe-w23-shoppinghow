import HotDealItem from "src/components/common/hotdeal-item";

import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class SectionTab {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("section", { className: "section_tab" });

    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    const { title, data } = this.state;
    this.$target.innerHTML = `
        <div class="tit_info"><h3>${title}</h3></div>
        <div class="cont_item">
          <ul class="list_item"></ul>
        </div>
        `;

    const ul = this.$target.querySelector(".list_item");
    data.forEach(
      (product) => new HotDealItem({ $app: ul, initialState: product })
    );
  }
}
