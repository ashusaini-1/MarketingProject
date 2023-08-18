import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      py="4"
      textAlign="center"
      position="absolute"
      width="100%"
    >
      <Text fontSize="lg">Connect with us:</Text>
      <Box mt="2">
        <Link color="white" mx="2">
          Facebook
        </Link>
        <Link color="white" mx="2">
          Twitter
        </Link>
        <Link color="white" mx="2">
          Instagram
        </Link>
      </Box>
      <Text mt="4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
