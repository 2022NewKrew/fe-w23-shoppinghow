import Header from "./components/header";
import Main from "./components/main";
import "src/sass/global.scss";
import Footer from "./components/footer";

function App($app) {
  new Header({ $app });
  new Main({ $app });
  new Footer({ $app });
}

export default App;
