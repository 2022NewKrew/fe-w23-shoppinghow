import Header from "./components/Header";
import Main from "./components/main";
import "./styles/app.css";

function App($app) {
  const header = new Header({ $app });
  const main = new Main({ $app });
}

export default App;
