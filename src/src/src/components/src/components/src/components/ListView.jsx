import React from "react";

function ListView({ list }) {
  if (list.length === 0) return <p>No numbers added yet.</p>;

  const max = Math.max(...list);
  const min = Math.min(...list);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {list.map((num, index) => (
        <li key={index} style={{
          fontWeight: num === max ? "bold" : num === min ? "bold" : "normal",
          color: num === max ? "green" : num === min ? "red" : "black"
        }}>
          {num}
        </li>
      ))}
    </ul>
  );
}

export default ListView;
