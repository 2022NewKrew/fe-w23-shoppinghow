import Component from "@core/Component";

class PrivateItemsTitleWrapper extends Component {
  template() {
    const { type, items } = this.props;
    return `
        <div class="private-items__title-wrapper ${type}-items__title-wrapper">
            <span class="${type}-items__title">최근 본 상품</span>
            <span class="${type}-items__count">${items.length}</span>
        </div>
    `;
  }
}

export default PrivateItemsTitleWrapper;
