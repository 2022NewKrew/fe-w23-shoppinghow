import Component from "@core/Component";
import PlanningItem from "@components/Contents/PlanningItem";
import { throttling } from "@utils/eventutils";
import style from "@style/planning.module.scss";

const CLICK_THROTTLING_DELAY = 300;

class Planning extends Component {
  template() {
    return `
        <div class="${style["planning"]}">
            <ul class=${style["container"]}></ul>
            <button class="${style["left-btn"]} ${style["btn"]}"></button>
            <button class="${style["right-btn"]} ${style["btn"]}"></button>
            <div class="${style["page-slot-list"]}"></div>
        </div>
    `;
  }

  mounted() {
    const $planningItemList = this.$target.querySelector(
      `.${style["container"]}`
    );
    const $pageSlotList = this.$target.querySelector(
      `.${style["page-slot-list"]}`
    );
    fetch("http://localhost:3000/planningItems.json")
      .then((res) => res.json())
      .then((planningItemList) => {
        planningItemList.map((planningItem, idx) => {
          new PlanningItem($planningItemList, { ...planningItem, idx });
          $pageSlotList.innerHTML += `<span class=${style["page-slot"]} data-id="${idx}"></span>`;
        });
        this.initCarousel();
      });
  }

  setEvent() {
    this.addEvent(
      "mouseover",
      `.${style["planning"]}`,
      this.handleMouseover.bind(this)
    );

    this.addEvent(
      "mouseleave",
      `.${style["planning"]}`,
      this.handleMouseleave.bind(this)
    );

    this.addEvent(
      "click",
      `.${style["planning"]}`,
      throttling(this.handleMouseclick.bind(this), CLICK_THROTTLING_DELAY)
    );
  }

  handleMouseclick(e) {
    const { target } = e;
    if (target.classList.contains(style["btn"])) {
      this.moveCarouselWithBtn(target);
    }
  }

  handleMouseleave(e) {
    const { target, type } = e;
    this.changeBtnColor(target, type);
  }

  handleMouseover(e) {
    const { target, type } = e;

    if (target.classList.contains(style["page-slot"])) {
      this.moveCarouselWithPageSlot(target);
    } else {
      this.changeBtnColor(target, type);
    }
  }

  changeBtnColor(target, type) {
    const offset = type === "mouseleave" ? 0 : -60;

    const $prevBtn = this.$target.querySelector(`.${style["left-btn"]}`);
    const $nextBtn = this.$target.querySelector(`.${style["right-btn"]}`);

    if (target.classList.contains(style["left-btn"])) {
      $prevBtn.style.backgroundPositionX = `${-60 + offset}px`;
    } else if (target.classList.contains(style["right-btn"])) {
      $nextBtn.style.backgroundPositionX = `${-90 + offset}px`;
    } else {
      $prevBtn.style.backgroundPositionX = `${0 + offset}px`;
      $nextBtn.style.backgroundPositionX = `${-30 + offset}px`;
    }
  }

  initCarousel() {
    const $pageSlotList = this.$target.querySelector(
      `.${style["page-slot-list"]}`
    );
    const $planningItemList = this.$target.querySelector(
      `.${style["container"]}`
    );

    $pageSlotList.firstElementChild.classList.add(style["activated-slot"]);

    $planningItemList.children[0].classList.add(style["center-item"]);
    $planningItemList.children[1].classList.add(style["right-item"]);
    $planningItemList.lastElementChild.classList.add(style["left-item"]);
  }

  moveCarouselWithBtn(target) {
    const $planningItemList = this.$target.querySelector(
      `.${style["container"]}`
    );
    const $leftPlanningItem = this.$target.querySelector(
      `.${style["left-item"]}`
    );
    const $rightPlanningItem = this.$target.querySelector(
      `.${style["right-item"]}`
    );
    const $currentCenter = this.$target.querySelector(
      `.${style["center-item"]}`
    );

    const [
      TRANSFORM,
      NOT_NEXT_CENTER_POS,
      NEXT_CENTER_POS,
      $nextCenter,
      $nextCenterCandidate,
      $nextCenterSecondCandidate,
      $notNextCenter,
    ] = target.classList.contains(style["right-btn"])
      ? [
          style["move-left"],
          style["left-item"],
          style["right-item"],
          $rightPlanningItem,
          $rightPlanningItem.nextElementSibling,
          $planningItemList.firstElementChild,
          $leftPlanningItem,
        ]
      : [
          style["move-right"],
          style["right-item"],
          style["left-item"],
          $leftPlanningItem,
          $leftPlanningItem.previousElementSibling,
          $planningItemList.lastElementChild,
          $rightPlanningItem,
        ];

    this.changeActivatedPageSlot($nextCenter.dataset.id);

    $currentCenter.classList.add(TRANSFORM);
    $currentCenter.ontransitionend = () => {
      $currentCenter.classList.remove(TRANSFORM);
      $currentCenter.classList.remove(style["center-item"]);
      $currentCenter.classList.add(NOT_NEXT_CENTER_POS);
    };

    $nextCenter.classList.add(TRANSFORM);
    $nextCenter.ontransitionend = () => {
      $nextCenter.classList.remove(TRANSFORM);
      $nextCenter.classList.remove(NEXT_CENTER_POS);
      $nextCenter.classList.add(style["center-item"]);

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
      `.${style["container"]}`
    );
    const $targetPlanningItem = $planningContainer.children[id];

    $targetPlanningItem.classList.add(style["center-item"]);
    if ($targetPlanningItem.nextElementSibling) {
      $targetPlanningItem.nextElementSibling.classList.add(style["right-item"]);
    } else {
      $planningContainer.firstElementChild.classList.add(style["right-item"]);
    }
    if ($targetPlanningItem.previousElementSibling) {
      $targetPlanningItem.previousElementSibling.classList.add(
        style["left-item"]
      );
    } else {
      $planningContainer.lastElementChild.classList.add(style["left-item"]);
    }
  }

  cleanCarousel() {
    this.$target
      .querySelector(`.${style["right-item"]}`)
      .classList.remove(style["right-item"]);
    this.$target
      .querySelector(`.${style["center-item"]}`)
      .classList.remove(style["center-item"]);
    this.$target
      .querySelector(`.${style["left-item"]}`)
      .classList.remove(style["left-item"]);
  }

  changeActivatedPageSlot(id) {
    const $pageSlotList = this.$target.querySelector(
      `.${style["page-slot-list"]}`
    );
    Array.prototype.forEach.call($pageSlotList.children, (pageSlot) => {
      if (pageSlot.dataset.id === id) {
        pageSlot.classList.add(style["activated-slot"]);
      } else {
        pageSlot.classList.remove(style["activated-slot"]);
      }
    });
  }
}

export default Planning;
