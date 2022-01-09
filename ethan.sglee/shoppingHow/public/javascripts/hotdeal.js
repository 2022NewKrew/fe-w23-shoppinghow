function addHotDealHTML(imgSrc, idx) {
  const target = document.querySelector(".hot-deal-list")
  const hotdealItemTpl = `
  <li class="hot-deal__item">
      <a href="#" class="hot-deal__link">
          <span class="hot-deal__thumb">
              <img src="${imgSrc}" class="hot-deal__img" alt="">
          </span>

          <strong class="hot-deal__title">${idx}번째 상품</strong>

          <span class="hot-deal__detail-price">
              <span class="txt-price">${idx+1},500 </span>
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
  
  imgSrcArr.forEach((imgSrc, index) => {
    addHotDealHTML(imgSrc, index)
  })

  const hotdealList = document.querySelector(".hot-deal-list")
  
  hotdealList.addEventListener('click', (event) => {
    const imgSrc = event.target.querySelector('.hot-deal__thumb > img').src
    const title = event.target.querySelector('.hot-deal__title').innerText
    const price = event.target.querySelector('.txt-price').innerText

    const product = {
      imgSrc,
      title,
      price,
    }

    sessionStorage.setItem(title, JSON.stringify(product))

  })

}

