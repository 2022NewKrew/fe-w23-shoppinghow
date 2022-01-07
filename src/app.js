/**
 * This main.js is the entrypoint of
 * client side javascript.
 * Feed this file to Webpack.
 */
import "./style/app.scss";
import Carousel from "./component/Carousel";
import Top10 from "./Top10";
import Recommend from "./component/Recommend.js";
import RecentItems from "./component/RecentItems";
import { createAll } from "./creates";

function initRecentItems(){
  new RecentItems();
}

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

function initRecommend(){
  const bodyElement=document.querySelector(".recommendation__body");
  new Recommend(bodyElement);
}

(function initDefault(){
  initRecentItems();
  initCarousel();
  initTop10();
  initRecommend();
  createAll();
})();
