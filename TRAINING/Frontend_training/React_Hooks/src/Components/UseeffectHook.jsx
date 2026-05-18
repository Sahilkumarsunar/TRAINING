import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  console.log("👉 Component Rendered");

  // keep ref updated with latest count
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // run timer ONLY once
  useEffect(() => {
    console.log("✅ Timer started once");
let time=0
    const timer = setInterval(() => {
     console.log(time)
     time++
      console.log("Running... Count =", countRef.current);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("❌ Timer cleared");
    };
  }, []); // 👈 runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Optimized useEffect</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase Count
      </button>
    </div>
  );
}