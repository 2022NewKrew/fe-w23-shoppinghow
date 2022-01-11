import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderKeyword extends Component {
  setUp() {
    this.$state = {
      keywordList: ["만년필", "대리석 식탁", "석류층", "캡슐커피", "에어프라이기", "시계", "탁자"],
    };
  }
  template() {
    const { keywordList } = this.$state;
    return `
        <div class="search__keyword--title">인기 쇼핑 키워드</div>
        <div class="search__keyword--content">
          ${
            keywordList.length > 0 &&
            keywordList
              .map(
                (item, idx) => `
                  <div class="search__keyword--items">
                  <strong>${idx + 1}</strong>
                  <span>${item}</span>
                </div>
                `,
              )
              .join("")
          }
         
        </div>
      `;
  }
  setEvent() {}
  mounted() {}
}
