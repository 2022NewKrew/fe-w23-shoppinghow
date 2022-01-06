import { PromotionCard, SectionLayout, Slider, ThemeProduct } from '@components';
import { $ } from '@utils';

export class PromotionSection extends SectionLayout {
  setup() {
    this.$props = { className: 'promotion__section', ...this.$props };
  }

  render() {
    super.render();

    this.$contentContainer.innerHTML = `
        <div class="banner"></div>
        <ul class="theme__container"></ul>
    `;
    this.renderBanner();
    this.renderThemeProductList();
  }

  renderThemeProductList() {
    const { themeProductList } = this.$props;

    const $themeContainer = $('.theme__container', this.$contentContainer);

    themeProductList.forEach((product) => {
      new ThemeProduct($themeContainer, {
        renderType: 'beforeend',
        product,
      });
    });
  }

  renderBanner() {
    const $banner = $('.banner', this.$contentContainer);

    new PromotionCard($banner, {
      renderType: 'beforeend',
      url: '#',
      img: '//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC',
    });

    new Slider($banner, {
      renderType: 'beforeend',
    });
  }
}
