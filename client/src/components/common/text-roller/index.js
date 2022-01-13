import './index.scss';

const rollingTime = 2000;
const initHeight = 18;
const timeForSetPosToFirstItem = 1800;

export default class TextRoller {
  textArray = [];
  currHeight = initHeight;
  currViewedItemIndex = 0;
  intervalTimer = 0;
  timeOutTimer = 0;

  constructor({ $parent, onClick }) {
    this.textRollerContainer = document.createElement('div');
    this.textRollerContainer.className = 'roller-container';

    this.roller = document.createElement('ul');
    this.roller.className = 'search-top10';
    this.render();
    this.activateRoller();
    this.textRollerContainer.appendChild(this.roller);
    $parent.appendChild(this.textRollerContainer);

    this.roller.addEventListener('click', onClick);
  }

  setState(props) {
    this.textArray = props.hotItemsName;
    this.render();
  }

  render() {
    let firstTextClone = '';
    const allTextLi = this.textArray
      .map((text, index) => {
        const rank = index + 1;
        if (index === 0) firstTextClone = `<li class="search-top10__item">${rank}. ${text}</li>`;
        return `<li class="search-top10__item">${rank}. ${text}</li>`;
      })
      .join('');
    this.roller.innerHTML = allTextLi + firstTextClone;
  }

  activateRoller() {
    const rollingHeight = -39;
    const disabledTransitionValue = 'none 0s ease 0s';
    const enabledTransitionValue = 'all 1s ease';

    this.roller.style.opacity = 1;
    this.intervalTimer = setInterval(() => {
      const nextHeight = this.currHeight + rollingHeight;
      if (this.roller.style.transition === disabledTransitionValue)
        this.roller.style.transition = enabledTransitionValue;
      this.roller.style.transform = `translateY(${nextHeight}px)`;
      this.currHeight = nextHeight;
      this.currViewedItemIndex += 1;

      if (
        (this.textArray.length && this.currViewedItemIndex === this.textArray.length) ||
        this.currHeight < this.textArray.length * rollingHeight
      )
        this.timeOutTimer = setTimeout(this.setPosToFirstItem.bind(this), timeForSetPosToFirstItem);
    }, rollingTime);
  }

  deActivateRoller() {
    this.roller.style.opacity = 0;
    clearInterval(this.intervalTimer);
    clearTimeout(this.timeOutTimer);
  }

  setPosToFirstItem() {
    this.roller.style.transition = 'none';
    this.roller.style.transform = `translateY(${initHeight}px)`;
    this.currViewedItemIndex = 0;
    this.currHeight = initHeight;
  }
}
