import Component from '../../../core/Component';

export default class HotDealItemGroup extends Component {
  template() {
    const itemGroup = this.$props.itemGroup;
    const itemForm = (itemInfo, index) =>{
      const itemName = itemInfo.name;
      const itemDiscountPrice = itemInfo.discountPrice;
      const itemDiscountPercent = itemInfo.discountPercent;
      const itemRegularPrice = itemInfo.regularPrice;
      const itemImgUrl = itemInfo.imgUrl;
      return `
      <li class="_GI_">
        <a href="" class="link_prod _GC_">
          <span class="thumb_hotdeal">
            <img src="${itemImgUrl}" class="img_g" alt="">
          </span>
          <strong class="tit_g">${itemName}</strong>
          <span class="detail_price">
            <span class="info_discount">
              <span class="txt_discount">${itemDiscountPrice}<span class="txt_unit">원</span></span>
              <span class="txt_percent">${itemDiscountPercent}<span class="txt_unit">%</span></span>
            </span>
            <span class="txt_price">${itemRegularPrice}<span class="screen_out">원</span></span>
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
