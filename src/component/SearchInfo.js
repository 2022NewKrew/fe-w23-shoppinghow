import recentKeywordsModel from "../model/RecentKeywordsModel";
export default class SearchInfo{
  /**
   * @param {HTMLElement} searchInfoElement
   * @param {string[]} top10Keywords
   */
  constructor(searchInfoElement, top10Keywords){
    /** @type {HTMLElement} */
    this.searchInfoElement=searchInfoElement;
    /** @type {string[]} */
    this.top10Keywords=top10Keywords;
    this.recentKeywords;

    this.#init();
  }

  #init(){
    this.hide();
    recentKeywordsModel.subscribe((recentKeywords)=>{
      this.recentKeywords=recentKeywords;
    });
  }

  hide(){
    this.searchInfoElement.style="display:none;";
  }
  show(){
    this.searchInfoElement.removeAttribute("style");
  }

  showInfo(){
    this.searchInfoElement.innerHTML=`
      <div class="search-info__container">
        <div class="search-info__container-title">
          최근 검색어
        </div>
        <div class="">
          ${this.#getRecentKeywordsHtml()}
        </div>
      </div>
      <div class="search-info__container">
        <div class="search-info__container-title">
          인기 쇼핑 키워드
        </div>
        <div class="search-info__hot-keyword-container">
          ${this.#getHotKeywordHtml()}
        </div>
      </div>`;
  }
  showAutocomplete(){
    this.searchInfoElement.innerHTML=`
      <div class="search-info__container">
        <div class="">
        </div>
      </div>
    `;
  }
  
  /**
   * @returns {string}
   */
  #getRecentKeywordsHtml(){
    return this.recentKeywords.map((keyword)=>(
      `<div class="search-info__recent-keyword">${keyword}</div>`
    )).join("");
  }

  /**
   * @param {number?} limit
   * @returns {string[]}
   */
  // #getRecentKeywords(limit=5){
  //   let concatKeywords=localStorage.getItem(globals.recentKeywordsLSKey);
  //   if(concatKeywords===undefined){
  //     concatKeywords="";
  //   }
  //   const recentKeywords=concatKeywords.split(globals.recentKeywordsSep, limit);
  //   return recentKeywords;
  // }

  #getHotKeywordHtml(){
    return this.top10Keywords.map((keyword, index)=>(`
      <div class="search-info__hot-keyword">
        <span class="search-info__hot-keyword-rank">${index+1}</span>
        ${keyword}
      </div>
    `)).join("");
  }

}
