import axios from "axios";

let itemData;
const itemDataUrl="/json/items.json";

async function fetchItemData(){
  itemData=await (await fetch(itemDataUrl)).json();
}

function createsHotDealHtml(){
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

function createItemsHtml(){
  const container = document.querySelector(".theme-container");
  const themeItemData=itemData.slice(0, 5);

  container.innerHTML=themeItemData.map(
    (itemData)=>createItemHtml(itemData)
  ).join("");

  container.addEventListener("click", (e)=>{
    const itemId=e.target.closest("li").getAttribute("data-itemId");
    if(itemId===null){
      return;
    }
    if(e.target.closest(".theme-item__icon")!==null){
      axios.post("/api/dibs/", {
        itemId: itemId
      });
      return;
    }
    axios.post("/api/view/", {
      itemId: itemId
    });
  });
}

/**
 * @param {HTMLElement} container
 * @param {object} itemIds
 */
function createRecentItems(container, itemIds){
  container.innerHTML=Object.keys(itemIds).map((itemId)=>(
    `<div class="recent-item"><img src="${itemData[Number(itemId)].imageSrc}">
    </img></div>`
  )).join("");
}

async function createAll(){
  await fetchItemData();
  createsHotDealHtml();
  createItemsHtml();
}
createAll();

export { createRecentItems };
