import { priceTag } from '@components/priceTag.js';

export const goodsItem = ({ title, imgSrc, price, priceEvent }) => {
    const target = document.createElement('li');

    const render = () => {
        target.className = 'goods-stall__item';
        target.innerHTML = `
            <a href="" class="goods-stall__link">
            <span class="goods-stall__thumb">
                <img src=${imgSrc} class="goods-stall__img" alt="">
            </span>
            <strong class="goods-stall__title">${title}</strong>

            <span class="goods-stall__detail-price">
                <span class="txt-price-percent">${priceEvent}</span>
            </span>
            </a>
        `;
        const parentNode = target.querySelector('.goods-stall__detail-price');
        parentNode.insertBefore(priceTag(price), parentNode.firstElementChild);
        return target;
    };

    return render();
};
