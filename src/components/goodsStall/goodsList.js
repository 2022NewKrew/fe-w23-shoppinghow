import { goodsItem } from '@components/goodsStall/goodsItem';

export const goodsList = (goodsData) => {
    const target = document.createElement('ul');

    const render = () => {
        target.className = 'goods-stall-list';
        goodsData.forEach((goods) => target.appendChild(goodsItem(goods)));

        return target;
    };

    return render();
};
