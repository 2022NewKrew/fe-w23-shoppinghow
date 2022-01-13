import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class Notice {
  constructor({ $app }) {
    this.$target = createHTML("div", { className: "wrap_notice" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <div class="section_notice">
        <h2 class="tit_notice">공지사항</h2>
        <a href="javascript:;">[공지] 카카오쇼핑 이용약관 개정 안내 (2021.11.24 시행)</a>
        <span class="ico_comm2 ico_new"></span>
    </div>
    `;
  }
}
