import Component from '../../../core/Component';

export default class HotDealItemGroup extends Component {
  template() {
    const itemGroup = this.$props.itemGroup;
    const itemForm = (itemInfo, index) =>{
      return `<li class="_GI_">
        <strong class="tit_rank">
            <a href="" class="_GC_">${index} . ${itemInfo.category}</a>
        </strong>
        <a href="/search/키보드/" class="link_prod _GC_" style="display: inline-block;">
            <img src="${itemInfo.imgUrl}" width="200" height="200" class="img_g">
            <strong class="tit_g">${itemInfo.name}</strong>
            <span class="txt_desc">
                <span class="num_price">${itemInfo.price}</span>원
            </span>
        </a>
    </li>`;
    };
    return `
    <ul class="list_item _GL" data-gg="{lk:pctop_reckword_c}">
        ${itemGroup.map(itemForm).join('')}
    </ul>
    `;
  }
}
