import Component from '../../../core/Component';
import {TARGET_SELECTOR, getTargetSelector} from '../../../util/ComponentGroup';
import SlideBanner from './SlideBanner';
import MallEventItemGroup from '../ItemGroup/MallEventItemGroup';
export default class Banner extends Component {
  template() {
    const bannerData = this.$props.bannerData;
    const bannerBestImg = bannerData.best[0];
    console.log(bannerData, bannerBestImg);
    return `
    <div class="cont_event">
        <div class="#banner_event evt_item _GL">
            <a href="" class="link_event _GC_">
                <img src="${bannerBestImg.path}/${bannerBestImg.name}" width="485" height="340" class="img_g" alt="기획전 이벤트">
            </a>
        </div>
        <div data-component="${TARGET_SELECTOR.SLIDE_BANNER}" class="#banner_mileage evt_slide _GL">
        </div>
    </div>
    <div data-component="${TARGET_SELECTOR.ITEM_GROUP}" class="cont_item">
    </div>
    `;
  }

  mounted() {
    const $slideBanner = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.SLIDE_BANNER));
    new SlideBanner($slideBanner, {bannerData: this.$props.bannerData.special});

    this.setHotDealForm();
  }

  // TODO 서버에서 데이터 받아올 얘정 지금은 임시 데이터
  async setHotDealForm() {
    const tempData = Array(4).fill({
      content: '부드러운 감촉의 실크 잠옷',
      subContent: '덕분에 기분 좋게 잠들 것 같아요',
      imgUrl: 'asset/img/product_thema/product_thema_01.jpeg',
    });
    const $hotDealItemGroup = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.ITEM_GROUP));
    new MallEventItemGroup($hotDealItemGroup, {itemGroup: tempData});
  }
}
