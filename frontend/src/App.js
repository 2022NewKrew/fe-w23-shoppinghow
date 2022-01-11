import Component from './core/Component.js';
import {TARGET_SELECTOR, getTargetSelector} from './util/ComponentGroup';
import Head from './components/Head/Head.js';
import Foot from './components/Foot/Foot.js';
import Content from './components/Content/Content.js';

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
    const $head = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.HEAD));
    const $content = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.CONTENT));
    const $foot = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.FOOT));

    new Head($head, {});
    new Foot($foot, {});
    new Content($content, {});
  }
}
