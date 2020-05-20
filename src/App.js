import React, { Component } from 'react';
import './App.css';
import OpenWeather from './fetchcomponents/OpenWeather';
import Zomato from './components/zomato/zomatoResults';
import Navbar from './components/Navbar';
import NASAFetch from './components/nasa-fetch/NASAFetch';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        lat: null,
        lon: null
      }
  }
  componentWillMount() {
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log("look here");
        this.setState({
          lat: position.coords.latitude, 
          lon: position.coords.longitude
        });
      })
  }
  render(){
    return (
      this.state.lat != null ?
      <div className="App">
        <Navbar/>
        <OpenWeather lat={this.state.lat} lon={this.state.lon}/>
        <div style={{width: "400px"}}>
          <NASAFetch lat={this.state.lat} lon={this.state.lon}/>
        </div>
        <Zomato lat={this.state.lat} lon={this.state.lon}/>
      </div>
      : null
    );
  }
}