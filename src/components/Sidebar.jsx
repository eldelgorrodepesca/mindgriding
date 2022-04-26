import React, { Component } from "react";
import LoginButton from "./LoginButton";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
                {this.props.blog == 'true' &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>¿Aun no te has registrado?</h3>
                        <LoginButton />
                    </div>
                }

                <div id="search" className="sidebar-item">
                    <h3>¿Tienes alguna duda?</h3>
                    <p>Contacta con nosotros para solucionar cualquier problema</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
    );
  }
}

export default Sidebar;
