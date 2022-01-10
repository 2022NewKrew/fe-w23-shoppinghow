import Component from '../../../core/Component';
// TODO: cMain작업예정(상품 리스트)
export default class ItemGroup extends Component {
  template() {
    return `
    <div class="tit_info">
      <h3 class="tit_home"></h3>
    </div>
    <div data-component="item-list" class="cont_item">
    </div>
    `;
  }
}
