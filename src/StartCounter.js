import React, { useRef, useState } from "react";

const StartCounter = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const timerref = useRef();
  const startButtonRef = useRef();
  const stopButtonRef = useRef();
  const reStartButtonRef = useRef();

  const startCounting = () => {
    setTime(Date.now());
    setCurrentTime(Date.now());

    if (!timerref.current) {
      timerref.current = setInterval(() => {
        setCurrentTime(Date.now());
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

    setTime(null);
    setCurrentTime(null);
  };

  const timeDifference = currentTime - time;
  const minuteHand = Math.floor(timeDifference / (60 * 1000));
  const secondHand = Math.floor((timeDifference % (60 * 1000)) / 1000);
  const StopWatch = `${minuteHand}: ${secondHand}`;

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
        <h1 ref={startButtonRef}>{StopWatch}</h1>
        <button onClick={resetCounting}>reset</button>
      </div>
    </>
  );
};

export default StartCounter;
