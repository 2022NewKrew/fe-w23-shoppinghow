import Component from '@Core/Component.js';
import HotDeal from './HotDeal';
import Promotion from './Promotion';
import './index.scss';

export default class Main extends Component {
  template() {
    return `
    <div class="promotion"></div>
    <div class="hot-deal"></div>
    <div class="rising-keyword">
      <ul>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
        <li class="rising-keyword__item"></li>
      </ul>
    </div>
    <div class="recommendation">
      <ul class="picked-items">
        <li class="picked-items__item"></li>
        <li class="picked-items__item"></li>
        <li class="picked-items__item"></li>
        <li class="picked-items__item"></li>
      </ul>
      <ul class="recommendation-items"> 
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
        <li class="recommendation-items__item"></li>
      </ul>
    </div>
    `;
  }

  mounted() {
    const $hotdeal = this.$('.hot-deal');
    new HotDeal($hotdeal, {});
    const $promotion = this.$('.promotion');
    new Promotion($promotion, {});
  }

  setEvent() {}
}
