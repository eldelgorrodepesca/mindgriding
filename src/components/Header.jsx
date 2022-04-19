import React, { Component } from "react";
import logo from "../assets/images/logo.jpg";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>MIND GRIDING</strong>
            </span>
          </div>

          {/* MENU HEADER */}
          <nav id="menu">
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

          {/* LIMPIAR FLOTADOS */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
