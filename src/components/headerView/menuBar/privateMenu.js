import { createDom } from '@utils/createDom';
import { recentProductsView } from './recentProductsView';

const renderLoginButton = () => {
    const loginButton = createDom('li', {
        className: 'private-menu__btn',
        innerHTML: "<a href='#'>로그인</a>",
    });
    return loginButton;
};

export const privateMenu = () => {
    const target = createDom('ul', { className: 'private-menu' });
    const render = () => {
        const loginButton = renderLoginButton();
        const recentProduct = recentProductsView();
        target.append(loginButton, recentProduct);
        return target;
    };

    return render();
};
