import React from 'react';
import './App.css';
import ElapsedTime from "./ElapsedTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello There!</p>
        <div>
          <ElapsedTime />
        </div>
      </header>
    </div>
  );
}

export default App;
