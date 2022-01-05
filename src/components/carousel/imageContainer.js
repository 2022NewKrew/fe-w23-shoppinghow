export const imageContainer = ({ imgWidth, imgHeight, imgSrcs }) => {
    const target = document.createElement('div');
    const render = () => {
        target.style.width = imgWidth * (imgSrcs.length + 2) + 'px';

        imgSrcs.forEach((imgSrc, i) => {
            const cell = document.createElement('a');
            cell.innerHTML = `
                <img src=${imgSrc} width=${imgWidth}px height=${imgHeight}px>
            `;
            target.appendChild(cell);
        });

        // TODO: 첫, 마지막 노드의 복사본을 만들어 붙이는 것은 캐로셀의 특징이므로 캐로셀에서 하도록 처리해보기
        const firstClone = target.firstElementChild.cloneNode(true);
        const lastClone = target.lastElementChild.cloneNode(true);
        target.insertBefore(lastClone, target.firstElementChild);
        target.appendChild(firstClone);
        target.style.transform = `translateX(${-1 * imgWidth}px)`;
        return target;
    };
    return render();
};
