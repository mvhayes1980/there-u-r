import React from 'react';
import './App.css';
import Zomato from './components/zomato/zomatoResults';
import Navbar from './components/Navbar';
import NASAFetch from './components/nasa-fetch/NASAFetch';


export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        lat: 0,
        lon: 0
      }
  }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
      })
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Zomato lat={this.state.lat} lon={this.state.lon}/>
        <div style={{width: "400px"}}>
        <NASAFetch lat={this.state.lat} lon={this.state.lon}/>
        </div>
      </div>
    );
  }
}
