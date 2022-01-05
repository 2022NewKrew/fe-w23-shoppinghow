import Category from '../category';
import MenuBar from '../menu-bar';
import './index.scss';

export default class PublicMenu {
  constructor({ $parent }) {
    this.publicMenu = document.createElement('div');
    this.publicMenu.className = 'public-menu';

    this.category = new Category({ $parent: this.publicMenu });
    this.menuBar = new MenuBar({ $parent: this.publicMenu });
    $parent.appendChild(this.publicMenu);
  }

  setState(props) {
    this.menuBar.setState(props.menu);
  }
}
