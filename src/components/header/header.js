import { headerInnerHTML } from './headerInnerHTML';
import { searchTop10 } from './searchTop10';

const addMouseEvent = (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });

    const popUpLayer = button.querySelector('.pop-up-layer');
    button.addEventListener('mouseover', () => (popUpLayer.style.display = 'block'));
    button.addEventListener('mouseout', () => {
        setTimeout(() => (popUpLayer.style.display = 'none'), 1000);
    });
};

export const header = () => {
    const target = document.createElement('header');

    const render = () => {
        target.innerHTML = headerInnerHTML;
        const categoryBtn = target.querySelector('.category');
        const currentBtn = target.querySelector('.private-menu__current-button');
        addMouseEvent(categoryBtn);
        addMouseEvent(currentBtn);
        searchTop10(target);
        return target;
    };

    return render();
};
