import { createDom } from '@utils/createDom';

const renderContent = () => {
    const content = createDom('div', {
        className: 'search-below__content search-below__vertical-container',
    });
    for (let i = 0; i < 5; i++) {
        content.appendChild(createDom('div', { className: 'search-below__keyword', textContent: 'hihi' }));
    }

    return content;
};

export const belowRecent = () => {
    const target = createDom('div', { className: 'search-below__section recent-keyword' });

    const render = () => {
        const title = createDom('div', { className: 'search-below__title', textContent: '최근 검색어' });
        const content = renderContent();
        target.append(title, content);
        return target;
    };

    return render();
};
