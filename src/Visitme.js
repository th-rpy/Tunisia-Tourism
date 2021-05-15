import React from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
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
import InternalStateEx from "./PopOver";

function Visitme(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Input type="date" placeholder="Last name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Check Out</FormLabel>
              <Input type="date" placeholder="Last name" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Guests</FormLabel>
              <NumberInput size="sm" defaultValue={1} min={0}>
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
              <NumberInput size="sm" defaultValue={1} min={0}>
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
            <Link to="/">
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
