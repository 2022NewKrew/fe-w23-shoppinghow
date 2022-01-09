import ItemDataManager from "./ItemDataManager";
import Carousel from "./component/Carousel";
import Top10 from "./Top10";
import Recommend from "./component/Recommend.js";
import RecentItems from "./component/RecentItems";

function createHotDealHtml(){
  const container = document.querySelector(".hot-deal-list");
  const hotdealItemTpl = `
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

  container.innerHTML = Array(10).fill(0).reduce( (html) => html+hotdealItemTpl, "");
}

function createItemHtml({itemId, imageSrc, title, desc}){
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
      <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
    </div>
  </li>`;
}
// <img src="https://cdn-icons-png.flaticon.com/512/1076/1076984.png">

async function createItemsHtml(){
  const container = document.querySelector(".theme-container");
  const themeItemData=await ItemDataManager.fetchItemData();

  container.innerHTML=themeItemData.map(
    (itemData)=>createItemHtml(itemData)
  ).join("");

  container.addEventListener("click", (e)=>{
    const itemId=e.target.closest("li").getAttribute("data-itemId");
    if(itemId===null){
      return;
    }
    if(e.target.closest(".theme-item__icon")!==null){
      ItemDataManager.updateDibsItem(itemId);
      return;
    }
    ItemDataManager.updateViewItem(itemId);
  });
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

function createTop10(){
  const element=document.querySelector(".search-top10");
  const input=document.querySelector(".search__input");
  new Top10(element, input);
}

function createRecommend(){
  const bodyElement=document.querySelector(".recommendation__body");
  new Recommend(bodyElement);
}

function createAll(){
  createHotDealHtml();
  createItemsHtml();
  createRecentItems();
  createCarousel();
  createTop10();
  createRecommend();
}

export { createAll };
