const fetchData = async (reqURL) => {
    const response = await fetch(reqURL);
    const { data } = await response.json();
    return data;
};

export const getTop10Keywords = async () => {
    try {
        const data = await fetchData(`${SERVER_BASE_URL}/top10keywords`);
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getRisingKeywordProducts = async () => {
    try {
        const data = await fetchData(`${SERVER_BASE_URL}/rising_keyword_products`);
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getHotDealProducts = async () => {
    try {
        const data = await fetchData(`${SERVER_BASE_URL}/hotdeal_products`);
        return data;
    } catch (e) {
        console.error(e.message);
    }
};
