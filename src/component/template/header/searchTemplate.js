export const searchTemplate = (searchList) => {
    const list = searchList.length > 0
        ? [
            ...searchList,
            searchList[0] // dummy item for smooth animation.
        ]
        : [];
    
    const top10Template = `
        <ol class="search-top10">
            ${list
            .map(topTenItemTemplate).join('')}
        </ol>
    `;


    return `
        <form>
            <input type="text" class="search__input">
            <button class="search__icon"></button>
        </form>
        <div class="search-top10-wrapper">
            ${top10Template}
        </div>
        <div class="wrap_suggestion" id="suggestWrap"></div>
    `;
}

export const topTenItemTemplate = ({rank, text}) => `
    <li>
        <span class="rank">${rank}</span>${text}
    </li>
`;

export const suggestionTemplate = () => `
    <div class="inner_suggestion">
        <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
        <ol class="list_keyword"></ol>
        <ol class="list_keyword"></ol>
    </div>
`;