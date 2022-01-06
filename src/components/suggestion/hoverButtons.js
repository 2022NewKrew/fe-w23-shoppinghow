export const hoverButtons = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'hover-buttons__container';

        target.innerHTML = `
            <button class="arrow-button">
                <div class="hover-buttons__arrow">&lt</div>
            </button>
            <button class="arrow-button">
                <div class="hover-buttons__arrow">&gt</div>
            </button>
        `;
        return target;
    };

    return render();
};
