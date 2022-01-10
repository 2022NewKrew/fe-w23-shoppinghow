import HeaderTop from '../header-top';
import HeaderDown from '../header-down';
import './index.scss';
import { api } from '@/api';

export default class Header {
  state = {
    hotItemsName: [],
    menu: [],
  };
  constructor({ $parent }) {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    this.headerTop = new HeaderTop({ $parent: headerContainer });
    this.headerDown = new HeaderDown({ $parent: headerContainer });

    $parent.appendChild(headerContainer);

    this.initializeData();
  }

  initializeData() {
    Promise.all([this.initializeHotItemsName(), this.initializeMenuBarList()]);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.headerTop.setState(this.state);
    this.headerDown.setState(this.state);
  }

  async initializeHotItemsName() {
    try {
      const res = await api.get('/item/hot-items-name');
      if (!res.success) throw new Error(res.message);
      this.setState({ hotItemsName: res.result });
    } catch (e) {
      alert(e);
    }
  }

  async initializeMenuBarList() {
    try {
      const res = await api.get('/menu');
      if (!res.success) throw new Error(res.message);
      this.setState({ menu: res.result });
    } catch (e) {
      alert(e);
    }
  }
}
