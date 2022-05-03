import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// COMPONENTES
import Slider from './Slider'
import Sidebar from './Sidebar'
import AsignaturaCard from './AsignaturaCard';

class Asignaturas extends Component {

    nombreAsignatura = React.createRef
    nombreProfesor = React.createRef
    numeroTemas = React.createRef

    state = {
        asignatura: {}
    }

    crearAsignatua = (e) => {
        e.preventDefautl()

        var asignatura = {
            nombreAsignatura: this.nombreAsignatura.current.value,
            nombreProfesor: this.nombreProfesor.current.value,
            numeroTemas: this.numeroTemas.current.value
        }

        this.state({
            asignatura: asignatura
        })

        console.log(asignatura);
    } 

    render() {
        return (
            <div id='blog'>
                <Slider
                    title='ASIGNATURAS'
                    size='slider-small'
                />

                <div className='center'>
                    <div id='content'>
                    <button>
                        <NavLink to="/nueva-asignatura">Nueva Asignatura</NavLink>
                    </button>
                        {/* Logica para creacion de asignaturas */}
                        <AsignaturaCard />
                        <AsignaturaCard />
                        <AsignaturaCard />
                    </div>
                    <Sidebar
                        blog='false'
                    />
                </div>
            </div>
        )
    }
}

export default Asignaturas