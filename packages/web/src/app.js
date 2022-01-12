import Header from "./components/header";
import Main from "./components/main";
import "src/sass/global.scss";

function App($app) {
  new Header({ $app });
  new Main({ $app });
}

export default App;
