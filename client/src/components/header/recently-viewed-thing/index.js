import { LOGIN_ICON, RECENTLY_VIEWED_THINGS_ICON } from '@/static/constants/image-path';
import { $ } from '@/utils/helper';
import './index.scss';

const enableModalTime = 200;
const disableModalTime = 400;

// RVT : RecentlyViewedThing
export default class RecentlyViewedThing {
  rvtTimer = 0;
  modalTimer = 0;
  constructor({ $parent }) {
    this.recentlyViewedThing = document.createElement('div');
    this.recentlyViewedThing.className = 'recently-viewed-thing';
    this.recentlyViewedThing.innerHTML = this.createInitView();
    this.render();
    $parent.appendChild(this.recentlyViewedThing);

    this.modal = $('.modal', this.recentlyViewedThing);
    this.recentlyViewedThing.addEventListener('mouseenter', this.handleMouseEnterRVT.bind(this));
    this.recentlyViewedThing.addEventListener('mouseleave', this.handleMouseLeaveRVT.bind(this));
    this.modal.addEventListener('mouseenter', this.handleMouseEnterModal.bind(this));
    this.modal.addEventListener('mouseleave', this.handleMouseLeaveModal.bind(this));
  }

  setState(props) {}

  render() {}

  handleMouseEnterRVT() {
    this.timer = setTimeout(() => {
      this.modal.style.display = 'flex';
    }, enableModalTime);
  }

  handleMouseLeaveRVT() {
    clearTimeout(this.timer);
  }

  handleMouseEnterModal() {
    clearTimeout(this.modalTimer);
  }

  handleMouseLeaveModal() {
    this.modalTimer = setTimeout(() => {
      this.modal.style.display = 'none';
    }, disableModalTime);
  }

  createInitView() {
    return `
        <img class="recently-viewed-thing-img" src=${RECENTLY_VIEWED_THINGS_ICON} alt='최근 본 상품 아이콘'/>
        <span>최근본 상품</span>
        <div class="modal">
            <h3 class="modal-title">최근 본 상품</h3>
            <div class="modal-main"><div class="modal-no-item"><span class="modal-highlight-span">최근 본 상품</span>이 없습니다.</div></div>
            <div class="modal-description">
                <span>로그인 하시면 더 많은<br> MY 쇼핑 정보를 확인 하실 수 있습니다</span>
                <div class="modal-login"> 
                    <img src=${LOGIN_ICON} /><span class="modal-login-span">로그인 하기</span>
                </div>
            </div>
        </div>
    `;
  }
}
