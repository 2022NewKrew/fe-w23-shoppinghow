export const themeItem = ({ title, imgSrc, description, icon }) => {
    const target = document.createElement('li');

    const render = () => {
        target.className = 'theme-item';
        target.innerHTML = `
            <a href="#" class="theme__link">
                <span class="theme-item__info">
                    <img src=${imgSrc} width="200" height="200" class="img_top" alt=${title}>
                </span>
                <strong class="theme-item__title">${title}</strong>
                <span class="theme-item__desc">${description}</span><span class="theme-item__icon">${icon}</span>
            </a>
        `;

        return target;
    };

    return render();
};
