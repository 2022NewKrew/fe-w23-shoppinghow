import { stallTitle } from './stallTitle';
import { goodsList } from './goodsList';

export const goodsStall = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'goods-stall';
        target.appendChild(stallTitle({ title: '품절주의, 역대급 핫딜' }));
        target.appendChild(goodsList());
        return target;
    };

    return render();
};
