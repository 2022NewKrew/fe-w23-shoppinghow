import { Header, makeHeaderElement } from './component/header.js';
import { Container, makeContainerElement } from './component/container.js';
import './styles/app.css';
import './styles/libs/reset.css';
import { $ } from './utils/utils.js';

function App() {
    const header = new Header($('#header'));
    const container = new Container($('.container'));
    //makeHeaderElement($('#header'));
    //makeContainerElement($('.container'));
}

new App();