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
  const planningPaging = document.querySelector(".planning__paging");
  const planningList = document.querySelector(".planning-list");
  const planningItemArray = [
    document.querySelector(".planning-item__last-clone"),
    ...document.querySelectorAll(".planning-item"),
    document.querySelector(".planning-item__first-clone"),
  ];
  const leftBtn = document.querySelector(".planning__left-btn");
  const rightBtn = document.querySelector(".planning__right-btn");

  let counter = 1;
  let size = planningItemArray[0].clientWidth;

  /*
  changePlanningPaging : carousel의 하단 '-' 모양 버튼을 클릭했을 때, 
  클릭하기 이전 검은색으로 표시되어 있던 em 태그 노드를 회색 span 태그 노드로 변경하고, 
  새롭게 검은색으로 표시해야 할 회색 span 태그 노드를 em 태그 노드로 변경하는 함수
  */
  const changePlanningPaging = (
    spanNodeChildIdx,
    spanNodeSearchValue,
    spanNodeReplaceValue,
    emNodeChildIdx,
    emNodeSearchValue,
    emNodeReplaceValue
  ) => {
    planningPaging.childNodes[spanNodeChildIdx].innerHTML =
      PLANNING_PAGING_BTN_SPAN_NODE.replace(
        spanNodeSearchValue,
        spanNodeReplaceValue
      );
    planningPaging.childNodes[emNodeChildIdx].innerHTML =
      PLANNING_PAGING_BTN_EM_NODE.replace(
        emNodeSearchValue,
        emNodeReplaceValue
      );

    return;
  };

  /*
  changePlanningList : carousel 버튼의 onclick 이벤트 발생 시, 
  transition 속성값을 변경하여 애니메이션을 적용하고
  transform 속성값을 변경하여 화면을 전환하는 함수
  */
  const changePlanningList = (transitionStr, newCounter) => {
    planningList.style.transition = transitionStr;
    counter = newCounter;
    planningList.style.transform =
      "translateX(" + -size * counter * PLANNING_LIST_TRANSFORM_RATE + "px)";

    return;
  };

  planningList.style.transform =
    "translateX(" + -size * counter * PLANNING_LIST_TRANSFORM_RATE + "px)";

  leftBtn.addEventListener("click", () => {
    if (counter <= 0) {
      return;
    }

    changePlanningPaging(
      counter - 1,
      PAGING_NUM_MARK,
      counter,
      (planningPaging.childElementCount + counter - 2) %
        planningPaging.childElementCount,
      PAGING_NUM_MARK,
      counter - 1
    );
    changePlanningList(PLANNING_LIST_TRANSITION_STR, counter - 1);
  });

  rightBtn.addEventListener("click", () => {
    if (counter >= planningItemArray.length - 1) {
      return;
    }

    changePlanningPaging(
      counter - 1,
      PAGING_NUM_MARK,
      counter,
      counter % planningPaging.childElementCount,
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

  planningPaging.childNodes.forEach((element, index) => {
    element.addEventListener("click", () => {
      changePlanningPaging(
        counter - 1,
        PAGING_NUM_MARK,
        counter,
        index,
        PAGING_NUM_MARK,
        index + 1
      );
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
