export const best = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'best';
        target.innerHTML = `
            <a href="#" class="best__link">
                <img src="//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC" width="485" height="340" class="img_g" alt="기획전 이벤트">
            </a>
        `;

        return target;
    };

    return render();
};
