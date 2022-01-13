import { HotDealSection, PromotionSection, MainLayout } from '@components';
import { APIService } from '@services';
import { HotDealProductsStore, TopPopularStore } from '@stores';

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
    TopPopularStore.dispatch('FETCH_DATA');
    HotDealProductsStore.dispatch('REQUEST_DATA');

    this.fetchThemeProductList();
    this.fetchSliderImages();
  }

  async fetchThemeProductList() {
    const { data: themeProductList } = await APIService.getThemeProductList();
    this.PromotionSection.setThemeProductionList(themeProductList);
  }

  async fetchSliderImages() {
    const { data: sliderImgList } = await APIService.getSliderImages();
    this.PromotionSection.Slider.setImageList(sliderImgList);
  }
}
