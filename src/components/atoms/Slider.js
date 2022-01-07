import { Component } from '@core';
import { $, $$ } from '@utils';

const AUTO_SLIDE_TIME = 3000;
const SLIDE_FRAME_WIDTH = 485;
export class Slider extends Component {
  // life cycle
  setup() {
    const { imgList = [] } = this.props;
    this.currentIndex = 0;
    this.maxIndex = imgList.length - 1;
    this.isBlockClickIndicator = false;
  }

  template() {
    const { imgList = [] } = this.props;

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
    this.$target.addEventListener('click', ({ target: { className } }) => {
      if (!!this.isBlockClickIndicator) return;

      if (className === 'slider__prevBtn') {
        this.onclickIdicator('prev');
      } else if (className === 'slider__nextBtn') {
        this.onclickIdicator('next');
      }
    });

    this.$sliderTrack = $('.slider__track', this.$target);
    this.$sliderTrack.addEventListener('transitionend', this.onSlideEnd.bind(this));

    this.$sliderPagingList = $$('.slider__paging', this.$target);
    this.$sliderPagingList.forEach((el) => {
      el.addEventListener('mouseover', (e) => {
        const $pagging = e.target.closest('.slider__paging');
        this.onhoverIndicator(+$pagging.dataset.index);
      });

      el.addEventListener('mouseout', () => {
        if (!this.timerId) this.startTimerAction();
      });
    });

    this.renderIndicator();
    this.startTimerAction();
  }

  // util

  renderIndicator() {
    const SELECTED_CLASSNAME = 'slider__paging--selected';

    this.$sliderPagingList.forEach((el) => {
      const targetIndex = +el.dataset.index;

      if (targetIndex !== this.currentIndex) {
        el.classList.remove(SELECTED_CLASSNAME);
      } else {
        el.classList.add(SELECTED_CLASSNAME);
      }
    });
  }

  onhoverIndicator(index) {
    this.clearTimerAction();
    this.currentIndex = index;
    this.quickMoveTrack();
    this.renderIndicator();
  }

  /**
   * @param { 'next' | 'prev'} type
   */
  onclickIdicator(type) {
    const nextIndex = type === 'next' ? this.currentIndex + 1 : this.currentIndex - 1;
    this.clearTimerAction();
    this.onSlide(nextIndex);
  }

  // silde animation

  moveTrack() {
    const x = -SLIDE_FRAME_WIDTH * (this.currentIndex + 1);
    this.$sliderTrack.style.transform = `translateX(${x}px)`;
  }

  quickMoveTrack() {
    this.$sliderTrack.style.transition = 'none';
    this.moveTrack();
  }

  onSlide(index) {
    this.isBlockClickIndicator = true;
    this.$sliderTrack.style.transition = 'transform 400ms ease-in-out';
    this.currentIndex = index;
    this.moveTrack();
  }

  onSlideEnd() {
    const isOutOfIndex = this.maxIndex < this.currentIndex || this.currentIndex < 0;
    if (isOutOfIndex) {
      this.currentIndex = this.currentIndex < 0 ? this.maxIndex : 0;
      this.quickMoveTrack();
    }

    this.renderIndicator();
    this.isBlockClickIndicator = false;
    if (!this.timerId) this.startTimerAction();
  }

  clearTimerAction() {
    this.timerId = clearInterval(this.timerId);
  }

  startTimerAction() {
    this.timerId = setInterval(() => this.onSlide(this.currentIndex + 1), AUTO_SLIDE_TIME);
  }
}
