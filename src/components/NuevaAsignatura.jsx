import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NuevaAsignatura extends Component {
  nombreAsignaturaRef = React.createRef();
  nombreProfesorRef = React.createRef();

  state = {
    asignatura: {},
  };

  crearAsignatura = (e) => {
    e.preventDefault();

    var asignatura = {
      nombreAsignatura: this.nombreAsignaturaRef.current.value,
      nombreProfesor: this.nombreProfesorRef.current.value,
    };

    this.setState({
      asginatura: asignatura,
    });

    console.log(asignatura);
  };

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
                <label htmlFor="imagenAsignatura">Foto de la asignatura</label>
                <br />
                <input type="file" name="imagenAsignatura" />
              </div>
              <br />

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
