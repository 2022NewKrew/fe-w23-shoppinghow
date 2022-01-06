import Component from '../../../../core/Component.js';
import './index.scss';

export default class Plannig extends Component {
  setup() {
    this.$state = {
      items: [
        {
          src: '//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct',
          title: '크리스마스 트리',
        },
        {
          src: '//shop3.daumcdn.net/shophow/sib/0_211220170158_owNwlIYMPjCOmpLzLBZpBGQkATLoNNWG',
          title: '홈인테리어 특가전',
        },
        {
          src: '//shop3.daumcdn.net/shophow/sib/0_211220170214_KnBppOYCunaKIzTENvoRdzZivpnaGYdc',
          title: '고블렛',
        },
      ],
    };
  }

  template() {
    const { items } = this.$state;
    return `
      <div class="slide_wrapper">
        <div class="slide_box">
          <div class="slide_list">
            ${items
              .map(
                (item) => `
                  <a href="#" target="_blank" class="planning__link">
                    <img src="${item.src}" alt="${item.title}">
                  </a>
                  `
              )
              .join('')}
          </div>
        </div>
      </div>
      <div class="paging__comm">
        <button class="planning__left-btn planning__btn">
          <span>이전</span>
        </button>
        <button class="planning__right-btn planning__btn">
          <span>다음</span>
        </button>
        <div class="planning__paging">
          ${items.map((item) => `<span class="paging__bar"></span>`).join('')}
        </div>
      </div>
    `;
  }

  mounted() {
    const $slideList = this.$('.slide_list');
    const slideLen = this.$state.items.length;
    const slideWidth = 634;

    $slideList.style.width = `${slideWidth * (slideLen + 2)}px`;

    const $firstChild = $slideList.firstElementChild;
    const $lastChild = $slideList.lastElementChild;
    $slideList.appendChild($firstChild.cloneNode(true));
    $slideList.insertBefore($lastChild.cloneNode(true), $firstChild);

    $slideList.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
  }

  setEvent() {
    const $slideBtnNext = this.$('.planning__right-btn');
    const $slideBtnPrev = this.$('.planning__left-btn');

    const $slideList = this.$('.slide_list');
    const slideLen = this.$state.items.length;
    const slideWidth = 634;
    const slideSpeed = 300;

    let currentIndex = 0;
    this.$(`.paging__bar:nth-child(${currentIndex + 1})`).classList.add(
      'selected'
    );

    $slideBtnNext.addEventListener('click', () => {
      if (currentIndex <= slideLen - 1) {
        $slideList.style.transition = `${slideSpeed}ms`;
        $slideList.style.transform = `translate3d(-${
          slideWidth * (currentIndex + 2)
        }px, 0px, 0px)`;
        this.$(`.paging__bar:nth-child(${currentIndex + 1})`).classList.remove(
          'selected'
        );
      }
      if (currentIndex === slideLen - 1) {
        setTimeout(() => {
          $slideList.style.transition = `0ms`;
          $slideList.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
        }, slideSpeed);
        currentIndex = -1;
      }
      currentIndex++;
      this.$(`.paging__bar:nth-child(${currentIndex + 1})`).classList.add(
        'selected'
      );
    });

    $slideBtnPrev.addEventListener('click', () => {
      if (currentIndex >= 0) {
        $slideList.style.transition = `${slideSpeed}ms`;
        $slideList.style.transform = `translate3d(-${
          slideWidth * currentIndex
        }px, 0px, 0px)`;
        this.$(`.paging__bar:nth-child(${currentIndex + 1})`).classList.remove(
          'selected'
        );
      }
      if (currentIndex === 0) {
        setTimeout(() => {
          $slideList.style.transition = `0ms`;
          $slideList.style.transform = `translate3d(-${
            slideWidth * slideLen
          }px, 0px, 0px)`;
        }, slideSpeed);
        currentIndex = slideLen;
      }
      currentIndex--;
      this.$(`.paging__bar:nth-child(${currentIndex + 1})`).classList.add(
        'selected'
      );
    });
  }
}
