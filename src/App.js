import "./App.css";
import Home from "./components/Home";
import InfoList from "./components/InfoList";

function App() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <Home />
        <InfoList />
      </div>
    </section>
  );
}

export default App;
