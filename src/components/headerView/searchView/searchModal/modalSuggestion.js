import { createDom } from '@utils/createDom';

const recentKeyword = (title) => {
    const keyword = createDom('div', { className: 'search-modal__recent-keyword' });
    keyword.innerHTML = title;

    return keyword;
};

const dummyData = [
    '겨울 슬리퍼',
    '겨울 원피스',
    '겨울 이불',
    '크록스 겨울 슬리퍼',
    '겨울 작업복 잠바',
    '남성 겨울 콤비 자켓',
    '남성 겨울 등산 바지',
    '겨울 실내화',
];

const renderContent = (dummyData) => {
    const container = createDom('div');

    const keywordDOMArray = dummyData.map((title) => recentKeyword(title));
    container.append(...keywordDOMArray);

    return container;
};

export const modalSuggestion = () => {
    const target = createDom('div', { className: 'search-modal__container' });

    const render = () => {
        const suggestions = createDom('div', { className: 'search-modal__section' });
        suggestions.appendChild(renderContent(dummyData));

        target.appendChild(suggestions);
        return target;
    };

    return render();
};
