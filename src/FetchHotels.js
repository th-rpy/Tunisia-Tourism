import React from "react";
import moment from "moment";

import { Card, CardColumns, CardDeck, CardGroup } from "react-bootstrap";


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

        <CardDeck >
          <Card style={{ width: '30%' , position: 'realtive' , left: '5%'}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style ={{ width: '30%' , position: 'realtive' , left: '5%'}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Booking;
