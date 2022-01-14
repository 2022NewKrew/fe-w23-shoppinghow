import PrivateMenu from '../private-menu';
import PublicMenu from '../public-menu';
import './index.scss';
import evt from '@/utils/custom-event';
import store from '@/store';

export default class HeaderDown {
  constructor({ $parent }) {
    const headerDown = document.createElement('div');
    headerDown.className = 'header-menu';

    this.publicMenu = new PublicMenu({ $parent: headerDown });
    this.privateMenu = new PrivateMenu({ $parent: headerDown });
    $parent.appendChild(headerDown);

    evt.subscribe('menu', this.setState.bind(this));
    store.load('menu');
  }

  setState() {
    this.publicMenu.setState(store.state);
  }
}
