const API_BASE_URL = process.env.API_BASE_URL;

/**
 *
 * @param { { url: string, method: "GET" | "POST" | "UPDATE" | "DELETE", body?: any } } params
 * @returns
 */
export const onFetch = async ({ url, method, body }) => {
  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (process.env.DEBUG) {
      console.log(`[fetch ${res.status}] ${method} ${url} `);
    }
    return { data };
  } catch (error) {
    if (process.env.DEBUG) {
      console.error(error);
    } else {
      console.clear();
    }
    return { error, message: '서버에서 예상치 못한 에러가 발생했습니다.' };
  }
};
