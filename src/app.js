import "@style/app.scss";
import Header from "@components/Header";
import Contents from "@components/Contents";

const App = () => {
  const $body = document.querySelector("body");

  new Header($body);
  new Contents($body);
};

App();
