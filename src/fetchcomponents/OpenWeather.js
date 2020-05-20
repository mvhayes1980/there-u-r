import React from 'react';
import {
    Card, CardBody,
    CardTitle
  } from 'reactstrap';
  import Button from '@material-ui/core/Button';
const apikey = "a3c685a1935c2afcad5f1c36ad13b5f7";


export default class OpenWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            isCelsius: false
        }
    }
    
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${apikey}`)
            .then (response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    img: json.weather[0].icon,
                    temp: Math.round(((json.main.temp - 273.15) * (9/5)) + 32)

                })
                console.log(this.state.img)
        })
        }

        getTemp(){
            let temp;
            if (this.state.isCelsius) {
                temp = (this.state.temp - 32) * (5/9);
                temp = Math.round(temp);
                temp +="°C"
            } else {temp=this.state.temp + "°F"}
            return temp
        }

render() {
    return(
    <div>
        <h2>Your Current Weather:</h2>
        <div className="Cards">
            <Card className="weatherCard">
            <CardBody>
            <img src={`http://openweathermap.org/img/wn/${this.state.img}@2x.png`}/>
            <CardTitle><h3>Current Temperature {this.getTemp()}</h3></CardTitle>
            </CardBody>
            </Card>
        </div>
            <Button variant="contained" color="primary" size="large" onClick={() => {this.setState({isCelsius: !this.state.isCelsius})}}>Convert Temp</Button>
    </div>
    )
}}