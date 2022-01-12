import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class ListItem {
  constructor({ $app, initialState }) {
    this.listItem = initialState;
    this.$target = createHTML("ul", { className: "list_item" });

    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    this.$target.innerHTML = this.listItem
      .map(
        ({ thumb, title, info }) => `
          <li>
              <a href="#" class="link_prod">
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
}
