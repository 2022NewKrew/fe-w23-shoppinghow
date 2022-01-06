export default (htmlEl, totalImages, imageWidth) => {
  let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
  const TOTAL_IMAGES = totalImages; // 전체 이미지 개수
  const IMAGE_WIDTH = imageWidth; // 이미지 가로 너비

  let timer = null;

  const prevBtn = htmlEl.querySelector(".btn_prev");
  const nextBtn = htmlEl.querySelector(".btn_next");
  const slide = htmlEl.querySelector(".slide");
  const innerPaging = htmlEl.querySelector(".inner_paging");

  // 맨 앞 맨 뒤에 추가
  const clonedFirst = slide.firstElementChild.cloneNode(true);
  const clonedLast = slide.lastElementChild.cloneNode(true);
  slide.appendChild(clonedFirst);
  slide.insertBefore(clonedLast, slide.firstElementChild);

  slide.style.transform = `translateX(-${IMAGE_WIDTH}px)`;

  function next() {
    stopTimer();
    if (curPos <= TOTAL_IMAGES) {
      slide.style.transition = "500ms";
      slide.style.transform = `translateX(-${IMAGE_WIDTH * (curPos + 2)}px)`;
      curPos += 1;
    }
    if (curPos == TOTAL_IMAGES) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        slide.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
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
      slide.style.transform = `translateX(-${IMAGE_WIDTH * curPos}px)`;
      curPos -= 1;
    }
    if (curPos == 0) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        slide.style.transform = `translateX(-${IMAGE_WIDTH * TOTAL_IMAGES}px)`;
      }, 500);
      curPos = TOTAL_IMAGES;
    }
    updatePagingBtn();
    startTimer();
  }

  function updatePagingBtn() {
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

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  innerPaging.addEventListener("mouseover", onMouseOverPagingBtn);
  innerPaging.addEventListener("mouseout", onMouseOutPagingBtn);
  slide.addEventListener("mouseover", onHoverSlide);

  startTimer();
};
