import React from 'react';

import UseState from './UseState';
import UseReducer from './useReducer';

import { ClassState } from './ClassState';

import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState name="Class State" />
      <UseReducer />
    </div>
  );
}

export default App;
