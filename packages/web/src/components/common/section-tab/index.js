import SectionItem from "src/components/common/section-item";

import LStorage from "src/utils/localStorage";
import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class SectionTab {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("section", { className: "section_tab" });

    $app.appendChild(this.$target);

    this.render();
    this.addEvent();
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
      (product) => new SectionItem({ $app: ul, initialState: product })
    );
  }
  addEvent() {
    this.$target.addEventListener("click", (e) => {
      const itemThumb = e.target.closest(".section_item").dataset.thumb;
      LStorage.add("rcntproduct", itemThumb, 6);
      $(".wrap_rcntproducts").dispatchEvent(new CustomEvent("addRcntProduct"));
      alert("최근 본 상품에 추가되었습니다.");
    });
  }
}
