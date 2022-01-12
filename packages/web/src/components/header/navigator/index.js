import shwcate from "src/components/header/navigator/shwcate";
import shwgnb from "src/components/header/navigator/shwgnb";
import shwkwordgnb from "src/components/header/navigator/shwkwordgnb";
import shwusergnb from "src/components/header/navigator/shwusergnb";
import RcntProducts from "src/components/header/navigator/rcntproducts";

import { $, createHTML } from "src/utils/dom";
import "./index.scss";

const sample = {
  list_shwgnb: [
    { name: "핫딜" },
    { name: "베스트100" },
    { name: "할인특가", noti: true },
    { name: "기획전" },
  ],
  list_kwordgnb: [
    { name: "#건강식품" },
    { name: "#새해카드", noti: true },
    { name: "#보드게임" },
    { name: "#겨울 캠핑용품" },
  ],
};

export default class Navigator {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("nav", { id: "kakaoGnb", role: "navigation" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const { list_shwgnb, list_kwordgnb } = sample;

    this.$target.innerHTML = `
    <div class="wrap_shwgnb">
      ${shwcate()}
      ${shwgnb(list_shwgnb)}
      ${shwkwordgnb(list_kwordgnb)}
      ${shwusergnb()}
    </div>
    `;
    new RcntProducts({ $app: $(".area_rcntproducts") });
    this.addEvent();
  }

  addEvent() {
    const El = $(".area_rcntproducts");

    El.addEventListener("mouseover", (e) => {
      El.classList.add("on");
    });
    El.addEventListener("mouseout", (e) => {
      El.classList.remove("on");
    });
  }
}
