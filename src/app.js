/* reference : https://velog.io/@wjddnjswjd12/javascript%EB%A1%9C-carousel-slide-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
 */

/* import stylesheets */
import "./styles/libs/reset.css";
import "./sass/app.scss";

/* 전역 변수 선언 */
const store = {
  counterArray: [1, 1],
};
/* store.counterArray[0] : searchTop10Counter */
const SEARCH_TOP_10_COUNTER_IDX = 0;
/* 인기 검색어 애니메이션 설정 */
const SEARCH_TOP_10_TRANSITION_STR = "transform 0.3s ease-in-out";
/* 인기 검색어 롤링 기능은 Y축 방향으로 translate */
const SEARCH_TOP_10_TRANSLATE_STR = "translateY(";
/* 해당 인기 검색어가 검색창 가운데로 나타나게 하기 위한 보정값 */
const SEARCH_TOP_10_TRANSLATE_RATE = 0.1;
/* store.counterArray[1] : planningListCounter */
const PLANNING_LIST_COUNTER_IDX = 1;
/* carousel 기능 애니메이션 설정 */
const PLANNING_LIST_TRANSITION_STR = "transform 0.3s ease-in-out";
/* carousel 기능은 X축 방향으로 translate */
const PLANNING_LIST_TRANSLATE_STR = "translateX(";
/* replaceChildNode 함수에서 변경할 텍스트를 마킹 */
const PAGING_NUM_MARK = "__paging-num__";
/* carousel 기능에서 하단 버튼 중 회색으로 표시되는 노드는 span 태그 */
const PLANNING_PAGING_SPAN_BTN_TPL = `<span class="planning__paging-btn"
><span class="planning__paging-num">${PAGING_NUM_MARK}</span></span
>
`;
/* carousel 기능에서 하단 버튼 중 검정색으로 표시되는 노드는 em 태그 */
const PLANNING_PAGING_EM_BTN_TPL = `<em class="planning__paging-btn"
><span class="planning__paging-num">${PAGING_NUM_MARK}</span></em
>
`;

