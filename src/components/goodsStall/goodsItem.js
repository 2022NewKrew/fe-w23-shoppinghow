import { priceTag } from '../priceTag.js';

export const goodsItem = ({ title, imgSrc, price, priceEvent }) => {
    const target = document.createElement('li');

    const render = () => {
        target.className = 'hot-deal__item';
        target.innerHTML = `
            <a href="" class="hot-deal__link">
            <span class="hot-deal__thumb">
                <img src=${imgSrc} class="hot-deal__img" alt="">
            </span>
            <strong class="hot-deal__title">${title}</strong>

            <span class="hot-deal__detail-price">
                <span class="txt-price-percent">${priceEvent}</span>
            </span>
            </a>
        `;
        const parentNode = target.querySelector('.hot-deal__detail-price');
        console.log(parentNode.firstElementChild);
        parentNode.insertBefore(priceTag(price), parentNode.firstElementChild);
        return target;
    };

    return render();
};
