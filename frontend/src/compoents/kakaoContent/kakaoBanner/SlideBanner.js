import Component from '../../../core/Component';

export default class SlideBanner extends Component {
  template() {
    const bannerData = this.$props.bannerData;
    const currentPage = this.$state.currentPage;
    const pagingGroup = this.$state.pagingGroup;
    return `
    <div class="slide_evt" id="mileageSilde">
        <div class="slide" id="topMileageSlide"
            style="position: relative; top: 0px; transform: translate3d(0px, 0px, 0px); left: -484px; width: 1552px; transition-duration: 0ms;">
            ${pagingGroup
      .map((page) => {
        const targetPage = (currentPage + page + 2) % 3;
        return `
                    <div class="panel" aria-hidden="${
                      targetPage != currentPage ? 'true' : 'false'
}"
                        style="height: 100%; overflow: hidden; display: inline-block; transform: translate3d(0px, 0px, 0px); width: 484px;">
                        <a href="" target="_blank" class="link_event _GC_">
                            <img src="${bannerData[targetPage].path}/${
  bannerData[targetPage].name
}" width="485" height="340" class="img_g" alt="">
                        </a>
                    </div>
                    `;
      })
      .join('')}
        </div>
    </div>
    <div class="paging_comm">
        <span class="inner_paging" id="mileageSildePage">
            ${pagingGroup
      .map((page) => {
        let tag = 'span';
        if (page == currentPage) tag = 'em';
        return `<${tag} class="btn_paging">
                            <span class="num_page">${page}</span>
                        </${tag}>`;
      })
      .join('')}
        </span>
        <button type="button" class="btn_slide btn_prev _GC_" title="이전">
            <span class="ico_slide ico_prev">이전</span>
        </button>
        <button type="button" class="btn_slide btn_next _GC_" title="다음">
            <span class="ico_slide ico_next">다음</span>
        </button>
    </div>`;
  }

  setup() {
    this.$state = {
      currentPage: 0,
      pagingGroup: [0, 1, 2],
    };
  }

  mounted() {
    this.setPagingBtnEvent();
    this.setPageSlide();
  }

  setPagingBtnEvent() {
    const _this = this;
    const innerPageEl = this.$target.querySelector('[id="mileageSildePage"]');
    innerPageEl.addEventListener('mouseover', function(event) {
      if (event.target.className != 'num_page') return;
      const targetPage = parseInt(event.target.innerText);
      if (targetPage == _this.$state.currentPage) return;
      _this.setState({currentPage: targetPage});
      console.log(_this.$state);
    });
  }

  setPageSlide() {
    this.setPageSlideBtnWithSlidePageEvnet();
  }

  setPageSlideBtnWithSlidePageEvnet() {
    const _this = this;
    const topMileageSlide = this.$target.querySelector('[id="topMileageSlide"]');
    const nextBtn = this.$target.querySelector('[class="btn_slide btn_next _GC_"]');
    const prevBtn = this.$target.querySelector('[class="btn_slide btn_prev _GC_"]');
    let moveDirection = '';
    nextBtn.addEventListener('click', function(evnet) {
      moveDirection='right';
      topMileageSlide.style.transitionDuration = '300ms';
      topMileageSlide.style.transform = 'translate3d(-484px, 0px, 0px)';
    });

    prevBtn.addEventListener('click', function(evnet) {
      moveDirection='left';
      topMileageSlide.style.transitionDuration = '300ms';
      topMileageSlide.style.transform = 'translate3d(484px, 0px, 0px)';
    });

    topMileageSlide.addEventListener('transitionend', () => {
      topMileageSlide.style.transitionDuration = '0ms';
      topMileageSlide.style.transform = 'translate3d(0px, 0px, 0px)';
      if (moveDirection=='right') {
        _this.setState({currentPage: (_this.$state.currentPage+1)%3});
      } else if (moveDirection=='left') {
        _this.setState({currentPage: (_this.$state.currentPage+2)%3});
      }
    });
  }
}
