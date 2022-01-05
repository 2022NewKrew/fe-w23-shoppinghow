import Component from "./core/Component.js";
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

  mounted () {
  }
}
