import css from '../scss/main.scss'
import RollingText from './RollingText'


window.addEventListener("DOMContentLoaded", ()=> {
    const targetEl = document.querySelector(".search");
    const rollingText = new RollingText(['스노우보드', '비데', 'led마스크', '런닝머신', '단백질보충제'], 4000)
    
    targetEl.appendChild(rollingText.rootEl)
})