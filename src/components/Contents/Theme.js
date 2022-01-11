import Component from "@core/Component";
import ThemeItem from "@components/Contents/ThemeItem";
import { fetchData } from "@utils/apiUtils";

const THEME_ITEM_LIST_DATA_URL = "http://localhost:3000/themeItems.json";

class Theme extends Component {
  template() {
    return `
        <div class="theme">
            <ul class="theme-container"></ul>
        </div>
    `;
  }

  async mounted() {
    const $themeItemList = this.$target.querySelector(".theme-container");
    const themeItemList = await fetchData(THEME_ITEM_LIST_DATA_URL);
    themeItemList.map((themeItem) => new ThemeItem($themeItemList, themeItem));
  }
}

export default Theme;
