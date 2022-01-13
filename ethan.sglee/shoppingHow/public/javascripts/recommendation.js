const PICKED_EMPTY_TEMPLATE = `
<p class="picked-items__empty-text">최근 본 상품이 없습니다</p>
`

function fillPickedItem(pickedItem, product) {
  const template = `
  <div class="picked-items__thumb">
    <img src="${product.imgSrc}" alt="상품이미지">
  </div>
  <div class="picekd-items__detail">
    <div class="picked-items__title">
      <strong>${product.title}</strong>
    </div>
    <div class="picked-items__link">
      <p>상품보기></p>
    </div>
  </div>
  `
  pickedItem.innerHTML = template
}

function addRecommendationHTML(target) {
  const hotdealItemTpl = 
  `
  <li class="recommendation-items__item">
      <a href="#" class="recommendation-items__link">
          <span class="recommendation-items__thumb">
              <img src="" alt="">
          </span>
          <strong class="recommendation-items__title">상품</strong>
          <div class="recommendation-items__detail-price">
              <span class="txt-price">0 </span>
          </div>
      </a>
  </li>
  `

  target.innerHTML += hotdealItemTpl
}

export default function initRecommendation() {
  const recommendationList = document.querySelector(".recommendation-items")
  for (let i=0; i<10; i++) {
    addRecommendationHTML(recommendationList)
  }
  const recommendtaionItemArr = recommendationList.querySelectorAll('.recommendation-items__item')

  const productArr = []

  for (let i=0; i<sessionStorage.length; i++) {
    let key = sessionStorage.key(i)
    const product = JSON.parse(sessionStorage.getItem(key))
    productArr.push(product)
  }

  const pickedList = document.querySelector(".picked-items")

  let max_length = productArr.length < 5 ? productArr.length : 5
  const pickedItemArr = pickedList.querySelectorAll('.picked-items__item')

  for (let i=0; i<max_length; i++) {
    fillPickedItem(pickedItemArr[i], productArr[i])
  }

  pickedList.addEventListener('click', ({target}) => {
    const selected = pickedList.querySelector('.selected')
    if (selected) {
      selected.classList.remove('selected')
    }

    recommendationList.classList.remove('hidden')

    const pickedItem = target.closest('.picked-items__item')
    pickedItem.classList.add('selected')  

    const title = pickedItem.querySelector('.picked-items__title > strong').innerText
    const product = JSON.parse(sessionStorage.getItem(title))
    
    recommendtaionItemArr.forEach((item) => {
      item.querySelector('.recommendation-items__thumb > img').src = product.imgSrc
      item.querySelector('.recommendation-items__thumb > img').alt = `${title} 사진`
      item.querySelector('.recommendation-items__title').innerText = title
      item.querySelector('.txt-price').innerText = product.price

    })
    
  })

}