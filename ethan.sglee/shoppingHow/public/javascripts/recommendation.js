function addRecommendationHTML(imgSrc, idx) {
  const target = document.querySelector(".recommendation-items")
  const hotdealItemTpl = 
  `
  <li class="recommendation-items__item">
      <a href="#" class="recommendation-items__link">
          <span class="recommendation-items__thumb">
              <img src="${imgSrc}" class="recommendation-items__img" alt="">
          </span>
          <strong class="hot-deal__title">상품</strong>
          <div class="recommendation-items__detail-price">
              <span class="txt-price">${idx + 1},500 </span>
          </div>
      </a>
  </li>
  `

  target.innerHTML += hotdealItemTpl
}

const tempImgSrc = '//shop1.daumcdn.net/shophow/c/image/content/set/ad8255/20211014114401830_24251'

export default function initRecommendation() {
  for (let i=0; i<10; i++) {
    addRecommendationHTML(tempImgSrc, 1)
  }
}