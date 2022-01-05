export function initTop10() {

  let top10Counter = 0
  document.addEventListener("DOMContentLoaded", () => {

    function slide() {
      const rollbox = document.querySelector('.header-top .search .search-rollbox')
      const searchTop10 = rollbox.querySelector('.search-top10')
  
      const searchTop10ContentArr = searchTop10.querySelectorAll('.search-top10__item')
  
      const prev = searchTop10.querySelector('.prev')
      const next = searchTop10.querySelector('.next')
  
      const rollboxSize = rollbox.clientHeight
      const size = searchTop10ContentArr[0].clientHeight
  
      searchTop10.style.transition = "transform 0.3s ease-in-out";
      top10Counter += 1
      if (top10Counter === searchTop10ContentArr.length) {
        top10Counter = 0
      }
      
      let pos = -size * top10Counter + (rollboxSize - size) * 0.5

      searchTop10.style.transform = "translateY(" + pos + "px)";
    }

    setInterval(slide, 2000)

  })
}
