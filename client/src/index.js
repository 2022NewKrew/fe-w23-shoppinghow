import { $ } from './utils/helper';
import Header from './components/header/header.js';
import './index.scss';

const $app = document.getElementById('app');
const header = new Header($app);
