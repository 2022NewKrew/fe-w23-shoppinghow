import "../sass/libs/reset.scss";
import "../sass/app.scss";
import { $ } from "@utils/query.js";
import { Component } from "@core/Component.js";
import { Header, Content, Footer } from "./components";

class App extends Component {
  setup() {}
  template() {
    return `
        <div component="header" class="header"></div>
        <div component="content" class="container"></div>
        <div component="footer" class="footer"></div>
      `;
  }
  // render 후 mount 에서 직접 자식 컴포넌트 마운트
  mounted() {
    const $header = $('[component="header"]', this.$target);
    const $content = $('[component="content"]', this.$target);
    const $footer = $('[component="footer"]', this.$target);

    new Header($header);
    new Content($content);
    new Footer($footer);
  }
  setEvent() {}
}

new App($("#app"));
// super
