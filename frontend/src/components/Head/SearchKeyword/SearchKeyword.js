import Component from '../../../core/Component';

export default class SearchKeywordForm extends Component {
  template() {
    return `
    <form id="kakaoSearch" name="kakaoSearch" class="frm_shwsearch" action="return false;"
        role="search">
        <!-- 2019-08-01 기존 id:daumSearch, name:daumSearch -->
        <fieldset class="fld_shwsearch">
            <legend class="screen_out">쇼핑하우검색</legend>
            <div class="box_search">
                <label for="qTop" class="screen_out">검색어 입력</label>
                <input type="text" id="qTop" class="tf_keyword" size="55" autocomplete="off"
                    spellcheck="false" autocapitalize="off" value="">
                <!-- 2019-08-01 기존 id:qTop, name:q -->
                <button type="submit" class="btn_shwsearch _GC_">
                    <!-- 2019-08-01 기존 id:searchSubmit -->
                    <span class="ico_shwgnb ico_shwsearch"></span>
                    <span class="ir_wa">검색</span>
                </button>
            </div>
        </fieldset>
    </form>`;
  }

  setEvent() {
    this.setSearchFormMouseEvent();
  }

  // 마우스가 올라가면 rollInterval(검색어 자동롤)을 멈춤 마우스가 벗어나면 다시 실행
  setSearchFormMouseEvent() {
    const selectorTarget = {
      searchDiv: '[data-component="search-keyword-form"]',
    };
    this.addEvent('mouseenter', selectorTarget.searchDiv, () => {
      this.$props.parent.removeAutoRollAnimation();
    });

    this.addEvent('mouseleave', selectorTarget.searchDiv, () => {
      this.$props.parent.setAutoRollAnimation();
    });
  }
}
