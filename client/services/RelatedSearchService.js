const PROXY_URL = 'https://corsanywhere.herokuapp.com';
const GOOGLE_SEARCH_URL = `http://suggestqueries.google.com/complete/search?client=chrome&q=`;

/**
 * @param {string} keyword
 * @returns {string[]}
 */
export const suggest = async (keyword) => {
  const query = encodeURIComponent(keyword.replace(' ', '+'));

  try {
    const res = await fetch(`${PROXY_URL}/${GOOGLE_SEARCH_URL + query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    const data = await res.json();
    return data[1];
  } catch (e) {
    if (process.env.DEBUG) {
      console.error(e);
    }
    return [];
  }
};
