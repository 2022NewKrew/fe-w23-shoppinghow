import { HotDealProduct, SectionLayout } from '@components';
import { HotDealProductsStore } from '@stores';
import { $ } from '@utils';

export class HotDealSection extends SectionLayout {
  setup() {
    this.props = { className: 'hotDeal__section', title: '품절주의, 역대급 핫딜', ...this.props };
  }

  rendered() {
    super.rendered();
    this.$contentContainer.innerHTML = `
      <ul class="hotDeal__container"></ul>
      <div class="hotDeal__showmoreBtn"></div>
    `;

    this.$hotDealContainer = $('.hotDeal__container', this.$contentContainer);
    this.$showmoreBtn = $('.hotDeal__showmoreBtn', this.$contentContainer);

    this.$showmoreBtn.onclick = this.getMoreHotDealProducts.bind(this);
  }

  mounted() {
    HotDealProductsStore.subscribe(this.renderShowmoreBtn.bind(this));
    HotDealProductsStore.subscribe(this.renderHotDealProductList.bind(this));
  }

  // util

  getMoreHotDealProducts() {
    const { loading } = HotDealProductsStore.getState();
    if (loading) return;

    HotDealProductsStore.dispatch('REQUEST_DATA');
  }

  renderShowmoreBtn() {
    const { page, per_page, total, loading } = HotDealProductsStore.getState();

    if (loading) {
      this.$showmoreBtn.innerText = `로딩중...`;
      return;
    }

    this.$showmoreBtn.innerHTML = `
      <span>더보기</span>
      <span class="hotDeal__pagging">
        (<span class="txt__current">${page * per_page}</span>/<span class="txt__total">${total}</span>건)
      </span>
      <span></span>
    `;
  }

  renderHotDealProductList() {
    const { hotDealProductList, page, loading } = HotDealProductsStore.getState();
    if (loading) return;

    hotDealProductList.forEach((product) => {
      new HotDealProduct(this.$hotDealContainer, {
        renderType: 'appendHTML',
        product,
      });
    });

    const isFristPage = page === 1;
    if (!isFristPage) this.$showmoreBtn.scrollIntoView({ behavior: 'smooth' });
  }
}
