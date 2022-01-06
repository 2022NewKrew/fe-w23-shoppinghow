import axios from "axios";
import fetchItemData from "./fetchItemData";

export default class Recommend{
  /**
   * @param {HTMLElement} bodyElement
   */
  constructor(bodyElement){
    /** @type {HTMLElement} */
    this.bodyElement=bodyElement;
    /** @type {HTMLElement} */
    this.pickedItemsElement=bodyElement.querySelector(".picked-items");
    /** @type {HTMLElement} */
    this.recommendationItemsElement=bodyElement.querySelector(".recommendation-items");
    this.itemData;
    /** @type {Object.<number, string>} */
    this.recentItemsData;
    /** @type {number} */
    this.numItemsInPage=5;
    /** @type {number} */
    this.currentPage=0;

    fetchItemData().then((itemData)=>{
      this.itemData=itemData;
      axios.get("/api/view").then((res)=>{
        this.recentItemsData=res.data;
        this.showPickedItems();
      });
    });
  }

  /**
   * @param {number} offset
   */
  goToRecentItemsPageByOffset(offset){
    if((this.currentPage+offset)<0 || (this.currentPage+offset)*this.numItemsInPage>Object.keys(this.recentItemsData)){
      return;
    }
  }

  showPickedItems(){
    this.pickedItemsElement.innerHTML=Object.keys(this.recentItemsData).map((itemId)=>(
      `<li class="picked-items__item">
        <img class="picked-items__item-image" src="${this.itemData[itemId].imageSrc}">
        <span class="picked-items__item-title">${this.itemData[itemId].title}</span>
      </li>`
    ));
  }
}
