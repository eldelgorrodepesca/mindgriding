import React, { Component } from 'react'

// COMPONENTES
import Slider from './Slider'
import Sidebar from './Sidebar'

export class Asignaturas extends Component {
    render() {
        return (
            <div id='blog'>
                <Slider
                    title='ASIGNATURAS'
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

export default Asignaturas