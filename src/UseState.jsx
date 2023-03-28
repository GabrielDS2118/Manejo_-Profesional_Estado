import React, { useEffect, useState } from 'react';

const UseState = () => {
  const SECURITY_CODE = 'ultrasecreto';

  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const { loading, error, value, deleted, confirmed } = state;

  const onCheck = () => {
    setState({ ...state, error: false, loading: true });
  };

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
    // console.log(state);
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onDeleted = () => {
    setState({ ...state, confirmed: true, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, deleted: false, confirmed: false });
  };

  useEffect(() => {
    if (!!loading) {
      console.log('Iniciando comprobación');
      setTimeout(() => {
        if (value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
      console.log('Finalizando Comprobación');
    }
  }, [loading]);

  console.log({ confirmed, deleted });
  if (!deleted && !confirmed) {
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
            onWrite(e.target.value);
          }}
        />

        {loading && <p>Cargando ....</p>}
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (confirmed && !deleted) {
    return (
      <>
        <p>Estado de confirmacion, Quieres eliminar?</p>
        <button onClick={() => onDeleted()}>Sí</button>
        <button onClick={() => onReset()}>No</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button onClick={() => onReset()}>Restaurar</button>
      </>
    );
  }
};

export default UseState;
