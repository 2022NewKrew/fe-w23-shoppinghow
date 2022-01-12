import Component from "@core/Component";
import PrivateMenuFloatLayer from "@components/Header/PrivateMenuFloatLayer";

class PrivateMenu extends Component {
  template() {
    return `
      <ul class="private-menu">
          <li class="private-menu__btn"><a href="#">로그인</a></li>
          <div class="activate-private-wrapper">
              <li class="private-menu__btn"><a href="#">최근본상품</a></li>
          </div>
      </ul>`;
  }

  mounted() {
    const $activateRecentWrapper = this.$target.querySelector(
      ".activate-private-wrapper"
    );
    new PrivateMenuFloatLayer($activateRecentWrapper);
  }

  setEvent() {
    this.addEvent(
      "mouseover",
      ".private-menu",
      this.handleMouseover.bind(this)
    );
    this.addEvent("mouseout", ".private-menu", this.handleMouseout.bind(this));
  }

  handleMouseover(e) {
    const { target } = e;
    if (target.closest(".activate-private-wrapper")) {
      this.activateRecentWrapper();
    }
  }

  handleMouseout(e) {
    const { toElement } = e;
    if (!toElement?.closest(".activate-private-wrapper")) {
      this.inactivateRecentWrapper();
    }
  }

  activateRecentWrapper() {
    const $privateFloatLayer = this.$target.querySelector(
      ".private-float-layer"
    );
    $privateFloatLayer.style.visibility = "visible";
  }

  inactivateRecentWrapper() {
    const $privateFloatLayer = this.$target.querySelector(
      ".private-float-layer"
    );
    $privateFloatLayer.style.visibility = "hidden";
  }
}

export default PrivateMenu;
