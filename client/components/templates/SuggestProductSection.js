import { SectionLayout } from '@components';
import { RecentlyViewedStore } from '@stores';
import { $ } from '@utils';

const ITEM_CNT = 5;
const SLIDE_FRAME_WIDTH = 254;

export class SuggestProductSection extends SectionLayout {
  setup() {
    this.props = { className: 'suggestProduct__section', title: '이 상품 어때요?', ...this.props };
    this.seletedIndex = 0;
    this.currentIndex = 0;
  }

  rendered() {
    super.rendered();
    this.$contentContainer.innerHTML = `

      <div class="suggestProduct__nav">
        <ul class="suggestProduct__track"></ul>
        <button type="button" class="suggestProduct__navBtn prevBtn" title="이전"><span></span></button>
        <button type="button" class="suggestProduct__navBtn nextBtn" title="다음"><span></span></button>
      </div>
      
      <div class="suggestProduct__container"></div>
    `;

    this.$track = $('.suggestProduct__track', this.$contentContainer);
    this.$productContainer = $('.suggestProduct__container', this.$contentContainer);

    this.renderTrack();
    this.renderProductContainer();

    this.$track.addEventListener('click', ({ target }) => {
      const $item = target.closest('.suggestProduct__navItem');
      if ($item?.dataset?.index === undefined) return;

      this.onClickItem($item);
    });
    $('.prevBtn', this.$target).onclick = () => this.onSlide(this.currentIndex - ITEM_CNT);
    $('.nextBtn', this.$target).onclick = () => this.onSlide(this.currentIndex + ITEM_CNT);
  }

  mounted() {
    RecentlyViewedStore.subscribe(() => {
      const { recentlyViewedList } = RecentlyViewedStore.getState();
      if (recentlyViewedList.length > 1) return;

      this.render();
    });
    RecentlyViewedStore.subscribe(this.renderTrack.bind(this));
  }

  // util

  onClickItem($item) {
    this.seletedIndex = $item.dataset.index;
    const $seleted = this.$track.querySelector('.suggestProduct__navItem--selected');
    $seleted.classList.remove('suggestProduct__navItem--selected');
    $item.classList.add('suggestProduct__navItem--selected');
  }

  onSlide(index) {
    const isOutOfIndex = this.maxIndex < index || index < 0;
    if (isOutOfIndex) return;

    this.currentIndex = index;
    const x = -SLIDE_FRAME_WIDTH * this.currentIndex;
    this.$track.style.transform = `translateX(${x}px)`;
  }

  renderTrack() {
    const { recentlyViewedList } = RecentlyViewedStore.getState();
    if (!recentlyViewedList.length) {
      this.$target.style.display = 'none';
      return;
    }

    this.$target.style.display = 'inhert';
    const emptyItemCnt = ITEM_CNT - (recentlyViewedList.length % ITEM_CNT || ITEM_CNT);
    const navItemList = [...recentlyViewedList, ...Array(emptyItemCnt).map((_) => undefined)];
    this.maxIndex = navItemList.length - 1;

    this.$track.innerHTML = `
        ${navItemList
          .map((item, index) => (!item ? this.rednerEmptyItem() : this.renderNavigatorItem({ ...item, index })))
          .join('')}
    `;
  }

  rednerEmptyItem() {
    return /* html */ `
        <li>
            <span class="suggestProduct__navEmptyItem">
              최근 본 상품이 없습니다.
            </span>
        </li>
      `;
  }

  renderNavigatorItem({ title, img, url, index }) {
    const isSeleted = this.seletedIndex === index;

    return /* html */ `
        <li>
            <div class="suggestProduct__navItemWrapper">
                <div 
                    data-index="${index}" 
                    class="suggestProduct__navItem ${isSeleted ? 'suggestProduct__navItem--selected' : ''}"
                >
                    <span class ="suggestProduct__thumb">
                        <img src="${img}" alt="${title}" width="80" height="80"/>
                        <span class="suggestProduct__thumbFrame"></span>
                    </span>
                    <span class="suggestProduct__navTitle">${title}</span>
                </div>
                <a class="suggestProduct__navItemLink" href="${url}" target="_blank">상품보기</a>
            </div>
        </li>
    `;
  }

  renderProductContainer() {
    const dummyProduct = `
      <li class="product">
        <a class="product__link" herf="#">
            <span class="product__thumb">
                <img alt="이미지" width="200" height="200" src="https://shop2.daumcdn.net/thumb/R200x200/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FA5084880185.jpg%3Fut%3D20190526004818">
            </span>
            <span class="product__title">피트 엑스 논슬립 여성 요가 필라테스양말 5매세트 [FX009]</span>
            <span class="product__desc">
                <strong>11,710</strong>원
            </span>
        </a>
      </li>
    `;

    this.$productContainer.innerHTML = `
        <div>
            <span>비슷한 관심사의 사람들이 많이 본 상품</span>
            <ul>
              ${[...Array(ITEM_CNT)].map((_) => dummyProduct).join('')}
            </ul>
        </div>

        <div>
            <span>같은 카테고리 인기상품</span>
            <ul>
              ${[...Array(ITEM_CNT)].map((_) => dummyProduct).join('')}
            </ul>
        </div>
    `;
  }
}
