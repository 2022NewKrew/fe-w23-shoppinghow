import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderRecent extends Component {
  setUp() {
    this.$state = {
      recentSearchList: ["만년필", "대리석 식탁", "석류층", "캡슐 커피"],
    };
  }
  template() {
    const { recentSearchList } = this.$state;
    return `
        <div class="search__recent--title">최근 검색어</div>
        <div class="search__recent--content">
         ${
           recentSearchList.length > 0 &&
           recentSearchList
             .map(
               item => `
                <div class="search__recent--items">
                 <span>${item}</span>
                 <button>X</button>
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
