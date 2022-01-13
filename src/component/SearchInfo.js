import autocompleteModel from "../model/AutocompleteModel";
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

  async showsAutocomplete(keyword){
    try{
      const autocompleteKeywords=await autocompleteModel.fetchData(keyword);
      this.searchInfoElement.innerHTML=`
        <div class="search-info__container">
          ${this.#getAutoCompleteKeywordsHtml(autocompleteKeywords)}
        </div>
      `;
    }catch(_){
      this.searchInfoElement.innerHTML=`
        <div class="search-info__container">
          <div class="search-info__autocomplete-item">
            에러가 발생하였습니다. 다시 시도해주십시오.
          </div>
        </div>
      `;
    }
  }

  /**
   * @returns {string}
   */
  #getRecentKeywordsHtml(){
    return this.recentKeywords.map((keyword)=>(
      `<div class="search-info__recent-keyword">${keyword}</div>`
    )).join("");
  }

  #getHotKeywordHtml(){
    return this.top10Keywords.map((keyword, index)=>(`
      <div class="search-info__hot-keyword">
        <span class="search-info__hot-keyword-rank">${index+1}</span>
        ${keyword}
      </div>
    `)).join("");
  }

  #getAutoCompleteKeywordsHtml(autocompleteKeywords){
    if(autocompleteKeywords.length===0){
      return `
        <div class="search-info__autocomplete-item">
          연관 검색어가 없습니다.
        </div>
      `;
    }
    return autocompleteKeywords.map((keyword)=>(`
      <div class="search-info__autocomplete-item">
        ${keyword}
      </div>
    `)).join("");
  }
}
