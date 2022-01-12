import HotDeal from '@/components/main/hot-deal';
import HotItem from '@/components/main/hot-item';
import MainBanner from '@/components/main/main-banner';
import './index.scss';
import evt from '@/utils/custom-event';
import store from '@/store';

export default class MainPage {
  state = {
    promotionList: [],
    hotDealList: [],
    hotItemList: [],
    bannerItemList: [],
  };

  constructor({ $parent }) {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    this.mainBanner = new MainBanner({ $parent: mainContainer });
    this.hotDeal = new HotDeal({ $parent: mainContainer });
    this.hotItem = new HotItem({ $parent: mainContainer });
    $parent.appendChild(mainContainer);

    evt.subscribe('promotionList', this.handleSubscription.bind(this));
    evt.subscribe('hotDealList', this.handleSubscription.bind(this));
    evt.subscribe('hotItemList', this.handleSubscription.bind(this));
    evt.subscribe('bannerItemList', this.handleSubscription.bind(this));

    store.load('promotionList');
    store.load('hotDealList');
    store.load('hotItemList');
    store.load('bannerItemList');
  }

  handleSubscription(e) {
    this.setState(e.detail);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.mainBanner.setState(this.state);
    this.hotDeal.setState(this.state);
    this.hotItem.setState(this.state);
  }
}
