import Component from "@core/Component";
import style from "@style/planning.module.scss";

class PlanningItem extends Component {
  template() {
    const { img, idx } = this.props;
    return `
        <a href="#" target="_blank" class="${style["link"]}" data-id="${idx}">
            <img src="${img}" width="480" height="340" class="img_g" alt="">
        </a>
    `;
  }
}

export default PlanningItem;
