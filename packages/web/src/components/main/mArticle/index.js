import SectionTop from "src/components/main/mArticle/sectiontop";

import { createHTML } from "src/utils/dom";

import "./index.scss";

const sample = {
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

export default class MArticle {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "mArticle" });

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new SectionTop({ $app: this.$target, initialState: sample });
  }
}
