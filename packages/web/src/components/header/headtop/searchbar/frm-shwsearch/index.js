import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class FrmShwSearch {
  constructor({ $app }) {
    this.$target = createHTML("form", {
      className: "frm_shwsearch",
      role: "search",
    });
    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    this.$target.innerHTML = `
    <input type="text" class="tf_keyword" size="55" />
    <button class="search_btn">
        <span class="ico_shwgnb ico_shwsearch"></span>
    </button>
    `;
  }
}
