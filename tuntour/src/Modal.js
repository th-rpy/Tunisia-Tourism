import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalComponent extends Component {
  render() {
    const { modal } = this.props;
    return (
     
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.props.toggle}> Hello </ModalHeader>
          <ModalBody> <h1>Welcome There ... </h1> <h1>Welcome There ... </h1><h1>Welcome There ... </h1></ModalBody>
          <ModalFooter>
            <Button onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
  
    );
  }
}

export default ModalComponent;