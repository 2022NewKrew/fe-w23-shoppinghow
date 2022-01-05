import { carousel } from '../../carousel/carousel';

export const planning = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'planning';
        const planningCarousel = carousel();
        planningCarousel.classList.add('planning__carousel');
        target.appendChild(planningCarousel);
        // target.innerHTML = `
        //     <a href="#" target="_blank" class="planning__link">
        //         <img src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct" width="485" height="340" class="img_g" alt="">
        //     </a>
        //     <button class="planning__left-btn"></button>
        //     <button class="planning__right-btn"></button>
        //     <div class="planning__paging">
        //         <span></span><span></span><span></span>
        //     </div>
        // `;

        return target;
    };

    return render();
};
