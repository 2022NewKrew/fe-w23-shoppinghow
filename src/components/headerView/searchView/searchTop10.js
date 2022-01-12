import { verticalRolling } from '@components/verticalRolling';

export const searchTop10 = ({ top10Data }) => {
    const top10 = verticalRolling(top10Data);
    top10.classList.add('search-top10');
    return top10;
};
