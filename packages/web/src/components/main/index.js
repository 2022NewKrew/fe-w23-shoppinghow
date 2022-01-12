import { createHTML } from "../../utils/dom";
import MArticle from "./MArticle";

import "./index.scss";
import SectionTab from "../common/section-tab";

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

export default class Main {
  constructor({ $app }) {
    this.$target = createHTML("main", { id: "kakaoMain", role: "main" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new MArticle({ $app: this.$target });
    new SectionTab({
      $app: this.$target,
      initialState: { title: "품절주의! 역대급 핫딜", data: hotdealItems },
    });
    new SectionTab({
      $app: this.$target,
      initialState: { title: "쇼핑 급상승 키워드", data: hotkeywordItems },
    });
  }
}
