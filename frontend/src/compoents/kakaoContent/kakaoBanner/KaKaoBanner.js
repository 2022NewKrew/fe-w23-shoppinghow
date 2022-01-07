import Component from '../../../core/Component';
import SlideBanner from './SlideBanner';

export default class KaKaoBanner extends Component {
  template() {
    const bannerData = this.$props.bannerData;
    const bannerBestImg = bannerData.best[0];
    console.log(bannerData, bannerBestImg);
    return `
    <div data-component="kakao-event" class="cont_event">
        <div class="#banner_event evt_item _GL">
            <a href="" class="link_event _GC_">
                <img src="${bannerBestImg.path}/${bannerBestImg.name}" width="485" height="340" class="img_g" alt="기획전 이벤트">
            </a>
        </div>
        <div data-component="slide-banner" class="#banner_mileage evt_slide _GL">
        </div>
    </div>
    <div data-component="kakao-event-list" id="mallEventList" class="#banner_mallevent cont_item cont_top _GL">
    </div>
    `;
  }

  mounted() {
    const $slideBanner = this.$target.querySelector('[data-component="slide-banner"]');
    new SlideBanner($slideBanner, {bannerData: this.$props.bannerData.special});
  }
}
