import { Component } from '@core';

export class Footer extends Component {
  template() {
    return /*html*/ `
        <footer class="footer">
            <div class="footer__wrapper">
                <p class="footer__info">
                    (주)카카오 대표이사 여민수, 조수용 <span class="txt__bar">|</span>
                    주소 : 제주특별자치도 제주시 첨단로 242 <span class="txt__bar">|</span>
                    사업자등록번호 : 120-81-47521 등록정보확인
                    <br />
                    통신판매업신고번호 : 제 2015–제주아라-0032호 <span class="txt__bar">|</span>
                    이메일문의 : cs.shopping@kakaocorp.com <span class="txt__bar">|</span>
                    고객센터 : <strong>1544-5664</strong> (평일 09:00 - 19:00)
                </p>

                <p class="footer__caution">
                    (주)카카오는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은
                    각 판매자에게 있습니다.
                    <br />
                    최종 상품 정보는 구매 전 판매처에서 반드시 확인해주세요.
                    <br />
                    각 판매처의 매매보호 서비스를 통해 구매안전 절차 확인 후(에스크로/소비자피해보험/채무지금보증계약) 상품을
                    구매해 주시기 바랍니다.
                </p>

                <div class="footer__copyright">
                    Copyright ©
                    <a href="https://kakao.com/">kakao</a>
                    Corp. All rights reserved.
                </div>
            </div>
        </footer>
    `;
  }
}
