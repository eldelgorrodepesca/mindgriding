import React, { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  // Añadimos al div del portal un hijo el cual hemos creado arrriba en el constructor
  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  // Añadimos al div del portal un hijo el cual hemos creado arrriba en el constructor
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props; // Children es el contenido que ira en el componente

    return ReactDOM.createPortal(children, this.el); // Devolvemos el portal que contendra el contenido
  }
}
