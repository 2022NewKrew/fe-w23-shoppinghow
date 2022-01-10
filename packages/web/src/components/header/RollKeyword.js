import carousel from "../../utils/carousel";
import { createHTML } from "../../utils/dom";

export default function RollKeyword({ $app, initialState }) {
  this.state = initialState;
  this.$target = createHTML("div", { className: "wrap_rollkeywords" });
  $app.appendChild(this.$target);

  this.render = () => {
    const keyword = this.state;

    this.$target.innerHTML = `
        <h2 class="screen_out"></h2>
        <ol class="list_rollkeywords slide">
        ${keyword
          .map((word, idx) => `<li><span>${idx + 1}</span>${word}</li>`)
          .join("")}
        </ol>
        `;
  };
}
RollKeyword.prototype.carouselEvent = carousel;
