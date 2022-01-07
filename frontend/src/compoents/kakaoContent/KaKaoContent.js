import Component from '../../core/Component';
import {TARGET_SELECTOR, getTargetSelector, getTarget} from '../../core/ComponentGroup';
import KaKaoBanner from './kakaoBanner/KaKaoBanner';
import KaKaoShopingPartner from './KaKaoShopingPartner';
import KaKaoNotice from './KaKaoNotice';
import ApiService from '../../core/ApiService';
export default class KaKaoContent extends Component {
  template() {
    return `
    <div id="cMain">
        <div id="mArticle">
            <div ${getTarget(TARGET_SELECTOR.TARGET_BANNER)} class="#banner @op section_top">
            </div>
            <div ${getTarget(TARGET_SELECTOR.TARGET_HOTITEM)} class="#hotitem @op section_hot section_hit">
            </div>
            <div ${getTarget(TARGET_SELECTOR.TARGET_KEYWORD)} id="topRecomKeywordWrap" class="#recomkeyword section_tab section_rank">
            </div>
            <div ${getTarget(TARGET_SELECTOR.TARGET_RECOMMEND)} class="#foru section_tab section_how" style="">
            </div>
        </div>
    </div>
    <div id="cEtc">
        <div ${getTarget(TARGET_SELECTOR.TARGET_SHOPPING_PARTNER)} class="wrap_shopping_partner _GL"></div>
        <div ${getTarget(TARGET_SELECTOR.TARGET_NOTICE)} class="wrap_notice"></div>
    </div>`;
  }

  mounted() {
    const $kaKaoShopingPartner = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_SHOPPING_PARTNER));
    const $kaKaoNotice = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_NOTICE));

    new KaKaoShopingPartner($kaKaoShopingPartner, {});
    new KaKaoNotice($kaKaoNotice, {});
  }

  async syncMounted() {
    const $kaKaoBanner = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_BANNER));
    const bannerData = await this.getBannerData();
    new KaKaoBanner($kaKaoBanner, {bannerData: bannerData});
  }

  async getBannerData() {
    const apiService = new ApiService();

    const res = await apiService.getApi('getBannerData');
    if (res == null) {
      console.log('getBannerData err');
      return;
    }
    return res.data;
  }
}
