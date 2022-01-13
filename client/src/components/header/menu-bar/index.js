import './index.scss';

export default class MenuBar {
  menu = [];

  constructor({ $parent }) {
    this.menuBarContainer = document.createElement('ul');
    this.menuBarContainer.className = 'top-menu';
    $parent.appendChild(this.menuBarContainer);
  }

  setState(newState) {
    this.menu = newState;
    this.render();
  }

  render() {
    this.menuBarContainer.innerHTML = this.menu
      .map((item) => {
        return ` <li class="top-menu__btn"><a href="#">${item}</a></li>`;
      })
      .join('');
  }
}
