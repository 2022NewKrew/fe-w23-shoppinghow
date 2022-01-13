import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderKeyword extends Component {
  setUp() {}
  template() {
    const { top10 } = this.$props;
    return `
        <div class="search__keyword--title">인기 쇼핑 키워드</div>
        <div class="search__keyword--content">
          ${
            top10.length > 0 &&
            top10
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
