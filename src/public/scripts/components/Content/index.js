import { $ } from "@utils/query.js";
import { Component } from "@core/Component.js";
import HotDeal from "./HotDeal";
import PromotionBanner from "./PromotionBanner";
import PromotionTheme from "./PromotionTheme";
import PromotionPlanning from "./PromotionPlanning";

export default class Content extends Component {
  setUp() {}
  template() {
    return `
      <div class="promotion">
        <div class="banner">
          <div component="promotion-banner" class="best"></div>
          <div component="promotion-planning" class="planning"></div>
        </div>
        
        <div component="promotion-theme" class="theme"></div>
      </div>
      <div component="hot-deal" class="hot-deal"></div>
    `;
  }
  mounted() {
    const $hotDeal = $('[component="hot-deal"]', this.$target);
    const $promotionBanner = $('[component="promotion-banner"]', this.$target);
    const $promotionPlanning = $('[component="promotion-planning"]', this.$target);
    const $promotionTheme = $('[component="promotion-theme"]', this.$target);

    new HotDeal($hotDeal);
    new PromotionBanner($promotionBanner);
    new PromotionTheme($promotionTheme);
    new PromotionPlanning($promotionPlanning);
  }
  setEvent() {}
}
