import './index.scss';

export default class AutoComplete {
  words = [];

  constructor({ $parent }) {
    this.autoComplete = document.createElement('ul');
    this.autoComplete.className = 'autocomplete__list';

    this.render();
    $parent.appendChild(this.autoComplete);
  }

  setState(props) {
    this.words = props.autoCompleteWords;
    this.render();
  }

  render() {
    this.autoComplete.innerHTML = this.words
      .map((name, index) => {
        return `<li class='autocomplete__item'>
                    <span class='autocomplete__word'>${name}</span>
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
}
