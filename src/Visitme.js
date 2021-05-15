import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";


import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
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
  } from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"


function Visitme() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <ChakraProvider>
          <Link to="/">
          <Button
            ml={4} ref={finalRef}
            colorScheme="teal" variant="solid"
            style={{ position: "absolute", top: "90%", right: "50%" }}
          >
            Back To Map
          </Button>
          <strong style={{ position: "absolute", top: "91%", right: "44%" }}>
            {" "}
            Or{" "}
          </strong>
          
        </Link>
        <Button
            colorScheme="teal" variant="solid"
            style={{ position: "absolute", top: "90%", right: "32%" }}
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
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    )
}

export default Visitme;
