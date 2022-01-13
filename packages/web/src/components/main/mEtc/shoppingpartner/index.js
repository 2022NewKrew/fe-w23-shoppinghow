import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class ShoppingPartner {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "wrap_shopping_partner" });
    $app.appendChild(this.$target);

    this.render();
    this.addEvent();
  }

  createContPartner({ title, malls }) {
    return `
        <div class="cate_partner">
            <strong class="tit_mall">${title}</strong>
            <ul class="list_mall">
                ${malls
                  .map(
                    (mall) => `
                    <li><a href="javascript:;">${mall}</a></li>
                `
                  )
                  .join("")}
            </ul>
        </div>
        `;
  }
  render() {
    const partnerList = this.state;

    this.$target.innerHTML = `

        <h3 class="tit_home">쇼핑하우 파트너</h3>
        <div class="section_etc ">
            <div class="cont_partner ">
                ${partnerList
                  .map((partner) => this.createContPartner(partner))
                  .join("")}
            </div>
            <button type="button" class="btn_home"></button>
        </div>
        <a href="javascript:;" class="link_all">전체보기</a>
    `;
  }
  addEvent() {
    const El = $(".section_etc");
    $(".btn_home").addEventListener("click", () => {
      El.classList.toggle("section_open");
    });
  }
}
