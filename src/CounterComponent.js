import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount((c) => c + 1);

  const decrementCounter = () => setCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <div style={{ display: "flex", justifyItems: "center", margin: "0 auto" }}>
      <button
        onClick={incrementCounter}
        style={{ margin: "10px", padding: "10px" }}
      >
        Incremenet(+)
      </button>
      <h1 style={{ margin: "10px", padding: "10px" }}>{count}</h1>
      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={decrementCounter}
      >
        Decrement (-)
      </button>
    </div>
  );
};

export default CounterComponent;
