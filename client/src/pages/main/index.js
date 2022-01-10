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

{
  /* 

  <div class="promotion">
            <div class="banner">
              <div class="best">
                <a href="#" class="best__link">
                  <img
                    src="//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC"
                    width="485"
                    height="340"
                    class="img_g"
                    alt="기획전 이벤트"
                  />
                </a>
              </div>
              <div class="planning">
                <a href="#" target="_blank" class="planning__link"
                  ><img
                    src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct"
                    width="485"
                    height="340"
                    class="img_g"
                    alt=""
                /></a>
                <button class="planning__left-btn"></button>
                <button class="planning__right-btn"></button>
                <div class="planning__paging"><span></span><span></span><span></span></div>
              </div>
            </div>
            <div class="theme">
              <ul class="theme-container">
                <li class="theme-item">
                  <a href="#" class="theme__link">
                    <span class="theme-item__info">
                      <img
                        src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FP15687305480.jpg%3Fut%3D20211210172757&amp;scode=talkgift"
                        width="200"
                        height="200"
                        class="img_top"
                        alt="트렌디한 구찌 지갑" /></span
                    ><strong class="theme-item__title">트렌디한 구찌 지갑</strong
                    ><span class="theme-item__desc">꺼내서 자랑하고 싶은 이유</span
                    ><span class="theme-item__icon">테마</span></a
                  >
                </li>
                <li class="theme-item">
                  <a href="#" class="theme__link">
                    <span class="theme-item__info">
                      <img
                        src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FV14651717067.jpg%3Fut%3D20210904092746&amp;scode=talkgift"
                        width="200"
                        height="200"
                        class="img_top"
                        alt="트라이앵글 브랜드전" /></span
                    ><strong class="theme-item__title">트라이앵글 브랜드전</strong
                    ><span class="theme-item__desc">있으면 도움되는 조리 도구 총모음</span
                    ><span class="theme-item__icon">테마</span></a
                  >
                </li>
                <li class="theme-item">
                  <a href="#" class="theme__link">
                    <span class="theme-item__info">
                      <img
                        src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FX15420477717.jpg%3Fut%3D20211116163053&amp;scode=talkgift"
                        width="200"
                        height="200"
                        class="img_top"
                        alt="작지만 강한 미니 온풍기" /></span
                    ><strong class="theme-item__title">작지만 강한 미니 온풍기</strong
                    ><span class="theme-item__desc">언제 어디서든 따뜻하게</span
                    ><span class="theme-item__icon">테마</span></a
                  >
                </li>
                <li class="theme-item">
                  <a href="#" class="theme__link">
                    <span class="theme-item__info">
                      <img
                        src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FU15563830470.jpg%3Fut%3D20211222065245&amp;scode=talkgift"
                        width="200"
                        height="200"
                        class="img_top"
                        alt="자주 쓰는 종이호일 기획전" /></span
                    ><strong class="theme-item__title">자주 쓰는 종이호일 기획전</strong
                    ><span class="theme-item__desc">다양한 크기와 모양을 한 곳에!</span
                    ><span class="theme-item__icon">테마</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
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
  </script> */
}
