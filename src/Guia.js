import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

// Componentes
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Asignaturas from './components/Asignaturas';
import Calificaciones from './components/Calificaciones';
import Calendario from './components/Calendario';
import NuevaAsignatura from './components/NuevaAsignatura';

class Guia extends Component {
    render() {
        return (
            <Router>
                <Header />
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/asignaturas' component={Asignaturas} />
                    <Route exact path='/calificaciones' component={Calificaciones} />
                    <Route exact path='/calendario' component={Calendario} />
                    <Route exact path='/nueva-asignatura' component={NuevaAsignatura} />

                    <Route component={Error} /> {/* Error: 404 */}
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </Router >
        )
    }
}

export default Guia;