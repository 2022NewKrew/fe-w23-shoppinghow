import { stallTitle } from './stallTitle';
import { goodsList } from './goodsList';

export const goodsStall = ({ title, goodsData }) => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'goods-stall';
        target.appendChild(stallTitle({ title }));
        target.appendChild(goodsList(goodsData));
        return target;
    };

    return render();
};
