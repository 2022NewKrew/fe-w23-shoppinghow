export const rankKeyword = ({ title, rank }) => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'rank-keyword';
        target.innerHTML = `
        <span class="rank-keyword__numbering">${rank}</span>
        <div>${title}</div>
        `;
        return target;
    };

    return render();
};
