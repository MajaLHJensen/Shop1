import React from 'react';
import Shop from './components/shop';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

import Clothes from './components/shopItems';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Shop />
          </header>
      </div>
  );
}

export default App;
