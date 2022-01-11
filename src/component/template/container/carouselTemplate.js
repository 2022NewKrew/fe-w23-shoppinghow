export const carouselTemplate = (itemList) => {
    // add dummy items for smooth animation
    const list = itemList.length > 0 
        ? [
            itemList[itemList.length - 1],
            ...itemList,
            itemList[0]
        ]
        : [];

    const itemTpl = ({href, imgUrl}) => `
        <li class="carousel-item">
            <img class="carousel-item__img" src="${imgUrl}">
        </li>
    `;

    return `
        <div class="planning carousel">
            <div class="carousel-window">
                <ul class="carousel-container">
                    ${list.map(itemTpl).join('')}
                </ul>
            </div>
            <div class="carousel-controller">
                <button class="carousel__left-btn"><</button>
                <button class="carousel__right-btn">></button>
                <div class="carousel__paging">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
}