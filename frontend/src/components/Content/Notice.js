import Component from '../../core/Component';

// TODO: cMain작업예정(상품 리스트)
export default class Notice extends Component {
  template() {
    return `
    <div class="section_notice">
        <h2 class="tit_notice">공지사항</h2><a
            href="http://shopping.daum.net/siso/p/notice/detail/noticeId:771&amp;pageNum:1"
            class="link_notice _GC_">[공지] 카카오쇼핑 이용약관 개정 안내 (2021.11.24 시행)</a><span
            class="ico_comm2 ico_new">NEW</span>
    </div>
    `;
  }
}
