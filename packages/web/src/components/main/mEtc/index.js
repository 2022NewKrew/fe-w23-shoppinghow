import ShoppingPartner from "src/components/main/mEtc/shoppingpartner";
import Notice from "src/components/main/mEtc/notice";

import { createHTML } from "src/utils/dom";

import "./index.scss";

const partnerList = [
  {
    title: "오픈마켓",
    malls: [
      "G마켓",
      "옥션",
      "11번가",
      "인터파크",
      "롯데온",
      "qoo10",
      "쿠팡",
      "이베이쇼핑",
    ],
  },
  {
    title: "백화점",
    malls: ["AKmall", "롯데백화점", "갤러리아몰", "SSG", "SM면세점"],
  },
  {
    title: "홈쇼핑",
    malls: [
      "CJ온스타일",
      "롯데홈쇼핑",
      "GS SHOP",
      "현대 Hmall",
      "NSmall",
      "홈&쇼핑",
      "K쇼핑",
      "신세계티비쇼핑",
      "공영홈쇼핑",
    ],
  },
  {
    title: "마트/생활",
    malls: [
      "홈플러스",
      "NH마켓",
      "롯데마트",
      "텐바이텐",
      "제로투세븐",
      "동원몰",
      "CJ더마켓",
      "알파몰",
      "아이소이",
      "1300k",
      "사조몰",
      "다이소몰",
    ],
  },
  {
    title: "소셜",
    malls: ["G9", "위메프", "티몬"],
  },
  {
    title: "패션",
    malls: [
      "하프클럽",
      "패션플러스",
      "아이스타일24",
      "LFmall",
      "보리보리",
      "머스트잇",
      "위즈위드",
      "무신사스토어",
      "품바이",
      "루이까또즈",
      "마이클코어스",
      "가방팝",
      "프리쉽",
    ],
  },
  {
    title: "레저/취미",
    malls: ["오케이몰", "고르고타고"],
  },
  {
    title: "도서/공연",
    malls: [
      "YES24 티켓",
      "G마켓 티켓",
      "옥션 티켓",
      "티켓 링크",
      "인터파크 티켓",
    ],
  },
];

export default class MEtc {
  constructor({ $app }) {
    this.$target = createHTML("div", { className: "mEtc" });

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new ShoppingPartner({
      $app: this.$target,
      initialState: partnerList,
    });
    new Notice({
      $app: this.$target,
    });
  }
}
