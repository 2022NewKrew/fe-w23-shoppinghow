import css from '../scss/main.scss'
import SearchBar from './Components/SearchBar'
import RecentAndTaggedGoodsTab from './Components/RecentAndTaggedGoodsTab'
import GoodsCard from './Components/GoodsCard'
import GoodsList from './Components/GoodsList'
import SectionTitle from './Components/SectionTitle'
import RecentGoodsButton from './Components/RecentGoodsButton'
import RecentlyRelatedGoods from './Components/RecentlyRelatedGoods'
import Carousel from './Components/Carousel'


window.addEventListener('DOMContentLoaded', () => {
    const carouselBannerDatas = [
        {
            imgSrc: 'https://shop1.daumcdn.net/shophow/sib/0_211220170341_jWeJLlFasaenGPphwNUmbgwjYAYnokrT'
        },
        {
            imgSrc: 'https://shop4.daumcdn.net/shophow/sib/0_211220170333_KonewYzJDIWwhWCTtmgTMLwbdGCLAjvQ'
        },
        {
            imgSrc: 'https://shop3.daumcdn.net/shophow/sib/0_211220170326_LOzjVdlUokksfcRxZkmDpxPuLdsooFoW'
        }
    ]
    
    const bannerTemplate = `
        <img class="banner-img">
    `
    
    const headerTopEl = document.querySelector('.header-top')
    const privateMenuEl = document.querySelector('.private-menu')
    const planningEl = document.querySelector('.planning')
    const rollingText = new SearchBar()
    const recentGoodsButton = new RecentGoodsButton()
    const carousel = new Carousel(carouselBannerDatas.length, {
        bannerWidth: 600
    }, (bannerItemEl, bannerIdx) => {
        bannerItemEl.innerHTML = bannerTemplate
        
        const bannerImgEl = bannerItemEl.querySelector('.banner-img')
        
        bannerImgEl.src = carouselBannerDatas[bannerIdx].imgSrc
    })
    
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
    planningEl.appendChild(carousel.rootEl)
})