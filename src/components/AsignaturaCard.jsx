import React, { Component } from "react";

class AsignaturaCard extends Component {
  render() {
    return (
      <div className="container">
        {/* CARTA */}
        <div className="card">
          {/* FONDO DE LA CARTA */}
          <div className="card-header">
            <div className="circle">
                <h4>Asignatura</h4>
            </div>
          </div>

          {/* ICONOS Y PROGRESO */}
          <div className="card-icons"></div>

          {/* INFORMACION */}
          <div className="card-content">
            <li className="info slide">Profesor</li>
            <li className="info slide">Temas</li>
            <li className="info slide">Profesor</li>
            <li className="info slide">Descripcion</li>
          </div>

          {/* BOTON PARA ENTRAR */}
          <div className="card-action">
            <button className="btn btn-success">Acceder</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AsignaturaCard;
