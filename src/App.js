import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
