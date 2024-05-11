import React from "react";
import { ChakraProvider, Container, VStack, Button, Text, Box, ButtonGroup } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const handleLogin = () => {
    // Placeholder for login logic
    console.log("Login with Google");
  };

  return (
    <Container centerContent p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Login to Your App</Text>
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleLogin}>
          Sign in with Google
        </Button>
      </VStack>
    </Container>
  );
};

const MainPage = () => {
  const handleAdd = (item) => console.log(`Add ${item}`);
  const handleEdit = (item) => console.log(`Edit ${item}`);
  const handleDelete = (item) => console.log(`Delete ${item}`);

  return (
    <Box p={4}>
      <Text fontSize="2xl">Main Page - Manage Your Content</Text>
      <VStack spacing={4}>
        <Text fontSize="xl">Topics</Text>
        <ButtonGroup>
          <Button onClick={() => handleAdd("Topic")}>Add Topic</Button>
          <Button onClick={() => handleEdit("Topic")}>Edit Topic</Button>
          <Button onClick={() => handleDelete("Topic")}>Delete Topic</Button>
        </ButtonGroup>
        <Text fontSize="xl">Categories</Text>
        <ButtonGroup>
          <Button onClick={() => handleAdd("Category")}>Add Category</Button>
          <Button onClick={() => handleEdit("Category")}>Edit Category</Button>
          <Button onClick={() => handleDelete("Category")}>Delete Category</Button>
        </ButtonGroup>
        <Text fontSize="xl">Text Copies</Text>
        <ButtonGroup>
          <Button onClick={() => handleAdd("TextCopy")}>Add TextCopy</Button>
          <Button onClick={() => handleEdit("TextCopy")}>Edit TextCopy</Button>
          <Button onClick={() => handleDelete("TextCopy")}>Delete TextCopy</Button>
        </ButtonGroup>
        <Text fontSize="xl">Services</Text>
        <ButtonGroup>
          <Button onClick={() => handleAdd("Service")}>Add Service</Button>
          <Button onClick={() => handleEdit("Service")}>Edit Service</Button>
          <Button onClick={() => handleDelete("Service")}>Delete Service</Button>
        </ButtonGroup>
      </VStack>
    </Box>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return <ChakraProvider>{isLoggedIn ? <MainPage /> : <LoginPage />}</ChakraProvider>;
};

export default App;
