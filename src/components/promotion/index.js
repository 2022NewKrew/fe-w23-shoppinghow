import { banner } from '@components/promotion/banner';
import { theme } from '@components/promotion/theme';

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
