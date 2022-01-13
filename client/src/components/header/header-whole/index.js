import HeaderTop from '../header-top';
import HeaderDown from '../header-down';
import './index.scss';
import evt from '@/utils/custom-event';
import store from '@/store';

const stateList = ['hotItemsName', 'menu'];

export default class Header {
  constructor({ $parent }) {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    this.headerTop = new HeaderTop({ $parent: headerContainer });
    this.headerDown = new HeaderDown({ $parent: headerContainer });

    $parent.appendChild(headerContainer);
    this.initializeState();
  }

  initializeState() {
    stateList.forEach((state) => {
      evt.subscribe(state, this.handleSubscription.bind(this));
      store.load(state);
    });
  }

  handleSubscription() {
    this.setState();
  }

  setState() {
    this.headerTop.setState(store.state);
    this.headerDown.setState(store.state);
  }
}
