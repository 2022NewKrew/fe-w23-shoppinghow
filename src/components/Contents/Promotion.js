import Banner from "@components/Contents/Banner";
import Theme from "@components/Contents/Theme";
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
