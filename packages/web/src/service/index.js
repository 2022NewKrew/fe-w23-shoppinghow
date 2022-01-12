const API_ENDPOINT = "http://localhost:3000/api/v1";

const ROLLKEYWORD = "rollkeyword";
const SUGGESTION = "suggestion";

const request = async (url) => {
  const response = await fetch(url);
  try {
    if (response.status === 200) {
      const data = response.json();
      return data;
    } else {
      const errorData = response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

export default class Service {
  static async dataFetch(url) {
    try {
      const data = await request(`${API_ENDPOINT}/${url}`);
      return {
        isError: false,
        data,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  }

  static async getRollKeyword() {
    return Service.dataFetch(ROLLKEYWORD);
  }
  static async getSuggestion() {
    return Service.dataFetch(SUGGESTION);
  }
}
