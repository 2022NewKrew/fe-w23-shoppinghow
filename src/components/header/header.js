import { headerTop } from '@components/header/headerTop';
import { menuBar } from '@components/header/menuBar';

export const header = () => {
    const target = document.createElement('header');

    const render = () => {
        target.appendChild(headerTop());
        target.appendChild(menuBar());
        return target;
    };

    return render();
};
