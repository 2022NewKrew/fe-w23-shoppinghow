import Component from "@core/Component";
import Promotion from "@components/Promotion";

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
