
export default function initCarousel () {
  const planningWindow = document.querySelector('.planning__window')
  
  function getTranslate3dText(pageNum) {
    return 'translate3d(' + -(pageNum * planningWindow.clientWidth) + 'px,0px,0px)'
  }

  const linkContainer = planningWindow.querySelector('.planning__link-container')
  const btnContainer = planningWindow.querySelector('.planning__btn-container')
  const paging = planningWindow.querySelector('.planning__paging')
  const pageArr = paging.querySelectorAll('.planning__page')
  const PAGE_MAX_NUM = pageArr.length

  const leftBtn = btnContainer.querySelector('.planning__left-btn')
  const rightBtn = btnContainer.querySelector('.planning__right-btn')

  const firstPageCopy = linkContainer.firstElementChild.cloneNode(true)
  const lastPageCopy = linkContainer.lastElementChild.cloneNode(true)
  linkContainer.insertBefore(lastPageCopy, linkContainer.firstElementChild)
  linkContainer.appendChild(firstPageCopy)

  let currentPageNum = 0
  let direction = ''
  let ongoing = false

  leftBtn.addEventListener('click', () => {
    if (ongoing) {
      return
    }

    ongoing = true

    const current = paging.querySelector('.planning__current')
    current.classList.remove('planning__current')

    currentPageNum -= 1
    
    if (currentPageNum < 0) {
      pageArr[PAGE_MAX_NUM - 1].querySelector('.planning__page-btn').classList.add('planning__current')
    } else {
      pageArr[currentPageNum].querySelector('.planning__page-btn').classList.add('planning__current')
    }

    direction = 'left'
    linkContainer.style.transition = 'transform 0.3s ease-in-out'
    linkContainer.style.transform = getTranslate3dText(currentPageNum)
  })

  rightBtn.addEventListener('click', () => {
    if (ongoing) {
      return
    }

    ongoing = true

    const current = paging.querySelector('.planning__current')
    current.classList.remove('planning__current')

    currentPageNum += 1
    
    if (currentPageNum >= PAGE_MAX_NUM) {
      pageArr[0].querySelector('.planning__page-btn').classList.add('planning__current')
    } else {
      pageArr[currentPageNum].querySelector('.planning__page-btn').classList.add('planning__current')
    }

    direction = 'right'
    linkContainer.style.transition = 'transform 0.3s ease-in-out'
    linkContainer.style.transform = getTranslate3dText(currentPageNum)
  })

  linkContainer.addEventListener('transitionend', () => {
    if (direction === 'left') {
      if (currentPageNum < 0) {
        currentPageNum = PAGE_MAX_NUM - 1
        linkContainer.style.transition = ''
        linkContainer.style.transform = getTranslate3dText(PAGE_MAX_NUM - 1)
      }
    }
    else if (direction === 'right') {
      if (currentPageNum >= PAGE_MAX_NUM) {
        currentPageNum = 0
        linkContainer.style.transition = ''
        linkContainer.style.transform = getTranslate3dText(0)
      }
    }

    ongoing = false
  })

}