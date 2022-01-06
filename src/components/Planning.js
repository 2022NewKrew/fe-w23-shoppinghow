import Component from "@core/Component";
import PlanningItem from "@components/PlanningItem";
import { throttling } from "../utils/eventutils";

const CLICK_THROTTLING_DELAY = 600;
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
  PAGING: "planning__paging",
  SPAN: "planning__span",
  ACTIVATED_SPAN: "planning__activated-span",
};

class Planning extends Component {
  template() {
    return `
        <ul class=${CSS_CLASS.CONTAINER}></ul>
        <button class="${CSS_CLASS.LEFT_BTN} ${CSS_CLASS.BTN}"></button>
        <button class="${CSS_CLASS.RIGHT_BTN} ${CSS_CLASS.BTN}"></button>
        <div class="${CSS_CLASS.PAGING}"></div>
    `;
  }

  mounted() {
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );
    const $pagingSpanWrapper = this.$target.querySelector(
      `.${CSS_CLASS.PAGING}`
    );
    fetch("http://localhost:3000/planningItems.json")
      .then((res) => res.json())
      .then((planningItemList) => {
        planningItemList.map((planningItem, idx) => {
          new PlanningItem($planningItemList, { ...planningItem, idx });
          $pagingSpanWrapper.innerHTML += `<span class=${CSS_CLASS.SPAN} data-id="${idx}"></span>`;
        });
        this.initCarousel();
      });
  }

  setEvent() {
    const $prevBtn = this.$target.querySelector(`.${CSS_CLASS.LEFT_BTN}`);
    const $nextBtn = this.$target.querySelector(`.${CSS_CLASS.RIGHT_BTN}`);
    const $pagingSpanWrapper = this.$target.querySelector(
      `.${CSS_CLASS.PAGING}`
    );
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );

    this.addEvent("mouseover", `.${CSS_CLASS.PARENT}`, (e) => {
      const { target } = e;
      if (target.classList.contains(CSS_CLASS.SPAN)) {
        const { id } = target.dataset;
        const $planningContainer = this.$target.querySelector(
          `.${CSS_CLASS.CONTAINER}`
        );
        const $targetPlanningItem = $planningContainer.children[id];
        const $rightPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.RIGHT}`
        );
        const $centerPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.CENTER}`
        );
        const $leftPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.LEFT}`
        );

        $rightPlanningItem.classList.remove(CSS_CLASS.RIGHT);
        $centerPlanningItem.classList.remove(CSS_CLASS.CENTER);
        $leftPlanningItem.classList.remove(CSS_CLASS.LEFT);
        $targetPlanningItem.classList.add(CSS_CLASS.CENTER);
        if ($targetPlanningItem.nextElementSibling) {
          $targetPlanningItem.nextElementSibling.classList.add(CSS_CLASS.RIGHT);
        } else {
          $planningContainer.firstElementChild.classList.add(CSS_CLASS.RIGHT);
        }
        if ($targetPlanningItem.previousElementSibling) {
          $targetPlanningItem.previousElementSibling.classList.add(
            CSS_CLASS.LEFT
          );
        } else {
          $planningContainer.lastElementChild.classList.add(CSS_CLASS.LEFT);
        }

        target.classList.add(CSS_CLASS.ACTIVATED_SPAN);
        Array.prototype.forEach.call($pagingSpanWrapper.children, (node) => {
          if (
            node.dataset.id !== id &&
            node.classList.contains(CSS_CLASS.ACTIVATED_SPAN)
          ) {
            node.classList.remove(CSS_CLASS.ACTIVATED_SPAN);
          }
        });
      } else if (target.classList.contains(CSS_CLASS.LEFT_BTN)) {
        $prevBtn.style.backgroundPositionX = "-120px";
      } else if (target.classList.contains(CSS_CLASS.RIGHT_BTN)) {
        $nextBtn.style.backgroundPositionX = "-150px";
      } else {
        $prevBtn.style.backgroundPositionX = "-60px";
        $nextBtn.style.backgroundPositionX = "-90px";
      }
    });

    this.addEvent("mouseleave", `.${CSS_CLASS.PARENT}`, (e) => {
      const { target } = e;
      if (target.classList.contains(CSS_CLASS.LEFT_BTN)) {
        $prevBtn.style.backgroundPositionX = "-60px";
      } else if (target.classList.contains(CSS_CLASS.RIGHT_BTN)) {
        $nextBtn.style.backgroundPositionX = "-90px";
      } else {
        $prevBtn.style.backgroundPositionX = "0px";
        $nextBtn.style.backgroundPositionX = "-30px";
      }
    });

    this.addEvent(
      "click",
      `.${CSS_CLASS.PARENT}`,
      throttling((e) => {
        const { target } = e;
        const $rightPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.RIGHT}`
        );
        const $centerPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.CENTER}`
        );
        const $leftPlanningItem = this.$target.querySelector(
          `.${CSS_CLASS.LEFT}`
        );
        if (target.classList.contains(CSS_CLASS.LEFT_BTN)) {
          this.changeSpan($leftPlanningItem);

          $centerPlanningItem.classList.add(CSS_CLASS.MOVE_RIGHT);
          $centerPlanningItem.ontransitionend = () => {
            $centerPlanningItem.classList.remove(CSS_CLASS.MOVE_RIGHT);
            $centerPlanningItem.classList.remove(CSS_CLASS.CENTER);
            $centerPlanningItem.classList.add(CSS_CLASS.RIGHT);
          };

          $leftPlanningItem.classList.add(CSS_CLASS.MOVE_RIGHT);
          $leftPlanningItem.ontransitionend = () => {
            $leftPlanningItem.classList.remove(CSS_CLASS.MOVE_RIGHT);
            $leftPlanningItem.classList.remove(CSS_CLASS.LEFT);
            $leftPlanningItem.classList.add(CSS_CLASS.CENTER);

            $rightPlanningItem.classList.remove(CSS_CLASS.RIGHT);
            if ($leftPlanningItem.previousElementSibling) {
              $leftPlanningItem.previousElementSibling.classList.add(
                CSS_CLASS.LEFT
              );
            } else {
              $planningItemList.lastElementChild.classList.add(CSS_CLASS.LEFT);
            }
          };
        } else if (target.classList.contains(CSS_CLASS.RIGHT_BTN)) {
          this.changeSpan($rightPlanningItem);

          $centerPlanningItem.classList.add(CSS_CLASS.MOVE_LEFT);
          $centerPlanningItem.ontransitionend = () => {
            $centerPlanningItem.classList.remove(CSS_CLASS.MOVE_LEFT);
            $centerPlanningItem.classList.remove(CSS_CLASS.CENTER);
            $centerPlanningItem.classList.add(CSS_CLASS.LEFT);
          };

          $rightPlanningItem.classList.add(CSS_CLASS.MOVE_LEFT);
          $rightPlanningItem.ontransitionend = () => {
            $rightPlanningItem.classList.remove(CSS_CLASS.MOVE_LEFT);
            $rightPlanningItem.classList.remove(CSS_CLASS.RIGHT);
            $rightPlanningItem.classList.add(CSS_CLASS.CENTER);

            $leftPlanningItem.classList.remove(CSS_CLASS.LEFT);
            if ($rightPlanningItem.nextElementSibling) {
              $rightPlanningItem.nextElementSibling.classList.add(
                CSS_CLASS.RIGHT
              );
            } else {
              $planningItemList.firstElementChild.classList.add(
                CSS_CLASS.RIGHT
              );
            }
          };
        }
      }, CLICK_THROTTLING_DELAY).bind(this)
    );
  }

  initCarousel() {
    const $pagingSpanWrapper = this.$target.querySelector(
      `.${CSS_CLASS.PAGING}`
    );
    const $planningItemList = this.$target.querySelector(
      `.${CSS_CLASS.CONTAINER}`
    );

    $pagingSpanWrapper.firstElementChild.classList.add(
      CSS_CLASS.ACTIVATED_SPAN
    );

    $planningItemList.children[0].classList.add(CSS_CLASS.CENTER);
    $planningItemList.children[1].classList.add(CSS_CLASS.RIGHT);
    $planningItemList.lastElementChild.classList.add(CSS_CLASS.LEFT);
  }

  changeSpan($planningItem) {
    const { id } = $planningItem.dataset;
    const $pagingSpanWrapper = this.$target.querySelector(
      `.${CSS_CLASS.PAGING}`
    );
    Array.prototype.forEach.call($pagingSpanWrapper.children, (node) => {
      if (node.dataset.id === id) {
        node.classList.add(CSS_CLASS.ACTIVATED_SPAN);
      } else {
        node.classList.remove(CSS_CLASS.ACTIVATED_SPAN);
      }
    });
  }
}

export default Planning;
