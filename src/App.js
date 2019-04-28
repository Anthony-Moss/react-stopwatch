import React from 'react';
import './App.css';
import ElapsedTime from "./ElapsedTime";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello There!</p>
          <h1>
            Click the buttons to use the Timer
          </h1>
          <div>
            <ElapsedTime seconds={0}/>
          </div>
        </header>
      </div>
    );
  }
}

  export default App;
