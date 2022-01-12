import Component from '@Core/Component.js';
import Theme from './Theme';
import './index.scss';
import Carousel from './Carousel/index.js';

export default class Promotion extends Component {
  setup() {
    this.$state = {
      banner: {
        src: '//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC',
        title: '기획전 이벤트',
      },
    };
  }
  template() {
    return `
    <div class="banner">
      <div class="best">
        <a class="best__link">
          <img src="${this.$state.banner.src}" class="img_g" alt="${this.$state.banner.title}">
        </a>
      </div>
      <div class="carousel"></div>
    </div>
    <div class="theme"></div>
    `;
  }

  mounted() {
    const $theme = this.$('.theme');
    new Theme($theme, {});
    const $carousel = this.$('.carousel');
    new Carousel($carousel, {});
  }
}
