/**
 * Call Top10.init after initializing.
 * @param {HTMLElement} ulElement
 * @param {string[]} top10Keywords
 */
function Top10(ulElement, top10Keywords){
  /** @type {HTMLElement} */
  this.element=ulElement;
  /** @type {string[]} */
  this.top10Keywords=top10Keywords;
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
  this.element.innerHTML=this.top10Keywords.map((keyword, index)=>(
    `<li class="search-top10__item">${index+1}. ${keyword}</li>`
  )).join("");

  this.currentIndex=0;
  this.childHeight=this.element.children[0].getBoundingClientRect().height;
  this.length=this.element.children.length;
};

Top10.prototype.hide=function(){
  this.element.style="display:none;";
  clearTimeout(this.timeoutHandler);
};

Top10.prototype.show=function(){
  this.element.style=`transform: translateY(${-(this.currentIndex)*this.childHeight}px)`;
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
