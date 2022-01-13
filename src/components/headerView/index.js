import { headerTop } from '@components/headerView/headerTop';
import { menuBar } from '@components/headerView/menuBar';

export const headerView = () => {
    const target = document.createElement('header');

    const render = () => {
        target.appendChild(headerTop());
        target.appendChild(menuBar());
        return target;
    };

    return render();
};
