import './index.scss';
import { $ } from '@/utils/helper';

const slideAnimationTime = 2000;
const timeForLoop = 1000;

export default class Carousel {
  info = [];
  intervalTimer = 0;
  timeoutTimer = 0;

  constructor({ $parent, info }) {
    this.info = info;
    this.carousel = document.createElement('div');
    this.carousel.className = 'carousel';
    this.carousel.innerHTML = `<div class='carousel-container'></div>`;
    this.carouselContainer = $('.carousel-container', this.carousel);
    this.render();
    this.adjustSliding();
    $parent.appendChild(this.carousel);
  }

  render() {
    const lastCarouselData = this.info[0].imageSrc;
    const lastCarouselImgTag = `<img src=${lastCarouselData} alt="기획전 상품"/>`;
    const resultCarousel = this.info
      .map((info) => {
        return `<img src=${info.imageSrc} alt="기획전 상품"/>`;
      })
      .join('');

    this.carouselContainer.innerHTML = resultCarousel + lastCarouselImgTag;
  }

  setTransition(container, slideX, flag = '') {
    if (container.style.transition === 'none 0s ease 0s') container.style.transition = 'all 1s ease';
    if (flag === 'loop') container.style.transition = 'none';
    container.style.transform = `translateX(${slideX}%)`;
  }

  adjustSliding() {
    let slideX = 0;
    let currentPage = 1;

    this.intervalTimer = setInterval(() => {
      moveSlide();
      processLastSlideForLoop();
    }, slideAnimationTime);

    const moveSlide = () => {
      slideX += -25;
      currentPage += 1;
      this.setTransition(this.carouselContainer, slideX);
    };

    const processLastSlideForLoop = () => {
      if (this.info.length + 1 === currentPage) {
        this.timeoutTimer = setTimeout(() => {
          moveFirstPosition();
        }, timeForLoop);
      }
    };

    const moveFirstPosition = () => {
      slideX = 0;
      currentPage = 1;
      this.setTransition(this.carouselContainer, slideX, 'loop');
    };
  }

  clearCarouselTimer() {
    clearInterval(thithis.s.intervalTimer);
    clearTimeout(this.timeoutTimer);
  }
}
