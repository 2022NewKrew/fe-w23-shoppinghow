export default class Carousel {
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} leftBtn
   * @param {HTMLElement} rightBtn
   * @param {HTMLElement} navigationUl
   */
  constructor(container, leftBtn, rightBtn, navigationUl){
    /** @type {HTMLElement} */
    this.container=container;
    // /** @type {HTMLElement} */
    // this.container=this.container.children[0];
    this.length=this.container.children.length;
    /** @type {number} */
    this.currentIndex=1;
    this.imageWidth=this.container.children[0].getBoundingClientRect().width;

    leftBtn.addEventListener("click", ()=>{
      this._goByOffset(-1);
    });
    rightBtn.addEventListener("click", ()=>{
      this._goByOffset(1);
    });

    navigationUl.innerHTML=Array(this.length).fill(0).map((_, index)=>(
      `<li data-tabIndex="${index}" class="planning__navigation-li"></li>`
    )).join("");
  }

  /**
   * @param {number} targetIndex
   */
  goToIndexByNavgation(targetIndex){
    this.currentIndex===targetIndex ?
      undefined:
      this._goByOffset(targetIndex, this.currentIndex<targetIndex);
  }
  /**
   * Do not call this outside.
   * @param {number} indexOffset
   */
  _goByOffset(indexOffset){
    this.container.style=`transition: 0.5s ease-out;transform: translateX(${-indexOffset*(this.imageWidth)}px)`;
    // this.container.style=`transition: 0.5s ease-out;`;
    // indexOffset>0 ?
    this.container.ontransitionend=()=>{
      this.container.ontransitionend=null;
      this.container.removeAttribute("style");
      this.currentIndex=(this.currentIndex+indexOffset)%this.length;
      if(indexOffset>0){
        while(indexOffset!==0){
          this.container.appendChild(this.container.firstElementChild);
          indexOffset-=1;
        }
      }
      else{
        while(indexOffset!==0){
          this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild);
          indexOffset+=1;
        }
      }
    };
  }
}
