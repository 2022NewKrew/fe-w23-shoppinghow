import { createHTML } from "../../utils/dom";
import carousel from "../../utils/carousel";

export default function EvtSlide({ $app, initialState }) {
  this.state = initialState;

  this.$target = createHTML("div", { className: "evt_slide" });
  $app.appendChild(this.$target);

  this.createSlide = (evtSlide) =>
    evtSlide
      .map(
        (url) => `
        <div class="panel">
            <a href="#"><img src="${url}" /></a>
        </div>
    `
      )
      .join("");

  this.createInerrPaging = (evtSlide) =>
    evtSlide
      .map(
        (_, idx) => `
        <span class="btn_paging" data-index="${idx}">
            <span class="${idx ? "num_page" : "num_page select"}"></span>
        </span>
        `
      )
      .join("");

  this.render = () => {
    const evtSlide = this.state;

    this.$target.innerHTML = `
            <div class="slide_evt">
                <div class="slide">
                    ${this.createSlide(evtSlide)}
                </div>
            </div>
            <div class="paging_comm">
                <span class="inner_paging">
                    ${this.createInerrPaging(evtSlide)}
                </span>
                <button type="button" class="btn_slide btn_prev">
                    <span class="ico_slide ico_prev"></span>
                </button>
                <button type="button" class="btn_slide btn_next">
                    <span class="ico_slide ico_next"></span>
                </button>
            </div>
        `;
  };
}

EvtSlide.prototype.carouselEvent = carousel;
