import { $, createHTML } from "../../utils/dom";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";

export default class Header {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("header", { id: "kakaoHead", role: "banner" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <div class="area_headtop">
        <h1 class="tit_shw">
          <a href="#">
            <img src="../assets/images/logo_shw_2021.png" alt="쇼핑하우" />
          </a>
        </h1>
      </div>
    `;
    new SearchBar({ $app: $(".area_headtop") });
    new Navigator({ $app: this.$target });
  }
}
