import React from "react";
import { Box, Center, Heading, Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const LoginForm=()=> {
    return (
        <Center h="80vh">
        <Box p={6} shadow="md" borderRadius="md" bg="white" w="300px">
          <Heading size="lg" mb={4}>
            Sign in to your account
          </Heading>
          <Input placeholder="Email or Phone" mb={4} />
          <Input type="password" placeholder="Password" mb={4} />
          <Button colorScheme="blue" size="lg" w="full">
            Sign In
          </Button>
          <Text mt={4} textAlign="center">
            New One? <Link to='/signup'><Text as="span" color="blue.500">Join now</Text>  </Link>
          </Text>
        </Box>
      </Center>
      );
}

export default LoginForm;
