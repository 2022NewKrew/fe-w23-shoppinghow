import SearchBar from "src/components/header/headtop/searchbar";

import { createHTML } from "src/utils/dom";
import "./index.scss";

export default class HeadTop {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "area_headtop" });
    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <h1 class="tit_shw">
        <a href="javascript:;">
          <img src="../assets/images/logo_shw_2021.png" alt="쇼핑하우" />
        </a>
      </h1>
  `;
    new SearchBar({ $app: this.$target });
  }
}
