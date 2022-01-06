import Component from './core/Component.js';
import KaKaoHead from './compoents/kakaoHead/KaKaoHead.js';
import KaKaoFoot from './compoents/kakaoFoot/KaKaoFoot.js';
import KaKaoContent from './compoents/kakaoContent/KaKaoContent.js';

export default class App extends Component {
  template() {
    return `
            <div id="daumWrap" class="shopping_top">
                <div id="kakaoHead" class="head_shw" data-component="kakao-head"></div>
                <div id="kakaoContent" data-component="kakao-content"></div>
                <div id="kakaoFoot" class="#footer" data-component="kakao-foot"></div>
            </div>
        `;
  }

  mounted() {
    const $kakaoHead = this.$target.querySelector('[data-component="kakao-head"]');
    const $kakaoContent = this.$target.querySelector('[data-component="kakao-content"]');
    const $kakaoFoot = this.$target.querySelector('[data-component="kakao-foot"]');

    new KaKaoHead($kakaoHead, {});
    new KaKaoFoot($kakaoFoot, {});
    new KaKaoContent($kakaoContent, {});
  }
}
