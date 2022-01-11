import Top10Input from "../components/Top10Input";
import Component from "../core/Component.js";

export default class Header extends Component {
  mounted() {
    const $headerTop = this.$target.querySelector(".header-top");
    new Top10Input($headerTop);
  }
  template() {
    return `
      <div class="header-top">
          <div class="title">
              <h1>쇼핑하우</h1>
          </div>  
      </div>
    `;
  }
}
