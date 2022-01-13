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
    this.data.unshift(newKeyword);
    this.data=this.data.slice(0, this.limit);
    this.notify();
    this.#saveData();
  }

  #saveData(){
    const stringfiedKeywords=JSON.stringify(this.data);
    localStorage[this.localStorageKey]=stringfiedKeywords;
  }

  fetchData(){
    let savedString=localStorage[this.localStorageKey];
    let recentKeywords;
    if(savedString===undefined){
      this.data=[];
      return;
    }
    recentKeywords=JSON.parse(savedString);
    this.data=recentKeywords.slice(0, this.limit);
    this.notify();
  }
}

const recentKeywordsModel=new RecentKeywordsModel();
export default recentKeywordsModel;
