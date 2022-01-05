import { LOGO } from '@/static/constants/image-path';
import SearchForm from '../search-form';
import './index.scss';

export default class HeaderTop {
  constructor($parent) {
    this.headerTop = document.createElement('div');
    this.headerTop.className = 'header-top';
    this.render();
    this.searchForm = new SearchForm(this.headerTop);
    $parent.appendChild(this.headerTop);
  }

  setState(props) {
    this.searchForm.setState(props);
  }

  render() {
    this.headerTop.innerHTML = `
        <div class="title">
            <img src=${LOGO} alt='로고'/>
        </div>`;
  }
}
