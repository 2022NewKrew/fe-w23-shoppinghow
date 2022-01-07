import Component from '../../core/Component';
import {TARGET_SELECTOR, getTargetSelector, getTarget} from '../../core/ComponentGroup';
import ApiService from '../../core/ApiService';
import RollKeyword from './RollKeyword';
// TODO 인기검색어리스트 추가기능 작업예정
export default class KaKaoHead extends Component {
  template() {
    return `
    <div class="area_headtop">
        <h1 class="tit_shw">
            <a href="/" class="link_shw _GC_">
                <img src="/asset/common/logo_shw_2021.png" class="img_g" alt="쇼핑하우">
            </a>
        </h1>
        <div class="wrap_shwsearch">
            <h2 class="screen_out">검색2</h2>
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
            </form>
            <div class="wrap_rollkeywords" id="upwardKeywordWrap">
                <strong class="screen_out">인기 쇼핑 키워드</strong>
                <ol ${getTarget(TARGET_SELECTOR.TARGET_ROLL_KEYWORD)} class="list_rollkeywords" style="top: 0px;">
                </ol>
                
            </div>
            <div class="wrap_suggestion" id="suggestWrap" style="display:none">

            </div>
        </div>

    </div>
    <div id="kakaoGnb" role="navigation" class="area_shwgnb">
        <div class="wrap_shwgnb">
            <h2 class="screen_out">쇼핑하우 주요 메뉴</h2>
            <div class="wrap_shwcate">
                <button type="button" class="btn_shwcate _GC_">카테고리<span
                        class="ico_shwgnb ico_menu">펼치기</span></button>
                <div class="wrap_shwcatelist" id="categoryLayer" style="display:none"></div>
            </div>
            <span class="txt_bar"></span>
            <strong class="screen_out">쇼핑하우 메뉴</strong>
            <ul class="list_shwgnb">

                <li>
                    <a href="/siso/p/hotdeal/list/" data-gg="{lk:pc_gnb_menu,o1:1}" class="link_shwgnb _GC_"
                        target="_self">

                        핫딜
                    </a>
                </li>

                <li>
                    <a href="/siso/p/bestRank/" data-gg="{lk:pc_gnb_menu,o1:2}" class="link_shwgnb _GC_"
                        target="_self">

                        베스트100
                    </a>
                </li>

                <li>
                    <a href="/siso/p/sale/today" data-gg="{lk:pc_gnb_menu,o1:3}"
                        class="link_shwgnb link_new _GC_" target="_self">

                        <span class="txt_new">new</span>

                        할인특가
                    </a>
                </li>

                <li>
                    <a href="/event/top" data-gg="{lk:pc_gnb_menu,o1:4}" class="link_shwgnb _GC_"
                        target="_self">

                        기획전
                    </a>
                </li>

            </ul>

            <strong class="screen_out">쇼핑하우 사용자 메뉴</strong>
            <ul class="list_usergnb">
                <li id="loginWrap"><a
                        href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fbuy.kakao.com%2Fauth%2F11%2FcleanAuthentication%3FreturnUrl%3Dhttps%253A%252F%252Fshoppinghow.kakao.com%252Ftop"
                        class="link_login _GC_" data-gg="{lk:pc_gnb_loginormy}">
                        <span class="ico_shwgnb ico_user"></span>
                        로그인
                    </a></li>
                <li class="area_rcntproducts">
                    <!-- 2019-08-01 'on'클래스를 주면 최근본 상품 레이어가 활성화 됩니다. -->
                    <a href="#none" class="link_products _GC_">
                        <span class="ico_shwgnb ico_products"></span>최근본 상품<span class="ico_shwgnb ico_arrow">
                            펼치기</span><!-- 2019-08-01 최근 상품 레이어가 펼쳐졌을 경우 '접기', 잡혀 있을경우 '펼치기'텍스트를 넣어주세요. -->
                    </a>
                    <div class="wrap_rcntproducts" id="gnbMyLayer">

                    </div>
                </li>
            </ul>
        </div>
    </div>`;
  }

  setup() {
    this.$state = {
      rollInterval: null,
    };
  }

  async syncMounted() {
    const $rollKeyword = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_ROLL_KEYWORD));
    const searchKeywordGroup = await this.getSearhKeyword();

    new RollKeyword($rollKeyword, {searchKeywordGroup: searchKeywordGroup});
  }

  setEvent() {
    this.setAutoRollAnimation();
    this.setSearchFormMouseEvent();
  }

  setAutoRollAnimation() {
    const minTop = -300;
    const totalPx = 32;
    const movePx = 2;
    const rollCycleTime = 3000;
    const $rollKeyword = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.TARGET_ROLL_KEYWORD));
    this.$state.rollInterval = setInterval(() => {
      let top = parseInt($rollKeyword.style.top.split('px')[0]);

      if (top < minTop) {
        $rollKeyword.style.top = '0px';
        top = 0;
      }

      this.moveRollAnimation($rollKeyword, top, totalPx, movePx);
    }, rollCycleTime);
  }

  // 마우스가 올라가면 rollInterval(검색어 자동롤)을 멈춤 마우스가 벗어나면 다시 실행
  setSearchFormMouseEvent() {
    const kakaoSearchEl = this.$target.querySelector('[name="kakaoSearch"]');
    kakaoSearchEl.addEventListener('mouseenter', () => {
      if (this.$state.rollInterval != null) {
        clearInterval(this.$state.rollInterval);
        console.log(this.$state.rollInterval);
      }
    });

    kakaoSearchEl.addEventListener('mouseleave', () => {
      this.setAutoRollAnimation();
    });
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

  async getSearhKeyword() {
    const apiService = new ApiService();

    const res = await apiService.getApi('getSearchKeywordGroup');
    if (res == null) {
      console.log('getSearhKeyword err');
      return;
    }
    return res.data;
  }
}
