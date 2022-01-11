import './index.scss';

export default class HotShoppingKeyword {
  keywords = [];

  constructor({ $parent }) {
    this.hotShoppingKeyword = document.createElement('div');
    this.hotShoppingKeyword.className = 'hot-shopping-keyword';
    this.hotShoppingKeyword.innerHTML = this.getFixedHTML();

    const hotShoppingList = this.hotShoppingKeyword.querySelectorAll('.hot-shopping-keyword__list');
    this.hotShoppingListOne = hotShoppingList[0];
    this.hotShoppingListTwo = hotShoppingList[1];

    $parent.appendChild(this.hotShoppingKeyword);
  }

  setState(props) {
    this.keywords = props.hotItemsName;
    this.render();
  }

  render() {
    const firstStartPoint = 0;
    const secondStartPoint = Math.floor(this.keywords.length / 2);
    const listOneData = this.keywords.slice(firstStartPoint, Math.floor(this.keywords.length / 2));
    const listTwoData = this.keywords.slice(secondStartPoint, this.keywords.length);

    this.hotShoppingListOne.innerHTML = this.createItem(listOneData, firstStartPoint);
    this.hotShoppingListTwo.innerHTML = this.createItem(listTwoData, secondStartPoint);
  }

  createItem(list, startPoint) {
    return list
      .map((name, index) => {
        return `<li class='hot-shopping-keyword__item'>
                  <span class='hot-shopping-keyword__item-rank'>${index + startPoint + 1}</span>
                  <span class='hot-shopping-keyword__item-name'>${name}</span>
                </li>`;
      })
      .join('');
  }

  getFixedHTML() {
    return `<h2 class="hot-shopping-keyword__title">인기 쇼핑 키워드</h2>
            <div class="hot-shopping-keyword__list-container">
              <ul class="hot-shopping-keyword__list"></ul>
              <ul class="hot-shopping-keyword__list"></ul>
            </div>
           `;
  }
}
