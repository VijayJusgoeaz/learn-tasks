import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(2);
  const [age2, setAge2] = useState(2);

  function handleClick() {
    const temp = age * 2;
    setAge(temp);
    setAge2(temp / 2);
  }
  return (
    <div>
      <div>{age}</div>
      <div>{age2}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
