import Component from '../../../core/Component';
import './index.scss';

export default class HeaderTop extends Component {
  template() {
    return `
      <div class="title">
        <img class="title__img" src="//search1.daumcdn.net/search/cdn/simage/shopping/v2/common/nav/logo_shw_2021.png" alt="쇼핑하우">
      </div>
      <div class="search">
        <form>
          <input type="text" class="search__input">
          <button class="search_btn">
            <span class="search__icon"></span>
          </button>
        </form>
      </div>
    `;
  }
}
