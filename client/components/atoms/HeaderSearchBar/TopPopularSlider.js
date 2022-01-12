import { Component } from '@core';
import { $, getURLParams } from '@utils';
import { TopPopularStore } from '@stores';

const AUTO_SLIDE_TIME = 2000;
const SLIDE_FRAME_HEIGHT = 30;
const TRANSITION_STYLE = 'transform 400ms ease-in-out';

export class TopPopularSlider extends Component {
  setup() {
    this.currentIndex = 0;
  }

  template() {
    const { topPopularList } = TopPopularStore.getState();
    this.maxIndex = topPopularList.length - 1;

    const topPopularTrackList = !topPopularList.length
      ? []
      : [topPopularList[this.maxIndex], ...topPopularList, topPopularList[0]];

    const topPopularTemplate = ({ rank, text }) => /* html */ `
        <li class="topPopularSlider__item">
            <span>${rank}. ${text}</span>
        </li>
    `;

    return /*html*/ `
        <div class="topPopularSlider">
            <ul class="topPopularSlider__track">
                ${topPopularTrackList.map(topPopularTemplate).join('')}
            </ul>
        </div>
    `;
  }

  rendered() {
    this.clearSlideTimer();
    this.$sliderTrack = $('.topPopularSlider__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', this.onSlideEnd.bind(this));

    const { search } = getURLParams();
    if (search) this.hideSliderTrack();
    else this.startSlideTimer();
  }

  mounted() {
    TopPopularStore.subscribe(this.render.bind(this));
  }

  /* util */

  showSliderTrack() {
    this.$sliderTrack.style.display = 'block';
    if (!this.timerId) this.startSlideTimer();
  }

  hideSliderTrack() {
    this.$sliderTrack.style.display = 'none';
    this.clearSlideTimer();
  }

  // slide animation

  onSlide(index) {
    this.$sliderTrack.style.transition = TRANSITION_STYLE;
    this.currentIndex = index;
    this.moveTrack();
  }

  moveTrack() {
    const y = -SLIDE_FRAME_HEIGHT * (this.currentIndex + 1);
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
    this.timerId = setInterval(() => this.onSlide(this.currentIndex + 1), AUTO_SLIDE_TIME);
  }
}
