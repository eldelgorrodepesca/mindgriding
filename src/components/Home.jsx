import React, { Component } from 'react'

// Componentes
import Container from './Container';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div id='home'>

                <Slider
                    title='Bienvenido al curso de React con @eldelgorrodepesca'
                    btn='Ir al Blog'
                    size='slider-big'
                />

                <div className="center">
                    <div id='content'>
                        <Container />
                    </div>
                    <Sidebar
                        blog='true'
                    />
                </div>
            </div>
        )
    }
}

export default Home;