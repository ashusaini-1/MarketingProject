import React, { useState } from "react";
import { Box, Center, Heading, Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { login } from "../../action/userAction";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const LoginForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  // const navigate = useNavigate();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const registerSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const myForm = new FormData();

      myForm.set("email", email);

      myForm.set("password", password);

      // Dispatch the register action directly
      await dispatch(login(myForm)); // Use dispatch here

      toast({
        title: "Login Successful",
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
    <Center h="100vh">
      <Box p={6} shadow="md" borderRadius="md" bg="white" w="300px">
        <Heading size="lg" mb={4}>
          Sign in to your account
        </Heading>
        <Input
          value={email}
          placeholder="Email or Phone"
          mb={4}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          mb={4}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={registerSubmit} colorScheme="blue" size="lg" w="full">
          Sign In
        </Button>
        <Center>
          <Box mt={5}>
            <GoogleOAuthProvider clientId="653562759220-bjopl3337f1lc0nvio2rfv8q8hjbi1ag.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decode = jwt_decode(credentialResponse.credential);
                  console.log(decode);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </Box>
        </Center>

        <Text mt={7} textAlign="center">
          New One?{" "}
          <Link to="/signup">
            <Text as="span" color="blue.500">
              Join now
            </Text>{" "}
          </Link>
        </Text>
      </Box>
    </Center>
  );
};

export default LoginForm;
