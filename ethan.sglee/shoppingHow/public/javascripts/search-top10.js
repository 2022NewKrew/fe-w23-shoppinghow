const SLIDE_DELAY_MS = 2000

export default function initTop10() {
  document.addEventListener("DOMContentLoaded", () => {
    let top10Counter = 0

    function slide() {
      const rollbox = document.querySelector('.header-top .search .search-rollbox')
      const searchTop10 = rollbox.querySelector('.search-top10')
  
      const searchTop10ContentArr = searchTop10.querySelectorAll('.search-top10__item')
      const prev = searchTop10.querySelector('.prev')
      const next = searchTop10.querySelector('.next')
  
      const rollboxSize = rollbox.clientHeight
      const size = searchTop10ContentArr[0].clientHeight
  
      top10Counter += 1

      if (top10Counter === searchTop10ContentArr.length) {
        searchTop10.style.transition = "none"
        top10Counter = 0
        let pos = -size * top10Counter + (rollboxSize - size) * 0.5
        searchTop10.style.transform = "translateY(" + pos + "px)"
        slide()
        return
      }
      else {
        searchTop10.style.transition = "transform 0.3s ease-in-out"
      }
      let pos = -size * top10Counter + (rollboxSize - size) * 0.5
      searchTop10.style.transform = "translateY(" + pos + "px)"
    }

    setInterval(slide, SLIDE_DELAY_MS)
  })
}
