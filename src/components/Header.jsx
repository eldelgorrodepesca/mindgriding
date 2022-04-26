import React, { Component } from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/asignaturas" activeClassName="active">Asignaturas</NavLink>
              </li>
              <li>
                <NavLink to="/progreso" activeClassName="active">Progreso</NavLink>
              </li>
              <li>
                <NavLink to="/calendario" activeClassName="active">Calendario</NavLink>
              </li>
              <li>
                <NavLink to="/pruebas/Jorge/Carrillo" activeClassName="active">Iniciar Sesión</NavLink>
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
