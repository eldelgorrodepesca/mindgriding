import React, { Component } from 'react'

// COMPONENTES
import Slider from './Slider'
import Sidebar from './Sidebar'

export class Calificaciones extends Component {
    render() {
        return (
            <div id='blog'>
                <Slider
                    title='CALIFICACIONES'
                    size='slider-small'
                />

                <div className='center'>
                    <div id='content'>
                        {/* Logica para creacion de asignaturas */}
                    </div>
                    <Sidebar
                        blog='false'
                    />
                </div>
            </div>
        )
    }
}

export default Calificaciones