const renderIndicator = (dataCount) => {
    const target = document.createElement('div');
    target.className = 'console__indicator';
    for (let i = 0; i < dataCount; i++) {
        const button = document.createElement('button');
        button.className = 'console__indicator--button';
        target.appendChild(button);
    }
    return target;
};

const renderConsole = (dataCount) => {
    const target = document.createElement('div');
    target.className = 'console__container';
    target.innerHTML = `
        <button>
            <div class="console__arrow">&lt</div>
        </button>
        <button>
            <div class="console__arrow">&gt</div>
        </button>
    `;
    target.insertBefore(renderIndicator(dataCount), target.lastElementChild);

    return target;
};

export const consoleButtons = ({ dataCount }) => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'console';
        target.appendChild(renderConsole(dataCount));
        return target;
    };

    return render();
};
