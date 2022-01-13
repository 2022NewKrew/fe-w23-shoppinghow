import { createDom } from '@utils/createDom';
import { searchTop10 } from '@components/headerView/searchView/searchTop10';
import { searchModal } from '@components/headerView/searchView/searchModal';
import { getTop10Keywords } from '@api';

const addFocusEvent = (formContainer) => {
    const top10 = formContainer.querySelector('.search-top10');
    const searchInput = formContainer.querySelector('input');

    searchInput.addEventListener('focus', () => {
        formContainer.classList.add('focus');
        top10.classList.add('hidden');
    });

    formContainer.addEventListener('mouseleave', () => {
        const layerRemainTime = 2000;
        setTimeout(() => {
            formContainer.classList.remove('focus');
            if (searchInput.value.length === 0) top10.classList.remove('hidden');
            searchInput.blur();
        }, layerRemainTime);
    });
};

const renderSearchModal = ({ parent, inputValue, top10Data }) => {
    parent.innerText = '';
    parent.appendChild(searchModal({ inputValue, top10Data }));
};

const renderSearchForm = (top10Data) => {
    const form = document.createElement('form');
    form.innerHTML = `
            <input type="text" class="search__input">
            <button class="search__icon">🔍</button>
        `;
    form.appendChild(searchTop10({ top10Data }));
    const searchModal = createDom('div', { className: 'search-modal' });
    form.appendChild(searchModal);
    renderSearchModal({ parent: searchModal, top10Data });

    form.addEventListener('input', (e) => {
        renderSearchModal({ parent: searchModal, inputValue: e.target.value, top10Data });
    });

    return form;
};

const fetchTop10Data = async (setState) => {
    const top10Data = await getTop10Keywords();
    setState({ top10Data });
};

export function searchView() {
    let state = { top10Data: [] };
    const setState = (newState) => {
        state = { ...state, ...newState };
        render();
    };

    fetchTop10Data(setState);
    const target = document.createElement('div');

    const render = () => {
        target.className = 'search';
        target.innerHTML = '';
        target.appendChild(renderSearchForm(state.top10Data));
        addFocusEvent(target);
        return target;
    };

    return render();
}
