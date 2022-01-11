import './index.scss';
import { LOGIN_ICON, RECENTLY_VIEWED_THINGS_ICON } from '@/static/constants/image-path';
import { $ } from '@/utils/helper';
import { getItemInLocalStroage, setItemInLocalStroage, removeItemInLocalStroage } from '@/utils/local-storage';

const ENABLE_MODAL_TIME = 200;
const DISABLE_MODAL_TIME = 2000;
const RECENTLY_VIEWED_THING_IMG_LIMIT = 6;

// RVT : RecentlyViewedThing
export default class RecentlyViewedThing {
  rvtTimer = 0;
  modalTimer = 0;
  recentlyViewedThingImgs = getItemInLocalStroage('recently-viewed-thing');

  constructor({ $parent }) {
    this.recentlyViewedThing = document.createElement('div');
    this.recentlyViewedThing.className = 'recently-viewed-thing';
    this.recentlyViewedThing.innerHTML = this.createInitView();
    this.modalContent = $('.modal-main', this.recentlyViewedThing);
    this.modalThingsLength = $('.modal-things-length', this.recentlyViewedThing);
    this.render();
    $parent.appendChild(this.recentlyViewedThing);

    this.modal = $('.modal', this.recentlyViewedThing);

    this.recentlyViewedThing.addEventListener('mouseenter', this.handleMouseEnterRVT.bind(this));
    this.recentlyViewedThing.addEventListener('mouseleave', this.handleMouseLeaveRVT.bind(this));
    this.modal.addEventListener('mouseenter', this.handleMouseEnterModal.bind(this));
    this.modal.addEventListener('mouseleave', this.handleMouseLeaveModal.bind(this));
    document.body.addEventListener('addToRecentlyViewedThing', this.handleCustomEventBody.bind(this));
  }

  handleCustomEventBody(e) {
    this.removeDulication(e);

    setItemInLocalStroage('recently-viewed-thing', e.detail.imageSrc, RECENTLY_VIEWED_THING_IMG_LIMIT);
    const newState = getItemInLocalStroage('recently-viewed-thing');
    this.setState(newState);
  }

  removeDulication(e) {
    const duplicationIndex = this.recentlyViewedThingImgs.findIndex((img) => img === e.detail.imageSrc);
    if (duplicationIndex >= 0) removeItemInLocalStroage('recently-viewed-thing', duplicationIndex);
  }

  setState(props) {
    this.recentlyViewedThingImgs = props;
    this.render();
  }

  render() {
    this.modalContent.innerHTML = this.recentlyViewedThingImgs.length
      ? this.recentlyViewedThingImgs.map((imgSrc) => `<img src=${imgSrc}>`).join('')
      : `<div class="modal-no-item"><span class="modal-highlight-span">최근 본 상품</span>이 없습니다.</div>`;

    this.modalThingsLength.innerHTML = this.recentlyViewedThingImgs.length;
  }

  handleMouseEnterRVT() {
    this.timer = setTimeout(() => {
      this.modal.style.display = 'flex';
    }, ENABLE_MODAL_TIME);
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
    }, DISABLE_MODAL_TIME);
  }

  createInitView() {
    return `
        <img class="recently-viewed-thing-img" src=${RECENTLY_VIEWED_THINGS_ICON} alt='최근 본 상품 아이콘'/>
        <span>최근본 상품</span>
        <div class="modal">
            <h3 class="modal-title">최근 본 상품 <span class="modal-things-length"></span></h3>
            <hr>
            <div class="modal-main"></div>
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
