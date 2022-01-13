import { $ } from "@utils/query";
import { api } from "@utils/api";
import { Component } from "@core/Component";
import { RecentViewStore } from "@store/RecentViewStore";
export default class PrivateContent extends Component {
  setUp() {
    this.$state = {
      recentViewList: [],
    };
  }
  template() {
    const { recentViewList } = this.$state;
    return `
    <div class="private-menu__title">최근 본 상품 ${recentViewList.length}</div>
    <div class="private-menu__list">
        ${
          recentViewList.length > 0 &&
          recentViewList
            .map(
              item => `
            <img src="${item.src}" width="120" height="120" />
        `,
            )
            .join("")
        }
    </div>
        `;
  }
  setEvent() {}
  removeEvent() {}
  mounted() {
    RecentViewStore.subscribe(this.renderHeaderRecent.bind(this));
    this.getRecentViewList();
  }
  async getRecentViewList() {
    const { result } = await api.get("recent");
    if (JSON.stringify(this.$state.recentViewList) !== JSON.stringify(result)) {
      this.setState({ recentViewList: result });
    }
  }
  renderHeaderRecent() {
    const { recentViewList } = RecentViewStore.getState();
    console.log(recentViewList);
    if (JSON.stringify(this.$state.recentViewList) !== JSON.stringify(recentViewList)) {
      this.setState({ recentViewList: recentViewList });
    }
  }
}
