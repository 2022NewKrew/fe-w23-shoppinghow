import Component from "@core/Component";

class PrivateItemsContainer extends Component {
  template() {
    const { type, items, visibility } = this.props;
    return `
    <div class="${type}-items__wrapper private-items__wrapper" style='visibility: ${visibility};'>
        <div class="private-items__products-list">${items
          .map((item) => "<img src=" + item.img + ">")
          .join("")}
        </div>
    </div>
    `;
  }
}

export default PrivateItemsContainer;
