// SignUpForm.js
import React, { useState } from "react";
import { Input, Box, Center, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { register } from "../../action/userAction";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState(); // Initialize with an empty string
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const registerSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const myForm = new FormData();
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("number", number);
      myForm.set("password", password);

     
      // Dispatch the register action directly
    await dispatch(register(myForm)); // Use dispatch here

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //  navigate("/");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <Center h="80vh">
      <Box p={6} shadow="md" borderRadius="md" bg="white" w="300px">
        <Heading size="lg" mb={4}>
          Create Account
        </Heading>
       
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            mb={4}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            mb={4}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="number"
            name="number"
            value={number}
            placeholder="Number"
            mb={4}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            mb={4}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="confirmPassword"
            mb={4}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <Button onClick={registerSubmit}  colorScheme="blue" size="lg" w="full">
            Sign Up
          </Button>
      
        <Text mt={4} textAlign="center">
          New One?{" "}
          <Link to="/login">
            <Text as="span" color="blue.500">
              Join now
            </Text>{" "}
          </Link>
        </Text>
      </Box>
    </Center>
  );
};

export default SignUpForm;
