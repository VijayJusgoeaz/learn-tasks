import React, { memo, useContext, useEffect } from "react";
import MyContext from "./Context";

const DoubleItem = () => {
  const contextValue = useContext(MyContext);
  useEffect(() => {
    console.log("Rendered");
  });

  return (
    <div>
      Context Value: {contextValue}
      <button>Double</button>
    </div>
  );
};

export default DoubleItem;
