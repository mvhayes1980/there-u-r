import React from 'react';
import './App.css';
// import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
import NASAFetch from './components/nasa-fetch/NASAFetch';


function App() {
  return (
    <div className="App">
      <div style={{width: "400px"}}>
      <NASAFetch lat={39} lon={-100}/>

      </div>
    </div>
  );
}

export default App;
