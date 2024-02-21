import React, { useRef, useState } from "react";

const StartCounter = () => {
  const [value, setValue] = useState(0);
  const timerref = useRef();
  const startButtonRef = useRef();
  const stopButtonRef = useRef();
  const reStartButtonRef = useRef();

  const startCounting = () => {
    startButtonRef.current.style.color = "green";
    console.log("----->", startButtonRef);

    if (!timerref.current) {
      timerref.current = setInterval(() => {
        setValue((pre) => pre + 1);
      }, 1000);
    }
  };

  const stopCounting = () => {
    clearInterval(timerref.current);
    timerref.current = null;
  };
  const resetCounting = () => {
    clearInterval(timerref.current);
    timerref.current = null;
    timerref.current.style.color = "red";
    setValue(0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        <button onClick={startCounting}>Start</button>
        <button onClick={stopCounting} ref={startButtonRef}>
          stop
        </button>
        <h1 ref={startButtonRef}>{value}</h1>
        <button onClick={resetCounting}>reset</button>
      </div>
    </>
  );
};

export default StartCounter;
