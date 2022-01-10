const appendFirstClone = (itemArray) => {
    const firstNode = itemArray[0].cloneNode(true);
    return [...itemArray, firstNode];
};

const addRollingAnimation = (container) => {
    const rollingIntervalTime = 3000;
    let count = 0;
    const rollItem = (count, container) => () => {
        const rollingTransitionTime = 300;
        const itemHeight = 30;
        count++;
        container.style.transitionDuration = rollingTransitionTime + 'ms';
        container.style.transform = `translateY(-${count * itemHeight}px)`;
        container.ontransitionend = () => {
            if (count == container.children.length - 1) {
                console.log('end');
                container.style.transitionDuration = '0ms';
                container.style.transform = 'translateY(0px)';
                count = 0;
            }
            setTimeout(rollItem(count, container), rollingIntervalTime);
        };
    };

    setTimeout(rollItem(count, container), rollingIntervalTime);
};

const renderItem = (title, index) => {
    const item = document.createElement('div');
    item.classList.add('vertical-rolling__item');
    item.innerHTML = `
        <span class="vertical-rolling__item--numbering">${index + 1}</span>
        <div>${title}</div>
    `;
    return item;
};

const renderVerticalList = (dummyData) => {
    const itemDOMArray = dummyData.map((title, i) => renderItem(title, i));
    const listContainer = document.createElement('ol');
    listContainer.className = 'vertical-rolling__container';
    listContainer.append(...appendFirstClone(itemDOMArray));
    addRollingAnimation(listContainer);
    return listContainer;
};

export const verticalRolling = (contentsData) => {
    const verticalRollingWindow = document.createElement('div');
    verticalRollingWindow.classList.add('vertical-rolling__window');

    const render = () => {
        verticalRollingWindow.appendChild(renderVerticalList(contentsData));

        return verticalRollingWindow;
    };

    return render();
};
