import EvtSlide from "src/components/main/mArticle/sectiontop/cont-event/evtslide";

import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class ContEvent {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "cont_event" });

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const { evtItemUrl, evtSlide } = this.state;

    this.$target.innerHTML = `
          <div class="evt_item">
            <a href="javascript:;"><img src="${evtItemUrl}" /></a>
          </div>
      `;

    new EvtSlide({
      $app: this.$target,
      initialState: evtSlide,
    });
  }
}
