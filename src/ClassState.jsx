import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('actualizacion');

    if (!!this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Código de seguridad</p>
        {this.state.error && <p>Error: el código es incorrecto</p>}
        <input type="text" placeholder="Código de Seguridad" />
        <button onClick={() => this.setState({ error: !this.state.error })}>
          Comprobar
        </button>

        {this.state.loading && <Loading />}
        <button onClick={() => this.setState({ loading: true })}>Cargar</button>
      </div>
    );
  }
}

export { ClassState };
