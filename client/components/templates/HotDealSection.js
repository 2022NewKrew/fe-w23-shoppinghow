import { HotDealProduct, SectionLayout } from '@components';
import { $ } from '@utils';

export class HotDealSection extends SectionLayout {
  setup() {
    this.props = { className: 'hotDeal__section', title: '품절주의, 역대급 핫딜', ...this.props };
    this.state = { hotDealProductList: [] };
  }

  render() {
    super.render();
    this.$contentContainer.innerHTML = `<ul class="hotDeal__container"></ul>`;
    this.$hotDealContainer = $('.hotDeal__container', this.$contentContainer);
    this.renderHotDealProductList();
  }

  // util

  renderHotDealProductList() {
    this.state.hotDealProductList.forEach((product) => {
      new HotDealProduct(this.$hotDealContainer, {
        renderType: 'appendHTML',
        product,
      });
    });
  }

  setHotDealProductList(hotDealProductList) {
    this.state = { ...this.state, hotDealProductList };
    this.renderHotDealProductList();
  }
}
