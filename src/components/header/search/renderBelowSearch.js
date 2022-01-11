import { rankKeyword } from '@components/rankKeyword';

const renderTop10Data = (top10Data) => {
    const target = document.createElement('div');
    target.className = 'search-blow__container';
    const rankKeywordsDOMArray = top10Data.map((title, i) => rankKeyword({ title, rank: i + 1 }));
    target.append(...rankKeywordsDOMArray);
    return target;
};

export const renderBelowSearch = ({ parent, inputValue, top10Data }) => {
    const target = document.createElement('div');
    parent.appendChild(target);

    const render = () => {
        target.className = 'search-blow';
        if (!inputValue || inputValue.length === 0) {
            target.innerHTML = '';
            target.appendChild(renderTop10Data(top10Data));
        } else target.innerHTML = '자동완성 추천 키워드';
        return target;
    };

    return render();
};
