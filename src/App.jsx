import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaList from "./components/PizzaList";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <PizzaList />
      <Footer />
    </div>
  );
}

export default App;
