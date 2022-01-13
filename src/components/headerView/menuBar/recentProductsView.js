import { createDom } from '@utils/createDom';
import { getItemArrayFromLocalStorage } from '../../../utils/localStorage/localStorageFunctions';

const renderRecentProduct = () => {
    const productArray = getItemArrayFromLocalStorage('recentProduct');
    const productDOMArray = productArray.map((product) =>
        createDom('img', { className: 'recent-product__img', src: product.imgSrc })
    );
    return productDOMArray;
};

const renderPopUpLayer = () => {
    const layer = createDom('div', { className: 'pop-up-layer recent-goods' });
    layer.append(...renderRecentProduct());
    return layer;
};

export const recentProductsView = () => {
    const target = createDom('li', { className: 'private-menu__btn private-menu__recent-button' });

    const render = () => {
        target.innerText = '최근 본 상품';
        target.appendChild(renderPopUpLayer());
        return target;
    };

    return render();
};
