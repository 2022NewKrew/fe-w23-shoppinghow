import { promotion } from '../promotion/promotion.js';
import { goodsStall } from '../goodsStall/goodsStall.js';

export const topPage = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'container';
        target.appendChild(promotion());
        target.appendChild(goodsStall());
        return target;
    };

    return render();
};
