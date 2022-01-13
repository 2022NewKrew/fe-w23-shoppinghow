export const searchTemplate = () => `
        <form>
            <input type="text" class="search__input">
            <button class="search__icon"></button>
        </form>
        <div class="wrap_rolling"></div>
        <div class="wrap_suggestion" id="suggestWrap"></div>
        <div class="wrap_suggestion" id="searchResultWrap"></div>
`;

export const topTenItemTemplate = ({rank, text}) => `
    <li>
        <span class="rank">${rank}</span>${text}
    </li>
`;

export const topTenListTemplate = (list) => list.reduce(
    (html, item) => html + topTenItemTemplate(item),
    ''
);

export const suggestionTemplate = () => `
    <div class="inner_suggestion">
        <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
        <ol class="list_keyword"></ol>
        <ol class="list_keyword"></ol>
    </div>
`;

export const rollingContainerTemplate = () => `
    <ol class="search-top10"></ol>
`;

export const searchResultTemplate = () => `
    <div class="inner_suggestion">
        <ul class="list_result"></ul>
    </div>
`;

export const resultItemTemplate = ({text}, query) => `
    <li>
        ${text.replaceAll(query, `<span class="highlight">${query}</span>`)}
    </li>
`;

export const resultListTemplate = (list, query) => list.reduce(
    (html, item) => html + resultItemTemplate(item, query),
    ''
);