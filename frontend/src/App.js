import Component from './core/Component.js';
import {TARGET_SELECTOR, getTargetSelector, getTarget} from './core/ComponentGroup';
import KaKaoHead from './compoents/kakaoHead/KaKaoHead.js';
import KaKaoFoot from './compoents/kakaoFoot/KaKaoFoot.js';
import KaKaoContent from './compoents/kakaoContent/KaKaoContent.js';

export default class App extends Component {
  template() {
    return `
            <div id="daumWrap" class="shopping_top">
                <div ${getTarget(TARGET_SELECTOR.TARGET_HEAD)} id="kakaoHead" class="head_shw"></div>
                <div ${getTarget(TARGET_SELECTOR.TARGET_CONTENT)} id="kakaoContent" ></div>
                <div ${getTarget(TARGET_SELECTOR.TARGET_FOOT)} id="kakaoFoot" class="#footer"></div>
            </div>
        `;
  }

  mounted() {
    const $kakaoHead = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_HEAD));
    const $kakaoContent = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_CONTENT));
    const $kakaoFoot = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_FOOT));

    new KaKaoHead($kakaoHead, {});
    new KaKaoFoot($kakaoFoot, {});
    new KaKaoContent($kakaoContent, {});
  }
}
