import './index.scss';

export default class AutoComplete {
  words = [];
  searchInput = '';

  constructor({ $parent }) {
    this.autoComplete = document.createElement('ul');
    this.autoComplete.className = 'autocomplete__list';

    this.render();
    $parent.appendChild(this.autoComplete);
  }

  setState(props) {
    this.words = props.autoCompleteWords;
    this.searchInput = props.searchInput;
    this.render();
  }

  render() {
    this.autoComplete.innerHTML = this.words
      .map((name, index) => {
        return `<li class='autocomplete__item'>
                    ${this.createItemName(name)}
                </li>`;
      })
      .join('');
  }

  activate() {
    this.autoComplete.style.display = 'flex';
  }

  deActivate() {
    this.autoComplete.style.display = 'none';
  }

  createItemName(name) {
    const regex = new RegExp(this.searchInput, 'gi');
    const result = name.replace(regex, `<span class='autocomplete__word'>${this.searchInput}</span>`);
    return result;
  }
}
