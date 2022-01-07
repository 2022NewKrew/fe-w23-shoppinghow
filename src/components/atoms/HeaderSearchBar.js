import { Component } from '@core';
import { $ } from '@utils';

export class HeaderSearchBar extends Component {
  setup() {
    const { top10List = [] } = this.props;
    this.currentIndex = 0;
    this.maxIndex = top10List.length - 1;
    this.AUTO_SLIDE_TIME = 2000;
    this.SLIDE_FRAME_HEIGHT = 30;
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
            <div class="top10modal">
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
    this.$top10Modal = $('.top10modal', this.$target);

    this.$sliderTrack = $('.top10__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', () => {
      this.onSlideEnd();
    });

    this.$input = $('.search__input', this.$target);
    this.$input.addEventListener('focus', () => {
      this.clearTimerAction();
      this.$sliderTrack.style.display = 'none';

      this.$input.closest('.search').classList.add('search--focus');

      this.$top10Modal.classList.add('top10modal--show');
    });
    this.$input.addEventListener('blur', () => {
      this.$sliderTrack.style.display = 'block';
      this.$input.closest('.search').classList.remove('search--focus');
      this.$top10Modal.classList.remove('top10modal--show');

      if (!this.timerId) this.startTimerAction();
    });

    this.startTimerAction();
  }

  // util

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
    if (!this.timerId) this.startTimerAction();
  }

  clearTimerAction() {
    this.timerId = clearInterval(this.timerId);
  }
  startTimerAction() {
    this.timerId = setInterval(() => this.onSlide(this.currentIndex + 1), this.AUTO_SLIDE_TIME);
  }
}
