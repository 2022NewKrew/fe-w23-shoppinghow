import "./styles/libs/reset.css";
import "./sass/app.scss";

const PLANNING_LIST_TRANSITION_STR = "transform 0.3s ease-in-out";
const PLANNING_LIST_TRANSFORM_RATE = 1;
const PAGING_NUM_MARK = "__paging-num__";
const PLANNING_PAGING_BTN_SPAN_NODE = `<span class="planning__paging-btn"
><span class="planning__paging-num">${PAGING_NUM_MARK}</span></span
>
`;
const PLANNING_PAGING_BTN_EM_NODE = `<em class="planning__paging-btn"
><span class="planning__paging-num">${PAGING_NUM_MARK}</span></em
>
`;
const HOT_DEAL_ITEM_CNT = 10;

// reference : https://velog.io/@wjddnjswjd12/javascript%EB%A1%9C-carousel-slide-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
const makePlanningCarousel = () => {
  const planningList = document.querySelector(".planning-list");
  const planningItemArray = [
    document.querySelector(".planning-item__last-clone"),
    ...document.querySelectorAll(".planning-item"),
    document.querySelector(".planning-item__first-clone"),
  ];
  const leftBtn = document.querySelector(".planning__left-btn");
  const rightBtn = document.querySelector(".planning__right-btn");
  const planningPaging = document.querySelector(".planning__paging");

  let counter = 1;
  let size = planningItemArray[0].clientWidth;

  const changePlanningList = (transitionStr, newCounter) => {
    planningList.style.transition = transitionStr;
    counter = newCounter;
    planningList.style.transform =
      "translateX(" + -size * counter * PLANNING_LIST_TRANSFORM_RATE + "px)";
  };

  planningList.style.transform =
    "translateX(" + -size * counter * PLANNING_LIST_TRANSFORM_RATE + "px)";

  leftBtn.addEventListener("click", () => {
    if (counter <= 0) {
      return;
    }

    planningPaging.childNodes[counter - 1].innerHTML =
      PLANNING_PAGING_BTN_SPAN_NODE.replace(PAGING_NUM_MARK, counter);
    planningPaging.childNodes[
      (planningPaging.childElementCount + counter - 2) %
        planningPaging.childElementCount
    ].innerHTML = PLANNING_PAGING_BTN_EM_NODE.replace(
      PAGING_NUM_MARK,
      counter - 1
    );
    changePlanningList(PLANNING_LIST_TRANSITION_STR, counter - 1);
  });

  rightBtn.addEventListener("click", () => {
    if (counter >= planningItemArray.length - 1) {
      return;
    }

    planningPaging.childNodes[counter - 1].innerHTML =
      PLANNING_PAGING_BTN_SPAN_NODE.replace(PAGING_NUM_MARK, counter);
    planningPaging.childNodes[
      counter % planningPaging.childElementCount
    ].innerHTML = PLANNING_PAGING_BTN_EM_NODE.replace(
      PAGING_NUM_MARK,
      counter + 1
    );
    changePlanningList(PLANNING_LIST_TRANSITION_STR, counter + 1);
  });

  planningList.addEventListener("transitionend", () => {
    if (planningItemArray[counter].className === "planning-item__last-clone") {
      changePlanningList("none", planningItemArray.length - 2);
    }

    if (planningItemArray[counter].className === "planning-item__first-clone") {
      changePlanningList("none", 1);
    }
  });

  debugger;

  planningPaging.childNodes.forEach((element, index) => {
    element.addEventListener("click", () => {
      planningPaging.childNodes[counter - 1].innerHTML =
        PLANNING_PAGING_BTN_SPAN_NODE.replace(PAGING_NUM_MARK, counter);
      planningPaging.childNodes[index].innerHTML =
        PLANNING_PAGING_BTN_EM_NODE.replace(PAGING_NUM_MARK, index + 1);
      changePlanningList(PLANNING_LIST_TRANSITION_STR, index + 1);
    });
  });

  return;
};

const makeHotDealHTML = () => {
  const target = document.querySelector(".hot-deal-list");
  const hotdealItemTpl = `
            <li class="hot-deal__item">
                <a href="" class="hot-deal__link">
                    <span class="hot-deal__thumb">
                        <img src="//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895" class="hot-deal__img" alt="">
                    </span>

                    <strong class="hot-deal__title">구매1만↑우유앙빵10+10</strong>

                    <span class="hot-deal__detail-price">
                        <span class="txt-price">18,500 </span>
                        <span class="txt-price-percent">핫딜가</span>
                    </span>
                </a>
            </li>`;
  target.innerHTML = Array(HOT_DEAL_ITEM_CNT).fill(hotdealItemTpl).join("");
  return;
};

makePlanningCarousel();
makeHotDealHTML();
