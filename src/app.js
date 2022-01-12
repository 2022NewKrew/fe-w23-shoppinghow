import "./styles/libs/reset.css";
import "./sass/app.scss";

// 전역 변수 선언
const store = {
  counterArray: [1, 1],
};
const SEARCH_TOP_10_COUNTER_IDX = 0;
const SEARCH_TOP_10_TRANSITION_STR = "transform 0.3s ease-in-out";
const SEARCH_TOP_10_TRANSFORM_RATE = 1;
const PLANNING_LIST_COUNTER_IDX = 1;
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

/*
changePaging : carousel의 하단 '-' 모양 버튼을 클릭했을 때, 
클릭하기 이전 검은색으로 표시되어 있던 em 태그 노드를 회색 span 태그 노드로 변경하고, 
새롭게 검은색으로 표시해야 할 회색 span 태그 노드를 em 태그 노드로 변경하는 함수
*/
const changePaging = (
  targetPaging,
  spanNodeChildIdx,
  spanNodeSearchValue,
  spanNodeReplaceValue,
  emNodeChildIdx,
  emNodeSearchValue,
  emNodeReplaceValue
) => {
  targetPaging.childNodes[spanNodeChildIdx].innerHTML =
    PLANNING_PAGING_BTN_SPAN_NODE.replace(
      spanNodeSearchValue,
      spanNodeReplaceValue
    );
  targetPaging.childNodes[emNodeChildIdx].innerHTML =
    PLANNING_PAGING_BTN_EM_NODE.replace(emNodeSearchValue, emNodeReplaceValue);

  return;
};

/*
changeList : carousel 버튼의 onclick 이벤트 발생 시, 
transition 속성값을 변경하여 애니메이션을 적용하고
transform 속성값을 변경하여 화면을 전환하는 함수
*/
const changeList = (
  targetList,
  transitionStr,
  counterIdx,
  newCounter,
  translateAmount
) => {
  targetList.style.transition = transitionStr;
  store.counterArray[counterIdx] = newCounter;
  targetList.style.transform =
    "translateX(" +
    -translateAmount *
      store.counterArray[PLANNING_LIST_COUNTER_IDX] *
      PLANNING_LIST_TRANSFORM_RATE +
    "px)";

  return;
};

const makeSearchTop10 = () => {
  const searchTop10List = document.querySelector(".search-top10-list");
  const searchTop10ItemArray = [
    document.querySelector(".search-top10-item__last-clone"),
    ...document.querySelectorAll(".search-top10-item"),
    document.querySelector(".search-top10-item__first-clone"),
  ];

  let size = searchTop10ItemArray[0].clientHeight;

  searchTop10List.style.transform =
    "translateY(" +
    -size *
      store.counterArray[SEARCH_TOP_10_COUNTER_IDX] *
      PLANNING_LIST_TRANSFORM_RATE +
    "px)";

  return;
};

// reference : https://velog.io/@wjddnjswjd12/javascript%EB%A1%9C-carousel-slide-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
const makePlanningCarousel = () => {
  const planningList = document.querySelector(".planning-list");
  const planningItemArray = [
    document.querySelector(".planning-item__last-clone"),
    ...document.querySelectorAll(".planning-item"),
    document.querySelector(".planning-item__first-clone"),
  ];
  const planningPaging = document.querySelector(".planning__paging");
  const leftBtn = document.querySelector(".planning__left-btn");
  const rightBtn = document.querySelector(".planning__right-btn");

  let size = planningItemArray[0].clientWidth;

  planningList.style.transform =
    "translateX(" +
    -size *
      store.counterArray[PLANNING_LIST_COUNTER_IDX] *
      PLANNING_LIST_TRANSFORM_RATE +
    "px)";

  leftBtn.addEventListener("click", () => {
    if (store.counterArray[PLANNING_LIST_COUNTER_IDX] <= 0) {
      return;
    }

    changePaging(
      planningPaging,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX],
      (planningPaging.childElementCount +
        store.counterArray[PLANNING_LIST_COUNTER_IDX] -
        2) %
        planningPaging.childElementCount,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1
    );
    changeList(
      planningList,
      PLANNING_LIST_TRANSITION_STR,
      PLANNING_LIST_COUNTER_IDX,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      size
    );
  });

  rightBtn.addEventListener("click", () => {
    if (
      store.counterArray[PLANNING_LIST_COUNTER_IDX] >=
      planningItemArray.length - 1
    ) {
      return;
    }

    changePaging(
      planningPaging,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX],
      store.counterArray[PLANNING_LIST_COUNTER_IDX] %
        planningPaging.childElementCount,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] + 1
    );
    changeList(
      planningList,
      PLANNING_LIST_TRANSITION_STR,
      PLANNING_LIST_COUNTER_IDX,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] + 1,
      size
    );
  });

  planningList.addEventListener("transitionend", () => {
    if (
      planningItemArray[store.counterArray[PLANNING_LIST_COUNTER_IDX]]
        .className === "planning-item__last-clone"
    ) {
      changeList(
        planningList,
        "none",
        PLANNING_LIST_COUNTER_IDX,
        planningItemArray.length - 2,
        size
      );
    }

    if (
      planningItemArray[store.counterArray[PLANNING_LIST_COUNTER_IDX]]
        .className === "planning-item__first-clone"
    ) {
      changeList(planningList, "none", PLANNING_LIST_COUNTER_IDX, 1, size);
    }
  });

  planningPaging.childNodes.forEach((element, index) => {
    element.addEventListener("click", () => {
      changePaging(
        planningPaging,
        store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
        PAGING_NUM_MARK,
        store.counterArray[PLANNING_LIST_COUNTER_IDX],
        index,
        PAGING_NUM_MARK,
        index + 1
      );
      changeList(
        planningList,
        PLANNING_LIST_TRANSITION_STR,
        PLANNING_LIST_COUNTER_IDX,
        index + 1,
        size
      );
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

makeSearchTop10();
makePlanningCarousel();
makeHotDealHTML();
