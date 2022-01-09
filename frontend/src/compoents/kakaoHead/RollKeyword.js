import Component from '../../core/Component';

// TODO 인기검색어리스트 추가기능 작업예정
export default class RollKeyword extends Component {
  template() {
    const searchKeywordGroup = this.$props.searchKeywordGroup;
    const keywordGroupLength = searchKeywordGroup.length;
    searchKeywordGroup.push(searchKeywordGroup[0]);
    console.log(searchKeywordGroup);
    const getKeywordTemplate = (keyword, index) => {
      return `<li><span class="num_rank">${(index)%keywordGroupLength+1}</span>${keyword.name}</li>`;
    };
    return `${searchKeywordGroup.map(getKeywordTemplate).join('')}`;
  }
}
