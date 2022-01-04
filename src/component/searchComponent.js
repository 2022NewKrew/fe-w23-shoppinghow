export const headerSearchComponent = ({rankList}) => {
    const top10Template = `
        <ul class="search-top10">
            ${rankList
            .map(({text}) => `
                <li class="search-top10__item">${text}</li>
            `).join('')}
        </ul>
    `;

    const searchTemplate = `
        <div class="search">
            <form>
                <input type="text" class="search__input">
                <button class="search__icon">🔍</button>
            </form>
            ${top10Template}
        </div>
    `;

    return searchTemplate;
} 