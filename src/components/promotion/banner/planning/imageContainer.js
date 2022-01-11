export const imageContainer = ({ imgWidth, imgHeight, imgSrcs }) => {
    const target = document.createElement('div');
    const render = () => {
        target.style.width = imgWidth * (imgSrcs.length + 2) + 'px';

        imgSrcs.forEach((imgSrc) => {
            const cell = document.createElement('a');
            cell.innerHTML = `
                <img src=${imgSrc} width=${imgWidth}px height=${imgHeight}px>
            `;
            target.appendChild(cell);
        });

        return target;
    };
    return render();
};
