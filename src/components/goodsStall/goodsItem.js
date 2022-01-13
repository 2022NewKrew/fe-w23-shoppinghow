import { createDom } from '@utils/createDom';
import { priceTag } from '@components/priceTag.js';

const renderSearchKeyword = (keyword) => {
    const target = createDom('div', { className: 'goods-stall__title' });
    target.innerText = keyword;
    return target;
};

const renderItem = (type, hotDealTitle, { id, title, imgSrc, price }) => {
    const priceEvent = type === 'hotDeal' ? '핫딜가' : '테마';
    if (hotDealTitle) title = hotDealTitle;
    const item = createDom('div');
    item.innerHTML = `
        <a href="" class="goods-stall__link" data-product-id=${id} data-product-img-src=${imgSrc}>
            <span class="goods-stall__thumb">
                <img src=${imgSrc} class="goods-stall__img" alt="">
            </span>
            <strong class="goods-stall__title">${title}</strong>

            <span class="goods-stall__detail-price">
                <span class="txt-price-percent">${priceEvent}</span>
            </span>
        </a>
    `;
    const priceContainer = item.querySelector('.goods-stall__detail-price');
    priceContainer.insertBefore(priceTag(price), priceContainer.firstElementChild);
    return item;
};

export const goodsItem = ({ type, goods }) => {
    const render = () => {
        const target = createDom('li', { className: 'goods-stall__item' });
        if (type === 'rising') target.appendChild(renderSearchKeyword(goods.searchKeyword));
        const item = renderItem(type, goods.hotDealTitle, goods.product);
        target.appendChild(item);
        return target;
    };

    return render();
};
