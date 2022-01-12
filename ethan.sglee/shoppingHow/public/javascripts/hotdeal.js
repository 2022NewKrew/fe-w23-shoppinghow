const EMPTY_HEART_TEMPLATE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
`
const FILL_HEART_TEMPLATE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
`

function addHotDealHTML(imgSrc, idx) {
  const target = document.querySelector(".hot-deal-list")
  const hotdealItemTpl = 
  `
  <li class="hot-deal__item">
      <a href="#" class="hot-deal__link">
          <span class="hot-deal__thumb">
              <img src="${imgSrc}" class="hot-deal__img" alt="${idx}번째 상품 사진">
          </span>
          <div class="hot-deal__title-bar">
            <strong class="hot-deal__title">${idx}번째 상품</strong>
            <div class="hot-deal__favorite-icon">
              ${EMPTY_HEART_TEMPLATE}
            </div>
          </div>

          <span class="hot-deal__detail-price">
              <span class="txt-price">${idx + 1},500 </span>
              <span class="txt-price-percent">핫딜가</span>
          </span>
      </a>
  </li>
  `

  target.innerHTML += hotdealItemTpl
}

const imgSrcArr = [
  '//shop1.daumcdn.net/shophow/c/image/content/set/ad8255/20211014114401830_24251',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220107134943171_823291',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220107154407787_616064',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220104141241410_262342',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211223145108580_156597',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220107155831878_403392',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211215173802161_208073',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220105115905769_456757',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220107153139410_756301',
  '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220103155510545_592907',
]

export default function initHotdeal() {
  imgSrcArr.forEach(addHotDealHTML)

  const hotdealList = document.querySelector(".hot-deal-list")
  
  hotdealList.querySelectorAll('.hot-deal__item').forEach(item => {
    const title = item.querySelector('.hot-deal__title').innerText
    if (localStorage.getItem(title) !== null) {
      const heart = item.querySelector('.hot-deal__favorite-icon')
      heart.innerHTML = FILL_HEART_TEMPLATE
    }
  })

  hotdealList.addEventListener('click', (event) => {
    event.preventDefault()

    const path = event.composedPath()
    const currentItem = path.filter(tag => {
      if ('classList' in tag) {
        return tag.classList.contains('hot-deal__item')
      }
      return false
    })[0]

    const imgSrc = currentItem.querySelector('.hot-deal__thumb > img').src
    const title = currentItem.querySelector('.hot-deal__title').innerText
    const price = currentItem.querySelector('.txt-price').innerText

    const product = {
      imgSrc,
      title,
      price,
    }

    if (event.target.classList.contains('hot-deal__favorite-icon')) {
      if (localStorage.getItem(title) !== null) {
        localStorage.removeItem(title)
        event.target.innerHTML = EMPTY_HEART_TEMPLATE
      } else {
        localStorage.setItem(title, JSON.stringify(product))
        event.target.innerHTML = FILL_HEART_TEMPLATE
      }
    } else {
      sessionStorage.setItem(title, JSON.stringify(product))
    }
  })
}

