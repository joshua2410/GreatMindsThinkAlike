import { useState } from "react";
import Slider from "../components/Slider";
const Game = () => {
  const [sliderGuess, setSliderGuess] = useState([]);
  return (
    <div>
      <Slider sliderGuess={sliderGuess} setSliderGuess={setSliderGuess} />
    </div>
  );
};

export default Game;
