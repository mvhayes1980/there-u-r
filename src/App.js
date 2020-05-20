import React from 'react';
import './App.css';
import Zomato from './components/zomato/zomatoResults';

function App() {
  
  return (
    <div className="App">
      <Zomato lat={39} lon={86}/>
    </div>
  );
}

export default App;
