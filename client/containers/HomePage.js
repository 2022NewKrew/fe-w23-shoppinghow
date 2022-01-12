import { HotDealSection, PromotionSection, MainLayout } from '@components';
import { APIService } from '@services';
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
    const { data: themeProductList } = await APIService.getThemeProductList();
    this.PromotionSection.setThemeProductionList(themeProductList);
  }

  async fetchSliderImages() {
    const { data: sliderImgList } = await APIService.getSliderImages();
    this.PromotionSection.Slider.setImageList(sliderImgList);
  }

  async fetchHotDealProductList() {
    const { data: hotDealProductList } = await APIService.getHotDealProductList();
    this.HotDealSection.setHotDealProductList(hotDealProductList);
  }
}
