import React, { useState } from 'react';

const UseState = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Código de seguridad</p>
      {error && <p>Error: el código es incorrecto</p>}
      <input type="text" placeholder="Código de Seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
};

export default UseState;
