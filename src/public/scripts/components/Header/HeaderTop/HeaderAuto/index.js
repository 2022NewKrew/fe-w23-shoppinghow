import { Component } from "@core/Component";
import { $ } from "@utils/query";

export default class HeaderAuto extends Component {
  setUp() {
    this.$state = {
      searchAutoList: ["만년필", "만년필1", "만년필2", "만년필3", "만년필4", "만년필5", "만년필6", "만년필7", "만년필8"],
    };
  }
  template() {
    const { searchAutoList } = this.$state;
    return `
        <div class="search__auto--content">
        ${
          searchAutoList.length > 0 &&
          searchAutoList
            .map(
              item => `
               <div class="search__auto--items">
                ${item}
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
