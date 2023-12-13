import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Comp/About";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/about/:username/:job" element={<About />} />
      </Routes>
      {/* <button onClick={() => navigate(1)}>Forward</button>
      <button onClick={() => navigate(-1)}>Backward</button> */}
    </div>
  );
};

export default App;
