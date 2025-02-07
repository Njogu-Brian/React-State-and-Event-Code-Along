import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prevState) => !prevState);
  }

  const buttonColor = isOn ? "red" : "white";

  return (
    <button style={{ background: buttonColor }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
