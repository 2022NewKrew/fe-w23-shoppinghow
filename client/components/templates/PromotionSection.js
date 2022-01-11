import { PromotionCard, SectionLayout, Slider, ThemeProduct } from '@components';
import { $ } from '@utils';

export class PromotionSection extends SectionLayout {
  setup() {
    this.props = {
      className: 'promotion__section',
      title: '프로모션 세션',
      hideTitle: true,
      ...this.props,
    };
    this.state = { themeProductList: [] };
  }

  render() {
    super.render();

    this.$contentContainer.innerHTML = `
        <div class="banner"></div>
        <ul class="theme__container"></ul>
    `;
    this.$themeContainer = $('.theme__container', this.$contentContainer);

    this.renderBanner();
    this.renderThemeProductList();
  }

  renderBanner() {
    this.$banner = $('.banner', this.$contentContainer);
    this.PromotionCard = new PromotionCard(this.$banner, {
      renderType: 'appendHTML',
      url: '#',
      img: '//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC',
    });

    this.Slider = new Slider(this.$banner, { renderType: 'appendHTML' });
  }

  renderThemeProductList() {
    this.state.themeProductList.forEach((product) => {
      new ThemeProduct(this.$themeContainer, {
        renderType: 'appendHTML',
        product,
      });
    });
  }

  setThemeProductionList(themeProductList) {
    this.state = { ...this.state, themeProductList };
    this.renderThemeProductList();
  }
}
