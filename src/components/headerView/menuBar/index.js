import { createDom } from '@utils/createDom';
import { category } from './category';
import { topMenu } from './topMenu';
import { privateMenu } from './privateMenu';

const displayHandler = (element, displayProperty) => {
    const onRemoveDelayMs = 500;
    const setDisplayProperty = () => (element.style.display = displayProperty);
    if (displayProperty === 'block') return setDisplayProperty;
    const handleAfterTime = () => setTimeout(setDisplayProperty, onRemoveDelayMs);
    return handleAfterTime;
};

const addMouseEvent = (buttons) => {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
        });

        const popUpLayer = button.querySelector('.pop-up-layer');
        button.addEventListener('mouseover', displayHandler(popUpLayer, 'block'));
        button.addEventListener('mouseleave', displayHandler(popUpLayer, 'none'));
    });
};

export const menuBar = () => {
    const target = createDom('div', { className: 'header-menu' });

    const render = () => {
        const categoryBtn = category();
        const topMenuBar = topMenu();
        const privateMenus = privateMenu();

        target.innerText = '';
        target.append(categoryBtn, topMenuBar, privateMenus);

        const currentBtn = privateMenus.querySelector('.private-menu__recent-button');
        addMouseEvent([categoryBtn, currentBtn]);

        return target;
    };

    return render();
};
