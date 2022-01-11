export const searchBlow = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'search-blow';
        target.innerHTML = "<a href='#'>test link</a>";
        return target;
    };

    return render();
};
