import { $ } from "@utils/query.js";
import { Component } from "@core/Component.js";
export default class Footer extends Component {
  setUp() {}
  template() {
    return `
      <div class="footer__content">
          <p class="kakaocommerce_info">
              (주)카카오 대표이사 여민수, 조수용<span class="txt_bar">|</span>주소 : 제주특별자치도 제주시 첨단로 242<span class="txt_bar">|</span>사업자등록번호 : 120-81-47521 <a target="_blank" href="https://www.ftc.go.kr/www/bizCommView.do?key=232&amp;apv_perm_no=2012651005630200009&amp;pageUnit=10&amp;searchCnd=bup_nm&amp;searchKrwd=%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC+%EC%B9%B4%EC%B9%B4%EC%98%A4&amp;pageIndex=2" class="link_info _GC_">등록정보확인</a><br>통신판매업신고번호 : 제 2015–제주아라-0032호<span class="txt_bar">|</span><!-- 2019-07-12 삭제 시작  구매안전서비스 : <a target="_blank" href="https://st.kakaocdn.net/shoppingstore/manual/payment_guarantee.png" class="link_info">가입사실확인</a><br>  2019-07-12 삭제 끝 -->이메일문의 : <a href="mailto:cs.shopping@kakaocorp.com" class="link_info _GC_">cs.shopping@kakaocorp.com</a><span class="txt_bar">|</span>고객센터 : <strong>1544-5664</strong> (평일 09:00 - 19:00)
          </p>
          <p class="txt_caution">
              (주)카카오는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br>
              최종 상품 정보는 구매 전 판매처에서 반드시 확인해주세요.<br>
              각 판매처의 매매보호 서비스를 통해 구매안전 절차 확인 후(에스크로/소비자피해보험/채무지금보증계약) 상품을 구매해 주시기 바랍니다.
          </p>
          <small class="txt_copyright">
              Copyright © <a href="https://kakao.com/" class="link_kakaocommerce _GC_">kakao</a> Corp. All rights reserved.
          </small>
      </div>
    `;
  }
  setEvent() {}
}
