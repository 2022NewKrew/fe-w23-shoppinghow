import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";

class Contents extends Component {
  template() {
    return `
        <div class="container"></div>
    `;
  }

  mounted() {
    const $container = this.$target.querySelector(".container");
    new Promotion($container);
  }
}

export default Contents;
