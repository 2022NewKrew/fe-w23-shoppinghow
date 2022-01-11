const VERTICAL_MODE = 0;
const HORIZONTAL_MODE = 1;
const CLONE_COUNTS = 2;
const BTN_CHECKED = "#000";
const BTN_UNCHECKED = "#ccc";

export class Carousel {
  $carouselList;
  $carousel;
  $curCarouselIdx;
  $carouselSpeed;
  $carouselItemWidth;
  $carouselMode;
  $carouselIntervalId;
  $carouselBtnList;
  constructor($carouselList, $carousel, $curCarouselIdx, $carouselSpeed, $carouselItemWidth, $carouselMode, $carouselBtnList = []) {
    this.$carouselList = $carouselList;
    this.$carousel = $carousel;
    this.$curCarouselIdx = $curCarouselIdx;
    this.$carouselSpeed = $carouselSpeed;
    this.$carouselItemWidth = $carouselItemWidth;
    this.$carouselMode = $carouselMode;
    this.$carouselBtnList = $carouselBtnList;
    this.$carouselIntervalId = setInterval(() => {
      this.next();
    }, this.$carouselSpeed);
  }

  next() {
    const sliderLength = this.$carouselList.length - CLONE_COUNTS;
    this.checkBtn(this.$curCarouselIdx, BTN_UNCHECKED);
    if (this.$curCarouselIdx <= sliderLength - 1) {
      this.transition(this.$carouselItemWidth * (this.$curCarouselIdx + 2));
    }
    if (this.$curCarouselIdx === sliderLength - 1) {
      this.$curCarouselIdx = -1;
      setTimeout(() => {
        this.fakeTransition(this.$carouselItemWidth);
      }, this.$carouselSpeed / 2 + 10);
    }
    this.$curCarouselIdx += 1;
    this.checkBtn(this.$curCarouselIdx, BTN_CHECKED);
  }
  prev() {
    const sliderLength = this.$carouselList.length - CLONE_COUNTS;
    this.checkBtn(this.$curCarouselIdx, BTN_UNCHECKED);
    if (this.$curCarouselIdx >= 0) {
      this.transition(this.$carouselItemWidth * this.$curCarouselIdx);
    }
    if (this.$curCarouselIdx === 0) {
      this.$curCarouselIdx = sliderLength;
      setTimeout(() => {
        this.fakeTransition(this.$carouselItemWidth * sliderLength);
      }, this.$carouselSpeed / 2 + 10);
    }
    this.$curCarouselIdx -= 1;
    this.checkBtn(this.$curCarouselIdx, BTN_CHECKED);
  }
  clearInterval() {
    clearInterval(this.$carouselIntervalId);
  }
  transition(toLoc) {
    this.$carousel.style.transition = this.$carouselSpeed / 2 + "ms";
    if (this.$carouselMode === VERTICAL_MODE) {
      this.$carousel.style.transform = "translate3d(0px, -" + toLoc + ", 0px)";
    } else if (this.$carouselMode === HORIZONTAL_MODE) {
      this.$carousel.style.transform = "translate3d(-" + toLoc + "px, 0px, 0px)";
    }
  }
  fakeTransition(size) {
    this.$carousel.style.transition = 0 + "ms";
    if (this.$carouselMode === VERTICAL_MODE) {
      this.$carousel.style.transform = "translate3d(0px, -" + size + ", 0px)";
    } else if (this.$carouselMode === HORIZONTAL_MODE) {
      this.$carousel.style.transform = "translate3d(-" + size + "px, 0px, 0px)";
    }
  }
  checkBtn(to, color) {
    this.$carouselBtnList[to].style["background-color"] = color;
  }
  jumpTo(selectedSlide) {
    console.log(this);
    this.clearInterval();
    this.checkBtn(this.$curCarouselIdx, BTN_UNCHECKED);
    this.$curCarouselIdx = selectedSlide - 1;
    this.transition(this.$carouselItemWidth * (this.$curCarouselIdx++ + 2));
    this.checkBtn(this.$curCarouselIdx, BTN_CHECKED);

    this.$carouselIntervalId = setInterval(() => {
      this.next();
    }, this.$carouselSpeed);
  }
  nextBtnClick() {
    this.clearInterval();
    this.next();
    this.$carouselIntervalId = setInterval(() => {
      this.next();
    }, this.$carouselSpeed);
  }
  prevBtnClick() {
    this.clearInterval();
    this.prev();
    this.$carouselIntervalId = setInterval(() => {
      this.next();
    }, this.$carouselSpeed);
  }
}
