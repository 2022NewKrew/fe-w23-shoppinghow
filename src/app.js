import Header from "@components/Header";
import Main from "@components/Main";

export default class App {
    constructor(target) {
        this.target = target;
    }

    render() {
        const header = new Header(this.target);
        const main = new Main(this.target);
        // const footer = new Footer($app);
        
        header.render();
        main.render();
    }
    
}
