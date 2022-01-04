import { promotion } from '../promotion/promotion.js';

export const topPage = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'container';
        target.appendChild(promotion());
        return target;
    };

    return render();
};
