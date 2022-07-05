import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Productive from "./components/Productive/Productive";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ChakraProvider>
      <Hero />
      <Productive />
      <NewsLetter />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
