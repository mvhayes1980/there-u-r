import React from 'react';
const apikey = "a3c685a1935c2afcad5f1c36ad13b5f7";


export default class OpenWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }
    
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${apikey}`)
            .then (response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    img: json.weather[0].icon
                })
                console.log(this.state.img)
        })
        }

    
render() {
    return(
        <div>
              <img src={`http://openweathermap.org/img/wn/${this.state.img}@2x.png`}/>
        </div>
    )
}}