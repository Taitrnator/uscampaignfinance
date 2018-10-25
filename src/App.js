import React, { Component } from 'react';
import './App.css';
import UsMap from './components/UsMap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <article>
            <UsMap/>
          </article>
      </div>
    );
  }
}

export default App;
