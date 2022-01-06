export default (htmlEl, totalItems, itemWidth, isVertical) => {
  let curPos = 0; // 현재 보여주는 아이템의 인덱스 번호
  const TOTAL_ITEMS = totalItems; // 전체 아이템 개수
  const ITEM_WIDTH = itemWidth; // 아이템 크기

  let timer = null;

  const slide = htmlEl.querySelector(".slide");

  const prevBtn = !isVertical ? htmlEl.querySelector(".btn_prev") : null;
  const nextBtn = !isVertical ? htmlEl.querySelector(".btn_next") : null;
  const innerPaging = !isVertical
    ? htmlEl.querySelector(".inner_paging")
    : null;

  // 맨 앞 맨 뒤에 추가
  const clonedFirst = slide.firstElementChild.cloneNode(true);
  const clonedLast = slide.lastElementChild.cloneNode(true);
  slide.appendChild(clonedFirst);
  slide.insertBefore(clonedLast, slide.firstElementChild);

  if (isVertical) {
    slide.style.transform = `translateY(-${ITEM_WIDTH}px)`;
  } else {
    slide.style.transform = `translateX(-${ITEM_WIDTH}px)`;
  }

  function next() {
    stopTimer();
    if (curPos <= TOTAL_ITEMS) {
      slide.style.transition = "500ms";
      if (isVertical) {
        slide.style.transform = `translateY(-${ITEM_WIDTH * (curPos + 2)}px)`;
      } else {
        slide.style.transform = `translateX(-${ITEM_WIDTH * (curPos + 2)}px)`;
      }
      curPos += 1;
    }
    if (curPos == TOTAL_ITEMS) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        if (isVertical) {
          slide.style.transform = `translateY(-${ITEM_WIDTH}px)`;
        } else {
          slide.style.transform = `translateX(-${ITEM_WIDTH}px)`;
        }
      }, 500);
      curPos = 0;
    }
    updatePagingBtn();
    startTimer();
  }

  function prev() {
    stopTimer();
    if (curPos >= 0) {
      slide.style.transition = "500ms";
      if (isVertical) {
        slide.style.transform = `translateY(-${ITEM_WIDTH * curPos}px)`;
      } else {
        slide.style.transform = `translateX(-${ITEM_WIDTH * curPos}px)`;
      }
      curPos -= 1;
    }
    if (curPos == 0) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        if (isVertical) {
          slide.style.transform = `translateY(-${ITEM_WIDTH * TOTAL_ITEMS}px)`;
        } else {
          slide.style.transform = `translateX(-${ITEM_WIDTH * TOTAL_ITEMS}px)`;
        }
      }, 500);
      curPos = TOTAL_ITEMS;
    }
    updatePagingBtn();
    startTimer();
  }

  function updatePagingBtn() {
    if (isVertical) return;
    Array.from(innerPaging.children).forEach((pagingBtn) => {
      if (pagingBtn.dataset.index == curPos) {
        pagingBtn.children[0].classList.add("select");
      } else {
        pagingBtn.children[0].classList.remove("select");
      }
    });
  }
  function onMouseOverPagingBtn(e) {
    stopTimer();
    const El = e.target.closest(".btn_paging");
    if (!El) return;
    if (El.dataset.index != curPos) {
      slide.style.transition = "0ms";
      slide.style.transform = `translateX(-${
        IMAGE_WIDTH * (El.dataset.index + 1)
      }px)`;
      curPos = Number(El.dataset.index);
    }
    updatePagingBtn();
    startTimer();
  }
  function onMouseOutPagingBtn() {
    startTimer();
  }
  function onHoverSlide() {
    prevBtn.children[0].style.backgroundPosition = "-60px 0";
    nextBtn.children[0].style.backgroundPosition = "-90px 0";
  }

  function startTimer() {
    timer = setInterval(() => {
      next();
    }, 2000);
  }
  function stopTimer() {
    clearInterval(timer);
  }
  if (!isVertical) {
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
    innerPaging.addEventListener("mouseover", onMouseOverPagingBtn);
    innerPaging.addEventListener("mouseout", onMouseOutPagingBtn);
    slide.addEventListener("mouseover", onHoverSlide);
  }

  startTimer();
};
