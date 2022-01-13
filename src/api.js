const fetchData = async (reqURL) => {
    try {
        const response = await fetch(reqURL);
        const { data } = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getTop10Keywords = async () => {
    const data = await fetchData(`${SERVER_BASE_URL}/top10keywords`);
    return data;
};

export const getRisingKeywordProducts = async () => {
    const data = await fetchData(`${SERVER_BASE_URL}/rising_keyword_products`);
    return data;
};

export const getHotDealProducts = async () => {
    const data = await fetchData(`${SERVER_BASE_URL}/hotdeal_products`);
    return data;
};
