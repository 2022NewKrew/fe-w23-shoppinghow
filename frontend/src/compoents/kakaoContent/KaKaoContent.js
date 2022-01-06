import Component from '../../core/Component';
import KaKaoBanner from './kakaoBanner/KaKaoBanner';
import KaKaoShopingPartner from './KaKaoShopingPartner';
import KaKaoNotice from './KaKaoNotice';
import ApiService from '../../core/ApiService';
export default class KaKaoContent extends Component {
  template() {
    return `
    <div id="cMain">
        <div id="mArticle">
            <div data-component="kakao-banner" class="#banner @op section_top">
            </div>
            <div data-component="kakao-hotitem" class="#hotitem @op section_hot section_hit">
            </div>
            <div data-component="kakao-keyword" id="topRecomKeywordWrap" class="#recomkeyword section_tab section_rank">
            </div>
            <div data-component="kakao-recommend" class="#foru section_tab section_how" style="">
            </div>
        </div>
    </div>
    <div id="cEtc">
        <div class="wrap_shopping_partner _GL" data-component="kakao-shopping-partner"></div>
        <div class="wrap_notice" data-component="kakao-notice"></div>
    </div>`;
  }

  mounted() {
    const $kaKaoShopingPartner = this.$target.querySelector('[data-component="kakao-shopping-partner"]');
    const $kaKaoNotice = this.$target.querySelector('[data-component="kakao-notice"]');

    new KaKaoShopingPartner($kaKaoShopingPartner, {});
    new KaKaoNotice($kaKaoNotice, {});
  }

  async syncMounted() {
    const $kaKaoBanner = this.$target.querySelector('[data-component="kakao-banner"]');
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
