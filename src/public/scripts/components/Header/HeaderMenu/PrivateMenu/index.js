import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import PrivateContent from "./PrivateContent";

export default class PrivateMenu extends Component {
  setUp() {
    this.$menuMouseenterEventHandler = this.menuMouseenterEventHandler.bind(this);
    this.$menuMouseleaveEventHandler = this.menuMouseleaveEventHandler.bind(this);
  }
  template() {
    return `
        <li class="private-menu__btn">
          <button href="#"><span>⎋</span> 최근본상품</button>
          <div class="private-menu__content" component="private-content"></div>
        </li>
        
    `;
  }
  setEvent() {
    $(".private-menu__btn", this.$target).addEventListener("mouseenter", this.$menuMouseenterEventHandler);
    $(".private-menu__btn", this.$target).addEventListener("mouseleave", this.$menuMouseleaveEventHandler);
  }
  removeEvent() {
    $(".private-menu__btn", this.$target).removeEventListener("mouseenter", this.$menuMouseenterEventHandler);
    $(".private-menu__btn", this.$target).removeEventListener("mouseleave", this.$menuMouseleaveEventHandler);
  }
  mounted() {
    const $privateContent = $('[component="private-content"]', this.$target);
    new PrivateContent($privateContent);
  }
  menuMouseenterEventHandler({ target }) {
    $(".private-menu__content", target).style.display = "flex";
    target.style["border-bottom"] = "5px solid black";
  }
  menuMouseleaveEventHandler({ target }) {
    console.log("leave!!");
    $(".private-menu__content", target).style.display = "none";
    target.style["border-bottom"] = "";
  }
}
