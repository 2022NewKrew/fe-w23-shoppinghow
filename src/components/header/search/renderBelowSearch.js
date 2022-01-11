export const renderBelowSearch = ({ parent, inputValue }) => {
    const target = document.createElement('div');
    parent.appendChild(target);

    const render = () => {
        target.className = 'search-blow';
        if (!inputValue || inputValue.length === 0) target.innerHTML = '인기 쇼핑 키워드';
        else target.innerHTML = '자동완성 추천 키워드';
        return target;
    };

    return render();
};
