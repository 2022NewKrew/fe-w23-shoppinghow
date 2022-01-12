import MArticle from "src/components/main/mArticle";

import { createHTML } from "src/utils/dom";

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
