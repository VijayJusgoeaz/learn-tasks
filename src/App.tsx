import React, { useEffect, useState } from "react";

const App = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  let sum = state3 + state2;
  // todo: use memo here

  useEffect(() => {
    sum = state3 + state2;
    setState1(sum);
    console.log("Sum is:", sum);
  }, [state3, state2]);

  function handleIncrement(e: any) {
    // todo: study this concept
    e.preventDefault();
    setState3(state3 + 1);
  }

  function handleChange(e: any) {
    //  todo: change to finish or something onchange
    console.log("e", e);
    if (e != "") {
      console.log(parseInt(e));
      setState2(parseInt(e));
    } else {
      console.log("empty string");
    }
  }

  return (
    <div>
      {state1}
      <form>
        <div>
          <input type="number" onChange={(e) => handleChange(e.target.value)} />
        </div>
        <button onClick={(e) => handleIncrement(e)}>
          Increment state variable 3
        </button>
      </form>
    </div>
  );
};

export default App;
