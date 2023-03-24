import React from 'react';

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Código de seguridad</p>
        <input type="text" placeholder="Código de Seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
