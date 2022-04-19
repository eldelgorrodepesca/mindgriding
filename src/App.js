import React, { useState } from "react";
import "./assets/css/App.css";

// COMPONENTES
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Modal from "./components/Modal";

function App() {
  var btnString = "Comenzar";
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="App">
      <Header />
      <Modal active={active} toggle={toggle}>
        Formulario LogIn
      </Modal>
      <Slider title="Organízate ahora con Mindgriding" btn={btnString} />
      <div className="center">
      <br />
        <button className="btn btn-success" onClick={toggle}>Registrate ya</button>
        <Container />
        <Sidebar />
        <div className="clearfix"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
