import './index.scss';

/**
 * TODO:
 * 추후 다중 페이지 요구되면 href도 back에서 받아올 것
 */
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
