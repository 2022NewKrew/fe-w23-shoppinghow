import carousel from "src/utils/carousel";
import { createHTML } from "src/utils/dom";

export default class EvtSlide {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "evt_slide" });
    $app.appendChild(this.$target);

    this.render();
    carousel(document.querySelector(".cont_event"), 3, 514, false);
  }

  render() {
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
  }

  createSlide(evtSlide) {
    return evtSlide
      .map(
        (url) => `
        <div class="panel">
            <a href="javascript:;"><img src="${url}" /></a>
        </div>
    `
      )
      .join("");
  }

  createInerrPaging(evtSlide) {
    return evtSlide
      .map(
        (_, idx) => `
        <span class="btn_paging" data-index="${idx}">
            <span class="${idx ? "num_page" : "num_page select"}"></span>
        </span>
        `
      )
      .join("");
  }
}
