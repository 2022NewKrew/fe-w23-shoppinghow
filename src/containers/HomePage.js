import { HotDealSection, MainLayout } from '@components';

export class HomePage extends MainLayout {
  hotDealProductList;

  setup() {
    this.hotDealProductList = [...Array(10)].map((_) => ({
      title: '구매1만↑우유앙빵10+10',
      img: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
      url: '#',
      price: '18,500',
      originPrice: '20,500',
      discount: { type: 'percent', text: '70' },
    }));
  }

  mounted() {
    super.mounted();

    new HotDealSection(this.$main, {
      title: '품절주의, 역대급 핫딜',
      hotDealProductList: this.hotDealProductList,
    });
  }

  render() {
    this.$root.insertAdjacentHTML('beforeend', this.template());
    this.mounted();
  }
}
