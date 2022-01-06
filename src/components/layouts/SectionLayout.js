import { Component } from '@core';
import { $ } from '@utils';

export class SectionLayout extends Component {
  /**
   *  @type {HTMLElement}
   */
  $contentContainer;

  template() {
    const { className = '', hideTitle } = this.$props;

    return /*html*/ `
      <section class="container ${className}">
        <h3 class="container__title ${hideTitle ? 'screenOut' : ''}">${this.$props.title}</h3>
        <div class="container__content"></div>
      </section>
    `;
  }

  mounted() {
    const { className } = this.$props;
    this.$contentContainer = $(`.${className} .container__content`, this.$target);
  }
}
