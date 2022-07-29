import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyWord="snow" />
        </main>
        <footer className="App-footer">
          <small>
            Open-source{" "}
            <a
              href="https://github.com/Kaytay418/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              code
            </a>{" "}
            by{" "}
            <a
              href="https://www.katie-latham.com"
              target="_blank"
              rel="noreferrer"
            >
              Katie Latham
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
