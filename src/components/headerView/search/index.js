import { createDom } from '@utils/createDom';
import { searchTop10 } from '@components/headerView/search/searchTop10';
import { searchBelow } from '@components/headerView/search/searchBelow';

const addFocusEvent = (formContainer) => {
    const top10 = formContainer.querySelector('.search-top10');
    const inputField = formContainer.querySelector('input');

    inputField.addEventListener('focus', () => {
        formContainer.classList.add('focus');
        top10.classList.add('hidden');
    });

    formContainer.addEventListener('mouseleave', () => {
        const layerRemainTime = 500;
        setTimeout(() => {
            formContainer.classList.remove('focus');
            if (inputField.value.length === 0) top10.classList.remove('hidden');
            inputField.blur();
        }, layerRemainTime);
    });
};

const renderBelowSearch = ({ parent, inputValue, top10Data }) => {
    parent.innerHTML = '';
    parent.appendChild(searchBelow({ inputValue, top10Data }));
};

const renderSearchForm = (top10Data) => {
    const form = document.createElement('form');
    form.innerHTML = `
            <input type="text" class="search__input">
            <button class="search__icon">🔍</button>
        `;
    form.appendChild(searchTop10({ top10Data }));
    const searchBelow = createDom('div', { className: 'search-below' });
    form.appendChild(searchBelow);
    renderBelowSearch({ parent: searchBelow, top10Data });

    form.addEventListener('input', (e) => {
        renderBelowSearch({ parent: searchBelow, inputValue: e.target.value, top10Data });
    });

    return form;
};

// fetch되어온 데이터라 가정
const dummyData = [
    '엔진 코팅제',
    '벽선반',
    '키즈가방',
    '마스크가드',
    '대한민국 지도',
    '염색약',
    '부츠',
    '로봇청소기',
    '화분',
    '콩나물',
];

export const search = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'search';
        target.innerHTML = '';
        target.appendChild(renderSearchForm(dummyData));
        addFocusEvent(target);
        return target;
    };

    return render();
};
