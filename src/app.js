import './styles/libs/reset.css';
import './sass/app.scss';
import PageRouter from './util/pageRouter';
import { onLocationChangeHandler } from './util/changeLocation.js';
import { header } from './components/header.js';

window.onload = () => {
    const app = document.querySelector('body');
    const mainHeader = header();
    const mainContents = document.createElement('div');
    const footer = document.createElement('footer');

    app.appendChild(mainHeader);
    app.appendChild(mainContents);
    app.appendChild(footer);

    const pageRouter = new PageRouter(mainContents);
    window.addEventListener('locationchange', (e) => onLocationChangeHandler(e, pageRouter));
    window.addEventListener('popstate', pageRouter.renderPage);

    pageRouter.renderPage();
    // 페이지 체인지 테스트용
    // setTimeout(() => {
    //     console.log("after 2 seconds")
    //     window.dispatchEvent(locationChangeEvent("top", "level"))
    // }, 2000);
};
