import { NETWORK_ERROR_MSG } from '@/static/constants/error';

const API_PREFIX = process.env.API_PREFIX;

const getData = async (url) => {
  try {
    const res = await fetch(`${API_PREFIX}${url}`);
    if (!res.ok) throw new Error(NETWORK_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const postData = async (url, data) => {
  try {
    const res = await fetch(`${API_PREFIX}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(NETWORK_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const putData = async (url, data) => {
  try {
    const res = await fetch(`${API_PREFIX}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(NETWORK_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const deleteData = async (url) => {
  try {
    const res = await fetch(`${API_PREFIX}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(NETWORK_ERROR_MSG);
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const api = {
  get: async (url) => {
    try {
      return await getData(url);
    } catch (e) {
      throw e;
    }
  },

  post: async (url, datas) => {
    try {
      return await postData(url, datas);
    } catch (e) {
      throw e;
    }
  },

  update: async (url, datas) => {
    try {
      return await putData(url, datas);
    } catch (e) {
      throw e;
    }
  },

  delete: async (url) => {
    try {
      return await deleteData(url);
    } catch (e) {
      throw e;
    }
  },
};
