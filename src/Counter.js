import React, { useState } from "react";
import Title from "./Title";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title count={count}/>
      <h2>Current num is <u>{count}</u></h2>

      <button onClick={() => setCount(count + 1)}>UP!!!</button>
      <button onClick={() => setCount(count - 1)}>DOWN!!</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;