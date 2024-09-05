import { useState } from "react";

const Slider = ({ setSliderGuess, sliderGuess }) => {
  const [sliderInput, setSliderInput] = useState("");
  function handleSliderSubmit(e) {
    e.preventDefault();
    setSliderGuess([...sliderGuess, sliderInput]);
    setSliderInput("");
  }
  console.log(sliderInput, sliderGuess);
  const handleSliderChange = (event) => {
    setSliderInput(event.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSliderSubmit(e);
      }}
    >
      <input
        onChange={(e) => {
          handleSliderChange(e);
        }}
        type="range"
        name="gameslider"
        max={180}
      ></input>
      <button type="submit">{sliderInput}</button>
    </form>
  );
};

export default Slider;
