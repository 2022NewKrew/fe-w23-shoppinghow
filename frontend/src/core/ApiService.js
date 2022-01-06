//요구사항에 맞는 api를 가져옴
export default class ApiService {

  //서버에 폼 가져오기
  async getApi(type) {
    let url = "api";
    switch (type) {
      case "getSearchKeywordGroup":
        url += "/getSearchKeywordGroup";
        break;
      default:
        break;
    }
    console.log(`fetch url: ${url}`);

    try{
      const response = await fetch(url);
      console.log(response);
      if(response.ok){
        return response.json();
      }
      throw response.statusText;
    }catch(err){
      console.log(err);
      return null;
    }
  }
}
