const renderItem = (itemWidth, itemHeight, itemInfo) => {
    const item = document.createElement('div');
    item.className = 'cell__item';
    item.style.width = `${itemWidth}px`;
    item.style.height = `${itemHeight}px`;
    if (itemInfo === null) {
        item.classList.add('cell__empty-item');
        item.innerHTML = '<div>최근 본 상품이 없습니다.</div>';
        return item;
    }
    const { title, imgSrc, url } = itemInfo;
    item.innerHTML = `
            <img src=${imgSrc} alt=${title} class=".cell__thumbnail" >
            <div>
                <span class=".cell__link" >${title}</span>
                <a class="suggestion__cell--link" href=${url} >상품보기 &gt;</a>
            </div>
    `;
    return item;
};

const renderCell = (itemWidth, itemHeight, items) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    items.forEach((itemInfo) => {
        cell.appendChild(renderItem(itemWidth, itemHeight, itemInfo));
    });
    return cell;
};

export const suggestItemContainer = ({ itemsInaCell, itemWidth, cellWidth, cellHeight, itemDatas }) => {
    const target = document.createElement('div');
    const render = () => {
        const numberOfCells = Math.ceil(itemDatas.length / itemsInaCell);
        target.style.width = cellWidth * (numberOfCells + 2) + 'px';

        for (let i = 0; i < numberOfCells; i++) {
            const items = itemDatas.slice(i * itemsInaCell, (i + 1) * itemsInaCell);
            while (items.length < itemsInaCell) items.push(null);
            target.appendChild(renderCell(itemWidth, cellHeight, items));
        }
        return target;
    };
    return render();
};
