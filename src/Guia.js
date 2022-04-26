import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

// Componentes
//import MiComponente from './components/MiComponente'
//import Peliculas from './components/Peliculas'
//import Formulario from './components/Formulario';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
//import Blog from './components/Blog';

class Guia extends Component {
    render() {

        return (
            <Router>
                <Header />

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />

                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </Router >
        )
    }
}

export default Guia;