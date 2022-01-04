import { Component } from "../../core/Component";
import { $ } from "../../utils/util";
import { HeaderRolling } from "./index";

export default class HeaderTop extends Component {
  setUp() {
    this.$state = {
      title: "쇼핑하우",
      top10: [
        "1. 스노우보드",
        "2. 스테비아토마토",
        "3. led마스크",
        "4. 런닝머신",
        "5. 단백질보충제",
        "6. 앰플",
        "7. 육수팩",
        "8. 유산균",
        "9. 제기세트",
        "10. 스노우보드",
      ],
    };
  }
  template() {
    return `
    <div class="header-top">
      <div class="title">
        <h1>쇼핑하우</h1>
      </div>
      <div class="search">
        <form>
          <input type="text" class="search__input" />
          <button class="search__icon">🔍</button>
        </form>
        <ul component="header-rolling" class="search-top10" >
        </ul>
      </div>
    </div>
    `;
  }
  mounted() {
    const $headerRolling = $('[component="header-rolling"]', this.$target);

    new HeaderRolling($headerRolling, {
      top10: this.$state.top10,
    });
  }
  setEvent() {}
}
