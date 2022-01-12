import HeadTop from "src/components/header/headtop";
import Navigator from "src/components/header/navigator";

import { createHTML } from "src/utils/dom";
import "./index.scss";

export default class Header {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("header", { id: "kakaoHead", role: "banner" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new HeadTop({ $app: this.$target });
    new Navigator({ $app: this.$target });
  }
}
