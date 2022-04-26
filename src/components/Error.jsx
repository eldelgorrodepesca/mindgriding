import React, { Component } from 'react'

export class Error extends Component {
    render() {
        return (
            <section id='content'>
                <h2 className='subheader'> Error 404: Página no encontrada</h2>
                <p>La página a la que intenta acceder no existe.</p>
            </section>
        )
    }
}

export default Error