import { Component } from '@core';
import { $ } from '@utils';

export class HeaderSearchBar extends Component {
  setup() {
    const { top10List = [] } = this.props;
    this.currentIndex = 0;
    this.maxIndex = top10List.length - 1;
    this.AUTO_SLIDE_TIME = 2000;
    this.SLIDE_FRAME_HEIGHT = 30;
    this.FOCUSE_SEARCH_CLASSNAME = 'search--focus';
    this.HIDE_TOP10MODAL_CLASSNAME = 'top10modal--hide';
  }

  template() {
    const { top10List = [] } = this.props;
    const top10TrackList = [top10List[this.maxIndex], ...top10List, top10List[0]];

    const top10Template = ({ rank, text }) => /* html */ `
        <li class="top10__item">
            <span>${rank}. ${text}</span>
        </li>
    `;

    const to10ModalItemTemplate = ({ rank, text }) => /* html */ `
        <li>
            <a href="/search/${text}">
                <span class="top10modal__rank">${rank}</span>
                ${text}
            </a>
        </li>
    `;

    return /*html*/ `
      <div class="search">
        <form >
            <input type="text" class="search__input" />
            <button type="submit" class="search__icon">🔍</button>
        </form>
        <div class="top10">
            <ul class="top10__track">
                ${top10TrackList.map(top10Template).join('')}
            </ul>
        </div>
        <div class="top10modal ${this.HIDE_TOP10MODAL_CLASSNAME}" tabindex="-1">
            <span class="top10modal__title">인기 쇼핑 키워드</span>
            <ol class="top10modal__keywrodList">
                ${top10List.slice(0, 5).map(to10ModalItemTemplate).join('')}
            </ol>
            <ol class="top10modal__keywrodList">
                ${top10List.slice(5, 10).map(to10ModalItemTemplate).join('')}
            </ol>
        </div>
      </div>
    `;
  }

  mounted() {
    this.$sliderTrack = $('.top10__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', () => {
      this.onSlideEnd();
    });

    this.$search = this.$target.closest('.search');

    this.$search.addEventListener('focusin', () => this.focusinSearch());
    this.$search.onmouseleave = () => {
      if (this.isSearchFocused()) this.focusoutSearch();
    };

    this.$top10Modal = $('.top10modal', this.$target);
    this.$top10Modal.ontransitionend = () => {
      if (!this.isSearchFocused()) this.disactiveTop10Modal();
    };

    this.startSlideTimer();
  }

  /* util */

  // search focus animation

  isSearchFocused() {
    return this.$search.classList.contains(this.FOCUSE_SEARCH_CLASSNAME);
  }

  focusinSearch() {
    this.$search.classList.add(this.FOCUSE_SEARCH_CLASSNAME);
    this.showTop10Modal();
  }

  focusoutSearch() {
    this.$search.classList.remove(this.FOCUSE_SEARCH_CLASSNAME);
    $('.search__input', this.$search).blur();
    this.hideTop10Modal();
  }

  showTop10Modal() {
    this.$top10Modal.classList.remove(this.HIDE_TOP10MODAL_CLASSNAME);
    this.$top10Modal.style.opacity = 1;
    this.$sliderTrack.style.display = 'none';
    this.clearSlideTimer();
  }

  hideTop10Modal() {
    this.$top10Modal.style.opacity = 0;
    this.$sliderTrack.style.display = 'block';
    if (!this.timerId) this.startSlideTimer();
  }

  disactiveTop10Modal() {
    this.$top10Modal.classList.add(this.HIDE_TOP10MODAL_CLASSNAME);
  }

  // slide animation

  onSlide(index) {
    this.$sliderTrack.style.transition = 'transform 400ms ease-in-out';
    this.currentIndex = index;
    this.moveTrack();
  }

  moveTrack() {
    const y = -this.SLIDE_FRAME_HEIGHT * (this.currentIndex + 1);
    this.$sliderTrack.style.transform = `translateY(${y}px)`;
  }

  onSlideEnd() {
    const isOutOfIndex = this.maxIndex < this.currentIndex || this.currentIndex < 0;
    if (isOutOfIndex) {
      this.currentIndex = this.currentIndex < 0 ? this.maxIndex : 0;
      this.$sliderTrack.style.transition = 'none';
      this.moveTrack();
    }
    if (!this.timerId) this.startSlideTimer();
  }

  clearSlideTimer() {
    this.timerId = clearInterval(this.timerId);
  }

  startSlideTimer() {
    this.timerId = setInterval(() => this.onSlide(this.currentIndex + 1), this.AUTO_SLIDE_TIME);
  }
}
