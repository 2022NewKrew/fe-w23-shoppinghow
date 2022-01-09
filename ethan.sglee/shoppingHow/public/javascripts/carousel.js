export default function initCarousel () {
  const window = document.querySelector('.planning__window')

  const linkContainer = window.querySelector('.planning__link-container')
  const btnContainer = window.querySelector('.planning__btn-container')

  const leftBtn = btnContainer.querySelector('.planning__left-btn')
  const rightBtn = btnContainer.querySelector('.planning__right-btn')

  const paging = window.querySelector('.planning__paging')

  let direction = ''
  let ongoing = false

  btnContainer.addEventListener('click', (event) => {
    if (ongoing) {
      return
    }
    
    if (event.target === leftBtn) {
      ongoing = true

      const current = paging.querySelector('.planning__current')
      if (!current.parentElement.previousElementSibling) {
        paging.lastElementChild.firstElementChild.classList.add('planning__current')
      } else {
        current.parentElement.previousElementSibling.firstElementChild.classList.add('planning__current')
      }
      current.classList.remove('planning__current')

      direction = 'left'
      linkContainer.style.transition = 'transform 0.3s ease-in-out';
      linkContainer.style.transform = 'translate3d(' + window.clientWidth + 'px,0px,0px)'
    } else if (event.target === rightBtn) {
      ongoing = true

      const current = paging.querySelector('.planning__current')
      if (current.parentElement.nextElementSibling === null) {
        paging.firstElementChild.firstElementChild.classList.add('planning__current')
      } else {
        current.parentElement.nextElementSibling.firstElementChild.classList.add('planning__current')
      }
      current.classList.remove('planning__current')

      direction = 'right'
      linkContainer.style.transition = 'transform 0.3s ease-in-out'
      linkContainer.style.transform = 'translate3d(' + -window.clientWidth + 'px,0px,0px)'
    }

  })

  linkContainer.addEventListener('transitionend', (event) => {
    if (direction === 'left') {
      linkContainer.insertBefore(linkContainer.lastElementChild, linkContainer.firstElementChild)
    }
    else if (direction === 'right') {
      linkContainer.appendChild(linkContainer.firstElementChild)
    }
    linkContainer.style.transition = ''
    linkContainer.style.transform = 'translate3d(0px,0px,0px)'

    ongoing = false
  })

}