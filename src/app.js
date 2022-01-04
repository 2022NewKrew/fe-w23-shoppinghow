/**
 * This main.js is the entrypoint of
 * client side javascript.
 * Feed this file to Webpack.
 */
import axios from "axios";
import "./style/app.scss";
import Carousel from "./Carousel.js";
import {createRecentItems} from "./creates.js";

const tabClassName="recent-items-container__tab";
const activeTabClassName="recent-items-container__tab-active";
const activeInnerContainerClassName="recent-items-container__container-active";
const viewTabName="최근 본 상품";
const zzimTabName="찜한 상품";

const recentItemsLi=document.getElementById("recent-items-li");
const recentItemsContainer=document.querySelector(".recent-items-container");
const recentItemsTabContainer=document.querySelector(".recent-items-container__tab-container");
const viewItemsInnerContainer=recentItemsContainer.querySelector(".recent-items-container__view-container");
const viewItemTab=document.querySelector(".recent-items-container__view-tab");
const zzimItemsInnerContainer=recentItemsContainer.querySelector(".recent-items-container__zzim-container");
const zzimItemTab=document.querySelector(".recent-items-container__zzim-tab");

recentItemsLi.addEventListener("mouseenter", (e)=>{
  recentItemsContainer.classList.remove("recent-items-container__hidden");
  axios.get("/api/view").then((res)=>{
    const viewItemIds=res.data;
    createRecentItems(viewItemsInnerContainer, viewItemIds);
    viewItemTab.innerHTML=viewTabName+Object.keys(viewItemIds).length;
  });
  axios.get("/api/zzim").then((res)=>{
    const zzimItemIds=res.data;
    createRecentItems(zzimItemsInnerContainer, zzimItemIds);
    zzimItemTab.innerHTML=zzimTabName+Object.keys(zzimItemIds).length;
  });
});

recentItemsLi.addEventListener("mouseleave", (e)=>{
  recentItemsContainer.classList.add("recent-items-container__hidden");
});

recentItemsTabContainer.addEventListener("click", (e)=>{
  if(!e.target.classList.contains(tabClassName)){
    return;
  }
  if(e.target===viewItemTab){
    // Show view items.
    zzimItemTab.classList.remove(activeTabClassName);
    zzimItemsInnerContainer.classList.remove(activeInnerContainerClassName);
    viewItemsInnerContainer.classList.add(activeInnerContainerClassName);
  }
  else{
    // Show zzim items.
    viewItemTab.classList.remove(activeTabClassName);
    viewItemsInnerContainer.classList.remove(activeInnerContainerClassName);
    zzimItemsInnerContainer.classList.add(activeInnerContainerClassName);
  }
  e.target.classList.add(activeTabClassName);
});

function initCarousel(){
  const carouselContainer=document.querySelector(".planning");
  const container=carouselContainer.querySelector(".planning__container");
  const leftBtn=carouselContainer.querySelector(".planning__left-btn");
  const rightBtn=carouselContainer.querySelector(".planning__right-btn");
  const navigationUl=carouselContainer.querySelector(".planning__navigation-ul");
  const carousel=new Carousel(container, leftBtn, rightBtn, navigationUl);
}

(function initDefault(){
  viewItemTab.click();
  initCarousel();
})();
