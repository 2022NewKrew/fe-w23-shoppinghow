import shwcate from "src/components/header/navigator/shwcate";
import shwgnb from "src/components/header/navigator/shwgnb";
import shwkwordgnb from "src/components/header/navigator/shwkwordgnb";
import shwusergnb from "src/components/header/navigator/shwusergnb";
import RcntProducts from "src/components/header/navigator/rcntproducts";
import Service from "src/service";

import { $, createHTML, debounce } from "src/utils/dom";
import "./index.scss";

export default class Navigator {
  constructor({ $app }) {
    this.state = {};
    this.$target = createHTML("nav", { id: "kakaoGnb", role: "navigation" });
    $app.appendChild(this.$target);

    this.render();
    this.dataFetch();
  }

  async dataFetch() {
    const { isError, data } = await Service.getNavigator();
    this.setState(data);
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    const { list_shwgnb, list_kwordgnb } = this.state;

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
    El.addEventListener(
      "mouseout",
      debounce(() => {
        El.classList.remove("on");
      }, 2000)
    );
  }
}
