import css from '../scss/main.scss'
import InputWithTopRankingGoods from './Components/InputWithTopRankingGoods'
import GoodsFloatingLayer from './Components/GoodsFloatingLayer'
import GoodsCard from './Components/GoodsCard'
import GoodsList from './Components/GoodsList'
import SectionTitle from './Components/SectionTitle'
import RecentGoodsButton from './Components/RecentGoodsButton'
import RecentlyRelatedGoods from './Components/RecentlyRelatedGoods'


window.addEventListener('DOMContentLoaded', () => {
    const headerTopEl = document.querySelector('.header-top')
    const privateMenuEl = document.querySelector('.private-menu')
    const rollingText = new InputWithTopRankingGoods()
    const recentGoodsButton = new RecentGoodsButton()
    
    const target = document.querySelector('.container-wrapper')
    const hotDealTitle = new SectionTitle('품절주의, 역대급 핫딜')
    const hotDealGoodsList = new GoodsList('http://localhost:3000/json/hot-deal-goods.json')
    const keywordTitle = new SectionTitle('쇼핑 급상승 키워드')
    const keywordGoodsList = new GoodsList('http://localhost:3000/json/keyword-goods.json')
    const howAboutTitle = new SectionTitle('이 상품 어때요?')
    const recentlyRelatedGoods = new RecentlyRelatedGoods()
    
    target.appendChild(hotDealTitle.rootEl)
    target.appendChild(hotDealGoodsList.rootEl)
    target.appendChild(keywordTitle.rootEl)
    target.appendChild(keywordGoodsList.rootEl)
    target.appendChild(howAboutTitle.rootEl)
    target.appendChild(recentlyRelatedGoods.rootEl)
    
    headerTopEl.appendChild(rollingText.rootEl)
    privateMenuEl.appendChild(recentGoodsButton.rootEl)
})