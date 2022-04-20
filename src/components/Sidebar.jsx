import React, { Component } from "react";
import LoginButton from "./LoginButton";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>¿Aún no te has registrado?</h3>
          <LoginButton />
        </div>
        
        <div id="search" className="sidebar-item">
          <h3>¿Alguna duda?</h3>
          <p>Contactamos contigo para solucionar cualquier problema.</p>
          <form action="">
            <input type="text" name="correo" />
            <input
              type="submit"
              name="submit"
              value="Contáctame"
              className="btn"
            />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
