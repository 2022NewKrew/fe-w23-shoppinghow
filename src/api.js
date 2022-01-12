const fetchData = async (reqURL) => {
    const response = await fetch(reqURL);
    const { data } = await response.json();
    return data;
};

export const getTop10Keywords = async () => {
    try {
        const data = await fetchData(`${SERVER_BASE_URL}/top10keywords`);
        console.log(data);
        return data;
    } catch (e) {
        console.error(e.message);
    }
};
