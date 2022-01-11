import { Component } from '@core';
import { $ } from '@utils';
import { Top10Store } from '@stores';

const AUTO_SLIDE_TIME = 2000;
const SLIDE_FRAME_HEIGHT = 30;

export class Top10Slider extends Component {
  setup() {
    this.currentIndex = 0;
  }

  template() {
    const { list: top10List = [] } = Top10Store.getState();
    this.maxIndex = top10List.length - 1;

    const top10TrackList = !top10List.length ? [] : [top10List[this.maxIndex], ...top10List, top10List[0]];

    const top10Template = ({ rank, text }) => /* html */ `
        <li class="top10slider__item">
            <span>${rank}. ${text}</span>
        </li>
    `;

    return /*html*/ `
        <div class="top10slider">
            <ul class="top10slider__track">
                ${top10TrackList.map(top10Template).join('')}
            </ul>
        </div>
    `;
  }

  rendered() {
    this.clearSlideTimer();
    this.$sliderTrack = $('.top10slider__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', this.onSlideEnd.bind(this));
    this.startSlideTimer();
  }

  mounted() {
    Top10Store.subscribe(this.render.bind(this));
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
    this.$sliderTrack.style.transition = 'transform 400ms ease-in-out';
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
