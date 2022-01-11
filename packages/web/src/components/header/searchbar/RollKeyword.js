import carousel from "../../../utils/carousel";
import { createHTML } from "../../../utils/dom";

export default function RollKeyword({ $app, initialState }) {
  this.keyword = initialState;
  this.$target = createHTML("div", { className: "wrap_rollkeywords" });
  $app.appendChild(this.$target);

  this.render = () => {
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
  };
  this.init = () => {
    this.render();
    this.carouselEvent(this.$target, this.keyword.length, 32, true);
  };
}
RollKeyword.prototype.carouselEvent = carousel;
