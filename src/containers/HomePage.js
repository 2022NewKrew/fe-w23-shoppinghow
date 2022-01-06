import { HotDealSection, PromotionSection, MainLayout } from '@components';

export class HomePage extends MainLayout {
  hotDealProductList;
  themeProductList;

  setup() {
    this.hotDealProductList = [...Array(10)].map((_) => ({
      title: '구매1만↑우유앙빵10+10',
      img: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
      url: '#',
      price: '18,500',
      originPrice: '20,500',
      discount: { type: 'percent', text: '70' },
    }));

    this.themeProductList = [...Array(5)].map((_) => ({
      title: '트렌디한 구찌 지갑',
      desc: '꺼내서 자랑하고 싶은 이유',
      img: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FP15687305480.jpg%3Fut%3D20211210172757&amp;scode=talkgift',
    }));
  }

  mounted() {
    super.mounted();

    new PromotionSection(this.$main, {
      renderType: 'beforeend',
      title: '프로모션 세션',
      hideTitle: true,
      themeProductList: this.themeProductList,
    });

    new HotDealSection(this.$main, {
      renderType: 'beforeend',
      title: '품절주의, 역대급 핫딜',
      hotDealProductList: this.hotDealProductList,
    });
  }
}
