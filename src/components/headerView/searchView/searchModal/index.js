import { createDom } from '@utils/createDom';
import { modalTop10 } from '@components/headerView/searchView/searchModal/modalTop10';
import { modalRecent } from '@components/headerView/searchView/searchModal/modalRecent';
import { modalSuggestion } from '@components/headerView/searchView/searchModal/modalSuggestion';

const renderDefault = (top10Data) => {
    const container = createDom('div', { className: 'search-below__container grid-row-2' });
    container.append(modalRecent(), modalTop10(top10Data));

    return container;
};

export const searchModal = ({ inputValue, top10Data }) => {
    const render = () => {
        if (!inputValue || inputValue.length === 0) return renderDefault(top10Data);
        else return modalSuggestion();
    };

    return render();
};
