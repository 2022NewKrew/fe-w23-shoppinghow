import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class Footer {
  constructor({ $app }) {
    this.$target = createHTML("footer", { id: "kakaoFooter", role: "footer" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <div class="footer_shw">
        <h2 class="screen_out">서비스 이용정보</h2>
        <div class="wrap_link">
            <div class="inner_link">
                <a href="javascript:;" class="link_info">서비스 약관/정책</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info "><strong>개인정보처리방침</strong></a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">법적고지</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">청소년보호정책</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">쇼핑하우고객센터</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">입점/광고안내</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">쇼핑하우비즈센터</a>
                <span class="txt_bar">|</span>
                <a href="javascript:;" class="link_info">지식재산권보호센터</a>
            </div>
        </div>
        <div class="wrap_info"> 
            <p class="kakaocommerce_info">
                (주)카카오 대표이사 여민수, 조수용
                <span class="txt_bar">|</span>
                주소 : 제주특별자치도 제주시 첨단로 242
                <span class="txt_bar">|</span>
                사업자등록번호 : 120-81-47521 
                <a href="javascript:;" class="link_info">등록정보확인</a>
                <br>
                통신판매업신고번호 : 제 2015–제주아라-0032호
                <span class="txt_bar">|</span>
                이메일문의: 
                <a href="javascript:;" class="link_info">cs.shopping@kakaocorp.com</a>
                <span class="txt_bar">|</span>
                고객센터 : <strong>1544-5664</strong> (평일 09:00 - 19:00)
            </p>
            <p class="txt_caution">
                (주)카카오는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br>
                최종 상품 정보는 구매 전 판매처에서 반드시 확인해주세요.<br>
                각 판매처의 매매보호 서비스를 통해 구매안전 절차 확인 후(에스크로/소비자피해보험/채무지금보증계약) 상품을 구매해 주시기 바랍니다.
            </p>
            <small class="txt_copyright">
                Copyright © <a href="javascript:;" class="link_kakaocommerce">kakao</a> Corp. All
                rights reserved.
            </small>
        </div>
    </div>
    `;
  }
}
