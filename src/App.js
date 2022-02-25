import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
      <Provider>
        <Searchbar />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
