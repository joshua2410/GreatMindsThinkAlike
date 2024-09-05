import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Game from "../components/Game";

function App() {
  const gameTitle = "Great Minds Think Alike";
  return (
    <div className="App">
      <Header gameTitle={gameTitle} />
      <Game />
    </div>
  );
}

export default App;
