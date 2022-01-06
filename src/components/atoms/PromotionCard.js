import { Component } from '@core';

export class PromotionCard extends Component {
  template() {
    const { link, img } = this.$props;

    return /*html*/ `
      <div class="promotion">
          <a href="${link}" class="promotion__link">
            <img
                src="${img}"
                alt="프로모션 배너 카드"
            />
          </a>
      </div>
    `;
  }
}
