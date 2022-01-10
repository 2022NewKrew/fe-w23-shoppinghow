import Component from '../../../core/Component';

export default class MallEventItemGroup extends Component {
  template() {
    const itemGroup = this.$props.itemGroup;
    const itemForm = (itemInfo) =>{
      return `<li class="_GI_">
        <a href="" class="link_prod _GC_">
            <span class="info_thumb">
            <img src="${itemInfo.imgUrl}" width="200" height="200" class="img_top">
            </span>
            <strong class="tit_g">${itemInfo.content}</strong>
            <span class="txt_info">${itemInfo.subContent}</span>
            <span class="ico_comm2 ico_theme">테마</span>
        </a>
    </li>`;
    };
    return `
    <ul class="list_item">
        ${itemGroup.map(itemForm).join('')}
    </ul>
    `;
  }
}
