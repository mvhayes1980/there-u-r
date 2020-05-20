import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup
  } from 'reactstrap';


export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state ={
            results: []
        }
    }

    componentDidMount(){
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.lat}&lon=${this.props.lon}`,
        {
            method: 'GET',
            "headers": {
                'Accept': 'application/json',
                'User-Key': '14e415d317a5e06fce75c04fa48c3e49'
            },
        })
        .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.nearby_restaurants){
                    this.setState({
                        results: json.nearby_restaurants
                })
                }
            })
        
    }

    resultsMap(){ 
        return(
            this.state.results.map(restaurant=>{
                return(
                    <CardGroup>
                        <Card>
                            <CardBody>
                            <CardTitle>{restaurant.restaurant.name}</CardTitle>
                            <CardSubtitle>{restaurant.restaurant.location.address}</CardSubtitle>
                            <CardText>{restaurant.restaurant.user_rating.aggregate_rating}</CardText>
                            <Button href={restaurant.restaurant.url}>Restaurant Website</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                )
            })
        )
    }

    render(){

        
        return(
            <div>
                <h1>Restaurants Near You:</h1>
                {this.state.results.length>0 ? this.resultsMap() : null}
            </div>
        )
    }
}