import Login from '../login';
import RecentlyViewedThing from '../recently-viewed-thing';
import './index.scss';

export default class PrivateMenu {
  constructor({ $parent }) {
    this.privateMenu = document.createElement('div');
    this.privateMenu.className = 'private-menu';

    this.login = new Login({ $parent: this.privateMenu });
    this.recentlyViewedThing = new RecentlyViewedThing({ $parent: this.privateMenu });
    $parent.appendChild(this.privateMenu);
  }

  setState(props) {}
}
