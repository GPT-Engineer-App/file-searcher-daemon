import React from "react";
import { Box, Text, Button, Image, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to Our Company
      </Text>
      <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTQyMzM4MjR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" boxSize="150px" />
      <Button rightIcon={<FaSearch />} colorScheme="blue" variant="solid">
        Search
      </Button>
    </VStack>
  );
};

export default Index;
