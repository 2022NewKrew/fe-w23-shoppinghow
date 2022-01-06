import { Component } from '@core';
import { $, $$ } from '@utils';

export class Slider extends Component {
  // life cycle
  setup() {
    this.AUTO_SLIDE_TIME = 3000;
    this.SLIDE_FRAME_WIDTH = 485;

    const { imgList = [] } = this.$props;
    this.currentIndex = 0;
    this.maxIndex = imgList.length - 1;
  }

  setEvent() {
    this.$target.addEventListener('click', (e) => {
      const { className } = e.target;

      if (!!this.blockClickIndicator) return;

      if (className === 'slider__prevBtn') {
        this.clearTimerAction();
        this.onSlide(this.currentIndex - 1);
      } else if (className === 'slider__nextBtn') {
        this.clearTimerAction();
        this.onSlide(this.currentIndex + 1);
      }
    });
  }

  template() {
    const { imgList = [] } = this.$props;

    const pagingTemplate = (index) => /* html */ `
        <div class="slider__paging" data-index="${index}">
            <span></span>
        </div>
    `;

    const trackList = [imgList[this.maxIndex], ...imgList, imgList[0]];

    const sliderTrackTemplate = (img) => /* html */ `
        <a href="#" target="_blank" class="slider__link">
            <img
                src="${img}"
                alt="크로셀 이미지"
            />
        </a>
    `;

    return /*html*/ `
        <div class="slider">
            <div class="slider__frame">
                <div class="slider__track">
                    ${trackList.map(sliderTrackTemplate).join('')}
                </div>
            </div>

            <div class="slider__action">
                <button type="button" class="slider__prevBtn"></button>
                <div class="slider__pagingContainer">
                    ${imgList.map((_, index) => pagingTemplate(index)).join('')}
                </div>    
                <button type="button" class="slider__nextBtn"></button>
            </div>
        </div>
    `;
  }

  mounted() {
    this.$sliderTrack = $('.slider__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', () => {
      this.onSlideEnd();
    });

    const $sliderPagingList = $$('.slider__pagingContainer', this.$target);
    $sliderPagingList.forEach((el) => {
      el.addEventListener('mouseover', (e) => {
        const { dataset } = e.target;

        this.clearTimerAction();
        this.currentIndex = +dataset.index;
        this.moveTrack();
      });

      el.addEventListener('mouseout', (_) => {
        if (!this.timerId) this.startTimerAction();
      });
    });

    this.startTimerAction();
  }

  // util

  renderIndicator() {
    // console.log('render');
  }

  setBlockClickIndicator(bool) {
    this.blockClickIndicator = bool;
  }

  onSlide(index) {
    this.$sliderTrack.style.transition = 'transform 400ms ease-in-out';
    this.currentIndex = index;
    this.moveTrack();
  }

  moveTrack() {
    this.setBlockClickIndicator(true);
    const x = -this.SLIDE_FRAME_WIDTH * (this.currentIndex + 1);
    this.$sliderTrack.style.transform = `translateX(${x}px)`;
  }

  onSlideEnd() {
    const isOutOfIndex = this.maxIndex < this.currentIndex || this.currentIndex < 0;
    if (isOutOfIndex) {
      this.$sliderTrack.style.transition = 'none';
      this.currentIndex = this.currentIndex < 0 ? this.maxIndex : 0;
      this.moveTrack();
    }

    this.renderIndicator();
    this.setBlockClickIndicator(false);
    if (!this.timerId) this.startTimerAction();
  }

  clearTimerAction() {
    this.timerId = clearInterval(this.timerId);
  }
  startTimerAction() {
    this.timerId = setInterval(() => this.onSlide(this.currentIndex + 1), this.AUTO_SLIDE_TIME);
  }
}
