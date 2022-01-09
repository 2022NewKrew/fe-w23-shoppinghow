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

  recentBtn.addEventListener('click', (event) => {

    const recentContents = document.querySelector('.private-menu__recent-contents')

    recentContents.innerHTML = ''
    
    for (let i=0; i<sessionStorage.length; i++) {
      let key = sessionStorage.key(i)
      const product = JSON.parse(sessionStorage.getItem(key))
      appendRecentItem(recentContents, product)
    }

  })

}