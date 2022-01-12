import carousel from "src/utils/carousel";
import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class RollKeyword {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "wrap_rollkeywords" });
    $app.appendChild(this.$target);

    this.render();
    carousel(this.$target, this.state.length, 32, true);
  }
  render() {
    this.keyword = this.state;

    this.$target.innerHTML = `
            <h2 class="screen_out"></h2>
            <ol class="list_rollkeywords slide">
            ${this.keyword
              .map(
                (word, idx) =>
                  `<li><span class="num_rank">${idx + 1}</span>${word}</li>`
              )
              .join("")}
            </ol>
        `;
  }
}
