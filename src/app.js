import '@styles/libs/reset.css';
import '@sass/app.scss';
import PageRouter from '@utils/pageRouter';
import { onLocationChangeHandler } from '@utils/changeLocation.js';
import { headerView } from '@components/headerView';

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('body');
    const mainHeader = headerView();
    const mainContents = document.createElement('div');
    const footer = document.createElement('footer');

    app.appendChild(mainHeader);
    app.appendChild(mainContents);
    app.appendChild(footer);

    const pageRouter = new PageRouter(mainContents);
    window.addEventListener('locationchange', (e) => onLocationChangeHandler(e, pageRouter));
    window.addEventListener('popstate', pageRouter.renderPage);

    pageRouter.renderPage();
});
