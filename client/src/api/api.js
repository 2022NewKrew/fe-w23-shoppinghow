/* eslint-disable no-useless-catch */
import { API_ERROR_MSG } from '@/static/constants/error';
const API_ENDPOINT = process.env.API_ENDPOINT;

const getData = async (url) => {
  try {
    const res = await fetch(`${API_ENDPOINT}${url}`);
    if (!res.ok) throw new Error(API_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const postData = async (url, data) => {
  try {
    const res = await fetch(`${API_ENDPOINT}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(API_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const putData = async (url, data) => {
  try {
    const res = await fetch(`${API_ENDPOINT}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(API_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const deleteData = async (url) => {
  try {
    const res = await fetch(`${API_ENDPOINT}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(API_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const api = {
  get: async (url) => {
    try {
      const data = await getData(url);
      return {
        success: true,
        data,
      };
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },

  post: async (url, datas) => {
    try {
      const data = await postData(url, datas);
      return {
        success: true,
        data,
      };
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },

  update: async (url, datas) => {
    try {
      const data = await putData(url, datas);
      return {
        success: true,
        data,
      };
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },

  delete: async (url) => {
    try {
      const data = await deleteData(url);
      return {
        success: true,
        data,
      };
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },
};
