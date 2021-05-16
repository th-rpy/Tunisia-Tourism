import React from "react";
import moment from "moment";

import { Card, CardGroup, Button } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import NavBar from "./NavBar";


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      hotels: [],
      error: null
    };
  }
  componentDidMount() {
    this.fetchHotelsWithFetchAPI();
    //this.timer = setInterval(() => this.fetchHotelsWithFetchAPI(), 5000);
  }
  handleError (i){
    try { // statements to try
      const img = i.result_object.photo.images.original.url;
      return img; // function could throw exception
    }
    catch (e) {
      return false
    }
  }
  handleErrorCat (i){
    try { // statements to try
      const cat = i.result_object.category.name;
      return cat; // function could throw exception
    }
    catch (e) {
      return false
    }
  }
  fetchHotelsWithFetchAPI = () => {
    const { location } = this.props;
    this.setState({ ...this.state, isFetching: true });
    const url = "https://travel-advisor.p.rapidapi.com/locations/search?query=" + location.state.gov.replace(/[0-9]/g, '') + "&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US"
    fetch(
      url,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "80931fe5ddmsh53d7fcecf915bb4p18ea7bjsna3109b19b574",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ hotels: result.data, isFetching: false });
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  render() {
    const { location } = this.props;
    return (
      <div className="summary">
        <NavBar></NavBar>
        <p style={{ fontSize: "18px" }}>
          You book a hotel from{" "}
          {moment(location.state.checkInDate).format("LL")} to{" "}
          {moment(location.state.checkOutDate).format("LL")} for{" "}
          {location.state.Guests} guests in {location.state.Rooms} rooms.
        </p>

        <CardGroup
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            left: "15%",
          }}
        >
          {this.state.hotels.map((i) => (
          <Card
            style={{
              position: "realtive",
              left: "5%",
              width: "900px",
              height: "240px",
              cursor: "pointer",
            }}
          >
            <Card.Img
              variant="right"
              style={{ width: "300px", height: "240px" }}
              src={this.handleError(i)==false?'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1f/e0/a6/exterior-view.jpg?w=1300&h=-1&s=1':this.handleError(i)}
            />
            <Card.Body>
              <Card.Title
                style={{
                  position: "absolute",
                  left: "35%",
                  bottom: "85%",
                  color: "blue",
                }}
              >
                {i.result_object.name}
              </Card.Title>
              <Card.Text
                style={{ position: "absolute", left: "35%", bottom: "65%" }}
              >
                {this.handleErrorCat(i) == false ? null:this.handleErrorCat(i) } ||{" "}
            {i.result_object.num_reviews} || {i.result_object.rating} ||{" "} <Button> View Deal</Button>
            <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={<i style = {{fontSize:'50px'}}className="far fa-star"></i>}
          starCount={5}
          value={i.result_object.rating}
        />
      
              </Card.Text>
            </Card.Body>
          </Card>))}
          
        </CardGroup>
        
      </div>
    );
  }
}

export default Booking;
