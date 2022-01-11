import { HotDealSection, PromotionSection, MainLayout } from '@components';
import { API } from '@services';
import { Top10Store } from '@stores';

export class HomePage extends MainLayout {
  setup() {
    this.props.recentlyViewedList = [
      {
        info: '스컬피그 [SA4235] 요가 토즈 삭스 피치핑크/실리콘/발가락/요가',
        link: '#',
        img: '//shop1.daumcdn.net/thumb/C120x120.q90/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FF7180681434.jpg%3Fut%3D20190807062214',
      },
    ];
  }

  rendered() {
    super.rendered();
    this.PromotionSection = new PromotionSection(this.$main, {
      renderType: 'appendHTML',
    });
    this.HotDealSection = new HotDealSection(this.$main, {
      renderType: 'appendHTML',
    });
  }

  mounted() {
    Top10Store.dispatch({ actionKey: 'FETCH' });

    this.fetchThemeProductList();
    this.fetchSliderImages();
    this.fetchHotDealProductList();
  }

  async fetchThemeProductList() {
    const { data: themeProductList } = await API.getThemeProductList();
    this.PromotionSection.setThemeProductionList(themeProductList);
  }

  async fetchSliderImages() {
    const { data: sliderImgList } = await API.getSliderImages();
    this.PromotionSection.Slider.setImageList(sliderImgList);
  }

  async fetchHotDealProductList() {
    const { data: hotDealProductList } = await API.getHotDealProductList();
    this.HotDealSection.setHotDealProductList(hotDealProductList);
  }
}
