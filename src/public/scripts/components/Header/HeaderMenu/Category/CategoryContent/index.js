import { $ } from "@utils/query";
import { api } from "@utils/api";
import { Component } from "@core/Component";

export default class CategoryContent extends Component {
  setUp() {
    this.$state = {
      categoryTapList: [],
    };
  }
  template() {
    const { categoryTapList } = this.$state;
    return `
            <strong class="category__content--screen-out">카테고리별 보기</strong>
            <ul class="category__content--tab-list">
                ${
                  categoryTapList.length > 0 &&
                  categoryTapList
                    .map(item => {
                      return `
                        <li class="">
                            ${item.name}
                        </li>
                    `;
                    })
                    .join("")
                }
            </ul>
        `;
  }
  mounted() {
    this.getCategory(this.$state.categoryTapList);
  }

  async getCategory(watch) {
    const { result } = await api.get("category");
    if (JSON.stringify(watch) !== JSON.stringify(result)) {
      this.setState({ categoryTapList: result });
    }
  }
}
