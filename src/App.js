import React from 'react';
import logo from './logo.svg';
import Div100vh from 'react-div-100vh';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dummy"/>
      <Div100vh style={{position: 'fixed', height: '100rvh', width: '100vw'}}>
        <div className="hlcall">
          <div className="incall">
            <div className="top">
              top
            </div>
            <div className="center">
              center
            </div>
            <div className="bottom">
              bottom
            </div>
          </div>
        </div>
      </Div100vh>
    </div>
  );
}

export default App;
