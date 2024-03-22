import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
        <MainSection />
      </header>
    </div>
  );
}

export default App;
