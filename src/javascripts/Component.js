import { Obj } from 'nunjucks/src/object'

export default class Component {
    
    #rootEl
    
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
                const tempEl = this.#rootEl.querySelector(`[data-component="${ dataComponentKey }"]`)
        
                tempEl.parentElement.replaceChild(component.rootEl, tempEl)
            })
        }
    }
    
    get rootEl() {
        return this.#rootEl
    }
    
}