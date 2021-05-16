import React from "react";
import moment from "moment";

import { Card, CardGroup, Button } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import NavBar from "./NavBar";
import { Header } from "semantic-ui-react";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      hotels: [],
      error: null,
    };
  }
  componentDidMount() {
    this.fetchHotelsWithFetchAPI();
    //this.timer = setInterval(() => this.fetchHotelsWithFetchAPI(), 5000);
  }
  handleError(i) {
    try {
      // statements to try
      const img = i.result_object.photo.images.original.url;
      return img; // function could throw exception
    } catch (e) {
      return false;
    }
  }
  handleErrorCat(i) {
    try {
      // statements to try
      const cat = i.result_object.category.name;
      return cat; // function could throw exception
    } catch (e) {
      return false;
    }
  }
  fetchHotelsWithFetchAPI = () => {
    const { location } = this.props;
    this.setState({ ...this.state, isFetching: true });
    const url =
      "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
      location.state.gov.replace(/[0-9]/g, "") +
      "&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "80931fe5ddmsh53d7fcecf915bb4p18ea7bjsna3109b19b574",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    })
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
        <Header as="h5">
          You book a hotel from{" "}
          {moment(location.state.checkInDate).format("LL")} to{" "}
          {moment(location.state.checkOutDate).format("LL")} for{" "}
          {location.state.Guests} guests in {location.state.Rooms} rooms.
        </Header>

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
                position: "relative",
                left: "5%",
                width: "700px",
                height: "180px",
                cursor: "pointer",
              }}
            >
              <Card.Img
                variant="right"
                style={{ width: "150px", height: "150px" }}
                src={
                  this.handleError(i) == false
                    ? "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1f/e0/a6/exterior-view.jpg?w=1300&h=-1&s=1"
                    : this.handleError(i)
                }
              />
              <Card.Body>
                <Card.Title
                  style={{
                    position: "absolute",
                    left: "22%",
                    bottom: "80%",
                    color: "blue",
                  }}
                >
                  {i.result_object.name} -{" "}
                  {this.handleErrorCat(i) == false
                    ? null
                    : this.handleErrorCat(i)}
                </Card.Title>
                <Card.Text
                  style={{ position: "absolute", left: "25%", bottom: "40%" }}
                ></Card.Text>
                <div
                  style={{
                    fontFamily:
                      '"Trip Sans VF", "Trip Sans", Arial, sans-serif',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "400",
                  }}
                >
                  <br></br>
                  <p
                    style={{
                      position: "absolute",
                      left: "40%",
                      bottom: "55%",
                    }}
                  >
                    {" "}
                    🙋‍♂️ {i.result_object.num_reviews + " reviews"}
                  </p>
                  <Rating
                    style={{
                      position: "absolute",
                      left: "22%",
                      bottom: "55%",
                    }}
                    value={i.result_object.rating}
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.2}
                    readOnly
                  />
                </div>
                <Button
                  style={{
                    position: "absolute",
                    left: "22%",
                    bottom: "25%",
                  }}
                >
                  {" "}
                  View Deal
                </Button>
              </Card.Body>

              <Card.Footer
                style={{
                  position: "absolute",
                  left: "0%",
                  bottom: "1%",
                }}
              >
                <large className="text-muted">
                  <strong>Address 💌 : </strong>{" "}
                  {i.result_object.address == undefined
                    ? location.state.gov.replace(/[0-9]/g, "")+' -Tunisia'
                    : i.result_object.address}
                </large>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Booking;
