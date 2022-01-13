import Component from '../../Core/Component'
import styles from '../../../scss/ComponentStyles/Carousel.module.scss'

export default class Carousel extends Component {
    
    #nBanner
    #drawBanner
    
    #currentIdx = 1
    
    #bannerListEl
    
    #option
    
    
    constructor(nBanner, userOption, drawBanner) {
        super(`
            <div class="${ styles.carousel }">
                <div class="${ styles.bannerContainer }">
                    <ul class="${ styles.bannerList }"></ul>
                </div>
                <div class="${ styles.sideBtn } ${ styles.leftSideBtn }"></div>
                <div class="${ styles.sideBtn } ${ styles.rightSideBtn }"></div>
            </div>
        `)
        
        const defaultOption = {
            bannerWidth: 500,
            transitionDuration: 500
        }
        
        this.#option = { ...defaultOption, ...userOption }
        
        this.#nBanner = nBanner
        this.#drawBanner = drawBanner
        
        this.#bannerListEl = this.rootEl.querySelector(`.${ styles.bannerList }`)
        this.#bannerListEl.addEventListener('transitionend', this.#processAfterTransition.bind(this))
        
        const leftSideBtnEl = this.rootEl.querySelector(`.${ styles.leftSideBtn }`)
        const rightSideBtnEl = this.rootEl.querySelector(`.${ styles.rightSideBtn }`)
        
        leftSideBtnEl.addEventListener('click', this.#moveLeft.bind(this))
        rightSideBtnEl.addEventListener('click', this.#moveRight.bind(this))
        
        this.#bannerListEl.addEventListener('transitionend', this.#processAfterTransition.bind(this))
        
        this.update()
    }
    
    
    #moveLeft() {
        if (this.#currentIdx > 0) {
            this.#currentIdx--
            this.#bannerListEl.style.transitionDuration = `${ this.#option.transitionDuration }ms`
            this.#movePage()
        }
    }
    
    #moveRight() {
        if (this.#currentIdx < this.#nBanner + 1) {
            this.#currentIdx++
            this.#bannerListEl.style.transitionDuration = `${ this.#option.transitionDuration }ms`
            this.#movePage()
        }
    }
    
    #movePage() {
        this.#bannerListEl.style.transform = `translateX(-${ this.#option.bannerWidth * this.#currentIdx }px)`
    }
    
    #processAfterTransition() {
        const leftExtraBannerIdx = 0
        const firstBannerIdx = 1
        const lastBannerIdx = this.#nBanner
        const rightExtraBannerIdx = lastBannerIdx + 1
        
        if (this.#currentIdx === leftExtraBannerIdx || this.#currentIdx === rightExtraBannerIdx) {
            this.#bannerListEl.style.transitionDuration = '0ms'
            
            if (this.#currentIdx === leftExtraBannerIdx) {
                this.#currentIdx = lastBannerIdx
            } else if (this.#currentIdx === rightExtraBannerIdx) {
                this.#currentIdx = firstBannerIdx
            }
            
            this.#movePage()
        }
    }
    
    #createBannerItemEl(idx) {
        const bannerItemEl = document.createElement('li')
        bannerItemEl.classList.add(styles.bannerItem)
        
        this.#drawBanner(bannerItemEl, idx)
        
        return bannerItemEl
    }
    
    update() {
        const bannerContainerEl = this.rootEl.querySelector(`.${ styles.bannerContainer }`)
        const nTotalBanner = this.#nBanner + 2
        const firstDataIdx = 0
        const lastDataIdx = this.#nBanner - 1
        
        bannerContainerEl.style.width = `${ this.#option.bannerWidth }px`
        
        this.#bannerListEl.style.transitionDuration = `${ this.#option.transitionDuration }ms`
        this.#bannerListEl.style.width = `${ this.#option.bannerWidth * nTotalBanner }px`
        this.#bannerListEl.innerHTML = ''
        
        this.#bannerListEl.appendChild(this.#createBannerItemEl(lastDataIdx))
        Array.from(new Array(this.#nBanner)).forEach((_, idx) => {
            this.#bannerListEl.appendChild(this.#createBannerItemEl(idx))
        })
        this.#bannerListEl.appendChild(this.#createBannerItemEl(firstDataIdx))
        
        this.#movePage()
    }
    
}

