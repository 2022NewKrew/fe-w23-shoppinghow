import Component from '../../../core/Component';
import {TARGET_SELECTOR, getTargetSelector} from '../../../util/ComponentGroup';
import HotDealItemGroup from './HotDealItemGroup';

export default class ItemGroupWrap extends Component {
  template() {
    console.log(this.$props);
    const itemGroupTitle = this.$props.title;
    return `
    <div class="tit_info">
      <h3 class="tit_home">${itemGroupTitle}</h3>
    </div>
    <div data-component="${TARGET_SELECTOR.ITEM_GROUP}" class="cont_item">
    </div>
    `;
  }

  mounted() {
    this.setItemGroup();
  }

  setItemGroup() {
    const itemType = this.$props.itemType;
    // TODO: hotdeal,keyword 등 케이스 추가 예정
    switch (itemType) {
      case 'hotdeal':
        this.setHotDealItemGroup();
    }
  }

  setHotDealItemGroup() {
    const itemGroup = this.$props.itemGroup;
    const $hotDealItemGroup = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.ITEM_GROUP));
    new HotDealItemGroup($hotDealItemGroup, {itemGroup: itemGroup});
  }
}

