import { createContext } from "react";
import Panel from "./Comp/Panel";
import DoubleItem from "./Comp/Double";
import MyContext from "./Comp/Context";

const App = () => {
  return (
    <MyContext.Provider value={2}>
      <DoubleItem />
      <Panel title={""}>
        <button>+</button>
        <button>-</button>
      </Panel>
    </MyContext.Provider>
  );
};

export default App;
