import Component from '../../../core/Component';
import {TARGET_SELECTOR, getTargetSelector} from '../../../util/ComponentGroup';
import RollKeyword from './RollKeyword';
import SearchKeywordForm from './SearchKeyword';

let rollInterval = '';

export default class SearchKeywordContainer extends Component {
  template() {
    return `
    <div data-component="${TARGET_SELECTOR.SEARCH_KEYWORD_FORM}"></div>
    <div class="wrap_rollkeywords" id="upwardKeywordWrap">
        <strong class="screen_out">인기 쇼핑 키워드</strong>
        <ol data-component="${TARGET_SELECTOR.ROLL_KEYWORD}" class="list_rollkeywords" style="top: 0px;">
        </ol>
        
    </div>
    <div class="wrap_suggestion" id="suggestWrap" style="display:none">

    </div>
    `;
  }

  mounted() {
    this.setRollKeywordForm();
    this.setSearchKeywordForm();
  }

  setSearchKeywordForm() {
    const $searchKeywordForm = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.SEARCH_KEYWORD_FORM));
    new SearchKeywordForm($searchKeywordForm, {parent: this});
  }

  setRollKeywordForm() {
    const $rollKeyword = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.ROLL_KEYWORD));
    new RollKeyword($rollKeyword, {});
  }

  setEvent() {
    this.setAutoRollAnimation();
  }

  setAutoRollAnimation() {
    const minTop = -300;
    const totalPx = 32;
    const movePx = 2;
    const rollCycleTime = 3000;
    const $rollKeyword = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.ROLL_KEYWORD));
    rollInterval = setInterval(() => {
      let top = parseInt($rollKeyword.style.top.split('px')[0]);

      if (top < minTop) {
        $rollKeyword.style.top = '0px';
        top = 0;
      }

      this.moveRollAnimation($rollKeyword, top, totalPx, movePx);
    }, rollCycleTime);
  }

  removeAutoRollAnimation() {
    if (rollInterval != null) {
      clearInterval(rollInterval);
    }
  }

  // 총픽셀을 원하는 픽셀만큼 이동시킴
  moveRollAnimation($el, top, totalMovePx, movePx) {
    let count = 0;
    const moveAnimationCycleTime = 40;
    const moveAnimation = setInterval(() => {
      if (count >= totalMovePx / movePx) {
        $el.style.top = `${top - totalMovePx}px`;
        clearInterval(moveAnimation);
        return;
      }
      count++;
      $el.style.top = `${top - movePx * count}px`;
    }, moveAnimationCycleTime);
  }
}
