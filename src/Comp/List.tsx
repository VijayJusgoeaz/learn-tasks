import React, { memo } from "react";

const List = memo(function List({ render }: { render: boolean }) {
  console.log('Render called')
  return <span>{render.toString()}</span>;
});
export default List;
