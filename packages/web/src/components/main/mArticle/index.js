import SectionTop from "src/components/main/mArticle/sectiontop";
import SectionTab from "src/components/common/section-tab";
import Service from "src/service";

import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class MArticle {
  constructor({ $app }) {
    this.state = {};
    this.$target = createHTML("div", { className: "mArticle" });

    $app.appendChild(this.$target);

    this.dataFetch();
  }
  async dataFetch() {
    const [{ data: marticle }, { data: hotdeal }, { data: hotkeyword }] =
      await Promise.all([
        Service.getMArticle(),
        Service.getHotDeal(),
        Service.getHotKeyword(),
      ]);
    this.setState({ marticle, hotdeal, hotkeyword });
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }
  render() {
    const { marticle, hotdeal, hotkeyword } = this.state;

    new SectionTop({ $app: this.$target, initialState: marticle });
    // 핫딜 영역
    new SectionTab({ $app: this.$target, initialState: hotdeal });
    // 급상승 키워드 영역
    new SectionTab({ $app: this.$target, initialState: hotkeyword });
  }
}
