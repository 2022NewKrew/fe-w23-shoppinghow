import { createDom } from '@utils/createDom';

const renderContent = () => {
    const content = createDom('div', {
        className: 'search-modal__content search-modal__vertical-container',
    });
    for (let i = 0; i < 5; i++) {
        content.appendChild(createDom('div', { className: 'search-modal__keyword', textContent: 'hihi' }));
    }

    return content;
};

export const modalRecent = () => {
    const target = createDom('div', { className: 'search-modal__section recent-keyword' });

    const render = () => {
        const title = createDom('div', { className: 'search-modal__title', textContent: '최근 검색어' });
        const content = renderContent();
        target.append(title, content);
        return target;
    };

    return render();
};
