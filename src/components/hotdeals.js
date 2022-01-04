export default function createHotdeals() {
  const hotdeals = document.createElement("div");

  hotdeals.innerHTML = `
    <div class="hot-deal">
        <h2 class="section-title">품절주의, 역대급 핫딜</h2>
        <ul class="hot-deal-list"></ul>
    </div>
    `;

  const hotdealContainer = document.getElementById("hotdeals");
  hotdealContainer.appendChild(hotdeals);
}

window.addEventListener("DOMContentLoaded", () => {
  makeHotDealHTML();
});

function makeHotDealHTML() {
  const target = document.querySelector(".hot-deal-list");
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

  target.innerHTML = Array(10)
    .fill(0)
    .reduce((html, item) => html + hotdealItemTpl, ``);
}
