import Component from '../../core/Component';
import {TARGET_SELECTOR, getTargetSelector} from '../../util/ComponentGroup';
import SearchKeywordContainer from './SearchKeyword';
// TODO 인기검색어리스트 추가기능 작업예정
export default class Head extends Component {
  template() {
    return `
    <div class="area_headtop">
        <h1 class="tit_shw">
            <a href="/" class="link_shw _GC_">
                <img src="/asset/common/logo_shw_2021.png" class="img_g" alt="쇼핑하우">
            </a>
        </h1>
        <div data-component="${TARGET_SELECTOR.SEARCH_KEYWORD}" class="wrap_shwsearch">
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

  mounted() {
    this.setSearchKeywordForm();
  }

  setSearchKeywordForm() {
    const $searchKeywordContainer = this.$target.querySelector(getTargetSelector(TARGET_SELECTOR.SEARCH_KEYWORD));
    new SearchKeywordContainer($searchKeywordContainer, {});
  }
}
