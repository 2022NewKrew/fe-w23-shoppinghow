import itemDataModel from "../model/ItemDataModel";
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
    this.currentPage=0;

    this.#init();
  }

  async #init(){
    await this.#fetchItemData();

    viewItemIdsModel.subscribe((viewItemIds)=>{
      this.viewedItemsIds=viewItemIds;
      this.#goToRecentItemsPageByOffset(0);
    });
    
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
        viewedItem.classList.contains("viewed-items__item-active") ?
          viewedItem.classList.remove("viewed-items__item-active") || true
          : false
      ));
      e.target.closest("li").classList.add("viewed-items__item-active");
      this.#showRecommendItems(itemId);
    });
  }

  #fetchItemData(){
    return new Promise((resolve)=>{
      const helper=(itemData)=>{
        this.itemData=itemData;
        itemDataModel.unsubscribe(helper);
        resolve();
      };
      itemDataModel.subscribe(helper);
    });
  }

  #showNavigationButtons(){
    this.viewedItemsContainer.insertAdjacentHTML("beforeend",
      `<button class="viewed-items__left-btn">
        <img src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c" alt="left">
      </button>
      <button class="viewed-items__right-btn">
        <img src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c" alt="right">
      </button>`
    );
  }

  /**
   * @param {number} offset
   */
  #goToRecentItemsPageByOffset(offset){
    if((this.currentPage+offset)<0 || (this.currentPage+offset)*this.numItemsInOnePage>=Object.keys(this.viewedItemsIds).length){
      return;
    }
    this.currentPage+=offset;
    this.#showViewedItems(this.currentPage);
    this.#showNavigationButtons();
    this.viewedItemsContainer.children[0].click();
  }

  /**
   * @param {number} pageIndex
   */
  #showViewedItems(pageIndex){
    let viewedItemIdsinPage=Object.keys(this.viewedItemsIds).slice(pageIndex*this.numItemsInOnePage, (pageIndex+1)*this.numItemsInOnePage);
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
    const recommendItemIds=this.#getRecommendItemIds(itemId);
    this.recommendItemsContainer.innerHTML=recommendItemIds.map((itemId)=> {
      const {imageSrc, title, desc}=this.itemData[Number(itemId)];
      return `<li class="theme-item" data-itemId="${itemId}">
        <a href="#" class="theme__link">
          <span class="theme-item__info">
            <img src="${imageSrc}" width="200" height="200" class="img_top" alt="${title}">
          </span>
          <strong class="theme-item__title">${title}</strong>
          <span class="theme-item__desc">${desc}</span>
        </a>
          <div class="theme-item__icon">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
          </div>
      </li>`;
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
