import { Component } from '@core';
import { $ } from '@utils';
import { SearchBarModal } from './SearchBarModal';
import { Top10Slider } from './Top10Slider';

const HOVER_DELAY_TIME = 400;
const FOCUSE_SEARCH_CLASSNAME = 'search--focus';

export class HeaderSearchBar extends Component {
  setup() {
    this.currentIndex = 0;
    this.isSearchFocused = false;
    this.isMouseover = false;
  }

  template() {
    return /*html*/ `
      <div class="search">
        <form >
            <input type="text" class="search__input" />
            <button type="submit" class="search__icon">🔍</button>
        </form>
        <div class="top10slider"></div>
        <div class="search__modal"></div>
      </div>
    `;
  }

  rendered() {
    this.$input = $('.search__input', this.$target);

    this.$target.addEventListener('focusin', this.focusinSearch.bind(this));
    this.$target.onmouseenter = this.mouseenterSearch.bind(this);
    this.$target.onmouseleave = this.mouseleaveSearch.bind(this);

    this.Top10Slider = new Top10Slider($('.top10slider', this.$target), { renderType: 'replaceHTML' });
    this.SearchBarModal = new SearchBarModal($('.search__modal', this.$target), { renderType: 'replaceHTML' });
  }

  /* util */

  // search focus animation
  mouseenterSearch() {
    this.isMouseover = true;
  }

  mouseleaveSearch() {
    if (this.isSearchFocused) this.focusoutSearch();
  }

  focusinSearch() {
    this.isSearchFocused = true;
    this.$target.classList.add(FOCUSE_SEARCH_CLASSNAME);
    this.Top10Slider.hideSliderTrack();
    this.SearchBarModal.showModal();
  }

  focusoutSearch() {
    this.isMouseover = false;

    setTimeout(() => {
      if (this.isMouseover) return;

      this.isSearchFocused = false;
      this.$input.blur();
      this.$target.classList.remove(FOCUSE_SEARCH_CLASSNAME);
      this.Top10Slider.showSliderTrack();
      this.SearchBarModal.hideModal();
    }, HOVER_DELAY_TIME);
  }
}
