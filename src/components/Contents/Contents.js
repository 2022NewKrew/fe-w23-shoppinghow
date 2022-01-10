import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import HotDeal from "@components/Contents/HotDeal";

class Contents extends Component {
  template() {
    return `
        <div class="container"></div>
    `;
  }

  mounted() {
    const $container = this.$target.querySelector(".container");
    new Promotion($container);
    new HotDeal($container, { title: "품절주의! 역대급 핫딜" });
  }
}

export default Contents;
