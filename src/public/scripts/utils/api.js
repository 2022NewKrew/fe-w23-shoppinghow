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
};
