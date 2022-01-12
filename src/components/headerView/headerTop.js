import { search } from '@components/headerView/search';

export const headerTop = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'header-top';
        target.innerHTML = `
            <div class="title">
                <h1>쇼핑하우</h1>
            </div>
        `;
        target.appendChild(search());
        return target;
    };

    return render();
};
