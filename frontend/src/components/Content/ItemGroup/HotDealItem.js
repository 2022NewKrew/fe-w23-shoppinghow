import Component from '../../../core/Component';

export default class HotDealItem extends Component {
  template() {
    const index = this.$props.index;
    const itemCategory = this.$props.category;
    const itemName = this.$props.name;
    const itemPrice = this.$props.price;
    const itemImgUrl = this.$props.imgUrl;
    return `
    <li class="_GI_">
        <strong class="tit_rank">
            <a href="" class="_GC_">${index} . ${itemCategory}</a>
        </strong>
        <a href="/search/키보드/" class="link_prod _GC_" style="display: inline-block;">
            <img src="${itemImgUrl}" width="200" height="200" class="img_g">
            <strong class="tit_g">${itemName}</strong>
            <span class="txt_desc">
                <span class="num_price">${itemPrice}</span>원
            </span>
        </a>
    </li>
    `;
  }
}
