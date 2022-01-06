import { smallTitle } from '../smallTitle';
import { goodsList } from './goodsList';

export const goodsStall = ({ title, goodsData }) => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'goods-stall';
        target.appendChild(smallTitle({ title }));
        target.appendChild(goodsList(goodsData));
        return target;
    };

    return render();
};
