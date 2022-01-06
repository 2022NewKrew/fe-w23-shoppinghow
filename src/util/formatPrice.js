export const formatPrice = (price) => {
    const priceNumber = parseInt(price);
    return priceNumber.toLocaleString();
};
