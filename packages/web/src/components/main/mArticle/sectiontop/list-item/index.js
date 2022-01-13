import LStorage from "src/utils/localStorage";
import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class ListItem {
  constructor({ $app, initialState }) {
    this.listItem = initialState;
    this.$target = createHTML("ul", { className: "list_item" });

    $app.appendChild(this.$target);

    this.render();
    this.addEvent();
  }
  render() {
    this.$target.innerHTML = this.listItem
      .map(
        ({ thumb, title, info }) => `
          <li class="evtlist" data-thumb="${thumb}">
              <a href="javascript:;" class="link_prod">
                  <span class="info_thumb">
                      <img src="${thumb}" />
                  </span>
                  <strong class="tit_g">${title}</strong>
                  <span class="txt_info">${info}</span>
                  <span class="ico_comm2 ico_theme"></span>
              </a>
          </li>
          `
      )
      .join("");
  }
  addEvent() {
    this.$target.addEventListener("click", (e) => {
      const itemThumb = e.target.closest(".evtlist").dataset.thumb;
      LStorage.add("rcntproduct", itemThumb, 6);
      $(".wrap_rcntproducts").dispatchEvent(new CustomEvent("addRcntProduct"));
      alert("최근 본 상품에 추가되었습니다.");
    });
  }
}
