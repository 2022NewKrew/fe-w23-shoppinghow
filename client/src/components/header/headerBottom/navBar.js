import { createHTML } from '@/utils/helper';
import './navBar.scss';

export default class NavBar {
  $target;
  $parentNode;
  menus;
  hastTags;

  constructor($app, menus, hashTags) {
    this.menus = menus;
    this.hastTags = hashTags;
    this.$parentNode = $app;
    this.$target = this.createTemplate();
    this.render();
  }

  render() {
    this.$parentNode.appendChild(this.$target);
  }

  createSeparator() {
    const separtor = createHTML('span', { className: 'txt-sep' });
    return separtor;
  }

  createCategory() {
    const container = createHTML('div', { className: 'category-container' });
    const categoryText = createHTML('span', { className: 'category-text', innerText: '카테고리' });
    const categoryIcon = createHTML('span', { className: 'category-icon', innerText: '펼치기' });

    categoryText.appendChild(categoryIcon);
    container.appendChild(categoryText);
    return container;
  }

  createMenu() {
    const container = createHTML('div', { className: 'menu-conatiner ' });
    container.innerHTML = this.menus
      .map(menu => `
          <span class="nav-menu">
            ${menu}
          </span>
        `)
      .join('');

    return container;
  }

  createCustomerMenu() {
    const container = createHTML('div', { className: 'customer-menu-container' });
    const loginContainer = createHTML('div', { className: 'login-container' });
    const latestProductsContainer = createHTML('div', { className: 'latest-products-container' });

    loginContainer.innerHTML = `
      <div>
        로그인
        <div class="login-icon">
          로그인
        </div>
      </div>
    `;

    latestProductsContainer.innerHTML = `
      <div>
        최근 본 상품
        <div class="latest-prod-icon">
          최근 본 상품
        </div>
        <div class="spread-arrow">
          펼치기
        </div>
      </div>
    `;

    container.appendChild(loginContainer);
    container.appendChild(latestProductsContainer);

    return container;
  }

  createTemplate() {
    const navbar = createHTML('nav', {});
    const categoryContainer = this.createCategory();
    const navMenus = this.createMenu();
    const customerMenus = this.createCustomerMenu();

    navbar.appendChild(categoryContainer);
    navbar.appendChild(this.createSeparator());
    navbar.appendChild(navMenus);
    navbar.appendChild(customerMenus);

    return navbar;
  }
}