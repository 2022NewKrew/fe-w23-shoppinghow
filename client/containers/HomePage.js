import { HotDealSection, PromotionSection, MainLayout } from '@components';
import { API } from '@services';
import { Top10Store } from '@stores';

export class HomePage extends MainLayout {
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
