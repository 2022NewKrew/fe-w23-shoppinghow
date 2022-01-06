import { makeHeaderElement } from './component/header.js';
import { makeContainerElement } from './component/container.js';
import './styles/app.css';
import './styles/libs/reset.css';
import { $ } from './utils/utils.js';

async function App() {
    makeHeaderElement($('#header'));
    makeContainerElement($('.container'));
}

App();