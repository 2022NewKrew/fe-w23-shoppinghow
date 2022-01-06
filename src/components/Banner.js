import Best from "@components/Best";
import Planning from "@components/Planning";
import Component from "@core/Component";
import planningStyle from "@style/planning.module.scss";

class Banner extends Component {
  template() {
    return `
      <div class="best"></div>
      <div class="${planningStyle.planning}"></div>
    `;
  }

  mounted() {
    const $best = this.$target.querySelector(".best");
    const $planning = this.$target.querySelector(`.${planningStyle.planning}`);

    new Best($best);
    new Planning($planning);
  }
}

export default Banner;
