export default function initCarousel () {
  const window = document.querySelector('.planning__window')

  const linkContainer = window.querySelector('.planning__link-container')
  const btnContainer = window.querySelector('.planning__btn-container')

  const leftBtn = btnContainer.querySelector('.planning__left-btn')
  const rightBtn = btnContainer.querySelector('.planning__right-btn')

  let direction = ''

  btnContainer.addEventListener('click', (event) => {

    if (event.target === leftBtn) {
      direction = 'left'
      linkContainer.style.transition = 'transform 0.3s ease-in-out';
      linkContainer.style.transform = 'translate3d(' + window.clientWidth + 'px,0px,0px)'
    }
    if (event.target === rightBtn) {
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
  })

}