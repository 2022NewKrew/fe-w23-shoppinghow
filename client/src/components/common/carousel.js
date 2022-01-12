import { delay } from '@/utils/helper';

export default class carousel {
  $target;
  maxStep;
  step;
  isVertical;
  movePixel;
  delayTime;
  transitionTime;
  stop;

  constructor({ template, delayTime, isVertical, transitionTime }) {
    this.$target = template;
    this.stop = false;
    const carouselList = template.getElementsByTagName('li');
    this.maxStep = carouselList.length;
    this.isVertical = isVertical;
    this.delayTime = delayTime;
    this.transitionTime = transitionTime;
    this.step = 0;
    this.render();
  }

  async render() {
    await delay(this.delayTime);
    if (this.isVertical) {
      this.movePixel = this.$target.querySelector('li').offsetHeight;
      console.log(this.movePixel);
    } else {
      this.movePixel = this.$target.querySelector('li').offsetWidth;
    }
    this.autoPlay();
  }

  async autoPlay() {
    if (this.stop) return;

    if (this.step >= this.maxStep) {
      this.step = -1;
      this.rolling(0);
    } else {
      this.rolling(1);
    }
    await delay(this.delayTime);
    this.autoPlay();
  }

  rolling(transitionTime) {
    this.step++;
    this.$target.style.transition = `all ${transitionTime}s`;
    if (this.isVertical) {
      this.$target.style.transform = `translate(0, -${this.movePixel * this.step}px)`;
    } else {
      this.$target.style.transform = `translate(-${this.movePixel * this.step}px, 0)`;
    }
  }

  stopRolling() {
    this.stop = true;
  }

  restartRolling() {
    this.stop = false;
    this.autoPlay();
  }
}