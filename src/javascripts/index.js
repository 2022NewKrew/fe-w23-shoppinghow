import css from '../scss/main.scss'
import InputWithTopRankingGoods from './Components/InputWithTopRankingGoods'
import GoodsFloatingLayer from './Components/GoodsFloatingLayer'
import GoodsCard from './Components/GoodsCard'


window.addEventListener('DOMContentLoaded', () => {
    const headerTopEl = document.querySelector('.header-top')
    const headerMenuEl = document.querySelector('.header-menu')
    const rollingText = new InputWithTopRankingGoods()
    const recentGoodsFloatingLayer = new GoodsFloatingLayer()
    
    const target = document.querySelector('.hot-deal-list')
    const goodsCard = new GoodsCard({ name: '육즙가득 안심스테이크1+1', imgSrc: 'http://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895' })
    
    target.appendChild(goodsCard.rootEl)
    
    headerTopEl.appendChild(rollingText.rootEl)
    headerMenuEl.appendChild(recentGoodsFloatingLayer.rootEl)
})