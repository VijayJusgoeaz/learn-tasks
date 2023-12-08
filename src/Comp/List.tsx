import React, { memo } from "react";

const List = ({ render }: { render: boolean }) => {
  console.log("Render called");
  // making this UI render an expensive only manually.
  let i = 0;
  while (i < 2000000000) {
    i++;
  }
  return <span>{render.toString()}</span>;
};

// since we are using memo, this will be rendered only once unless the props[render] value changes
const MemoList = memo(List);
export default MemoList;
