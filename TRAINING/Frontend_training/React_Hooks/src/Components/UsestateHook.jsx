import React, { useState } from "react";

const UsestateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState hook</h1>
      <h3>Count:{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count == 0) {
            return;
          } else setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default UsestateHook;
