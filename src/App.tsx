import { Routes, Route } from "react-router-dom";
import About from "./Comp/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about/:username/:job" element={<About />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/*" element={<Errorpage />} />*/}
      </Routes>
    </div>
  );
};

export default App;
