import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Slider from "../components/Slider";

function App() {
  const gameTitle = "Great Minds Think Alike";
  return (
    <div className="App">
      <Header gameTitle={gameTitle} />
      <Slider />
    </div>
  );
}

export default App;
