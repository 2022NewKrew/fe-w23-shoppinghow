import { Component } from '@core';

export class Slider extends Component {
  template() {
    const {} = this.$props;

    return /*html*/ `
        <div class="slider">
            <button type="button" class="slider__prevBtn"></button>

            <div class="slider__track">
                <a href="#" target="_blank" class="slider__link">
                <img
                    src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct"
                    alt="크로셀 이미지"
                />
                </a>

                <div class="slider__pagingContainer">
                <div class="slider__paging">
                    <span></span>
                </div>
                <div class="slider__paging">
                    <span></span>
                </div>
                </div>
            </div>

            <button type="button" class="slider__nextBtn"></button>
        </div>
    `;
  }
}
