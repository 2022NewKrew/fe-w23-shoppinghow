import { hotDealTemplate } from "./template/container/hotDealTemplate.js";
import { promotionTemplate } from "./template/container/promotionTemplate.js";

// example dummy
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
        </li>`

    target.innerHTML = Array(10).fill(0).reduce( (html, item) => html+hotdealItemTpl, ``);
}

export const makeContainerElement = (containerElement) => {
    const promotionTpl = promotionTemplate({
        best: {href: "", imgUrl: "//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC"},
        carouselList: [],
        themeList: []
    });
    const hotDealTpl = hotDealTemplate();

    containerElement.insertAdjacentHTML('beforeend',promotionTpl);
    containerElement.insertAdjacentHTML('beforeend', hotDealTpl);

    makeHotDealHTML();
}