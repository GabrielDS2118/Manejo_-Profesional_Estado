import React, { useEffect, useReducer } from 'react';

const UseReducer = () => {

  
  const SECURITY_CODE = 'ultrasecreto';
  const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  };

  const reduceObject = (state, payload) => ({
    'CHECK': {
      ...state,
      error: false,
      loading: true,
    },
    'ERROR': {
      ...state,
      error: true,
      loading: false,
    },

    'CONFIRM': {
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    },

    'WRITE': {
      ...state,
      value: payload,
    },

    'DELETE': {
      ...state,
      deleted: true
    },

    'RESET': {
      ...state,
      confirmed: false,
      deleted: false
    }
  });

  const reducer = (state, action) => {
    console.log(action);
   
    if (reduceObject(state)[action.type]) {
      console.log('aca');
      return reduceObject(state, action.payload)[action.type];
    } else {
      console.log('here');
      return {
        ...state,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
 
 

  useEffect(() => {
    console.log('');

    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          console.log('Correcto')
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' });
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.confirmed && !state.deleted) {
    return (
      <>
        <h1>useReducer</h1>
        <input
          type="text"
          placeholder="Código de seguridad"
          // value={value}
          onChange={(e) => {
            dispatch({ type: 'WRITE', payload: e.target.value });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'CHECK' });
          }}
        >
          Comprobar
        </button>
        {state.loading && <p>Cargando ....</p>}
        {state.error && <p>Código incorrecto</p>}
      </>
    );
  } else if (state.confirmed && !state.deleted) {

    return ( <>
      <h1>Confirmación</h1>
      <p>Desea eliminar?</p>
      <button
        onClick={() => {
          dispatch({ type: 'DELETE' });
        }}
      >
        Sí
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RESET' });
        }}
      >
        No
      </button>
    </>);
   
  } 
  else {

    return(<>
      <p>Eliminado exitomente</p>
      <button onClick={() => dispatch({ type: 'RESET' })}>Restaurar</button>
    </>);
    
  }
};

export default UseReducer;
