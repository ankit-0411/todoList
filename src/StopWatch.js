import React, { useRef, useState } from "react";

const StartCounter = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const timerRef = useRef();

  const startCounting = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
  };

  const stopCounting = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetCounting = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;

    setStartTime(null);
    setNow(null);
  };

  let timeElapsed = null;
  if (startTime && now) {
    const timeDifference = now - startTime;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    timeElapsed = `${minutes} min ${seconds} sec`;
  }

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
        <button onClick={stopCounting}>Stop</button>
        <h1>{timeElapsed ? timeElapsed : 0}</h1>
        <button onClick={resetCounting}>Reset</button>
      </div>
    </>
  );
};

export default StartCounter;
