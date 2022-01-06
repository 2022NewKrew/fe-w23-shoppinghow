export default class PageRouter {
    #app;
    constructor(app) {
        this.#app = app;
    }

    renderPage() {
        console.log("renderPage 실행")
        const { pathname } = window.location;
        switch (pathname) {
            case "/top":
                this.#app.innerHTML = "<div> some Contents </div>";
                break;
            default:
                this.#app.innerHTML = "<div>404</div>"
        }
    }
}