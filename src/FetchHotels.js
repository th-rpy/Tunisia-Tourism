/* eslint-disable eqeqeq */
import React from "react";
import moment from "moment";

import { Card, CardGroup, Button, Form } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import NavBar from "./NavBar";
import { Header } from "semantic-ui-react";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
      hotels: [],
      places: [],
      arr: ["Hotels:20%", "Restaurants & Places:72%"],
      error: null,
    };
  }
  componentDidMount() {
    this.fetchHotelsWithFetchAPI();
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
        "x-rapidapi-key": "01f0719166mshaa22357b3c03f5bp195790jsnd4fcb6a1277b",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result.data, isFetching: false });
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  render() {
    const { location } = this.props;
    const hotels = [];
    const places = [];
    this.state.data.map((i) => {
      if (i.result_object.category.name == "Hotel") {
        hotels.push(i);
      } else {
        places.push(i);
      }
    });
    return (
      <div className="summary">
        <NavBar></NavBar>
        <Header as="h5" style={{ position: "relative", left: "23%" }}>
          Places to visit in {location.state.gov} from{" "}
          {moment(location.state.checkInDate).format("LL")} to{" "}
          {moment(location.state.checkOutDate).format("LL")} for{" "}
          {location.state.Guests} guests in {location.state.Rooms} rooms.
        </Header>
        {this.state.arr.map((i) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              left: i.split(":")[1],
              top: "20%",
            }}
          >
            <Button>{i.split(":")[0]}</Button>
          </div>
        ))}
        <CardGroup
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "0%",
            top: "30%",
          }}
        >
          {hotels.map((i) => (
            <Card
              style={{
                position: "relative",
                left: "5%",
                width: "600px",
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
                    left: "28%",
                    bottom: "79%",
                    color: "blue",
                    fontSize: "16px",
                  }}
                >
                  {i.result_object.name} -{" "}
                  {this.handleErrorCat(i) == false
                    ? null
                    : this.handleErrorCat(i)}
                </Card.Title>
                <Card.Text
                  style={{ position: "absolute", left: "33%", bottom: "40%" }}
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
                      left: "52%",
                      bottom: "55%",
                    }}
                  >
                    {" "}
                    🙋‍♂️ {i.result_object.num_reviews + " reviews"}
                  </p>
                  <Rating
                    style={{
                      position: "absolute",
                      left: "28%",
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
                    left: "28%",
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
                <small className="text-muted">
                  <strong>Address 💌 : </strong>{" "}
                  {i.result_object.address == undefined
                    ? location.state.gov.replace(/[0-9]/g, "") + " -Tunisia"
                    : i.result_object.address}
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>

        <CardGroup
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "57%",
            top: "30%",
          }}
        >
          {places.map((i) => (
            <Card
              style={{
                position: "relative",
                left: "5%",
                width: "600px",
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
                    left: "28%",
                    bottom: "76%",
                    color: "blue",
                    fontSize: "16px",
                  }}
                >
                  {i.result_object.name} -{" "}
                  {this.handleErrorCat(i) == false
                    ? null
                    : this.handleErrorCat(i)}
                </Card.Title>
                <Card.Text
                  style={{ position: "absolute", left: "33%", bottom: "40%" }}
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
                      left: "52%",
                      bottom: "55%",
                    }}
                  >
                    {" "}
                    🙋‍♂️ {i.result_object.num_reviews + " reviews"}
                  </p>
                  <Rating
                    style={{
                      position: "absolute",
                      left: "28%",
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
                    left: "28%",
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
                <small className="text-muted">
                  <strong>Address 💌 : </strong>{" "}
                  {i.result_object.address == undefined
                    ? location.state.gov.replace(/[0-9]/g, "") + " -Tunisia"
                    : i.result_object.address}
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Booking;
