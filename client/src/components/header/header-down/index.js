import PrivateMenu from '../private-menu';
import PublicMenu from '../public-menu';
import './index.scss';

export default class HeaderDown {
  constructor({ $parent }) {
    const headerDown = document.createElement('div');
    headerDown.className = 'header-menu';

    this.publicMenu = new PublicMenu({ $parent: headerDown });
    this.privateMenu = new PrivateMenu({ $parent: headerDown });
    $parent.appendChild(headerDown);
  }

  setState(props) {
    this.publicMenu.setState(props);
  }
}
