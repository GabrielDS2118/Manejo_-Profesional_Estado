import React, { useEffect, useState } from 'react';

const UseState = () => {
  const SECURITY_CODE = 'ultrasecreto';

  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
  });

  const { loading, error, value } = state;
  // const [value, setValue] = useState('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!loading) {
      console.log('Iniciando comprobación');
      setTimeout(() => {
        if (value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
      }, 3000);
      console.log('Finalizando Comprobación');
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Código de seguridad</p>
      {error && <p>Error: el código es incorrecto</p>}
      <input
        type="text"
        placeholder="Código de Seguridad"
        value={value}
        onChange={(e) => {
          // setError(false);
          setState({
            ...state,
            value: e.target.value,
          });
        }}
      />

      {loading && <p>Cargando ....</p>}
      <button
        onClick={() => {
          setState({
            ...state,
            error: false,
            loading: true,
          });
        }}
      >
        Comprobar
      </button>
    </div>
  );
};

export default UseState;
