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

const addRollingAnimation = (top10Container) => {
    const rollingIntervalTime = 3000;
    let count = 0;
    const rollItem = (count, top10Container) => () => {
        const rollingTransitionTime = 300;
        const itemHeight = 30;
        count++;
        top10Container.style.transitionDuration = rollingTransitionTime + 'ms';
        top10Container.style.transform = `translateY(-${count * itemHeight}px)`;
        top10Container.ontransitionend = () => {
            if (count == top10Container.children.length - 1) {
                console.log('end');
                top10Container.style.transitionDuration = '0ms';
                top10Container.style.transform = 'translateY(0px)';
                count = 0;
            }
            setTimeout(rollItem(count, top10Container), rollingIntervalTime);
        };
    };

    setTimeout(rollItem(count, top10Container), rollingIntervalTime);
};

const copySpareFirst = (itemArray) => {
    const firstNode = itemArray[0].cloneNode(true);
    return [...itemArray, firstNode];
};

const renderTop10List = (dummyData) => {
    const top10Items = dummyData.map((title, i) => {
        const item = document.createElement('div');
        item.classList.add('search-top10__item');
        item.innerHTML = `<span class="search-top10__item--numbering">${i + 1}</span><div>${title}</div>`;
        return item;
    });
    const top10 = document.createElement('ol');
    top10.classList.add('search-top10__container');
    top10.append(...copySpareFirst(top10Items));
    addRollingAnimation(top10);
    return top10;
};

// TODO: parent 없도록 리팩토링하기
export const searchTop10 = (parent) => {
    const target = parent.querySelector('.search-top10__window');

    const render = () => {
        target.appendChild(renderTop10List(dummyData));
        // return target;
    };

    // TODO: headerInnerHTML을 다 js파일로 변환 후에는 return render()
    render();
};
