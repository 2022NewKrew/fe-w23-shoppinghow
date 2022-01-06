//요구사항에 맞는 api를 가져옴
export default class SearchForm {
  init(searchKeywordGroup) {
    return this.render(searchKeywordGroup);
  }

  render(searchKeywordGroup) {
    let el = "";
    searchKeywordGroup.forEach((keyword, index) => {
      el += ` <li>
            <span class="num_rank">${index + 1}</span>${keyword.name}
        </li>`;
    });
    return el;
  }
}
