import css from '../scss/main.scss'
import InputWithTopRankingGoods from './Components/InputWithTopRankingGoods'


window.addEventListener("DOMContentLoaded", ()=> {
    const targetEl = document.querySelector(".header-top");
    const rollingText = new InputWithTopRankingGoods()
    
    targetEl.appendChild(rollingText.rootEl)
})