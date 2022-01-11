export const searchTemplate = (searchList) => {
    const list = searchList.length > 0
        ? [
            ...searchList,
            searchList[0] // dummy item for smooth animation.
        ]
        : [];
    
    const top10Template = `
        <ul class="search-top10">
            ${list
            .map(({rank, text}) => `
                <li class="search-top10__item">
                    <span class="rank">${rank}</span>${text}
                </li>
            `).join('')}
        </ul>
    `;

    return `
        <form>
            <input type="text" class="search__input">
            <button class="search__icon"></button>
        </form>
        <div class="search-top10-wrapper">
            ${top10Template}
        </div>
    `;
} 