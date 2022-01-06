import Component from '../../core/Component.js';
import HotDeal from './HotDeal';
import Promotion from './Promotion';
import './index.scss';

export default class Main extends Component {
  template() {
    return `
    <div class="promotion"></div>
    <div class="hot-deal">
      <h2 class="section-title">품절주의, 역대급 핫딜</h2>
      <ul class="hot-deal-list"></ul>
    </div>
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
    const $hotdealList = this.$('.hot-deal-list');
    new HotDeal($hotdealList, {});
    const $promotion = this.$('.promotion');
    new Promotion($promotion, {});
  }

  setEvent() {}
}
