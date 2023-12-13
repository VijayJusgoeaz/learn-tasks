import React, { ReactNode, useContext } from "react";
import MyContext from "./Context";

const Panel = ({ title, children }: { title: string; children: ReactNode }) => {
  const context = useContext(MyContext);
  return (
    <div>
      {title}
      {children}
     Context Value:  {context}
    </div>
  );
};

export default Panel;
