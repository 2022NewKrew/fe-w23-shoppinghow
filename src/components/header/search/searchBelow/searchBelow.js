import { createDom } from '@utils/createDom';
import { belowTop10 } from '@components/header/search/searchBelow/belowTop10';
import { belowRecent } from '@components/header/search/searchBelow/belowRecent';
import { belowSuggestion } from '@components/header/search/searchBelow/belowSuggestion';

const renderDefault = (top10Data) => {
    const container = document.createElement('div');
    container.className = 'search-below__container grid-row-2';
    container.append(belowRecent(), belowTop10(top10Data));

    return container;
};

export const searchBelow = ({ inputValue, top10Data }) => {
    const render = () => {
        if (!inputValue || inputValue.length === 0) return renderDefault(top10Data);
        else return belowSuggestion();
    };

    return render();
};
