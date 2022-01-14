import HeaderTop from '../header-top';
import HeaderDown from '../header-down';
import './index.scss';

export default class Header {
  constructor({ $parent }) {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    this.headerTop = new HeaderTop({ $parent: headerContainer });
    this.headerDown = new HeaderDown({ $parent: headerContainer });

    $parent.appendChild(headerContainer);
  }
}
