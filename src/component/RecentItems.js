import dibsItemIdsModel from "../model/DibsItemIdsModel";
import itemDataModel from "../model/ItemDataModel";
import viewItemIdsModel from "../model/ViewItemIdsModel";

const tabClassName="recent-items-container__tab";
const activeTabClassName="recent-items-container__tab-active";
const activeInnerContainerClassName="recent-items-container__container-active";
const hiddenClassName="recent-items-container__hidden";
const viewTabName="최근 본 상품";
const dibsTabName="찜한 상품";

export default class RecentItems{
  constructor(){
    this.itemData;
  
    this.recentItemsLi=document.getElementById("recent-items-li");
    this.recentItemsContainer=document.querySelector(".recent-items-container");
    this.recentItemsTabContainer=document.querySelector(".recent-items-container__tab-container");
    
    this.viewItemsInnerContainer=this.recentItemsContainer.querySelector(".recent-items-container__view-container");
    this.viewItemTab=document.querySelector(".recent-items-container__view-tab");

    this.dibsItemsInnerContainer=this.recentItemsContainer.querySelector(".recent-items-container__dibs-container");
    this.dibsItemTab=document.querySelector(".recent-items-container__dibs-tab");
  
    this.#init();
  }

  #init(){
    this.#fetchItemData().then(()=>{
      viewItemIdsModel.subscribe((viewItemIds)=>{
        this.#createViewItemTabHtml(viewItemIds);
      });
      dibsItemIdsModel.subscribe((dibsItemIds)=>{
        this.#createDibsItemTabHtml(dibsItemIds);
      });
      this.recentItemsLi.addEventListener("mouseenter", ()=>{
        this.recentItemsContainer.classList.remove(hiddenClassName);
      });
    
      this.recentItemsLi.addEventListener("mouseleave", ()=>{
        this.recentItemsContainer.classList.add(hiddenClassName);
      });
    
      this.recentItemsTabContainer.addEventListener("click", (e)=>{
        if(!e.target.classList.contains(tabClassName)){
          return;
        }
        if(e.target===this.viewItemTab){
          // Show view items.
          this.dibsItemTab.classList.remove(activeTabClassName);
          this.dibsItemsInnerContainer.classList.remove(activeInnerContainerClassName);
          this.viewItemsInnerContainer.classList.add(activeInnerContainerClassName);
        }
        else{
          // Show dibs items.
          this.viewItemTab.classList.remove(activeTabClassName);
          this.viewItemsInnerContainer.classList.remove(activeInnerContainerClassName);
          this.dibsItemsInnerContainer.classList.add(activeInnerContainerClassName);
        }
        e.target.classList.add(activeTabClassName);
      });
  
      this.viewItemTab.click();
    });
  }

  async #fetchItemData(){
    this.itemData=await itemDataModel.getData();
  }
  
  #createViewItemTabHtml(viewItemIds){
    this.#createHtml(this.viewItemsInnerContainer, viewItemIds);
    this.viewItemTab.innerHTML=viewTabName+Object.keys(viewItemIds).length;
  }
  
  #createDibsItemTabHtml(dibsItemIds){
    this.#createHtml(this.dibsItemsInnerContainer, dibsItemIds);
    this.dibsItemTab.innerHTML=dibsTabName+Object.keys(dibsItemIds).length;
  }
  
  /**
   * @param {HTMLElement}
   * @param {Object.<string, number>}
   */
  async #createHtml(container, itemIds){
    container.innerHTML=Object.keys(itemIds).map((itemId)=>(
      `<div class="recent-item"><img src="${this.itemData[Number(itemId)].imageSrc}">
      </img></div>`
    )).join("");
  }
}
