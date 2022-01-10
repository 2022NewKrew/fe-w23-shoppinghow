import Best from "@components/Contents/Best";
import Planning from "@components/Contents/Planning";
import Component from "@core/Component";

class Banner extends Component {
  template() {
    return `
        <div class="banner"></div>
    `;
  }

  mounted() {
    const $banner = this.$target.querySelector(".banner");

    new Best($banner);
    new Planning($banner);
  }
}

export default Banner;
