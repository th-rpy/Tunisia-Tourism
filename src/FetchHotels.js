import React from "react";
import moment from "moment";

import {
  Card,
  CardGroup,
  Button,
} from "react-bootstrap";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
      </div>
    );
  }
}

export default Booking;
