import { createDom } from '@utils/createDom';
import { rankKeyword } from '@components/rankKeyword';

const renderTop10Content = (top10Data) => {
    const content = createDom('div', { className: 'search-below__content search-below__section--top10' });

    const rankKeywordsDOMArray = top10Data.map((title, i) => {
        const keyword = rankKeyword({ title, rank: i + 1 });
        keyword.classList.add('search-below__keyword');
        return keyword;
    });

    const partitions = Array(2)
        .fill(0)
        .map((_, i) => {
            const partition = createDom('div', { className: 'search-below__vertical-container' });
            partition.append(...rankKeywordsDOMArray.slice(i * 5, (i + 1) * 5));
            return partition;
        });

    content.append(...partitions);
    return content;
};

export const modalTop10 = (top10Data) => {
    const target = createDom('div', { className: 'search-below__section' });

    const title = createDom('div', { className: 'search-below__title', textContent: '인기 쇼핑 키워드' });
    const content = renderTop10Content(top10Data);
    target.append(title, content);

    return target;
};
