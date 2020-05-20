import React from 'react';
import './App.css';
import Zomato from './components/zomato/zomatoResults';

function App() {
  
  return (
    <div className="App">
      <Zomato lat={39.710812} lon={-86.359291}/>
    </div>
  );
}

export default App;
