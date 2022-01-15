import Carousel from "./component/Carousel";
import dibsItemIdsModel from "./model/DibsItemIdsModel";
import itemDataModel from "./model/ItemDataModel";
import RecentItems from "./component/RecentItems";
import Recommend from "./component/Recommend.js";
import SearchBar from "./component/SearchBar";
import ThemeItem from "./component/ThemeItem";

function createHotDealHtml(){
  const container = document.querySelector(".hot-deal-list");
  const hotDealItemTpl = `
      <li class="hot-deal__item">
          <a href="" class="hot-deal__link">
              <span class="hot-deal__thumb">
                  <img src="//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895" class="hot-deal__img" alt="">
              </span>

              <strong class="hot-deal__title">구매1만↑우유앙빵10+10</strong>

              <span class="hot-deal__detail-price">
                  <span class="txt-price">18,500 </span>
                  <span class="txt-price-percent">핫딜가</span>
              </span>
          </a>
      </li>`;

  container.innerHTML = Array(10).fill(0).reduce( (html) => html+hotDealItemTpl, "");
}

/**
 * @param {boolean} addEventListenerFlag flag whether to set event listener.
 */
async function createItemsHtml(addEventListenerFlag=false){
  const container = document.querySelector(".theme-container");
  const themeItemData=await itemDataModel.getData();

  container.innerHTML=themeItemData.map((itemData)=>{
    const isDibsItem=dibsItemIdsModel.isDibsItem(itemData.itemId);
    return new ThemeItem({...itemData, isDibsItem}).getHtml();
  }).join("");

  if(addEventListenerFlag){
    ThemeItem.addClickEventListener(container);
  }
}

function createRecentItems(){
  new RecentItems();
}

function createCarousel(){
  const carouselContainer=document.querySelector(".planning");
  const container=carouselContainer.querySelector(".planning__container");
  const leftBtn=carouselContainer.querySelector(".planning__left-btn");
  const rightBtn=carouselContainer.querySelector(".planning__right-btn");
  const navigationUl=carouselContainer.querySelector(".planning__navigation-ul");
  new Carousel(container, leftBtn, rightBtn, navigationUl, 3000);
}

function createSearchBar(){
  const searchElement=document.querySelector(".search");
  const input=searchElement.querySelector(".search__input");
  new SearchBar(searchElement, input);
}

function createRecommend(){
  const bodyElement=document.querySelector(".recommendation__body");
  new Recommend(bodyElement);
}

function createAll(){
  createHotDealHtml();
  createRecentItems();
  createCarousel();
  createSearchBar();
  createRecommend();
  createItemsHtml(true);

  dibsItemIdsModel.subscribe(()=>{
    createItemsHtml(false);
  });
}

export { createAll };
