import Component from '../../core/Component';
import {getApi} from '../../core/ApiService';
import {ERROR_MESSAGE, API_URL} from '../../util/TemplateGroup';
import {TARGET_SELECTOR, getTargetSelector} from '../../util/ComponentGroup';
import Banner from './Banner/Banner';
import ShopingPartner from './ShopingPartner';
import Notice from './Notice';
import ItemGroupWrap from './ItemGroup/ItemGroupWrap';
export default class Content extends Component {
  template() {
    return `
    <div id="cMain">
        <div id="mArticle">
            <div data-component="${TARGET_SELECTOR.BANNER}" class="#banner @op section_top">
            </div>
            <div data-component="${TARGET_SELECTOR.ITEM_GROUP_WRAP}" class="#hotitem @op section_hot section_hit">
            </div>
            <div data-component="${TARGET_SELECTOR.KEYWORD}" id="topRecomKeywordWrap" class="#recomkeyword section_tab section_rank">
            </div>
            <div data-component="${TARGET_SELECTOR.RECOMMEND}" class="#foru section_tab section_how" style="">
            </div>
        </div>
    </div>
    <div id="cEtc">
        <div data-component="${TARGET_SELECTOR.SHOPPING_PARTNER}" class="wrap_shopping_partner _GL"></div>
        <div data-component="${TARGET_SELECTOR.NOTICE}" class="wrap_notice"></div>
    </div>`;
  }

  mounted() {
    const $shopingPartner = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.SHOPPING_PARTNER));
    const $notice = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.NOTICE));

    new ShopingPartner($shopingPartner, {});
    new Notice($notice, {});

    this.setBannerForm();
    this.setHotDealForm();
  }

  async setBannerForm() {
    const $banner = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.BANNER));
    try {
      const bannerData = await this.getBannerData();
      new Banner($banner, {bannerData: bannerData});
    } catch (error) {
      console.log(error);
    }
  }

  async getBannerData() {
    try {
      const res = await getApi(API_URL.GET_BANNER_DATA);
      // TODO 데이터 체크와 에러메시지는 추가 예정
      if (res == null) {
        console.log('getBannerData err');
        return new Error(ERROR_MESSAGE.NODATA);
      }
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  // TODO 서버에서 데이터 받아올 얘정 지금은 임시 데이터
  async setHotDealForm() {
    const $hotDealItemGroupWrap = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.ITEM_GROUP_WRAP));
    const tempData = [{
      category: '호빵찜기',
      name: 'JY-507 호빵찜기 소형',
      imgUrl: 'asset/img/product_hotdeal/product_hotdeal_01.jpeg',
      price: 705150,
    }, {
      category: '호빵찜기',
      name: 'JY-507 호빵찜기 소형',
      imgUrl: 'asset/img/product_hotdeal/product_hotdeal_01.jpeg',
      price: 705150,
    }, {
      category: '호빵찜기',
      name: 'JY-507 호빵찜기 소형',
      imgUrl: 'asset/img/product_hotdeal/product_hotdeal_01.jpeg',
      price: 705150,
    }];
    new ItemGroupWrap($hotDealItemGroupWrap, {itemType: 'hotdeal', title: '쇼핑 급상승 키워드', itemGroup: tempData});
  }
}
