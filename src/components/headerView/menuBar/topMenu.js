import { createDom } from '@utils/createDom';

const menus = ['핫딜', '베스트100', '할인특가', '기획전'];

const renderMenuDOMArray = () => {
    const menuDOMArray = menus.map((menu) =>
        createDom('li', {
            className: 'top-menu__btn',
            innerHTML: `<a href="#">${menu}</a>`,
        })
    );
    return menuDOMArray;
};

export const topMenu = () => {
    const render = () => {
        const target = createDom('ul', { className: 'top-menu' });
        target.append(...renderMenuDOMArray());
        return target;
    };

    return render();
};
