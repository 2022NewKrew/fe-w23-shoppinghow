import { searchTop10 } from './searchTop10';

export const headerTop = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'header-top';
        target.innerHTML = `
            <div class="title">
                <h1>쇼핑하우</h1>
            </div>
            <div class="search">
                <form>
                    <input type="text" class="search__input">
                    <button class="search__icon">🔍</button>
                </form>
            </div>
        `;
        target.querySelector('form').appendChild(searchTop10());
        return target;
    };

    return render();
};
