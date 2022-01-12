import { createHTML } from "../../utils/dom";
import MArticle from "./MArticle";

import "./index.scss";

export default class Main {
  constructor({ $app }) {
    this.$target = createHTML("main", { id: "kakaoMain", role: "main" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new MArticle({ $app: this.$target });
  }
}
