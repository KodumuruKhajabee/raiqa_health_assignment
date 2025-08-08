import React, { useState } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [asc, setAsc] = useState(true);

  const handleAdd = () => {
    if (count > 0 && !list.includes(count)) {
      const newList = [...list, count];
      setList(asc ? newList.sort((a, b) => a - b) : newList.sort((a, b) => b - a));
    }
    setCount(0);
  };

  const toggleSort = () => {
    const sortedList = [...list].sort((a, b) => (asc ? b - a : a - b));
    setList(sortedList);
    setAsc(!asc);
  };

  const resetList = () => {
    setList([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Counter count={count} setCount={setCount} handleAdd={handleAdd} />
      <button onClick={toggleSort}>Sort ({asc ? "Asc" : "Desc"})</button>
      <button onClick={resetList} style={{ marginLeft: "10px" }}>Reset List</button>
      <ListView list={list} />
    </div>
  );
}

export default App;
