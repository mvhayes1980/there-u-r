import React from 'react';
const apikey = "fbUoNnxLwE9WA0X1z2Co1FQY9gCBJ91hKLtdKiQr";

export default class NASAFetch extends React.Component {
    // componentDidMount() {
    //     fetch(`https://api.nasa.gov/planetary/earth/imagery?lat=${39}&lon=${-86}&api_key=${apikey}`)
    //     .then(res => {console.log('pre-res', res);res.json()})
    //     .then(res => {
    //         console.log("res:", res)
    //         console.log(res.url);
    //     })
    // }

    render() {
        return(
            <div>
                <h3>Sattelite image @ lat: {this.props.lat}, lon: {this.props.lon}</h3>
                <img width={"100%"} src={`https://api.nasa.gov/planetary/earth/imagery?lat=${this.props.lat}&lon=${this.props.lon}&api_key=${apikey}`} alt=""/>
            </div>
        )
    }

}