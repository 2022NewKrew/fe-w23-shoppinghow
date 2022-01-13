import { Component } from '@core';
import { $ } from '@utils';

export class SectionLayout extends Component {
  template() {
    const { className = '', hideTitle } = this.props;

    return /*html*/ `
      <section class="container ${className}">
        <h3 class="container__title ${hideTitle ? 'screenOut' : ''}">${this.props.title}</h3>
        <div class="container__content"></div>
      </section>
    `;
  }

  rendered() {
    /**
     *  @type {HTMLElement}
     */
    this.$contentContainer = $(`.container__content`, this.$target);
  }
}
