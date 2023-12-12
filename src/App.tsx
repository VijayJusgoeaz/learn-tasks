import React, { useCallback, useMemo, useState } from "react";
import DoubleItem from "./Comp/Double";

function App() {
  const [count, setcount] = useState(1);
  const [doubleCount, setDoubleCount] = useState(count);

  const handleIncrement = () => {
    setcount(count + 1);
    console.log(count);
  };

  const handleDouble = useCallback(() => {
    setDoubleCount(doubleCount * 2);
  }, [doubleCount]);

  return (
    <div>
      <div>{count}</div>
      <div>{doubleCount}</div>
      <button onClick={handleIncrement}>+</button>
      <DoubleItem handleDouble={handleDouble} />
    </div>
  );
}

export default App;
