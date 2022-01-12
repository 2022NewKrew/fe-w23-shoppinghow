import { createDom } from '@utils/createDom';
import { smallTitle } from '@components/smallTitle';
import { goodsList } from '@components/goodsStall/goodsList';

export const goodsStall = ({ title, type, goodsData }) => {
    const target = document.createElement('div');

    const render = () => {
        if (goodsData.length === 0) return target;
        target.className = 'goods-stall';
        target.appendChild(smallTitle({ title }));
        target.appendChild(goodsList(type, goodsData));
        return target;
    };

    return render();
};
