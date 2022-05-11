import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <figure className="card">
        <h1>Asignatura</h1>
        <img
          className="card-img"
          src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="card-image"
        />
        <figcaption className="card-info">
          <h3 className="card-title">MÁS INFORMACION</h3>
          <div className="card-bio">
            <p>Profesor: </p>
            <p>Unidades: </p>
            <p>Progreso: </p>
          </div>
          <button className="btn btn-success">Acceder</button>
        </figcaption>
      </figure>
    );
  }
}

export default Card;
