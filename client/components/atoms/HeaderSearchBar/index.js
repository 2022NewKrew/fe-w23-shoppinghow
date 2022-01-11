import { Component } from '@core';
import { RecentlySearchStore } from '@stores';
import { $, getURLParams } from '@utils';
import { SearchBarModal } from './SearchBarModal';
import { SearchInput } from './SearchInput';
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
        <form class="search__form"></form>
        <div class="top10slider"></div>
        <div class="search__modal"></div>
      </div>
    `;
  }

  rendered() {
    this.Top10Slider = new Top10Slider($('.top10slider', this.$target), { renderType: 'replaceHTML' });

    this.SearchBarModal = new SearchBarModal($('.search__modal', this.$target), { renderType: 'replaceHTML' });
    this.SearchBarModal.$target.ontransitionend = () => {
      if (!this.isSearchFocused) this.SearchBarModal.disactiveModal();
    };

    this.SearchInput = new SearchInput($('.search__form', this.$target), { renderType: 'replaceHTML' });

    this.$target.addEventListener('focusin', this.focusinSearch.bind(this));
    this.$target.onmouseenter = this.mouseenterSearch.bind(this);
    this.$target.onmouseleave = this.mouseleaveSearch.bind(this);
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

      this.SearchInput.$input.blur();
      this.isSearchFocused = false;
      this.$target.classList.remove(FOCUSE_SEARCH_CLASSNAME);
      this.SearchBarModal.hideModal();

      if (!this.SearchInput.$input.value) this.Top10Slider.showSliderTrack();
    }, HOVER_DELAY_TIME);
  }
}
