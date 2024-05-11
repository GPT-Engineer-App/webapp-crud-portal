import React from "react";
import { ChakraProvider, Container, VStack, Button, Text, Box } from "@chakra-ui/react";
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
  return (
    <Box p={4}>
      <Text fontSize="2xl">Main Page</Text>
      {/* Placeholder for CRUD operations */}
    </Box>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return <ChakraProvider>{isLoggedIn ? <MainPage /> : <LoginPage />}</ChakraProvider>;
};

export default App;
