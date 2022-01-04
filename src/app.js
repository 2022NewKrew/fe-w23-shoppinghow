import { headerSearchComponent } from './component/searchComponent.js';
import './styles/app.css';
import './styles/libs/reset.css';

function App() {
    document.querySelector('.header-top').innerHTML = headerSearchComponent(
        {
            rankList: [
                {text: '1. 육수팩'},
                {text: '2. 비데'},
                {text: '3. 아디다스 런닝화'},
                {text: '4. led마스크'},
            ]
        }
    )
}

App();