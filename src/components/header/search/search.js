import { searchTop10 } from './searchTop10';

const addFocusEvent = (formContainer) => {
    const top10 = formContainer.querySelector('.search-top10');
    const inputField = formContainer.querySelector('input');
    inputField.addEventListener('focus', () => {
        formContainer.classList.add('highlight');
        top10.classList.add('hidden');
    });
    inputField.addEventListener('blur', () => {
        formContainer.classList.remove('highlight');
        if (inputField.value.length === 0) top10.classList.remove('hidden');
    });
};

const renderSearchForm = () => {
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" class="search__input">
        <button class="search__icon">🔍</button>
    `;
    form.appendChild(searchTop10());

    return form;
};

export const search = () => {
    const target = document.createElement('div');

    const render = () => {
        const form = renderSearchForm();
        target.className = 'search';
        target.appendChild(form);
        addFocusEvent(target);
        return target;
    };

    return render();
};
