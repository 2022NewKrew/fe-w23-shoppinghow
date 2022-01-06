import Component from "@core/Component";
import PlanningItem from "@components/PlanningItem";
import { throttling } from "../utils/eventutils";

const CLICK_THROTTLING_DELAY = 300;
const CSS_CLASS = {
  PARENT: "planning",
  CENTER: "planning__item-center",
  LEFT: "planning__item-left",
  RIGHT: "planning__item-right",
  MOVE_LEFT: "planning__item-move-left",
  MOVE_RIGHT: "planning__item-move-right",
  CONTAINER: "planning__container",
  LEFT_BTN: "planning__left-btn",
  RIGHT_BTN: "planning__right-btn",
  BTN: "planning__btn",
  PAGE_SLOT_LIST: "planning__paging",
  PAGE_SLOT: "planning__span",
  ACTIVATED_PAGE_SLOT: "planning__activated-span",
};

class Planning extends Component {
  template() {
    return `
        <ul class=${CSS_CLASS.CONTAINER}></ul>
        <button class="${CSS_CLASS.LEFT_BTN} ${CSS_CLASS.BTN}"></button>
        <button class="${CSS_CLASS.RIGHT_BTN} ${CSS_CLASS.BTN}"></button>
        <div class="${CSS_CLASS.PAGE_SLOT_LIST}"></div>
    `;
  }

