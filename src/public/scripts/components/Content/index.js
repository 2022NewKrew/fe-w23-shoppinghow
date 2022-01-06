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
        <div class="promotion__banner">
          <div component="promotion-banner" class="promotion__best"></div>
          <div component="promotion-planning" class="promotion__planning"></div>
        </div>
        
        <div component="promotion-theme" class="promotion__theme"></div>
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
