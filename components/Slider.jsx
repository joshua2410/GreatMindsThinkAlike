import { useState } from "react";
const Slider = () => {
  const [sliderInput, setSlider] = useState();
  function handleSliderSubmit(e) {
    e.preventDefault();
    setSlider([...]);
  }
  return (
    <form
      onSubmit={(e) => {
        
        handleSliderSubmit(e);
      }}
    >
      <input type="range" name="gameslider" max={180}></input>
      <button type="submit"></button>
    </form>
  );
};

export default Slider;
