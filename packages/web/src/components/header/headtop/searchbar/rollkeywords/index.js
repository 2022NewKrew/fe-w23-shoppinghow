import Service from "src/service";
import carousel from "src/utils/carousel";

import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class RollKeyword {
  constructor({ $app }) {
    this.state = {};
    this.$target = createHTML("div", { className: "wrap_rollkeywords" });
    $app.appendChild(this.$target);

    this.render();
    this.dataFetch();
  }

  async dataFetch() {
    const { isError, data } = await Service.getRollKeyword();
    this.setState(data);
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    const { rollkeyword } = this.state;

    this.$target.innerHTML = `
            <h2 class="screen_out"></h2>
            <ol class="list_rollkeywords slide">
            ${rollkeyword
              ?.map(
                (word, idx) =>
                  `<li><span class="num_rank">${idx + 1}</span>${word}</li>`
              )
              .join("")}
            </ol>
        `;
    if (rollkeyword) {
      carousel(this.$target, rollkeyword.length, 32, true);
    }
  }
}