  mounted() {
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );
    const $pageSlotList = this.$target.querySelector(
      `.${CSS_CLASS.PAGE_SLOT_LIST}`
    );
    fetch("http://localhost:3000/planningItems.json")
      .then((res) => res.json())
      .then((planningItemList) => {
        planningItemList.map((planningItem, idx) => {
          new PlanningItem($planningItemList, { ...planningItem, idx });
          $pageSlotList.innerHTML += `<span class=${CSS_CLASS.PAGE_SLOT} data-id="${idx}"></span>`;
        });
        this.initCarousel();
      });
  }

  setEvent() {
    this.addEvent(
      "mouseover",
      `.${CSS_CLASS.PARENT}`,
      this.handleMouseover.bind(this)
    );

    this.addEvent(
      "mouseleave",
      `.${CSS_CLASS.PARENT}`,
      this.handleMouseleave.bind(this)
    );

    this.addEvent(
      "click",
      `.${CSS_CLASS.PARENT}`,
      throttling(this.handleMouseclick.bind(this), CLICK_THROTTLING_DELAY)
    );
  }

  handleMouseclick(e) {
    const { target } = e;
    if (target.classList.contains(CSS_CLASS.BTN)) {
      this.moveCarouselWithBtn(target);
    }
  }

  handleMouseleave(e) {
    const { target, type } = e;
    this.changeBtnColor(target, type);
  }

  handleMouseover(e) {
    const { target, type } = e;

    if (target.classList.contains(CSS_CLASS.PAGE_SLOT)) {
      this.moveCarouselWithPageSlot(target);
    } else {
      this.changeBtnColor(target, type);
    }
  }

  changeBtnColor(target, type) {
    const offset = type === "mouseleave" ? 0 : -60;

    const $prevBtn = this.$target.querySelector(`.${CSS_CLASS.LEFT_BTN}`);
    const $nextBtn = this.$target.querySelector(`.${CSS_CLASS.RIGHT_BTN}`);

    if (target.classList.contains(CSS_CLASS.LEFT_BTN)) {
      $prevBtn.style.backgroundPositionX = `${-60 + offset}px`;
    } else if (target.classList.contains(CSS_CLASS.RIGHT_BTN)) {
      $nextBtn.style.backgroundPositionX = `${-90 + offset}px`;
    } else {
      $prevBtn.style.backgroundPositionX = `${0 + offset}px`;
      $nextBtn.style.backgroundPositionX = `${-30 + offset}px`;
    }
  }

  initCarousel() {
    const $pageSlotList = this.$target.querySelector(
      `.${CSS_CLASS.PAGE_SLOT_LIST}`
    );
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );

    $pageSlotList.firstElementChild.classList.add(
      CSS_CLASS.ACTIVATED_PAGE_SLOT
    );

    $planningItemList.children[0].classList.add(CSS_CLASS.CENTER);
    $planningItemList.children[1].classList.add(CSS_CLASS.RIGHT);
    $planningItemList.lastElementChild.classList.add(CSS_CLASS.LEFT);
  }

  moveCarouselWithBtn(target) {
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );
    const $leftPlanningItem = this.$target.querySelector(`.${CSS_CLASS.LEFT}`);
    const $rightPlanningItem = this.$target.querySelector(
      `.${CSS_CLASS.RIGHT}`
    );
    const $currentCenter = this.$target.querySelector(`.${CSS_CLASS.CENTER}`);

    const [
      TRANSFORM,
      NOT_NEXT_CENTER_POS,
      NEXT_CENTER_POS,
      $nextCenter,
      $nextCenterCandidate,
      $nextCenterSecondCandidate,
      $notNextCenter,
    ] = target.classList.contains(CSS_CLASS.RIGHT_BTN)
      ? [
          CSS_CLASS.MOVE_LEFT,
          CSS_CLASS.LEFT,
          CSS_CLASS.RIGHT,
          $rightPlanningItem,
          $rightPlanningItem.nextElementSibling,
          $planningItemList.firstElementChild,
          $leftPlanningItem,
        ]
      : [
          CSS_CLASS.MOVE_RIGHT,
          CSS_CLASS.RIGHT,
          CSS_CLASS.LEFT,
          $leftPlanningItem,
          $leftPlanningItem.previousElementSibling,
          $planningItemList.lastElementChild,
          $rightPlanningItem,
        ];

    this.changeActivatedPageSlot($nextCenter.dataset.id);

    $currentCenter.classList.add(TRANSFORM);
    $currentCenter.ontransitionend = () => {
      $currentCenter.classList.remove(TRANSFORM);
      $currentCenter.classList.remove(CSS_CLASS.CENTER);
      $currentCenter.classList.add(NOT_NEXT_CENTER_POS);
    };

    $nextCenter.classList.add(TRANSFORM);
    $nextCenter.ontransitionend = () => {
      $nextCenter.classList.remove(TRANSFORM);
      $nextCenter.classList.remove(NEXT_CENTER_POS);
      $nextCenter.classList.add(CSS_CLASS.CENTER);

      $notNextCenter.classList.remove(NOT_NEXT_CENTER_POS);
      if ($nextCenterCandidate) {
        $nextCenterCandidate.classList.add(NEXT_CENTER_POS);
      } else {
        $nextCenterSecondCandidate.classList.add(NEXT_CENTER_POS);
      }
    };
  }

  moveCarouselWithPageSlot(target) {
    const { id } = target.dataset;
    this.changeActivatedPageSlot(id);
    this.moveCarouselDirectlyWithId(id);
  }

  moveCarouselDirectlyWithId(id) {
    this.cleanCarousel();

    const $planningContainer = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );
    const $targetPlanningItem = $planningContainer.children[id];

    $targetPlanningItem.classList.add(CSS_CLASS.CENTER);
    if ($targetPlanningItem.nextElementSibling) {
      $targetPlanningItem.nextElementSibling.classList.add(CSS_CLASS.RIGHT);
    } else {
      $planningContainer.firstElementChild.classList.add(CSS_CLASS.RIGHT);
    }
    if ($targetPlanningItem.previousElementSibling) {
      $targetPlanningItem.previousElementSibling.classList.add(CSS_CLASS.LEFT);
    } else {
      $planningContainer.lastElementChild.classList.add(CSS_CLASS.LEFT);
    }
  }

  cleanCarousel() {
    this.$target
      .querySelector(`.${CSS_CLASS.RIGHT}`)
      .classList.remove(CSS_CLASS.RIGHT);
    this.$target
      .querySelector(`.${CSS_CLASS.CENTER}`)
      .classList.remove(CSS_CLASS.CENTER);
    this.$target
      .querySelector(`.${CSS_CLASS.LEFT}`)
      .classList.remove(CSS_CLASS.LEFT);
  }

  changeActivatedPageSlot(id) {
    const $pageSlotList = this.$target.querySelector(
      `.${CSS_CLASS.PAGE_SLOT_LIST}`
    );
    Array.prototype.forEach.call($pageSlotList.children, (pageSlot) => {
      if (pageSlot.dataset.id === id) {
        pageSlot.classList.add(CSS_CLASS.ACTIVATED_PAGE_SLOT);
      } else {
        pageSlot.classList.remove(CSS_CLASS.ACTIVATED_PAGE_SLOT);
      }
    });
  }
}

export default Planning;
