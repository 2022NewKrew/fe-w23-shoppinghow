import { HotDealProduct, SectionLayout } from '@components';
import { $ } from '@utils';

export class HotDealSection extends SectionLayout {
  constructor($target, props) {
    super($target, { className: 'hotDeal__section', ...props });
  }

  render() {
    super.render();
    this.renderHotDealProductList();
  }

  renderHotDealProductList() {
    const { hotDealProductList } = this.props;

    this.$contentContainer.innerHTML = `<ul class="hotDeal__container"></ul>`;
    const $hotDealList = $('.hotDeal__container', this.$contentContainer);

    hotDealProductList.forEach((product) => {
      new HotDealProduct($hotDealList, {
        renderType: 'beforeend',
        product,
      });
    });
  }
}
