import { Component } from "@core/Component";
import { $ } from "@utils/query";
import { api } from "@utils/api";
import { AutoCompleteStore } from "@store/AutoCompleteStore";

export default class HeaderAuto extends Component {
  setUp() {
    this.$state = {
      searchResult: [],
      query: "",
    };
    AutoCompleteStore.subscribe(this.renderHeaderAuto.bind(this));
  }
  template() {
    const { searchResult, query } = this.$state;
    return `
        <div class="search__auto--content">
        ${
          searchResult.length > 0
            ? searchResult
                .map(item => {
                  item = item.replaceAll(query, `<span>${query}</span>`);
                  return `
                    <div class="search__auto--items">
                      ${item}
                    </div>
                  `;
                })
                .join("")
            : '<div class="search__auto--none">검색결과 없음</div>'
        }
        </div>
      `;
  }
  mounted() {}
  async renderHeaderAuto() {
    const { query } = AutoCompleteStore.getState();
    const { result } = await api.get(`search?query=${query}`);
    this.setState({ searchResult: result, query: query });
  }
}
