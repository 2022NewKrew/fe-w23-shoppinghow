import '@styles/libs/reset.css';
import '@sass/app.scss';
import PageRouter from '@utils/pageRouter';
import { onLocationChangeHandler } from '@utils/customEventHandler';
import { headerView } from '@components/headerView';
import { addItemToLocalStorage } from '@utils/localStorage/localStorageFunctions';
import { REMOVE_PRE_DUPLICATED_ITEM_CONSTRAINTS } from '@utils/localStorage/constraintsFunction';

const productClickHandler = (e) => {
    e.preventDefault();
    let product = e.target.closest('.goods-stall__link');
    if (!product) return;
    const newProductData = { id: product.dataset.productId, imgSrc: product.dataset.productImgSrc };

    const IS_SAME_PRODUCT = (pro1, pro2) => pro1.id === pro2.id;
    const addItemRule = REMOVE_PRE_DUPLICATED_ITEM_CONSTRAINTS(IS_SAME_PRODUCT);
    addItemToLocalStorage('recentProduct', newProductData, addItemRule);
};

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('body');
    const mainHeader = headerView();
    const mainContents = document.createElement('div');
    const footer = document.createElement('footer');

    app.appendChild(mainHeader);
    app.appendChild(mainContents);
    app.appendChild(footer);

    const pageRouter = new PageRouter(mainContents);
    window.addEventListener('locationchange', (e) => onLocationChangeHandler(e, pageRouter));
    window.addEventListener('popstate', pageRouter.renderPage);
    app.addEventListener('click', (e) => productClickHandler(e));

    pageRouter.renderPage();
});
