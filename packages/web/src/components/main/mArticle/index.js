import SectionTop from "src/components/main/mArticle/sectiontop";
import SectionTab from "src/components/common/section-tab";

import { createHTML } from "src/utils/dom";

import "./index.scss";

const marticledata = {
  evtItemUrl: "assets/images/기획전 이벤트.png",
  listItem: [
    {
      thumb: "assets/images/럭셔리한 발렌시아가 지갑.jpg",
      title: "럭셔리한 발렌시아가 지갑",
      info: "깔끔하고 세련된 디자인",
    },
    {
      thumb: "assets/images/인기 브랜드 코트 모아보기.jpg",
      title: "인기 브랜드 코트 모아보기",
      info: "베이직한 디자인부터 이번 시즌 유행까지!",
    },
    {
      thumb: "assets/images/따뜻한 롱무스탕 모아보기.jpg",
      title: "따뜻한 롱무스탕 모아보기",
      info: "수북히 들어가 있는 퍼로 따뜻함 업!",
    },
    {
      thumb: "assets/images/불멍을 즐기기 위한 모든 것.jpg",
      title: "불멍을 즐기기 위한 모든 것",
      info: "멍하니 바라보는 낭만",
    },
    {
      thumb: "assets/images/슬림핏 니트 스커트 기획전.jpg",
      title: "슬림핏 니트 스커트 기획전",
      info: "내 몸에 딱 맞춘것 같은 핏",
    },
  ],
  evtSlide: [
    "assets/images/이벤트1.png",
    "assets/images/이벤트2.png",
    "assets/images/이벤트3.png",
  ],
};

const hotdealItems = [
  {
    title: "후드",
    thumb: "assets/images/hotdeal1.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "신발",
    thumb: "assets/images/hotdeal2.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "신발",
    thumb: "assets/images/hotdeal3.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "속옷",
    thumb: "assets/images/hotdeal4.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "물티슈",
    thumb: "assets/images/hotdeal5.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "잠옷",
    thumb: "assets/images/hotdeal6.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "수분크림",
    thumb: "assets/images/hotdeal7.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "만두",
    thumb: "assets/images/hotdeal8.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "가발",
    thumb: "assets/images/hotdeal9.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "오징어",
    thumb: "assets/images/hotdeal10.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
];

const hotkeywordItems = [
  {
    title: "만두",
    thumb: "assets/images/hotkeyword1.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "잠바",
    thumb: "assets/images/hotkeyword2.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "가발",
    thumb: "assets/images/hotkeyword3.jpg",
    priceInfo: {
      price: 3000,
      percent: null,
      isHotDeal: true,
    },
  },
  {
    title: "롱패딩",
    thumb: "assets/images/hotkeyword4.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "콩",
    thumb: "assets/images/hotkeyword5.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "덮밥",
    thumb: "assets/images/hotkeyword6.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "오징어",
    thumb: "assets/images/hotkeyword7.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "그릇",
    thumb: "assets/images/hotkeyword8.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "신발",
    thumb: "assets/images/hotkeyword9.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
  {
    title: "마스크",
    thumb: "assets/images/hotkeyword10.jpg",
    priceInfo: {
      price: 3000,
      percent: 20,
      isHotDeal: false,
    },
  },
];

export default class MArticle {
  constructor({ $app }) {
    this.$target = createHTML("div", { className: "mArticle" });

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new SectionTop({ $app: this.$target, initialState: marticledata });
    // 핫딜 영역
    new SectionTab({
      $app: this.$target,
      initialState: { title: "품절주의! 역대급 핫딜", data: hotdealItems },
    });
    // 급상승 키워드 영역
    new SectionTab({
      $app: this.$target,
      initialState: { title: "쇼핑 급상승 키워드", data: hotkeywordItems },
    });
  }
}
