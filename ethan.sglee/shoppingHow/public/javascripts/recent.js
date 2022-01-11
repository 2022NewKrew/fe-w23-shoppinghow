const RECENT_PRODUCT_TITLE = '최근 본 상품'
const FAVORITE_PRODUCT_TITLE = '내가 찜한 상품'

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
  
  function refreshContents(contents_title) {
    recentContents.innerHTML = ''
  
    if (contents_title === RECENT_PRODUCT_TITLE) {
      for (let i=0; i<sessionStorage.length; i++) {
        let key = sessionStorage.key(i)
        const product = JSON.parse(sessionStorage.getItem(key))
        appendRecentItem(recentContents, product)
      }
    } else if (contents_title === FAVORITE_PRODUCT_TITLE) {
      for (let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i)
        const product = JSON.parse(localStorage.getItem(key))
        appendRecentItem(recentContents, product)
      }
    }
  }

  recentBtn.addEventListener('mouseenter', () => {
    recentWindow.classList.remove('none')

    refreshContents(RECENT_PRODUCT_TITLE)
  })

  recentBtn.addEventListener('mouseleave', () => {
    recentWindow.classList.add('none')
  })

  recentWindow.addEventListener('mouseenter', () => {
    recentWindow.classList.remove('none')
  })

  recentWindow.addEventListener('mouseleave', () => {
    recentWindow.classList.add('none')
  })

  recentWindow.addEventListener('click', (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === RECENT_PRODUCT_TITLE) {
      refreshContents(RECENT_PRODUCT_TITLE)
    } else if (event.target.innerText === FAVORITE_PRODUCT_TITLE) {
      refreshContents(FAVORITE_PRODUCT_TITLE)
    }
  })

}