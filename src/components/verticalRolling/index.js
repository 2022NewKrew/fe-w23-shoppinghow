import { rankKeyword } from '@components/rankKeyword';

const ROLLING_INTERVAL_TIME = 3000;

const appendFirstClone = (itemArray) => {
    const firstNode = itemArray[0].cloneNode(true);
    return [...itemArray, firstNode];
};

const rollItem = (count, container) => () => {
    const rollingTransitionTime = 300;
    const itemHeight = 30;
    count++;
    container.style.transitionDuration = rollingTransitionTime + 'ms';
    container.style.transform = `translateY(-${count * itemHeight}px)`;
    container.ontransitionend = () => {
        if (count == container.children.length - 1) {
            container.style.transitionDuration = '0ms';
            container.style.transform = 'translateY(0px)';
            count = 0;
        }
        setTimeout(rollItem(count, container), ROLLING_INTERVAL_TIME);
    };
};

const addRollingAnimation = (container) => {
    let count = 0;
    setTimeout(rollItem(count, container), ROLLING_INTERVAL_TIME);
};

const renderItem = (title, index) => {
    const item = rankKeyword({ title, rank: index + 1 });
    item.classList.add('top10__item');
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
        const rollingContentsContainer = renderVerticalList(contentsData);
        verticalRollingWindow.appendChild(rollingContentsContainer);
        return verticalRollingWindow;
    };

    return render();
};
