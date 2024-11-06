import React from 'react';
import Shop from './components/shop';
import './App.css';

// Definerer hovedkomponenten App, som indeholder strukturen for hele applikationen
function App() {
  return (
      // Returnerer en div med CSS-klassen "App" for den overordnede container
      <div className="App">
          {/* Header-sektionen af applikationen med "App-header" styling */}
          <header className="App-header">
              {/* Inkluderer Shop-komponenten i headeren, som viser butikkens varer og kurv */}
              <Shop />
          </header>
      </div>
  );
}

export default App;