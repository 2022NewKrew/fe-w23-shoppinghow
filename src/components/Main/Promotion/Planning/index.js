import Component from '../../../../core/Component.js';
import './index.scss';

export default class Plannig extends Component {
  template() {
    return `
      <a href="#" target="_blank" class="planning__link">
        <img src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct" width="485" height="340" class="img_g" alt="">
      </a>
      <div class="paging__comm">
        <button class="planning__left-btn planning__btn">
          <span>이전</span>
        </button>
        <button class="planning__right-btn planning__btn">
          <span>다음</span>
        </button>
        <div class="planning__paging">
          <span class="paging__bar first"></span>
          <span class="paging__bar second"></span>
          <span class="paging__bar third selected"></span>
        </div>
      </div>
    `;
  }
}
