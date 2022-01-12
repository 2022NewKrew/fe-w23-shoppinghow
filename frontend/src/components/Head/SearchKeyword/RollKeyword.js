import Component from '../../../core/Component';
import {searchKeywordStore} from '../../../store/SearchStore';
import {API_URL} from '../../../util/TemplateGroup';
// TODO 인기검색어리스트 추가기능 작업예정
export default class RollKeyword extends Component {
  template() {
    const searchKeywordGroup = searchKeywordStore.state.searchKeywordGroup;
    const keywordGroupLength = searchKeywordGroup.length;
    if (keywordGroupLength>0) {
      searchKeywordGroup.push(searchKeywordGroup[0]);
    }
    const getKeywordTemplate = (keyword, index) => {
      return `<li><span class="num_rank">${(index)%keywordGroupLength+1}</span>${keyword.name}</li>`;
    };
    return `${searchKeywordGroup.map(getKeywordTemplate).join('')}`;
  }

  created() {
    searchKeywordStore.dispatch('setSearchKeywordData', {url: API_URL.GET_SEARCH_KEYWORD_GROUP});
  }
}
