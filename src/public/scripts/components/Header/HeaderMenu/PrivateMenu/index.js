import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import PrivateContent from "./PrivateContent";

export default class PrivateMenu extends Component {
  setUp() {}
  template() {
    return `
        <li class="private-menu__btn">
          <button href="#">최근본상품</button>
          <div class="private-menu__content" component="private-content"></div>
        </li>
        
    `;
  }
  setEvent() {
    $(".private-menu__btn > button", this.$target).addEventListener("click", this.btnClickEventHandler.bind(this));
  }
  removeEvent() {
    $(".private-menu__btn > button", this.$target).removeEventListener("click", this.btnClickEventHandler.bind(this));
  }
  mounted() {
    const $privateContent = $('[component="private-content"]', this.$target);
    new PrivateContent($privateContent);
  }
  btnClickEventHandler({ target }) {
    const curDisplay = target.nextElementSibling.style.display;
    const privateBtnContainer = target.closest(".private-menu__btn");
    const curColor = privateBtnContainer.style["background-color"];
    target.nextElementSibling.style.display = curDisplay === "flex" ? "none" : "flex";
    privateBtnContainer.style["background-color"] = curColor === "" ? "rgba(255,255,100, 0.5)" : "";
  }
}
