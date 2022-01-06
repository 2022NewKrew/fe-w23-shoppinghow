/**
 * This main.js is the entrypoint of
 * client side javascript.
 * Feed this file to Webpack.
 */
import "./style/app.scss";
import Carousel from "./Carousel.js";
import Top10 from "./Top10";
import axios from "axios";
import {createRecentItems} from "./creates.js";

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
  axios.get("/api/view").then((res)=>{
    const viewItemIds=res.data;
    createRecentItems(viewItemsInnerContainer, viewItemIds);
    viewItemTab.innerHTML=viewTabName+Object.keys(viewItemIds).length;
  });
  axios.get("/api/dibs").then((res)=>{
    const dibsItemIds=res.data;
    createRecentItems(dibsItemsInnerContainer, dibsItemIds);
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

function initCarousel(){
  const carouselContainer=document.querySelector(".planning");
  const container=carouselContainer.querySelector(".planning__container");
  const leftBtn=carouselContainer.querySelector(".planning__left-btn");
  const rightBtn=carouselContainer.querySelector(".planning__right-btn");
  const navigationUl=carouselContainer.querySelector(".planning__navigation-ul");
  new Carousel(container, leftBtn, rightBtn, navigationUl, 3000);
}

function initTop10(){
  const element=document.querySelector(".search-top10");
  const input=document.querySelector(".search__input");
  new Top10(element, input);
}

(function initDefault(){
  viewItemTab.click();
  initCarousel();
  initTop10();
})();
