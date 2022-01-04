export const stallTitle = ({ title }) => {
    const target = document.createElement('h2');

    const render = () => {
        target.className = 'section-title';
        target.innerHTML = title;
        return target;
    };

    return render();
};
