export const $ = (query, parentNode = document) => {
    return parentNode.querySelector(query);
};
