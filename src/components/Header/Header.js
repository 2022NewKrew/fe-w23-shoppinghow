import SearchBar from "./SearchBar";
import Component from "@core/Component";
import Menu from "@components/Header/Menu";

class Header extends Component {
  mounted() {
    const $header = this.$target.querySelector("header");
    const $headerTop = $header.querySelector(".header-top");
    new Menu($header);
    fetch("http://localhost:3000/topItems.json")
      .then((res) => res.json())
      .then((topItemList) => {
        new SearchBar($headerTop, { topItemList });
      });
  }

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
}

export default Header;
