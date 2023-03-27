import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'ultrasecreto';
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Código de seguridad</p>
        {this.state.error && <p>Error: el código es incorrecto</p>}
        <input
          type="text"
          placeholder="Código de Seguridad"
          // value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />

        {this.state.loading && <Loading />}
        <button
          onClick={() => {
            this.setState({ error: false, loading: true });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
