import Banner from "@components/Banner";
import Theme from "@components/Theme";
import Component from "@core/Component";

class Promotion extends Component {
  template() {
    return `
      <div class="banner"></div>
      <div class="theme"></div>
    `;
  }

  mounted() {
    const $banner = this.$target.querySelector(".banner");
    const $theme = this.$target.querySelector(".theme");

    new Banner($banner);
    new Theme($theme);
  }
}

export default Promotion;
