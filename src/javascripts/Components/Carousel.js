import Component from '../Component'
import styles from '../../scss/ComponentStyles/Carousel.module.scss'

export default class Carousel extends Component {
    
    #bannerTemplate
    #dataToShowList
    #drawBanner
    
    #currentIdx = 1
    
    #bannerListEl
    
    #transitionDuration = 500
    
    
    constructor(dataToShowList, option, bannerTemplate, drawBanner) {
        super(`
            <div class="${ styles.carousel }">
                <div class="${ styles.bannerContainer }">
                    <ul class="${ styles.bannerList }"></ul>
                </div>
                <div class="${ styles.sideBtn } ${ styles.leftSideBtn }"></div>
                <div class="${ styles.sideBtn } ${ styles.rightSideBtn }"></div>
            </div>
        `)
        
        this.#dataToShowList = dataToShowList
        this.#bannerTemplate = bannerTemplate
        this.#drawBanner = drawBanner
        
        this.#applyOption(option)
        
        this.#bannerListEl = this.rootEl.querySelector(`.${ styles.bannerList }`)
        this.#bannerListEl.addEventListener('transitionend', this.#processAfterTransition.bind(this))
        
        const leftSideBtnEl = document.querySelector(styles.leftSideBtn)
        const rightSideBtnEl = document.querySelector(styles.rightSideBtn)
        
        leftSideBtnEl.addEventListener('click', this.#moveLeft.bind(this))
        leftSideBtnEl.addEventListener('click', this.#moveRight.bind(this))
    }
    
    
    #applyOption(option) {
        const bannerContainerEl = this.rootEl.querySelector(`.${ styles.bannerContainer }`)
        
        bannerContainerEl.style.width = option.bannerWidth
        this.#transitionDuration = option.transitionDuration
    }
    
    #moveLeft() {
        this.#currentIdx--
        this.#movePage()
    }
    
    #moveRight() {
        this.#currentIdx++
        this.#movePage()
    }
    
    #movePage() {
        const bannerWidth = this.rootEl.style.width
        
        this.#bannerListEl.style.transform = `translateX(${ bannerWidth * this.#currentIdx })`
    }
    
    #processAfterTransition() {
        const leftExtraBannerIdx = 0
        const firstBannerIdx = 1
        const lastBannerIdx = this.#dataToShowList.length
        const rightExtraBannerIdx = lastBannerIdx + 1
        
        if (this.#currentIdx === leftExtraBannerIdx || this.#currentIdx === rightExtraBannerIdx) {
            this.#bannerListEl.style.transitionDuration = '0ms'
            
            if (this.#currentIdx === leftExtraBannerIdx) {
                this.#currentIdx = lastBannerIdx
            } else if (this.#currentIdx === rightExtraBannerIdx) {
                this.#currentIdx = firstBannerIdx
            }
            
            this.#movePage()
            
            this.#bannerListEl.style.transitionDuration = `${ this.#transitionDuration }ms`
        }
    }
    
    update() {
        this.#bannerListEl.innerHTML = ''
        
        this.#dataToShowList.forEach((dataToShow) => {
            const bannerItemEl = document.createElement('li')
            
            bannerItemEl.classList.add(styles.bannerItem)
            bannerItemEl.innerHTML = this.#bannerTemplate
            
            this.#drawBanner(bannerItemEl, dataToShow)
            
            this.#bannerListEl.addChild(bannerItemEl)
        })
    }
    
    set dataToShowList(dataToShowList) {
        this.#dataToShowList = dataToShowList
        this.update()
    }
    
}