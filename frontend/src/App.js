import Component from './core/Component.js';
import {TARGET_SELECTOR, getTargetSelector} from './util/ComponentGroup';
import KaKaoHead from './compoents/kakaoHead/KaKaoHead.js';
import KaKaoFoot from './compoents/kakaoFoot/KaKaoFoot.js';
import KaKaoContent from './compoents/kakaoContent/KaKaoContent.js';

export default class App extends Component {
  template() {
    return `
            <div id="daumWrap" class="shopping_top">
                <div data-component="${TARGET_SELECTOR.HEAD}" id="kakaoHead" class="head_shw"></div>
                <div data-component="${TARGET_SELECTOR.CONTENT}" id="kakaoContent" ></div>
                <div data-component="${TARGET_SELECTOR.FOOT}" id="kakaoFoot" class="#footer"></div>
            </div>
        `;
  }

  mounted() {
    const $kakaoHead = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.HEAD));
    const $kakaoContent = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.CONTENT));
    const $kakaoFoot = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.FOOT));

    new KaKaoHead($kakaoHead, {});
    new KaKaoFoot($kakaoFoot, {});
    new KaKaoContent($kakaoContent, {});
  }
}
