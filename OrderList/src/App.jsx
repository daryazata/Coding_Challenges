import React from 'react';
import './App.css';
import Table from './components/Table';

const App = () => {
  return (
    <>
      <div className="app-title">
        <h1>Sorted Table App</h1>
      </div>
      <Table />
    </>
  );
};

export default App;
