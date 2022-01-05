export default class Component {
    
    #rootEl
    #childComponents = []
    
    constructor(htmlStructure, childComponentObj) {
        if (!htmlStructure) {
            throw new Error('htmlStructure must be passed to super()')
        }
        
        const tempEl = document.createElement('div')
        
        tempEl.innerHTML = htmlStructure
        this.#rootEl = tempEl.firstElementChild
        tempEl.remove()
    
        if (childComponentObj) {
            Object.entries(childComponentObj).forEach(([dataComponentKey, component]) => {
                const componentKeyEl = this.#rootEl.querySelector(`[data-component="${ dataComponentKey }"]`)
        
                componentKeyEl.parentElement.replaceChild(component.rootEl, componentKeyEl)
                this.#childComponents.push(component)
            })
        }
    }
    
    addChild(component, parentEl) {
        parentEl.appendChild(component.rootEl)
    }
    
    update() {
    
    }
    
    addEventListener(eventType, listener) {
        this.rootEl.addEventListener(eventType, listener)
    }
    
    show() {
        this.rootEl.style.visibility = 'visible'
    }
    
    hide() {
        this.rootEl.style.visibility = 'hidden'
    }
    
    remove() {
        this.#childComponents.forEach((component) => {
            component.remove()
        })
        
        this.#rootEl.remove()
    }
    
    get rootEl() {
        return this.#rootEl
    }
    
}