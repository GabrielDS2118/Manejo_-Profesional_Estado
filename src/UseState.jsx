import React, { useEffect, useState } from 'react';

const UseState = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!loading) {
      console.log('Iniciando comprobación');
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      console.log('Finalizando Comprobación');
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Código de seguridad</p>
      {error && <p>Error: el código es incorrecto</p>}
      <input type="text" placeholder="Código de Seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>

      {loading && <p>Cargando ....</p>}
      <button onClick={() => setLoading(!loading)}>Cargar</button>
    </div>
  );
};

export default UseState;
