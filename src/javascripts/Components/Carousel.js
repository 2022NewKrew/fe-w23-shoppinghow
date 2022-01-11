import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/Carousel.module.scss'

export default class Carousel extends Component {
    
    #bannerTemplate
    #dataToShowList
    #drawBanner
    
    #currentIdx = 1
    
    #bannerListEl
    
    #transitionDuration = 500
    #bannerWidth = 500
    
    
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
        
        const leftSideBtnEl = this.rootEl.querySelector(`.${ styles.leftSideBtn }`)
        const rightSideBtnEl = this.rootEl.querySelector(`.${ styles.rightSideBtn }`)
        
        leftSideBtnEl.addEventListener('click', this.#moveLeft.bind(this))
        rightSideBtnEl.addEventListener('click', this.#moveRight.bind(this))
        
        this.#bannerListEl.addEventListener('transitionend', this.#processAfterTransition.bind(this))
        
        this.update()
    }
    
    
    #applyOption(option) {
        const bannerContainerEl = this.rootEl.querySelector(`.${ styles.bannerContainer }`)
        
        if (option.bannerWidth) {
            bannerContainerEl.style.width = option.bannerWidth
            this.#bannerWidth = option.bannerWidth
        }
        
        if (option.transitionDuration) {
            this.#transitionDuration = option.transitionDuration
            this.#bannerListEl.style.transitionDuration = `${ this.#transitionDuration }ms`
        }
    }
    
    #moveLeft() {
        if (this.#currentIdx > 0) {
            this.#currentIdx--
            this.#bannerListEl.style.transitionDuration = `${ this.#transitionDuration }ms`
            this.#movePage()
        }
    }
    
    #moveRight() {
        if (this.#currentIdx < this.#dataToShowList.length + 1) {
            this.#currentIdx++
            this.#bannerListEl.style.transitionDuration = `${ this.#transitionDuration }ms`
            this.#movePage()
        }
    }
    
    #movePage() {
        this.#bannerListEl.style.transform = `translateX(-${ this.#bannerWidth * this.#currentIdx }px)`
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
        }
    }
    
    #createBannerItemEl(dataToShow) {
        const bannerItemEl = document.createElement('li')
        bannerItemEl.classList.add(styles.bannerItem)
        
        bannerItemEl.innerHTML = this.#bannerTemplate
        this.#drawBanner(bannerItemEl, dataToShow)
        
        return bannerItemEl
    }
    
    update() {
        const bannerContainerEl = this.rootEl.querySelector(`.${ styles.bannerContainer }`)
        const nTotalBanner = this.#dataToShowList.length + 2
        const firstDataIdx = 0
        const lastDataIdx = this.#dataToShowList.length - 1
        
        bannerContainerEl.style.width = `${ this.#bannerWidth }px`
        
        this.#bannerListEl.style.transitionDuration = `${ this.#transitionDuration }ms`
        this.#bannerListEl.style.width = `${ this.#bannerWidth * nTotalBanner }px`
        this.#bannerListEl.innerHTML = ''
        
        this.#bannerListEl.appendChild(this.#createBannerItemEl(this.#dataToShowList[lastDataIdx]))
        this.#dataToShowList.forEach((dataToShow) => {
            this.#bannerListEl.appendChild(this.#createBannerItemEl(dataToShow))
        })
        this.#bannerListEl.appendChild(this.#createBannerItemEl(this.#dataToShowList[firstDataIdx]))
        
        this.#movePage()
    }
    
    set dataToShowList(dataToShowList) {
        this.#dataToShowList = dataToShowList
        this.update()
    }
    
}

