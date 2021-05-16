import React from "react";
import moment from "moment";

import { Card, CardGroup, Button } from "react-bootstrap";

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
      const img = i.result_object.photo.images.medium.url;
      return img; // function could throw exception
    }
    catch (e) {
      return false
    }
  }
  fetchHotelsWithFetchAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch(
      "https://travel-advisor.p.rapidapi.com/locations/search?query=sfax&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
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
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1f/e0/a6/exterior-view.jpg?w=1300&h=-1&s=1"
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
                Card title
              </Card.Title>
              <Card.Text
                style={{ position: "absolute", left: "35%", bottom: "65%" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. <Button> View Deal</Button>
              </Card.Text>
            </Card.Body>
          </Card>
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
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a0/18/31/exterior-view.jpg?w=1300&h=-1&s=1"
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
                Card title
              </Card.Title>
              <Card.Text
                style={{ position: "absolute", left: "35%", bottom: "65%" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {this.state.hotels.map((i) => (
          <div>
            {i.result_object.name}|| {i.result_object.name} ||{" "}
            {i.result_object.num_reviews} || {i.result_object.rating} ||{" "}
            {this.handleError(i)==false?null:this.handleError(i)}
          </div>
        ))}
      </div>
    );
  }
}

export default Booking;
