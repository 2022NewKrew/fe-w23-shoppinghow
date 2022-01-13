import { HeaderView } from './component/HeaderView.js';
import { Container } from './component/container.js';
import './styles/app.css';
import './styles/libs/reset.css';
import { $ } from './utils/utils.js';

function App() {
    const header = new HeaderView($('#header'));
    const container = new Container($('.container'));
}

new App();