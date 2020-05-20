import React, { Component } from 'react';
import './App.css';
import OpenWeather from './fetchcomponents/OpenWeather';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 0,
      lon: 0
    }
  }



  // componentWillMount(){
  //   console.log('I am about to say hello!')
  // }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is : ", position.coords.latitude)
      console.log("Longitude is : ", position.coords.longitude)
      this.setState({lat: position.coords.latitude, lon: position.coords.longitude})
    });

  }


  render() {
    return(
      <div>
        <h1>Weather</h1>
        <OpenWeather lat={this.state.lat} lon={this.state.lon}/>
      </div>
    )
  }
}