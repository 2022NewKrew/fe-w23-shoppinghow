import Component from "@core/Component";
import ThemeItem from "@components/ThemeItem";

class Theme extends Component {
  template() {
    return `
        <ul class="theme-container">
        </ul>
    `;
  }

  mounted() {
    const $themeItemsList = this.$target.querySelector(".theme-container");
    fetch("http://localhost:3000/themeItems.json")
      .then((res) => res.json())
      .then((themeItemList) => {
        themeItemList.map(
          (themeItem) => new ThemeItem($themeItemsList, themeItem)
        );
      });
  }
}

export default Theme;
