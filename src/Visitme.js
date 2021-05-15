import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function Visitme(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [Guests, setGuests] = useState(1);
  const [Rooms, setRooms] = useState(1);

  //handle Rooms number changes
  const handleRooms = (room) => {
    setRooms(room);
  };

  //handle Guests number changes
  const handleGuests = (guest) => {
    setGuests(guest);
  };

  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <ChakraProvider>
      <Text
        style={{ position: "absolute", bottom: "95%", right: "46%" }}
        fontSize="20px"
        color="gray.800"
        isTruncated
      >
        <strong>
          {" "}
          I <span style={{ color: "red" }}> ❤ </span> {props.dataState}{" "}
        </strong>
      </Text>{" "}
      <Link to="/">
        <Button
          ml={4}
          ref={finalRef}
          colorScheme="teal"
          variant="solid"
          style={{ position: "absolute", bottom: "95%", right: "54%" }}
        >
          Back To Map
        </Button>
      </Link>
      <Button
        colorScheme="teal"
        variant="solid"
        style={{ position: "absolute", bottom: "95%", right: "36%" }}
        onClick={onOpen}
      >
        Book Hotels
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            {props.dataState} - Hotels and Places to Stay{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Check In</FormLabel>
              <DatePicker
                selected={checkInDate}
                minDate={new Date()}
                onChange={handleCheckInDate}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Check Out</FormLabel>
              <DatePicker
                selected={!checkOutDate ? checkInDate : checkOutDate}
                minDate={checkInDate}
                onChange={handleCheckOutDate}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Guests</FormLabel>
              <NumberInput
                size="sm"
                onChange={handleGuests}
                value={Guests}
                style={{ width: "50%" }}
              >
                <NumberInputField focusBorderColor="red.200" />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    bg="green.200"
                    _active={{ bg: "green.300" }}
                    children="+"
                  />
                  <NumberDecrementStepper
                    bg="pink.200"
                    _active={{ bg: "pink.300" }}
                    children="-"
                  />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Rooms</FormLabel>
              <NumberInput
                size="sm"
                onChange={handleRooms}
                value={Rooms}
                style={{ width: "50%" }}
              >
                <NumberInputField focusBorderColor="red.200" />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    bg="green.200"
                    _active={{ bg: "green.300" }}
                    children="+"
                  />
                  <NumberDecrementStepper
                    bg="pink.200"
                    _active={{ bg: "pink.300" }}
                    children="-"
                  />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Link
              to={{
                pathname: "/booking",
                state: { checkInDate, checkOutDate, Guests, Rooms },
              }}
            >
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
            </Link>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default Visitme;
