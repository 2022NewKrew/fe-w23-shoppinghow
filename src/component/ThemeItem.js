import dibsItemIdsModel from "../model/DibsItemIdsModel";
import viewItemIdsModel from "../model/ViewItemIdsModel";

export default class ThemeItem{
  /**
   * @param {object} param
   * @param {number} param.itemId
   * @param {string} param.imageSrc
   * @param {string} param.title
   * @param {string} param.desc
   * @param {boolean} param.isDibsItem
   */
  constructor({itemId, imageSrc, title, desc, isDibsItem}){
    this.itemId=itemId;
    this.imageSrc=imageSrc;
    this.title=title;
    this.desc=desc;
    this.isDibsItem=isDibsItem;
  }
  getHtml(){
    const {itemId, imageSrc, title, desc, isDibsItem}=this;
    return `
    <li class="theme-item" data-itemId="${itemId}">
      <a href="#" class="theme__link">
        <span class="theme-item__info">
          <img src="${imageSrc}" width="200" height="200" class="img_top" alt="${title}">
        </span>
        <strong class="theme-item__title">${title}</strong>
        <span class="theme-item__desc">${desc}</span>
      </a>
      <div class="theme-item__icon">
    ${isDibsItem ?
    "<img src=\"https://cdn-icons-png.flaticon.com/512/833/833472.png\">"
    : "<img src=\"https://cdn-icons-png.flaticon.com/512/833/833300.png\">"}
      </div>
    </li>`;
  }
  /**
   * Add click event listener to the container.
   * @param {HTMLElement} container
   */
  static addClickEventListener(container){
    container.removeEventListener("click", eventListener);
    function eventListener(e){
      const itemId=e.target.closest("li").getAttribute("data-itemId");
      if(itemId===null){
        return;
      }
      if(e.target.closest(".theme-item__icon")!==null){
        dibsItemIdsModel.addId(itemId);
        return;
      }
      viewItemIdsModel.addId(itemId);
    }
    container.addEventListener("click", eventListener);
  }
}
