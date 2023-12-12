import React, { memo, useEffect } from "react";

const DoubleItem = ({ handleDouble }: { handleDouble: () => void }) => {
  useEffect(() => {
    console.log("Rendered");
  }, [handleDouble]);

  return (
    <div>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
};

export default memo(DoubleItem);
