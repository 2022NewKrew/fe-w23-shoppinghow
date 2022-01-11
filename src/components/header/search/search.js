import { searchTop10 } from './searchTop10';
import { searchBelow } from './searchBelow';

const addFocusEvent = (formContainer) => {
    const top10 = formContainer.querySelector('.search-top10');
    const inputField = formContainer.querySelector('input');

    inputField.addEventListener('focusin', () => {
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

const renderSearchForm = () => {
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" class="search__input">
        <button class="search__icon">🔍</button>
    `;
    form.appendChild(searchTop10());
    form.appendChild(searchBelow());

    return form;
};

export const search = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'search';
        target.innerHTML = '';
        target.appendChild(renderSearchForm());
        addFocusEvent(target);
        return target;
    };

    return render();
};
