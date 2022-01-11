import { formatPrice } from '@utils/formatPrice.js';

export const priceTag = (price) => {
    const formattedPrice = formatPrice(price);
    const target = document.createElement('span');

    const render = () => {
        target.className = 'txt-price';
        target.innerHTML = `<strong>${formattedPrice}</strong>원`;
        return target;
    };

    return render();
};
