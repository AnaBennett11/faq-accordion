import "./styles/_global.scss";
import Card from "./Components/Card/Card";
import header from "../src/assets/header.svg";


function App() {
  return (
    <>
      <img
        className="headerBackground"
        src={header}
        alt="header background image"
      />
      <Card />
    </>
  );
}

export default App;
