import React, { memo, useEffect } from "react";

const DoubleItem = ({ handleDouble }: { handleDouble: () => void }) => {
  useEffect(() => {
    console.log("Rendered");
  });

  return (
    <div>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
};

export default memo(DoubleItem);
