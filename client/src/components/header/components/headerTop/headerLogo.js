import './headerLogo.scss';
import { createHTML } from '../../../../utils/helper';

export default class HeaderLogo {
  $parentNode;
  $target;
  logoSrc;

  constructor($app, headerLogoSrc) {
    this.$parentNode = $app;
    this.logoSrc = headerLogoSrc;
    this.$target = this.createTemplate();
    this.render();
  }

  render() {
    this.$parentNode.appendChild(this.$target);
  }

  createTemplate() {
    const container = createHTML('h1', { className: 'logo-container' });
    const imgTag = createHTML('img', {
      className: 'logo',
      src: this.logoSrc,
    });
    container.appendChild(imgTag);
    return container;
  }
}