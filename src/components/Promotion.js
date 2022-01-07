import Banner from "@components/Banner";
import Theme from "@components/Theme";
import Component from "@core/Component";

class Promotion extends Component {
  template() {
    return `
      <div class="promotion"></div>
    `;
  }

  mounted() {
    const $promotion = this.$target.querySelector(".promotion");

    new Banner($promotion);
    new Theme($promotion);
  }
}

export default Promotion;
