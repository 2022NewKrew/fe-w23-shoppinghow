import { createDom } from '@utils/createDom';

const renderPopUpLayer = () => {
    const layer = createDom('div', { className: 'pop-up-layer current-goods' });

    return layer;
};

export const recentProductsView = () => {
    const target = createDom('li', { className: 'private-menu__btn private-menu__current-button' });

    const render = () => {
        target.innerText = '최근 본 상품';
        target.appendChild(renderPopUpLayer());
        return target;
    };

    return render();
};
