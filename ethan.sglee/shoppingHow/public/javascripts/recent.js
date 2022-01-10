function appendRecentItem(parent, product) {
  const recentItemTpl = `
  <li class="private-menu__recent-contents__item">
    <a href="#">
      <img src="${product.imgSrc}" alt="">
    </a>
  </li>
  `
  parent.innerHTML += recentItemTpl
}

export default function initRecent() {
  
  const recentBtn = document.querySelectorAll('.private-menu__btn')[1]

  const recentWindow = document.querySelector('.private-menu__recent-window')
  const recentContents = recentWindow.querySelector('.private-menu__recent-contents')

  recentBtn.addEventListener('mouseenter', (event) => {
    console.log('in')

    recentWindow.classList.remove('none')

    recentContents.innerHTML = ''
    for (let i=0; i<sessionStorage.length; i++) {
      let key = sessionStorage.key(i)
      const product = JSON.parse(sessionStorage.getItem(key))
      appendRecentItem(recentContents, product)
    }

  })

  recentBtn.addEventListener('mouseleave', (event) => {
    console.log('out')
    recentWindow.classList.add('none')
  })

  recentWindow.addEventListener('mouseenter', (event) => {
    recentWindow.classList.remove('none')
  })

  recentWindow.addEventListener('mouseleave', (event) => {
    recentWindow.classList.add('none')
  })

}