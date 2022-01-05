import { $ } from "@utils/query.js";
import { Component } from "@core/Component.js";
import HotDeal from "./HotDeal";
import PromotionBanner from "./PromotionBanner";
import PromotionTheme from "./PromotionTheme";

export default class Content extends Component {
  setUp() {}
  template() {
    return `
      <div class="promotion">
        <div component="promotion-banner" class="banner"></div>
        <div component="promotion-theme" class="theme"></div>
      </div>
      <div class="hot-deal" component="hot-deal"></div>
    `;
  }
  mounted() {
    const $hotDeal = $('[component="hot-deal"]', this.$target);
    const $promotionBanner = $('[component="promotion-banner"]', this.$target);
    const $promotionTheme = $('[component="promotion-theme"]', this.$target);

    new HotDeal($hotDeal);
    new PromotionBanner($promotionBanner);
    new PromotionTheme($promotionTheme);
  }
  setEvent() {}
}
