import ItemDataManager from "../ItemDataManager";

export default class RecentItems{
  constructor(){
    const tabClassName="recent-items-container__tab";
    const activeTabClassName="recent-items-container__tab-active";
    const activeInnerContainerClassName="recent-items-container__container-active";
    const viewTabName="최근 본 상품";
    const dibsTabName="찜한 상품";
  
    const recentItemsLi=document.getElementById("recent-items-li");
    const recentItemsContainer=document.querySelector(".recent-items-container");
    const recentItemsTabContainer=document.querySelector(".recent-items-container__tab-container");
    const viewItemsInnerContainer=recentItemsContainer.querySelector(".recent-items-container__view-container");
    const viewItemTab=document.querySelector(".recent-items-container__view-tab");
    const dibsItemsInnerContainer=recentItemsContainer.querySelector(".recent-items-container__dibs-container");
    const dibsItemTab=document.querySelector(".recent-items-container__dibs-tab");
  
    recentItemsLi.addEventListener("mouseenter", ()=>{
      recentItemsContainer.classList.remove("recent-items-container__hidden");
      ItemDataManager.fetchViewItemIds().then((data)=>{
        const viewItemIds=data;
        console.log("view data", viewItemIds);
        this.#createHtml(viewItemsInnerContainer, viewItemIds);
        viewItemTab.innerHTML=viewTabName+Object.keys(viewItemIds).length;
      });
      ItemDataManager.fetchDibsItemIds().then((data)=>{
        const dibsItemIds=data;
        this.#createHtml(dibsItemsInnerContainer, dibsItemIds);
        dibsItemTab.innerHTML=dibsTabName+Object.keys(dibsItemIds).length;
      });
    });
  
    recentItemsLi.addEventListener("mouseleave", ()=>{
      recentItemsContainer.classList.add("recent-items-container__hidden");
    });
  
    recentItemsTabContainer.addEventListener("click", (e)=>{
      if(!e.target.classList.contains(tabClassName)){
        return;
      }
      if(e.target===viewItemTab){
        // Show view items.
        dibsItemTab.classList.remove(activeTabClassName);
        dibsItemsInnerContainer.classList.remove(activeInnerContainerClassName);
        viewItemsInnerContainer.classList.add(activeInnerContainerClassName);
      }
      else{
        // Show dibs items.
        viewItemTab.classList.remove(activeTabClassName);
        viewItemsInnerContainer.classList.remove(activeInnerContainerClassName);
        dibsItemsInnerContainer.classList.add(activeInnerContainerClassName);
      }
      e.target.classList.add(activeTabClassName);
    });

    viewItemTab.click();
  }

  /**
   * @param {HTMLElement}
   * @param {Object.<string, number>}
   */
  async #createHtml(container, itemIds){
    const itemData=await ItemDataManager.fetchItemData();
    container.innerHTML=Object.keys(itemIds).map((itemId)=>(
      `<div class="recent-item"><img src="${itemData[Number(itemId)].imageSrc}">
      </img></div>`
    )).join("");
  }
}
