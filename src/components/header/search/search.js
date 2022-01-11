import { searchTop10 } from '@components/header/search/searchTop10';
import { searchBelow } from '@components/header/search/searchBelow';

const addFocusEvent = (formContainer) => {
    const top10 = formContainer.querySelector('.search-top10');
    const inputField = formContainer.querySelector('input');

    inputField.addEventListener('focus', () => {
        formContainer.classList.add('focus');
        top10.classList.add('hidden');
    });

    formContainer.addEventListener('mouseleave', () => {
        setTimeout(() => {
            formContainer.classList.remove('focus');
            if (inputField.value.length === 0) top10.classList.remove('hidden');
            inputField.blur();
        }, 500);
    });
};

const renderSearchForm = (top10Data) => {
    const form = document.createElement('form');
    form.innerHTML = `
            <input type="text" class="search__input">
            <button class="search__icon">🔍</button>
        `;
    form.appendChild(searchTop10({ top10Data }));
    form.appendChild(searchBelow({ top10Data }));
    form.addEventListener('input', () => {}); // TODO: observer pattern으로 통신하도록 구현

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
