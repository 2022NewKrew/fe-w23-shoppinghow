// 요구사항에 맞는 api를 가져옴
export default class ApiService {
  // 서버에 폼 가져오기
  async getApi(type) {
    try {
      const response = await fetch(this.getUrl(type));
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw response.statusText;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getUrl(type) {
    const defaultUrl = 'api';
    switch (type) {
      case 'getSearchKeywordGroup':
        return defaultUrl + '/getSearchKeywordGroup';
      case 'getBannerData':
        return defaultUrl + '/getBannerData';
      default:
        return '';
    }
  }
}
