import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NuevaAsignatura extends Component {
  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1>Nueva Asignatura</h1>

            {/* FORMULARIO */}
            <form className="mid-form" onSubmit={this.crearAsignatura}>
              <div className="form-group">
                <label htmlFor="nombreAsignatura">Asignatura</label>
                <input
                  type="text"
                  name="nombreAsignatura"
                  ref={this.nombreAsignatura}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="nombreProfesor">Profesor</label>
                <input
                  type="text"
                  name="nombreProfesor"
                  ref={this.nombreProfesor}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="descripcionAsignatura">Descripción</label>
                <input
                  type="textarea"
                  name="descripcionAsignatura"
                  ref={this.descripcionAsignatura}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numeroTemas">Número de temas</label>
                <input
                  type="numb"
                  max="12"
                  name="numeroTemas"
                  ref={this.numeroTemas}
                  required
                />
              </div>

              <div className="clearfix"></div>

              <button className="btn btn-success">
                <NavLink to="/asignaturas">Crear</NavLink>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NuevaAsignatura;
