import { topPage } from '../components/pages/topPage';

export default class PageRouter {
    #app;
    constructor(app) {
        this.#app = app;
    }

    renderPage() {
        const { pathname } = window.location;
        this.#app.innerHTML = '';
        switch (pathname) {
            case '/top':
                this.#app.appendChild(topPage());
                break;
            default:
                this.#app.innerHTML = '<div>404</div>';
        }
    }
}