/* <품절주의, 역대급 핫딜> 창에 표시할 상품의 템플릿 HTML */
const HOT_DEAL_ITEM_TPL = `
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
/* <품절주의, 역대급 핫딜> 창에 표시할 상품의 개수 */
const HOT_DEAL_ITEM_CNT = 10;

/* parentNode에서 em 태그를 찾아 span 태그로 바꾸고, 
span 태그를 찾아 em 태그로 바꾸는 함수 */
const replaceChildNode = (
  parentNode,
  emNodeIdx,
  spanNodeTpl,
  spanNodeSearchValue,
  spanNodeReplaceValue,
  spanNodeIdx,
  emNodeTpl,
  emNodeSearchValue,
  emNodeReplaceValue
) => {
  parentNode.childNodes[emNodeIdx].innerHTML = spanNodeTpl.replace(
    spanNodeSearchValue,
    spanNodeReplaceValue
  );
  parentNode.childNodes[spanNodeIdx].innerHTML = emNodeTpl.replace(
    emNodeSearchValue,
    emNodeReplaceValue
  );

  return;
};

/* 인기 검색어 롤링 기능과 carousel 기능에 적용할 
슬라이딩 애니매이션을 적용하는 함수 */
const applySlideAnimation = (
  targetNode,
  counterIdx,
  newCounter,
  transitionStr,
  translateStr,
  translateAmount,
  translateOffset
) => {
  targetNode.style.transition = transitionStr;
  store.counterArray[counterIdx] = newCounter;
  targetNode.style.transform =
    translateStr +
    (-translateAmount * store.counterArray[counterIdx] + translateOffset) +
    "px)";

  return;
};

/* 인기검색어를 3초마다 1~10위까지 자동으로 롤링되게 하는 함수 */
const makeSearchTop10 = () => {
  const searchTop10List = document.querySelector(".search-top10-list");
  const searchTop10ItemArray = [
    document.querySelector(".search-top10-item__last-clone"),
    ...document.querySelectorAll(".search-top10-item"),
    document.querySelector(".search-top10-item__first-clone"),
  ];

  /* 한 번의 애니매이션마다 이동할 Y축 방향 거리 */
  let size = searchTop10ItemArray[0].clientHeight;
  /* 이동할 높이의 보정값 */
  let offset = -size * (1 - SEARCH_TOP_10_TRANSLATE_RATE);

  /* 10 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 1 순서로 리스트 배치
  처음에 인기검색어 1위를 화면에 나타나게 하기 위하여 Y축 방향으로 transform */
  searchTop10List.style.transform =
    SEARCH_TOP_10_TRANSLATE_STR +
    -size *
      store.counterArray[SEARCH_TOP_10_COUNTER_IDX] *
      SEARCH_TOP_10_TRANSLATE_RATE +
    "px)";

  /* 3초마다 Y축 방향으로 transform하여 롤링 기능 구현 */
  const searchTop10intervalID = setInterval(() => {
    if (store.counterArray[SEARCH_TOP_10_COUNTER_IDX] <= 0) {
      return;
    } else if (
      store.counterArray[SEARCH_TOP_10_COUNTER_IDX] >=
      searchTop10ItemArray.length - 1
    ) {
      return;
    }

    applySlideAnimation(
      searchTop10List,
      SEARCH_TOP_10_COUNTER_IDX,
      store.counterArray[SEARCH_TOP_10_COUNTER_IDX] + 1,
      SEARCH_TOP_10_TRANSITION_STR,
      SEARCH_TOP_10_TRANSLATE_STR,
      size,
      -offset
    );

    return;
  }, 3000);

  /* 10위에서 1위로 자연스럽게 넘어가게 하는 코드 */
  searchTop10List.addEventListener("transitionend", () => {
    if (
      searchTop10ItemArray[store.counterArray[SEARCH_TOP_10_COUNTER_IDX]]
        .className === "search-top10-item__last-clone"
    ) {
      applySlideAnimation(
        searchTop10List,
        SEARCH_TOP_10_COUNTER_IDX,
        searchTop10ItemArray.length - 2,
        "none",
        SEARCH_TOP_10_TRANSLATE_STR,
        size,
        -offset
      );
    } else if (
      searchTop10ItemArray[store.counterArray[SEARCH_TOP_10_COUNTER_IDX]]
        .className === "search-top10-item__first-clone"
    ) {
      applySlideAnimation(
        searchTop10List,
        SEARCH_TOP_10_COUNTER_IDX,
        1,
        "none",
        SEARCH_TOP_10_TRANSLATE_STR,
        size,
        -offset
      );
    }

    return;
  });

  return;
};

/* 컨텐츠에 carousel 기능을 적용하는 함수 */
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

  /* 한 번의 애니매이션마다 이동할 X축 방향 거리 */
  let size = planningItemArray[0].clientWidth;

  /* 3 - 1 - 2 - 3 - 1 순서로 리스트 배치
  처음에 첫 번째 컨텐츠를 화면에 나타나게 하기 위하여 X축 방향으로 transform */
  planningList.style.transform =
    PLANNING_LIST_TRANSLATE_STR +
    -size * store.counterArray[PLANNING_LIST_COUNTER_IDX] +
    "px)";

  /* carousel의 왼쪽 버튼을 클릭했을 때 왼쪽 컨텐츠로 전환 */
  leftBtn.addEventListener("click", () => {
    if (store.counterArray[PLANNING_LIST_COUNTER_IDX] <= 0) {
      return;
    }

    replaceChildNode(
      planningPaging,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      PLANNING_PAGING_SPAN_BTN_TPL,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX],
      (planningPaging.childElementCount +
        store.counterArray[PLANNING_LIST_COUNTER_IDX] -
        2) %
        planningPaging.childElementCount,
      PLANNING_PAGING_EM_BTN_TPL,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1
    );
    applySlideAnimation(
      planningList,
      PLANNING_LIST_COUNTER_IDX,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      PLANNING_LIST_TRANSITION_STR,
      PLANNING_LIST_TRANSLATE_STR,
      size,
      0
    );

    return;
  });

  /* carousel의 오른쪽 버튼을 클릭했을 때 오른쪽 컨텐츠로 전환 */
  rightBtn.addEventListener("click", () => {
    if (
      store.counterArray[PLANNING_LIST_COUNTER_IDX] >=
      planningItemArray.length - 1
    ) {
      return;
    }

    replaceChildNode(
      planningPaging,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
      PLANNING_PAGING_SPAN_BTN_TPL,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX],
      store.counterArray[PLANNING_LIST_COUNTER_IDX] %
        planningPaging.childElementCount,
      PLANNING_PAGING_EM_BTN_TPL,
      PAGING_NUM_MARK,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] + 1
    );
    applySlideAnimation(
      planningList,
      PLANNING_LIST_COUNTER_IDX,
      store.counterArray[PLANNING_LIST_COUNTER_IDX] + 1,
      PLANNING_LIST_TRANSITION_STR,
      PLANNING_LIST_TRANSLATE_STR,
      size,
      0
    );

    return;
  });

  /* 첫 번째 컨텐츠가 화면에 나타난 상황에서 왼쪽 버튼을 눌렀을 때 
  마지막 컨텐츠로 자연스럽게 넘어가게 하고, 
  마지막 컨텐츠가 화면에 나타난 상황에서 오른쪽 버튼을 눌렀을 때 
  첫 번째 컨텐츠로 자연스럽게 넘어가게 하는 코드 */
  planningList.addEventListener("transitionend", () => {
    if (
      planningItemArray[store.counterArray[PLANNING_LIST_COUNTER_IDX]]
        .className === "planning-item__last-clone"
    ) {
      applySlideAnimation(
        planningList,
        PLANNING_LIST_COUNTER_IDX,
        planningItemArray.length - 2,
        "none",
        PLANNING_LIST_TRANSLATE_STR,
        size,
        0
      );
    } else if (
      planningItemArray[store.counterArray[PLANNING_LIST_COUNTER_IDX]]
        .className === "planning-item__first-clone"
    ) {
      applySlideAnimation(
        planningList,
        PLANNING_LIST_COUNTER_IDX,
        1,
        "none",
        PLANNING_LIST_TRANSLATE_STR,
        size,
        0
      );
    }

    return;
  });

  planningPaging.childNodes.forEach((element, index) => {
    element.addEventListener("click", () => {
      replaceChildNode(
        planningPaging,
        store.counterArray[PLANNING_LIST_COUNTER_IDX] - 1,
        PLANNING_PAGING_SPAN_BTN_TPL,
        PAGING_NUM_MARK,
        store.counterArray[PLANNING_LIST_COUNTER_IDX],
        index,
        PLANNING_PAGING_EM_BTN_TPL,
        PAGING_NUM_MARK,
        index + 1
      );
      applySlideAnimation(
        planningList,
        PLANNING_LIST_COUNTER_IDX,
        index + 1,
        PLANNING_LIST_TRANSITION_STR,
        PLANNING_LIST_TRANSLATE_STR,
        size,
        0
      );

      return;
    });
  });

  return;
};

/* <품절주의, 역대급 핫딜> 창을 렌더링하는 함수 */
const makeHotDealHTML = () => {
  const target = document.querySelector(".hot-deal-list");
  target.innerHTML = Array(HOT_DEAL_ITEM_CNT).fill(HOT_DEAL_ITEM_TPL).join("");
  return;
};

makeSearchTop10();
makePlanningCarousel();
makeHotDealHTML();
