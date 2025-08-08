import React from "react";

function Counter({ count, setCount, handleAdd }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => Math.max(prev - 1, 0))} style={{ margin: "0 10px" }}>-</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Counter;
