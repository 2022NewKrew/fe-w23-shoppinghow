import "./styles/libs/reset.css";
import "./sass/app.scss";
import PageRouter from "./util/pageRouter";
import { locationChangeEvent, onLocationChangeHandler } from "./util/changeLocation.js";


window.onload = () => {
    const app = document.querySelector("body");
    const pageRouter = new PageRouter(app);
    window.addEventListener("locationchange", (e) => onLocationChangeHandler(e, pageRouter));
    window.addEventListener("popstate", pageRouter.renderPage);

    app.innerHTML = "<div>this is app</div>"

    // 페이지 체인지 테스트용
    setTimeout(() => {
        console.log("after 2 seconds")
        window.dispatchEvent(locationChangeEvent("next", "level"))
    }, 2000);
}
