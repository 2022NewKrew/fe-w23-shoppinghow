import { headerTop } from './headerTop';
import { menuBar } from './menuBar';

export const header = () => {
    const target = document.createElement('header');

    const render = () => {
        target.appendChild(headerTop());
        target.appendChild(menuBar());
        return target;
    };

    return render();
};
