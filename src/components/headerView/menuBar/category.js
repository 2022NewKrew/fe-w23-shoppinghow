import { createDom } from '@utils/createDom';

export const category = () => {
    const render = () => {
        const target = createDom('div', { className: 'category' });
        target.innerHTML = `
            <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
            <div class="pop-up-layer category__container"></div>
        `;
        return target;
    };
    return render();
};
