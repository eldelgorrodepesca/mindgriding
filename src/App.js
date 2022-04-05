import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="title">MIND GRIDING</h1>
        <nav class="navigation">
          <ul>
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="asignaturas.html">Asignaturas</a>
            </li>
            <li>
              <a href="progreso.html">Progreso</a>
            </li>
            <li>
              <a href="calendario.html">Calendario</a>
            </li>
            <li>
              <a href="notas.html">Notas</a>
            </li>
            <li>
              <a href="login.html">Iniciar Sesión</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
