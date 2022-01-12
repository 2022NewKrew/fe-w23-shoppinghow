import './searchBar.scss';
import { createHTML } from '@/utils/helper';
import carousel from '@/components/common/carousel';

export default class SearchBar {
  $parentNode;
  $target;
  $carouselList;
  topSearchWords;

  constructor($app, topSearchWords) {
    this.$parentNode = $app;
    this.topSearchWords = topSearchWords;
    this.$target = this.createTemplate();
    this.render();
  }

  render() {
    this.$parentNode.appendChild(this.$target);
    new carousel({
      template: this.$target.querySelector('#search-carousel-items'),
      delayTime: 2000,
      isVertical: true,
      transitionTime: 1,
    });
  }

  createTemplate() {
    const container = createHTML('div', { className: 'search-container' });
    const searchLists = this.topSearchWords
      .map((word, idx) => `
        <li>
          <span>${idx + 1}</span>  
          <span>${word}</span>
        </li>`)
      .join('');
    const topSearchContainer = createHTML('div', {
      className: 'top-container',
    });

    const topSearchList = createHTML('ul', { id: 'search-carousel-items', innerHTML: searchLists });
    const searchInput = createHTML('input', {});
    const searchIcon = createHTML('div', { className: 'search-icon' });

    searchInput.addEventListener('focusin', () => {
      container.style.borderColor = '#f95139';
      topSearchList.style.display = 'none';
    });

    topSearchContainer.addEventListener('click', () => {
      searchInput.focus();
    });

    searchInput.addEventListener('focusout', () => {
      if (searchInput.value.trim() === '') {
        container.style.borderColor = '#cecfd1';
        topSearchList.style.display = 'block';
      }
    });

    topSearchContainer.appendChild(topSearchList);
    container.appendChild(topSearchContainer);
    container.appendChild(searchIcon);
    container.appendChild(searchInput);

    return container;
  }
}