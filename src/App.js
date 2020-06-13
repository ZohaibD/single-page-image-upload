import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import MultipleImage from './MultipleImage'
function App() {
 return (
    <div className="App">
      <header className="App-header">
        <MultipleImage />
      </header>
    </div>
  );

}



export default App;
