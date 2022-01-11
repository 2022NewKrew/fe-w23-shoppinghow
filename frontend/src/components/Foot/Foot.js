import Component from '../../core/Component';

export default class Foot extends Component {
  template() {
    return `
    <div class="footer_shw">
        <h2 class="screen_out">서비스 이용정보</h2>
        <div class="wrap_link">
            <div class="inner_link">
                <a href="https://buy.kakao.com/about/11/terms" target="_blank" class="link_info _GC_">서비스
                    약관/정책</a><span class="txt_bar">|</span><a
                    href="https://www.kakao.com/policy/privacy?lang=ko" target="_blank"
                    class="link_info _GC_"><strong>개인정보처리방침</strong></a><!-- 2019-07-12 strong 태그 추가 수정 --><span
                    class="txt_bar">|</span>
                <a href="javascript:;" class="link_info _GC_"
                    onclick="window.open('/html/noticeOfLaw.html','shopPop','width=988,height=500,resizable=yes,scrollbars=yes')">법적고지</a><span
                    class="txt_bar">|</span>
                <a target="_blank" href="https://www.kakao.com/policy/safeguard?lang=ko"
                    class="link_info _GC_">청소년보호정책</a><span class="txt_bar">|</span>
                <a target="_blank" href="//ccs.kakao.com/help?service=150"
                    class="link_info _GC_">쇼핑하우고객센터</a><span class="txt_bar">|</span>
                <a target="_blank" href="//shopping.biz.daum.net/join/main"
                    class="link_info _GC_">입점/광고안내</a><span class="txt_bar">|</span>
                <a target="_blank" href="//shopping.biz.daum.net" class="link_info _GC_">쇼핑하우비즈센터</a><span
                    class="txt_bar">|</span>
                <a target="_blank" href="https://cipr.kakao.com" class="link_info _GC_">지식재산권보호센터</a>
            </div>
        </div>
        <div class="wrap_info"> 
            <p class="kakaocommerce_info">
                (주)카카오 대표이사 여민수, 조수용<span class="txt_bar">|</span>주소 : 제주특별자치도 제주시 첨단로 242<span
                    class="txt_bar">|</span>사업자등록번호 : 120-81-47521 <a target="_blank"
                    href="https://www.ftc.go.kr/www/bizCommView.do?key=232&amp;apv_perm_no=2012651005630200009&amp;pageUnit=10&amp;searchCnd=bup_nm&amp;searchKrwd=%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC+%EC%B9%B4%EC%B9%B4%EC%98%A4&amp;pageIndex=2"
                    class="link_info _GC_">등록정보확인</a><br>통신판매업신고번호 : 제 2015–제주아라-0032호<span
                    class="txt_bar">|</span>
                <!-- 2019-07-12 삭제 시작  구매안전서비스 : <a target="_blank" href="https://st.kakaocdn.net/shoppingstore/manual/payment_guarantee.png" class="link_info">가입사실확인</a><br>  2019-07-12 삭제 끝 -->이메일문의
                : <a href="mailto:cs.shopping@kakaocorp.com"
                    class="link_info _GC_">cs.shopping@kakaocorp.com</a><span class="txt_bar">|</span>고객센터 :
                <strong>1544-5664</strong> (평일 09:00 - 19:00)
            </p>
            <p class="txt_caution">
                (주)카카오는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br>
                최종 상품 정보는 구매 전 판매처에서 반드시 확인해주세요.<br>
                각 판매처의 매매보호 서비스를 통해 구매안전 절차 확인 후(에스크로/소비자피해보험/채무지금보증계약) 상품을 구매해 주시기 바랍니다.
            </p>
            <small class="txt_copyright">
                Copyright © <a href="https://kakao.com/" class="link_kakaocommerce _GC_">kakao</a> Corp. All
                rights reserved.
            </small>
        </div>
    </div>`;
  }
}
