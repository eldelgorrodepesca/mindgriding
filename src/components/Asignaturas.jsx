import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// COMPONENTES
import Slider from './Slider'
import Sidebar from './Sidebar'
import Card from './Card';

class Asignaturas extends Component {

    nombreAsignatura = React.createRef
    nombreProfesor = React.createRef

    state = {
        asignatura: {}
    }

    crearAsignatua = (e) => {
        e.preventDefautl()

        var asignatura = {
            nombreAsignatura: this.nombreAsignatura.current.value,
            nombreProfesor: this.nombreProfesor.current.value
        }

        this.state({
            asignatura: asignatura
        })

        console.log(asignatura);
    } 

    render() {
        return (
          <div id="blog">
            <Slider title="ASIGNATURAS" size="slider-small" />
    
            <div className="center">
              <div id="content">
                {/* Logica para creacion de asignaturas */}
                <div className="card-container">
                  <Card />
                  <Card />
                  <Card />
                </div>
    
                <button className="btn btn-success">
                  <NavLink to="/nueva-asignatura">+ Asignatura</NavLink>
                </button>
              </div>
    
              <Sidebar blog="false" />
            </div>
          </div>
        );
      }
    }
    
    export default Asignaturas;