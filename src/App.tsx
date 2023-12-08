import React, { useMemo, useState } from "react";
import List from "./Comp/List";

const App = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setcounterOne(counterOne + 2);
  };
  const incrementCounterTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("Im running....");
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 == 0;
  }, [counterOne]);

  // const render = useMemo(() => {
  //   console.log('Render called')
  //   return isEven;
  // }, [isEven]);

  return (
    <div>
      <button onClick={incrementCounterOne}>Counter One: {counterOne}</button>
      {/* prevent re-rendering using useMemo */}
      {/* <span>{render.toString()}</span>; */} 

      {/* prevent re-rendering using memo */}
      <List render={isEven}></List>
      <br></br>
      <button onClick={incrementCounterTwo}>Counter Two: {counterTwo}</button>
    </div>
  );
};

export default App;
