import { Component } from '@core';
import { $ } from '@utils';

export class SectionLayout extends Component {
  template() {
    return /*html*/ `
        <section class="container">
            <h3 class="container__title">${this.$props.title}</h3>
            <div class="container__content"></div>
        </section>
    `;
  }

  mounted() {
    this.$contentContainer = $('.container__content', this.root);
  }
}
