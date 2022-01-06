import { banner } from './banner/banner';
import { theme } from './theme/theme';

export const promotion = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'promotion';
        target.appendChild(banner());
        target.appendChild(theme());

        return target;
    };

    return render();
};
