import Component from "../core/Component";

import Banner from "../components//Banners.js";
import Carousel from "../components/Carousel.js";
import Theme from "../components/Themes.js";
import Hotdeal from "../components/Hotdeals.js";

export default class Main extends Component {
  template() {
    return `
    <div class="promotion">
      <div class="banner"></div>
      <div class="theme"></div>
    </div>
    <div class="hot-deal"></div>
    `;
  }

  mounted() {
    const $banner = this.$target.querySelector(".banner");
    new Banner($banner);
    new Carousel($banner);

    const $theme = this.$target.querySelector(".theme");
    new Theme($theme);

    const $hotdeal = this.$target.querySelector(".hot-deal");
    new Hotdeal($hotdeal);
  }
}
