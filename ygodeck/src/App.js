import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./utils/theme";
import HomePage from "./pages/home";
import CardPage from "./pages/card";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },

    {
      path: "/CardDetail/:name",
      element: <CardPage />
    }
  ]);
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="primary.400"
        w="100%"
        minH="100vh"
        h="auto"
        p={4}
        color="primary.100"
      >
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
