const dataUrl = "http://localhost:3000/api/";

export const api = {
  async get(endpoint, param = {}) {
    const params = param;
    try {
      const response = await fetch(`${dataUrl}${endpoint}`, { params });
      return response.json();
    } catch (error) {
      alert(`ERROR: ${error.response.data.message}`);
      return false;
    }
  },

  top10() {
    const response = {
      result: ["스노우보드", "스테비아토마토", "led마스크", "런닝머신", "단백질보충제", "앰플", "육수팩", "유산균", "제기세트", "스케이트"],
    };
    return response;
  },
};
