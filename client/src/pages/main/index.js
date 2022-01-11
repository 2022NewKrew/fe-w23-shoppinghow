import HotDeal from '@/components/main/hot-deal';
import HotItem from '@/components/main/hot-item';
import MainBanner from '@/components/main/main-banner';
import './index.scss';
import { api } from '@/api';

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

    this.MainBanner = new MainBanner({ $parent: mainContainer });
    this.hotDeal = new HotDeal({ $parent: mainContainer });
    this.hotItem = new HotItem({ $parent: mainContainer });
    $parent.appendChild(mainContainer);

    this.initializeData();
  }

  async initializeData() {
    try {
      await Promise.all([
        this.initializeBannerItem(),
        this.initializePromotionList(),
        this.initializeHotDeal(),
        this.initializeHotItem(),
      ]);
    } catch (e) {
      alert(e);
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.MainBanner.setState(this.state);
    this.hotDeal.setState(this.state);
    this.hotItem.setState(this.state);
  }

  async initializePromotionList() {
    try {
      const res = await api.get('/special-exhibition/main');
      if (!res.success) throw new Error(res.message);
      this.setState({ promotionList: res.result });
    } catch (e) {
      throw e;
    }
  }

  async initializeHotDeal() {
    try {
      const res = await api.get('/item/hot-deal');
      if (!res.success) throw new Error(res.message);
      this.setState({ hotDealList: res.result });
    } catch (e) {
      throw e;
    }
  }

  async initializeHotItem() {
    try {
      const res = await api.get('/item/hot-items');
      if (!res.success) throw new Error(res.message);
      this.setState({ hotItemList: res.result });
    } catch (e) {
      throw e;
    }
  }

  async initializeBannerItem() {
    try {
      const res = await api.get('/banner-item');
      if (!res.success) throw new Error(res.message);
      this.setState({ bannerItemList: res.result });
    } catch (e) {
      throw e;
    }
  }
}
