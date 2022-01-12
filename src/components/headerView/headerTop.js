import { createDom } from '@utils/createDom';
import { searchView } from '@components/headerView/searchView';

export const headerTop = () => {
    const render = () => {
        const target = createDom('div', { className: 'header-top' });
        target.innerHTML = `
            <div class="title">
                <h1>쇼핑하우</h1>
            </div>
        `;
        target.appendChild(searchView());
        return target;
    };

    return render();
};
