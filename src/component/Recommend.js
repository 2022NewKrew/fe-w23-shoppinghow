import dibsItemIdsModel from "../model/DibsItemIdsModel";
import itemDataModel from "../model/ItemDataModel";
import ThemeItem from "./ThemeItem";
import viewItemIdsModel from "../model/ViewItemIdsModel";

export default class Recommend{
  /**
   * @param {HTMLElement} bodyElement
   */
  constructor(bodyElement){
    /** @type {HTMLElement} */
    this.bodyElement=bodyElement;
    /** @type {HTMLElement} */
    this.viewedItemsContainer=bodyElement.querySelector(".viewed-items");
    /** @type {HTMLElement} */
    this.recommendItemsContainer=bodyElement.querySelector(".recommendation-items");
    this.itemData;
    /** @type {Object.<number, string>} */
    this.viewedItemsIds;
    /** @type {number} */
    this.numItemsInOnePage=5;
    /** @type {number} */
    this.currentPageIndex=0;
    /** @type {number} */
    this.currentWatchingItemId;

    this.#init();
  }

  async #init(){
    await this.#fetchItemData();
    
    this.viewedItemsContainer.addEventListener("click", (e)=>{
      const button=e.target.closest("button");
      if(button){
        // Change page.
        const isLeft=button.classList.contains("viewed-items__left-btn");
        const isRight=button.classList.contains("viewed-items__right-btn");
        if(isLeft){
          this.#goToRecentItemsPageByOffset(-1);
        }
        else if(isRight){
          this.#goToRecentItemsPageByOffset(1);
        }
        return;
      }
      // Show recommendation items.
      const itemId=e.target.closest("li").getAttribute("data-itemId");
      if(itemId===null){
        return;
      }
      Array.from(this.viewedItemsContainer.children).some((viewedItem)=>(
        viewedItem.classList.contains("viewed-items__item-active")
          ? viewedItem.classList.remove("viewed-items__item-active") || true
          : false
      ));
      e.target.closest("li").classList.add("viewed-items__item-active");
      this.#showRecommendItems(itemId);
    });

    ThemeItem.addClickEventListener(this.recommendItemsContainer);

    viewItemIdsModel.subscribe((viewItemIds)=>{
      this.viewedItemsIds=viewItemIds;
      this.#goToRecentItemsPageByOffset(0);
    });
    dibsItemIdsModel.subscribe(()=>{
      this.#goToRecentItemsPageByOffset(0);
    });
  }

  async #fetchItemData(){
    this.itemData=await itemDataModel.getData();
  }

  #showNavigationButtons(){
    this.viewedItemsContainer.insertAdjacentHTML("beforeend",
      `<button class="viewed-items__left-btn">
        <img src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c"
        alt="left">
      </button>
      <button class="viewed-items__right-btn">
        <img src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c"
        alt="right">
      </button>`
    );
  }

  /**
   * @param {number} offset
   */
  #goToRecentItemsPageByOffset(offset){
    if((this.currentPageIndex+offset)<0
      || (this.currentPageIndex+offset)*this.numItemsInOnePage>=Object.keys(this.viewedItemsIds).length
    ){
      return;
    }
    this.currentPageIndex+=offset;
    this.#showViewedItems(this.currentPageIndex);
    this.#showNavigationButtons();

    const isCurrentWatchItemClickable=Array.from(this.viewedItemsContainer.children).some((viewedItemTab)=>{
      if(this.currentWatchingItemId===viewedItemTab.getAttribute("data-itemId")){
        viewedItemTab.click();
        return true;
      }
    });

    if(isCurrentWatchItemClickable){
      return;
    }
    this.viewedItemsContainer.children[0].click();
  }

  /**
   * @param {number} pageIndex
   */
  #showViewedItems(pageIndex){
    let viewedItemIdsinPage=Object.keys(this.viewedItemsIds)
      .slice(
        pageIndex*this.numItemsInOnePage, (pageIndex+1)*this.numItemsInOnePage
      );
    if(viewedItemIdsinPage.length<this.numItemsInOnePage){
      // Fill 'undefined'.
      viewedItemIdsinPage.push(...Array(this.numItemsInOnePage-viewedItemIdsinPage.length).fill(undefined));
    }
    this.viewedItemsContainer.innerHTML=viewedItemIdsinPage.map((itemId)=>(
      itemId===undefined ?
        `<li class="viewed-items__item">
          <span class="viewed-items__empty">최근 본 상품이 없습니다.</span>
        </li>`
        : `<li class="viewed-items__item" data-itemId="${itemId}">
          <img class="viewed-items__item-image" src="${this.itemData[itemId].imageSrc}">
          <span class="viewed-items__item-title">${this.itemData[itemId].title}</span>
        </li>`
    )).join("");
  }

  /**
   * Show related recommendation items.
   * @param {number} itemId
   */
  #showRecommendItems(itemId){
    this.currentWatchingItemId=itemId;
    const recommendItemIds=this.#getRecommendItemIds(itemId);
    this.recommendItemsContainer.innerHTML=recommendItemIds.map((itemId)=> {
      const {imageSrc, title, desc}=this.itemData[Number(itemId)];
      const isDibsItem=dibsItemIdsModel.isDibsItem(itemId);
      const themeItem=new ThemeItem({itemId, imageSrc, title, desc, isDibsItem});
      return themeItem.getHtml();
    }).join("");
  }
  /**
   * Get related item IDs.
   * @param {number} itemId
   * @returns {Array.<number>}
   */
  #getRecommendItemIds(itemId){
    const recommendItemIds=Array(10).fill(itemId);
    return recommendItemIds;
  }
}
