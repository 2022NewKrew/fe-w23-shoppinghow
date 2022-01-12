import Component from '../../../../core/Component';
import './index.scss';

export default class RollingKeywords extends Component {
  template() {
    const rolling_items = this.$props.keywords
      .map(
        (keyword, index) => `<li class="roll_item">${index + 1} ${keyword}</li>`
      )
      .join('');

    return `
      <div class="roll_wrapper">
        <div class="roll_box">
          <ol class="roll_list"> 
            ${rolling_items}
          </ol>
        </div>
      </div>
    `;
  }

  mounted() {
    const $rollList = this.$('.roll_list');
    const $firstChild = $rollList.firstElementChild;
    const $lastChild = $rollList.lastElementChild;

    const rollHeight = 23;
    $rollList.appendChild($firstChild.cloneNode(true));
    $rollList.insertBefore($lastChild.cloneNode(true), $firstChild);

    $rollList.style.transform = `translate3d(0px, -${rollHeight}px, 0px)`;
  }

  setEvent() {
    const $rollList = this.$('.roll_list');
    const rollHeight = 23;
    const keywordsLen = this.$props.keywords.length;
    const slideSpeed = 300;

    let currentIndex = 0;

    const slideNext = () => {
      if (currentIndex <= keywordsLen - 1) {
        $rollList.style.transition = `${slideSpeed}ms`;
        $rollList.style.transform = `translate3d(0px, -${
          rollHeight * (currentIndex + 2)
        }px, 0px)`;
      }
      if (currentIndex === keywordsLen - 1) {
        setTimeout(() => {
          $rollList.style.transition = `0ms`;
          $rollList.style.transform = `translate3d(0px, -${rollHeight}px, 0px)`;
        }, slideSpeed);
        currentIndex = -1;
      }
      ++currentIndex;
    };

    setInterval(slideNext, 3000);
  }
}
