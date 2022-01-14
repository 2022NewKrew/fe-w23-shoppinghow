import Observable from "./Observable";

class RecentKeywordsModel extends Observable{
  /**
   * @param {number} limit
   */
  constructor(limit=5){
    super();
    this.localStorageKey="recentKeywords";
    this.limit=limit;
    
    this.#init();
  }

  #init(){
    this.fetchData();
  }

  /**
   * @param {string} newKeyword
   */
  addKeyword(newKeyword){
    if(this.data.includes(newKeyword)){
      return;
    }
    this.data=[newKeyword, ...this.data].slice(0, this.limit);
    this.notify();
    this.#saveData();
  }

  #saveData(){
    const stringfiedKeywords=JSON.stringify(this.data);
    localStorage[this.localStorageKey]=stringfiedKeywords;
  }

  fetchData(){
    let localStorageValue=localStorage[this.localStorageKey];
    if(localStorageValue===undefined){
      this.data=[];
      return;
    }
    const recentKeywords=JSON.parse(localStorageValue);
    this.data=recentKeywords.slice(0, this.limit);
    this.notify();
  }
}

const recentKeywordsModel=new RecentKeywordsModel();
export default recentKeywordsModel;
