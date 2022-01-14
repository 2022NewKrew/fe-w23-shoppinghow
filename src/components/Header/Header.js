import SearchBar from "./SearchBar";
import Component from "@core/Component";
import Menu from "@components/Header/Menu";
import { fetchData } from "@utils/apiUtils";

const TOP_ITEM_LIST_DATA_URL = "http://localhost:3000/topItems.json";

class Header extends Component {
  template() {
    return `
        <header>
            <div class="header-top">
                <div class="title">
                    <h1>쇼핑하우</h1>
                </div>
            </div>
        </header>
    `;
  }

  async mounted() {
    const $header = this.$target.querySelector("header");
    const $headerTop = $header.querySelector(".header-top");
    new Menu($header);

    const topItemList = await fetchData(TOP_ITEM_LIST_DATA_URL);
    new SearchBar($headerTop, { topItemList });
  }
}

export default Header;
