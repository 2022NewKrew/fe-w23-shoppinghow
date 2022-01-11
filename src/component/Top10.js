/**
 * Call Top10.init after initializing.
 * @param {HTMLElement} element
 * @param {HTMLElement} input
 */
function Top10(element, input){
  /** @type {HTMLElement} */
  this.element=element;
  /** @type {HTMLElement} */
  this.input=input;
  /** @type {number} */
  this.currentIndex;
  /** @type {number} */
  this.childHeight;
  /** @type {number} */
  this.length;
  /** @type {number} */
  this.timeoutHandler;
  /** @type {number} */
  this.intervalMilliSec=3000;
  this.init();
}

Top10.prototype.init=function(){
  this.currentIndex=0;
  this.childHeight=this.element.children[0].getBoundingClientRect().height;
  this.length=this.element.children.length;
  
  this.input.addEventListener("focusin", ()=>{
    this.element.style="display:none;";
    clearTimeout(this.timeoutHandler);
  });
  this.input.addEventListener("focusout", ()=>{
    this.element.style=`transform: translateY(${-(this.currentIndex)*this.childHeight}px)`;
    this._roll(this.intervalMilliSec);
  });
  this._roll(this.intervalMilliSec);
};

Top10.prototype._roll=function(intervalMilliSec){
  this.timeoutHandler=setTimeout(()=>{
    this.element.style=`transition: 1s; transform: translateY(${-(this.currentIndex+1)*this.childHeight}px)`;
    this.element.ontransitionend=()=>{
      this.currentIndex+=1;
      if(this.currentIndex==this.length){
        this.currentIndex=-1;
        this.element.style=`transform: translateY(${this.childHeight}px)`;
        this._roll(0);
        return;
      }
      this._roll(this.intervalMilliSec);
    };
  }, intervalMilliSec);
};

export default Top10;
