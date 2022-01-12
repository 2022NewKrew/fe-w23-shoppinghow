import ContEvent from "src/components/main/mArticle/sectiontop/cont-event";
import ListItem from "src/components/main/mArticle/sectiontop/list-item";

import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class SectionTop {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("section", { className: "section_top" });

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const { evtItemUrl, listItem, evtSlide } = this.state;

    new ContEvent({
      $app: this.$target,
      initialState: { evtItemUrl, evtSlide },
    });
    new ListItem({ $app: this.$target, initialState: listItem });
  }
}
