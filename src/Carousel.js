export default class Carousel {
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} leftBtn
   * @param {HTMLElement} rightBtn
   * @param {HTMLElement} tabContainer
   */
  constructor(container, leftBtn, rightBtn, tabContainer){
    /** @type {HTMLElement} */
    this.container=container;
    this.length=this.container.children.length;
    /** @type {number} */
    this.currentIndex=0;
    /** @type {HTMLElement} */
    this.tabContainer=tabContainer;
    this.imageWidth=this.container.children[0].getBoundingClientRect().width;
    /** @type {boolean} */
    this.isBusy=false;
    /** @type {number} */
    this.transition=0.5;

    leftBtn.addEventListener("click", ()=>{
      this._goByOffset(-1);
    });
    rightBtn.addEventListener("click", ()=>{
      this._goByOffset(1);
    });
    
    tabContainer.innerHTML=Array(this.length).fill(0).map((_, index)=>(
      `<li data-tabIndex="${index}" class="planning__navigation-li"></li>`
    )).join("");
    this._markCurrentTabActive();
    tabContainer.addEventListener("click", (e)=>{
      const tabIndex=e.target.getAttribute("data-tabIndex");
      if(tabIndex===null){
        return;
      }
      const offset=tabIndex-this.currentIndex;
      this._goByOffset(offset);
    });
  }

  /**
   * @param {number} targetIndex
   */
  goToIndexByNavgation(targetIndex){
    this._goByOffset(targetIndex, this.currentIndex<targetIndex);
  }
  
  /**
   * Do not call this outside.
   * @param {number} indexOffset
   */
  _goByOffset(indexOffset){
    if(this.isBusy || indexOffset===0){
      return;
    }
    this.isBusy=true;
    this.currentIndex=(this.currentIndex+indexOffset+this.length)%this.length;
    this._markCurrentTabActive();
    let copyIndexOffset=indexOffset;
    if(indexOffset<0){
      while(copyIndexOffset!==0){
        this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild);
        copyIndexOffset+=1;
      }
      this.container.style=`transform: translateX(${indexOffset*(this.imageWidth)}px)`;
      this.container.scrollWidth;
      this.container.style=`transition: ${this.transition}s; ease-out;transform: 0`;
    }
    else {
      this.container.style=`transition: ${this.transition}s ease-out; transform: translateX(${-indexOffset*(this.imageWidth)}px)`;
    }
    this.container.ontransitionend=()=>{
      this.container.ontransitionend=null;
      this.isBusy=false;
      if(indexOffset>0){
        while(copyIndexOffset!==0){
          this.container.appendChild(this.container.firstElementChild);
          copyIndexOffset-=1;
        }  
      }
      this.container.removeAttribute("style");
    };
  }

  _markCurrentTabActive(){
    Array.from(this.tabContainer.children).forEach((tab)=>{
      tab.classList.remove("planning__navigation-li-active");
    });
    this.tabContainer.children[this.currentIndex].classList.add("planning__navigation-li-active");
  }
}
