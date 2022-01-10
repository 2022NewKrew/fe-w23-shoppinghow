import { Component } from '@core';

export class ThemeProduct extends Component {
  template() {
    const {
      product: { title, desc, img },
    } = this.props;

    return /*html*/ `
      <li class="product">
        <a href="#" class="product__link">
            <span class="product__thumb">
                <img
                    alt="트렌디한 구찌 지갑"
                    src="${img}"
                />
            </span>
            <strong class="product__title">${title}</strong>
            <span class="product__desc">${desc}</span>
            <span class="product__themeIcon">테마</span>
        </a>
      </li>
    `;
  }

  mounted() {}
}
