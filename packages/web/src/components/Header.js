import { createHTML } from "../utils/dom";
import Navigator from "./Navigator";

const sample = ["엔진코딩제", "경량패딩", "한과"];

export default class Header {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("header", { id: "kakaoHead", role: "banner" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const keyword = sample;
    this.$target.innerHTML = `
      <div class="area_headtop">
        <h1 class="tit_shw">
          <a href="#">
            <img src="../assets/images/logo_shw_2021.png" alt="쇼핑하우" />
          </a>
        </h1>
        <div class="wrap_shwsearch">
          <h2 class="screen_out">검색</h2>
          <form class="frm_shwsearch" role="search">
            <input type="text" class="tf_keyword" size="55" />
            <button type="submit">
              <span class="ico_shwgnb ico_shwsearch"></span>
            </button>
          </form>
          <div class="wrap_rollkeywords">
            <h2 class="screen_out"></h2>
            <ol class="list_rollkeywords">
            ${keyword
              .map((word, idx) => `<li><span>${idx}</span>${word}</li>`)
              .join("")}
            </ol>
          </div>
        </div>
      </div>
    `;
    new Navigator({ $app: this.$target });
  }
}
