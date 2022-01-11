import { best } from '@components/promotion/banner/best.js';
import { planning } from '@components/promotion/banner/planning/planning.js';

export const banner = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'banner';
        target.innerHTML = '';
        target.appendChild(best());
        target.appendChild(planning());

        return target;
    };

    return render();
};
